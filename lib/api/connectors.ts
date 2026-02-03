import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface ConnectorRecord {
  id: string;
  sliderTitle: string;
  title: string;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ConnectorSlider {
  sliderTitle: string;
  items: ConnectorRecord[];
  availableLocales?: string[];
}

export async function listConnectors(locale?: string): Promise<ConnectorRecord[]> {
  const whereClause: any = {};
  if (locale) {
    whereClause.locale = locale;
  }

  try {
    if (!prisma || !prisma.connectors) {
      throw new Error('Prisma client is not initialized or connectors model is missing. Please run: npx prisma generate');
    }

    const connectors = await prisma.connectors.findMany({
      where: whereClause,
      orderBy: [{ sliderTitle: 'asc' }, { updatedAt: 'desc' }],
    });

    return connectors as ConnectorRecord[];
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Connectors table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function listConnectorsBySlider(locale?: string): Promise<ConnectorSlider[]> {
  // Fetch all connectors to get translations and English connectors for grouping
  const allConnectors = await listConnectors();

  // Group connectors by English slider title
  // First, find all English connectors to get the base slider titles
  const englishConnectors = allConnectors.filter(c => c.locale === 'en');
  const englishSliderTitles = new Set(englishConnectors.map(c => c.sliderTitle));

  // Create a map of connector IDs to their English slider title
  const connectorIdToEnglishSlider = new Map<string, string>();
  englishConnectors.forEach(connector => {
    connectorIdToEnglishSlider.set(connector.id, connector.sliderTitle);
  });

  // Create a map of connector IDs to all their translations (for fallback)
  const connectorIdToTranslations = new Map<string, ConnectorRecord[]>();
  allConnectors.forEach(connector => {
    if (!connectorIdToTranslations.has(connector.id)) {
      connectorIdToTranslations.set(connector.id, []);
    }
    connectorIdToTranslations.get(connector.id)!.push(connector);
  });

  // Determine target locale (for frontend) or null (for admin - show all locales)
  // If locale is undefined/null, show all locales (admin mode)
  // If locale is provided (including 'en'), filter by that locale (frontend mode)
  const targetLocale = locale || null;

  // Group connectors by English slider title
  // Use a Set to track connector IDs per slider to prevent duplicates
  const sliderMap = new Map<string, ConnectorRecord[]>();
  const sliderConnectorIds = new Map<string, Set<string>>(); // Track IDs per slider to prevent duplicates

  // For each English connector, find its translation in the target locale (or all locales if no target)
  englishConnectors.forEach(englishConnector => {
    const englishSliderTitle = englishConnector.sliderTitle;

    if (!sliderMap.has(englishSliderTitle)) {
      sliderMap.set(englishSliderTitle, []);
      sliderConnectorIds.set(englishSliderTitle, new Set());
    }

    const connectorIdSet = sliderConnectorIds.get(englishSliderTitle)!;

    if (targetLocale) {
      // Frontend: return only connectors for the requested locale (with fallback to English)
      const translations = connectorIdToTranslations.get(englishConnector.id) || [];
      const targetTranslation = translations.find(t => t.locale === targetLocale);
      const connectorToAdd = targetTranslation || englishConnector; // Fallback to English if translation not found

      // Only add if we haven't seen this connector ID in this slider
      if (!connectorIdSet.has(connectorToAdd.id)) {
        connectorIdSet.add(connectorToAdd.id);
        sliderMap.get(englishSliderTitle)!.push(connectorToAdd);
      }
    } else {
      // Admin: return all connectors (all locales) for this slider
      const translations = connectorIdToTranslations.get(englishConnector.id) || [];
      translations.forEach(translation => {
        // For admin, track by id-locale to allow same ID with different locales
        const uniqueKey = `${translation.id}-${translation.locale}`;
        if (!connectorIdSet.has(uniqueKey)) {
          connectorIdSet.add(uniqueKey);
          sliderMap.get(englishSliderTitle)!.push(translation);
        }
      });
    }
  });

  // Convert to array of sliders
  const sliders: ConnectorSlider[] = Array.from(sliderMap.entries())
    .filter(([sliderTitle]) => englishSliderTitles.has(sliderTitle)) // Only include sliders that have English version
    .map(([englishSliderTitle, items]) => {
      // For frontend, filter items by target locale FIRST before removing duplicates
      let filteredItems = items;
      if (targetLocale) {
        // Only keep items for the target locale
        filteredItems = items.filter(item => item.locale === targetLocale);
        // If no items found for target locale, fall back to English
        if (filteredItems.length === 0) {
          filteredItems = items.filter(item => item.locale === 'en');
        }
      }

      // Remove duplicates by ID (same connector ID should only appear once per slider)
      // Use ID only as key since we've already filtered by locale
      const uniqueItems = Array.from(
        new Map(filteredItems.map(item => [item.id, item])).values()
      );

      // For frontend, use translated slider title if available; otherwise use English
      // For admin, use English slider title
      let displaySliderTitle = englishSliderTitle;
      if (targetLocale && uniqueItems.length > 0) {
        // Get slider title from first item (all items in same slider have same sliderTitle)
        const firstItem = uniqueItems[0];
        if (firstItem.sliderTitle && firstItem.locale === targetLocale) {
          displaySliderTitle = firstItem.sliderTitle;
        } else if (firstItem.sliderTitle && targetLocale !== 'en' && firstItem.locale === 'en') {
          // If we fell back to English, use English slider title
          displaySliderTitle = firstItem.sliderTitle;
        }
      }

      return {
        sliderTitle: displaySliderTitle,
        items: uniqueItems.sort((a, b) => {
          if (targetLocale) {
            // Frontend: sort by title only (all items are same locale)
            return a.title.localeCompare(b.title);
          } else {
            // Admin: sort by locale first (English first), then by title
            if (a.locale !== b.locale) {
              return a.locale === 'en' ? -1 : 1;
            }
            return a.title.localeCompare(b.title);
          }
        }),
      };
    });

  // Filter out sliders with no items before returning
  const filteredSliders = sliders.filter(slider => slider.items && slider.items.length > 0);

  // Debug logging for duplicates
  if (targetLocale) {
    filteredSliders.forEach(slider => {
      const itemIds = slider.items.map(item => item.id);
      const uniqueIds = new Set(itemIds);
      if (itemIds.length !== uniqueIds.size) {
        console.warn(`[listConnectorsBySlider] Duplicate connector IDs found in slider "${slider.sliderTitle}" for locale "${targetLocale}":`, {
          totalItems: itemIds.length,
          uniqueItems: uniqueIds.size,
          duplicates: itemIds.filter((id, index) => itemIds.indexOf(id) !== index),
          items: slider.items.map(item => ({ id: item.id, title: item.title, locale: item.locale })),
        });
      }
    });
  }

  return filteredSliders.sort((a, b) => a.sliderTitle.localeCompare(b.sliderTitle));
}

export async function getConnectorById(id: string, locale?: string): Promise<ConnectorRecord | null> {
  try {
    if (!prisma || !prisma.connectors) {
      throw new Error('Prisma client is not initialized or connectors model is missing. Please run: npx prisma generate');
    }

    const where: any = { id };
    if (locale) {
      where.locale = locale;
    } else {
      where.locale = 'en';
    }

    const connector = await prisma.connectors.findFirst({
      where,
    });

    if (!connector) return null;

    return connector as ConnectorRecord;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Connectors table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function getAllConnectorTranslations(id: string): Promise<ConnectorRecord[]> {
  try {
    if (!prisma || !prisma.connectors) {
      throw new Error('Prisma client is not initialized or connectors model is missing. Please run: npx prisma generate');
    }

    const original = await prisma.connectors.findFirst({
      where: { id },
    });

    if (!original) return [];

    const translations = await prisma.connectors.findMany({
      where: { id },
      orderBy: { locale: 'asc' },
    });

    return translations as ConnectorRecord[];
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Connectors table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function createConnector(data: {
  sliderTitle: string;
  title: string;
  locale: string;
  id?: string;
}): Promise<ConnectorRecord> {
  try {
    if (!prisma || !prisma.connectors) {
      throw new Error('Prisma client is not initialized or connectors model is missing. Please run: npx prisma generate');
    }

    const connectorId = data.id || randomUUID();

    return prisma.connectors.create({
      data: {
        id: connectorId,
        sliderTitle: data.sliderTitle,
        title: data.title,
        locale: data.locale,
        updatedAt: new Date(),
      },
    }) as Promise<ConnectorRecord>;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Connectors table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function createMultipleConnectors(sliderTitle: string, titles: string[], locale: string): Promise<ConnectorRecord[]> {
  try {
    if (!prisma || !prisma.connectors) {
      throw new Error('Prisma client is not initialized or connectors model is missing. Please run: npx prisma generate');
    }

    // Filter out empty titles and trim
    const validTitles = titles
      .map(t => t.trim())
      .filter(t => t.length > 0);

    if (validTitles.length === 0) {
      return [];
    }

    // Check if any connectors with these titles already exist in this slider
    const existingConnectors = await prisma.connectors.findMany({
      where: {
        locale,
        sliderTitle,
        title: {
          in: validTitles,
        },
      },
    });

    const existingTitles = new Set(existingConnectors.map(c => c.title.toLowerCase()));
    const newTitles = validTitles.filter(t => !existingTitles.has(t.toLowerCase()));

    if (newTitles.length === 0) {
      return existingConnectors as ConnectorRecord[];
    }

    // Create new connectors
    const created = await Promise.all(
      newTitles.map(title =>
        prisma.connectors.create({
          data: {
            id: randomUUID(),
            sliderTitle,
            title,
            locale,
            updatedAt: new Date(),
          },
        })
      )
    );

    return [...existingConnectors, ...created] as ConnectorRecord[];
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Connectors table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function updateConnector(
  id: string,
  data: {
    sliderTitle?: string;
    title?: string;
    locale: string;
  }
): Promise<ConnectorRecord> {
  try {
    if (!prisma || !prisma.connectors) {
      throw new Error('Prisma client is not initialized or connectors model is missing. Please run: npx prisma generate');
    }

    const updateData: any = {
      updatedAt: new Date(),
    };

    if (data.sliderTitle !== undefined) {
      updateData.sliderTitle = data.sliderTitle;
    }
    if (data.title !== undefined) {
      updateData.title = data.title;
    }

    // Use updateMany for composite key, then fetch the updated record
    await prisma.connectors.updateMany({
      where: { id, locale: data.locale },
      data: updateData,
    });

    const updated = await prisma.connectors.findFirst({
      where: { id, locale: data.locale },
    });

    if (!updated) {
      throw new Error('Connector not found after update');
    }

    return updated as ConnectorRecord;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Connectors table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function deleteConnector(id: string): Promise<void> {
  try {
    if (!prisma || !prisma.connectors) {
      throw new Error('Prisma client is not initialized or connectors model is missing. Please run: npx prisma generate');
    }

    await prisma.connectors.deleteMany({
      where: { id },
    });
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Connectors table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function updateSliderConnectors(
  oldSliderTitle: string,
  newSliderTitle: string,
  newTitles: string[],
  locale: string
): Promise<ConnectorRecord[]> {
  try {
    if (!prisma || !prisma.connectors) {
      throw new Error('Prisma client is not initialized or connectors model is missing. Please run: npx prisma generate');
    }

    const validNewTitles = newTitles
      .map(t => t.trim())
      .filter(t => t.length > 0);

    if (validNewTitles.length === 0) {
      // If no valid titles, delete all connectors for this slider in this locale
      await prisma.connectors.deleteMany({
        where: {
          sliderTitle: oldSliderTitle,
          locale,
        },
      });
      return [];
    }

    // For translations (non-English), we need to link to English connectors by ID
    if (locale !== 'en') {
      // Find English connectors for this slider
      const englishConnectors = await prisma.connectors.findMany({
        where: {
          sliderTitle: oldSliderTitle,
          locale: 'en',
        },
        orderBy: { title: 'asc' },
      });

      if (englishConnectors.length === 0) {
        throw new Error(`No English connectors found for slider "${oldSliderTitle}". Please create the English version first.`);
      }

      // Find existing translations for these English connectors
      const englishIds = englishConnectors.map(c => c.id);
      const existingTranslations = await prisma.connectors.findMany({
        where: {
          id: { in: englishIds },
          locale,
        },
      });

      const existingTranslationMap = new Map(existingTranslations.map(t => [t.id, t]));

      // Process each new title - match with English connector by index
      const connectorsToSave: ConnectorRecord[] = [];

      for (let i = 0; i < validNewTitles.length; i++) {
        const newTitle = validNewTitles[i];
        const englishConnector = englishConnectors[i] || englishConnectors[englishConnectors.length - 1]; // Use last if more titles than English connectors

        if (englishConnector) {
          const existingTranslation = existingTranslationMap.get(englishConnector.id);

          if (existingTranslation) {
            // Update existing translation
            const updated = await prisma.connectors.updateMany({
              where: {
                id: englishConnector.id,
                locale,
              },
              data: {
                sliderTitle: newSliderTitle,
                title: newTitle,
                updatedAt: new Date(),
              },
            });

            // Fetch the updated connector
            const updatedConnector = await prisma.connectors.findFirst({
              where: {
                id: englishConnector.id,
                locale,
              },
            });

            if (updatedConnector) {
              connectorsToSave.push(updatedConnector as ConnectorRecord);
            }
          } else {
            // Create new translation (link to English connector by ID)
            const newConnector = await prisma.connectors.create({
              data: {
                id: englishConnector.id, // Use same ID to link translations
                sliderTitle: newSliderTitle,
                title: newTitle,
                locale,
                updatedAt: new Date(),
              },
            });
            connectorsToSave.push(newConnector as ConnectorRecord);
          }
        } else {
          // No matching English connector - create new one (shouldn't happen normally)
          const newConnector = await prisma.connectors.create({
            data: {
              id: randomUUID(),
              sliderTitle: newSliderTitle,
              title: newTitle,
              locale,
              updatedAt: new Date(),
            },
          });
          connectorsToSave.push(newConnector as ConnectorRecord);
        }
      }

      // Delete translations that are no longer in the new list
      const newTitleSet = new Set(validNewTitles.map(t => t.toLowerCase()));
      const toDelete = existingTranslations.filter(t => !newTitleSet.has(t.title.toLowerCase()));

      if (toDelete.length > 0) {
        await Promise.all(
          toDelete.map(connector =>
            prisma.connectors.deleteMany({
              where: {
                id: connector.id,
                locale,
              },
            })
          )
        );
      }

      // Fetch all connectors for this slider in this locale to return complete list
      const finalConnectors = await prisma.connectors.findMany({
        where: {
          id: { in: englishConnectors.map(c => c.id) },
          locale,
        },
      });

      console.log('[updateSliderConnectors] Translation saved:', {
        locale,
        oldSliderTitle,
        newSliderTitle,
        englishConnectorsCount: englishConnectors.length,
        savedConnectorsCount: finalConnectors.length,
        connectors: finalConnectors.map(c => ({ id: c.id, title: c.title, sliderTitle: c.sliderTitle })),
      });

      return finalConnectors as ConnectorRecord[];
    }

    // For English locale, use the original logic
    // Get all existing connectors for this slider in this locale
    const existingConnectors = await prisma.connectors.findMany({
      where: {
        sliderTitle: oldSliderTitle,
        locale,
      },
    });

    // Create sets for comparison (case-insensitive)
    const existingTitles = new Set(existingConnectors.map(c => c.title.toLowerCase()));
    const newTitlesSet = new Set(validNewTitles.map(t => t.toLowerCase()));

    // Find connectors to delete (exist in DB but not in new list)
    const toDelete = existingConnectors.filter(c => !newTitlesSet.has(c.title.toLowerCase()));

    // Find connectors to create (exist in new list but not in DB)
    const toCreate = validNewTitles.filter(t => !existingTitles.has(t.toLowerCase()));

    // Find connectors that exist in both lists (need to check if sliderTitle changed)
    const toUpdate = existingConnectors.filter(c => newTitlesSet.has(c.title.toLowerCase()));

    // Delete removed connectors
    if (toDelete.length > 0) {
      await Promise.all(
        toDelete.map(connector =>
          prisma.connectors.deleteMany({
            where: {
              id: connector.id,
              locale,
            },
          })
        )
      );
    }

    // Update existing connectors (update sliderTitle if changed)
    if (toUpdate.length > 0) {
      if (oldSliderTitle !== newSliderTitle) {
        // Slider title changed - update all existing connectors
        await Promise.all(
          toUpdate.map(connector =>
            prisma.connectors.updateMany({
              where: {
                id: connector.id,
                locale,
              },
              data: {
                sliderTitle: newSliderTitle,
                updatedAt: new Date(),
              },
            })
          )
        );
      } else {
        // Slider title unchanged - just update the updatedAt timestamp
        await Promise.all(
          toUpdate.map(connector =>
            prisma.connectors.updateMany({
              where: {
                id: connector.id,
                locale,
              },
              data: {
                updatedAt: new Date(),
              },
            })
          )
        );
      }
    }

    // Create new connectors
    if (toCreate.length > 0) {
      await Promise.all(
        toCreate.map(title =>
          prisma.connectors.create({
            data: {
              id: randomUUID(),
              sliderTitle: newSliderTitle,
              title,
              locale,
              updatedAt: new Date(),
            },
          })
        )
      );
    }

    // Fetch all connectors for this slider after updates
    const allConnectors = await prisma.connectors.findMany({
      where: {
        sliderTitle: newSliderTitle,
        locale,
      },
    });

    return allConnectors as ConnectorRecord[];
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Connectors table does not exist. Please run database migrations.');
    }
    throw error;
  }
}
