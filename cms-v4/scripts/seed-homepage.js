'use strict';

const fs = require('node:fs');
const path = require('node:path');

const rootDir = process.cwd();
const defaultContent = require(path.join(rootDir, '../frontend/shared/homepage/default-content.js'));

const LOCALES = process.env.LOCALE ? [process.env.LOCALE] : ['en', 'es', 'pt-PT', 'fr', 'zh-Hans'];

function cloneContent(content) {
  return JSON.parse(JSON.stringify(content));
}

function loadLocaleContent(locale) {
  const filePath = path.join(rootDir, '../frontend/shared/homepage/locales', locale, 'content.json');
  if (fs.existsSync(filePath)) {
    return require(filePath);
  }
  return null;
}

(async () => {
  for (const locale of LOCALES) {
    console.log(`Processing locale ${locale}`);
    const existing = await strapi.entityService.findMany('api::homepage.homepage', {
      filters: { locale },
      fields: ['id']
    });

    let content = cloneContent(defaultContent);

    if (locale !== 'en') {
      const localized = loadLocaleContent(locale);
      if (localized) {
        content = cloneContent(localized);
        console.log(`Loaded localized content for ${locale}`);
      }
    }

    const data = { content };

    if (existing && existing.length > 0) {
      await strapi.entityService.update('api::homepage.homepage', existing[0].id, {
        data,
        locale
      });
      console.log(`Updated homepage for locale ${locale}`);
    } else {
      await strapi.entityService.create('api::homepage.homepage', {
        data,
        locale
      });
      console.log(`Created homepage for locale ${locale}`);
    }
  }

  process.exit(0);
})();
