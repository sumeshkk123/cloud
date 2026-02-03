import { randomUUID } from 'crypto';
import { prisma } from '@/lib/db/prisma';

export interface IntegrationRecord {
  id: string;
  icon: string | null;
  title: string;
  description: string;
  connectors: string[] | null;
  locale: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function listIntegrations(locale?: string): Promise<IntegrationRecord[]> {
  const whereClause: any = {};
  if (locale) {
    whereClause.locale = locale;
  }
  
  try {
    if (!prisma || !prisma.integrations) {
      throw new Error('Prisma client is not initialized or integrations model is missing. Please run: npx prisma generate');
    }

    const integrations = await prisma.integrations.findMany({
      where: whereClause,
      orderBy: { updatedAt: 'desc' },
    });
    
    console.log(`[listIntegrations] Found ${integrations.length} integrations for locale: ${locale || 'all'}`);
    
    // Parse connectors JSON if it exists
    return integrations.map(integration => {
      let connectors: string[] | null = null;
      if (integration.connectors) {
        if (Array.isArray(integration.connectors)) {
          connectors = integration.connectors;
        } else if (typeof integration.connectors === 'string') {
          try {
            const parsed = JSON.parse(integration.connectors);
            connectors = Array.isArray(parsed) ? parsed : [integration.connectors];
          } catch (parseError) {
            // If parsing fails, treat as a single connector string
            console.warn(`[listIntegrations] Failed to parse connectors for integration ${integration.id}:`, integration.connectors, parseError);
            connectors = [integration.connectors];
          }
        }
      }
      return {
        ...integration,
        connectors,
      };
    }) as IntegrationRecord[];
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Integrations table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function getIntegrationById(id: string, locale?: string): Promise<IntegrationRecord | null> {
  try {
    if (!prisma || !prisma.integrations) {
      throw new Error('Prisma client is not initialized or integrations model is missing. Please run: npx prisma generate');
    }

    const where: any = { id };
    if (locale) {
      where.locale = locale;
    } else {
      where.locale = 'en'; // Default to English if no locale specified
    }

    const integration = await prisma.integrations.findFirst({
      where,
    });

    if (!integration) return null;

    let connectors: string[] | null = null;
    if (integration.connectors) {
      if (Array.isArray(integration.connectors)) {
        connectors = integration.connectors;
      } else if (typeof integration.connectors === 'string') {
        try {
          const parsed = JSON.parse(integration.connectors);
          connectors = Array.isArray(parsed) ? parsed : [integration.connectors];
        } catch {
          // If parsing fails, treat as a single connector string
          connectors = [integration.connectors];
        }
      }
    }

    return {
      ...integration,
      connectors,
    } as IntegrationRecord;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Integrations table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function getAllIntegrationTranslations(id: string): Promise<IntegrationRecord[]> {
  try {
    if (!prisma || !prisma.integrations) {
      throw new Error('Prisma client is not initialized or integrations model is missing. Please run: npx prisma generate');
    }

    const original = await prisma.integrations.findFirst({
      where: { id },
    });

    if (!original) return [];

    const translations = await prisma.integrations.findMany({
      where: { id },
      orderBy: { locale: 'asc' },
    });

    return translations.map(integration => {
      let connectors: string[] | null = null;
      if (integration.connectors) {
        if (Array.isArray(integration.connectors)) {
          connectors = integration.connectors;
        } else if (typeof integration.connectors === 'string') {
          try {
            const parsed = JSON.parse(integration.connectors);
            connectors = Array.isArray(parsed) ? parsed : [integration.connectors];
          } catch {
            // If parsing fails, treat as a single connector string
            connectors = [integration.connectors];
          }
        }
      }
      return {
        ...integration,
        connectors,
      };
    }) as IntegrationRecord[];
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Integrations table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function createIntegration(data: {
  icon?: string | null;
  title: string;
  description: string;
  connectors?: string[] | null;
  locale: string;
  id?: string;
}): Promise<IntegrationRecord> {
  try {
    if (!prisma || !prisma.integrations) {
      throw new Error('Prisma client is not initialized or integrations model is missing. Please run: npx prisma generate');
    }

    const integrationId = data.id || randomUUID();

    return prisma.integrations.create({
      data: {
        id: integrationId,
        icon: data.icon || null,
        title: data.title,
        description: data.description,
        connectors: data.connectors ? JSON.stringify(data.connectors) : null,
        locale: data.locale,
        updatedAt: new Date(),
      },
    }) as Promise<IntegrationRecord>;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Integrations table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function updateIntegration(
  id: string,
  data: {
    icon?: string | null;
    title: string;
    description: string;
    connectors?: string[] | null;
    locale: string;
  }
): Promise<IntegrationRecord> {
  try {
    if (!prisma || !prisma.integrations) {
      throw new Error('Prisma client is not initialized or integrations model is missing. Please run: npx prisma generate');
    }

    const updateData: any = {
      title: data.title,
      description: data.description,
      connectors: data.connectors ? JSON.stringify(data.connectors) : null,
      locale: data.locale,
      updatedAt: new Date(),
    };

    if (data.icon !== undefined) {
      updateData.icon = data.icon || null;
    }

    // Use updateMany for composite key, then fetch the updated record
    await prisma.integrations.updateMany({
      where: { id, locale: data.locale },
      data: updateData,
    });

    const updated = await prisma.integrations.findFirst({
      where: { id, locale: data.locale },
    });

    if (!updated) {
      throw new Error('Integration not found after update');
    }

    let connectors: string[] | null = null;
    if (updated.connectors) {
      if (Array.isArray(updated.connectors)) {
        connectors = updated.connectors;
      } else if (typeof updated.connectors === 'string') {
        try {
          const parsed = JSON.parse(updated.connectors);
          connectors = Array.isArray(parsed) ? parsed : [updated.connectors];
        } catch {
          // If parsing fails, treat as a single connector string
          connectors = [updated.connectors];
        }
      }
    }

    return {
      ...updated,
      connectors,
    } as IntegrationRecord;
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Integrations table does not exist. Please run database migrations.');
    }
    throw error;
  }
}

export async function deleteIntegration(id: string): Promise<void> {
  try {
    if (!prisma || !prisma.integrations) {
      throw new Error('Prisma client is not initialized or integrations model is missing. Please run: npx prisma generate');
    }

    await prisma.integrations.deleteMany({
      where: { id },
    });
  } catch (error: any) {
    if (error?.code === 'P2021' || error?.message?.includes('does not exist')) {
      throw new Error('Integrations table does not exist. Please run database migrations.');
    }
    throw error;
  }
}
