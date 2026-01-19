import crypto from 'node:crypto';

import { factories } from '@strapi/strapi';

const GLOBAL_POPULATE = {
  primaryNav: {
    populate: {
      mega: {
        populate: {
          highlights: true,
          cards: true,
          serviceList: true,
          serviceDetails: true,
          seeAll: true
        }
      }
    }
  },
  headerCta: true,
  languageLinks: true,
  footerColumns: {
    populate: {
      links: true
    }
  },
  footerCta: {
    populate: {
      actions: true
    }
  },
  footerContacts: {
    populate: {
      links: true
    }
  },
  footerBottomLinks: true
} as const;

async function assertApiToken(ctx: any, strapi: any) {
  const header = ctx.request?.headers?.authorization || '';
  const token = header.replace(/Bearer\s+/i, '').trim();

  if (!token) {
    ctx.throw(401, 'Missing API token');
  }

  const salt = strapi.config.get('admin.apiToken.salt');
  const hash = crypto.createHmac('sha512', salt).update(token).digest('hex');
  const match = await strapi.db.query('admin::api-token').findOne({ where: { accessKey: hash } });

  if (!match) {
    ctx.throw(401, 'Invalid API token');
  }
}

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
  async find(ctx) {
    const { locale } = ctx.query;
    const entries = await strapi.entityService.findMany('api::global.global', {
      locale,
      populate: GLOBAL_POPULATE
    });

    const entity = Array.isArray(entries) ? entries[0] ?? null : entries;
    return this.transformResponse(entity);
  },

  async sync(ctx) {
    await assertApiToken(ctx, strapi);

    const { locale } = ctx.query;
    const { data } = ctx.request.body || {};

    if (!locale) {
      return ctx.badRequest('Locale query parameter is required');
    }

    if (!data || typeof data !== 'object') {
      return ctx.badRequest('Missing data payload');
    }

    const existing = await strapi.entityService.findMany('api::global.global', {
      locale,
      fields: ['id']
    });

    let entity;
    if (Array.isArray(existing) && existing.length > 0) {
      entity = await strapi.entityService.update('api::global.global', existing[0].id, {
        data,
        locale,
        populate: GLOBAL_POPULATE
      });
    } else {
      entity = await strapi.entityService.create('api::global.global', {
        data,
        locale,
        populate: GLOBAL_POPULATE
      });
    }

    ctx.body = this.transformResponse(entity);
  }
}));
