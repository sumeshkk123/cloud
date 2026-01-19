import crypto from 'node:crypto';

import { factories } from '@strapi/strapi';

const OTP_TTL_MINUTES = 15;

const pricingItems = {
  plans: [
    {
      name: 'Basic Binary',
      price: 750,
      category: 'Binary Plans',
      description: 'A fundamental binary MLM plan suitable for startups.',
      features: ['Two legs for balanced growth', 'Simple commission structure', 'Ideal for beginners']
    },
    {
      name: 'Basic Matrix',
      price: 750,
      category: 'Matrix Plans',
      description: 'A matrix-based MLM plan with limited depth.',
      features: ['3x3 matrix structure', 'Quick team building', 'Predictable payouts']
    },
    {
      name: 'Basic Unilevel Plan',
      price: 750,
      category: 'Unilevel Plans',
      description: 'A unilevel MLM plan with unlimited depth.',
      features: ['Unlimited levels', 'Flexible team expansion', 'Straightforward commissions']
    },
    {
      name: 'Australian Binary Plan',
      price: 1200,
      category: 'Binary Plans',
      description: 'An advanced binary MLM plan tailored for the Australian market.',
      features: ['Local market optimization', 'Enhanced compliance features', 'Customizable payout options']
    },
    {
      name: 'Stairstep Breakaway Plan',
      price: 1200,
      category: 'Breakaway Plans',
      description: 'A stairstep breakaway plan that rewards top performers.',
      features: ['Breakaway ranks for high achievers', 'Progressive commission rates', 'Incentives for leadership']
    },
    {
      name: 'Monoline Plan',
      price: 1000,
      category: 'Monoline Plans',
      description: 'A monoline MLM plan focused on single-line growth.',
      features: ['Single-line recruitment', 'Simplified structure', 'Focused growth strategy']
    },
    {
      name: 'Donation Plan',
      price: 1500,
      category: 'Donation Plans',
      description: 'A donation-based MLM plan for charitable organizations.',
      features: ['Facilitates charitable contributions', 'Transparent donation tracking', 'Engages socially conscious members']
    },
    {
      name: 'X-UP Plan',
      price: 1200,
      category: 'Advanced Plans',
      description: 'An advanced MLM plan with multiple compensation options.',
      features: ['Hybrid compensation structures', 'Multiple bonus types', 'Scalable for growth']
    },
    {
      name: 'Generation Plan',
      price: 1500,
      category: 'Generational Plans',
      description: 'A generational MLM plan that rewards multiple generations of members.',
      features: ['Rewards for multiple generations', 'Sustainable growth model', 'Long-term incentives']
    },
    {
      name: 'Basic Board Plan',
      price: 1500,
      category: 'Board Plans',
      description: 'A basic board MLM plan with structured placements.',
      features: ['Structured placement system', 'Team-oriented growth', 'Clear rank progression']
    },
    {
      name: 'Gift Plan',
      price: 1500,
      category: 'Incentive Plans',
      description: 'An incentive-based MLM plan offering gifts as rewards.',
      features: ['Gift-based rewards', 'Motivates member engagement', 'Enhances member retention']
    },
    {
      name: 'Party Plan',
      price: 1800,
      category: 'Party Plans',
      description: 'A party MLM plan designed for social and event-driven growth.',
      features: ['Event-based recruitment', 'Social engagement focus', 'Dynamic growth strategies']
    },
    {
      name: 'Stairstep Plan',
      price: 1500,
      category: 'Stairstep Plans',
      description: 'A stairstep MLM plan that incentivizes progression through ranks.',
      features: ['Progressive rank incentives', 'Structured team development', 'Encourages leadership growth']
    },
    {
      name: 'Repurchase Plan',
      price: 750,
      category: 'Repurchase Plans',
      description: 'A repurchase-based MLM plan focusing on repeat sales.',
      features: ['Encourages repeat purchases', 'Sustains revenue flow', 'Rewards loyal customers']
    },
    {
      name: 'Crowd Funding Plan',
      price: 1900,
      category: 'Crowdfunding Plans',
      description: 'A crowdfunding MLM plan that leverages community investments.',
      features: ['Community-driven funding', 'Flexible investment options', 'Transparent financial tracking']
    },
    {
      name: 'Investment Plan',
      price: 1600,
      category: 'Investment Plans',
      description: 'A plan tailored for long-term investments with higher returns.',
      features: ['High ROI potential', 'Secure investment structure', 'Dedicated support']
    }
  ],
  addOns: [
    {
      name: 'Multilingual System',
      price: 100,
      category: 'Localization',
      description: 'Enables businesses to access a global audience by supporting multiple languages.',
      features: ['Seamless language switching', 'Localized content management', 'Enhanced customer engagement']
    },
    {
      name: 'Shopify Integration',
      price: 1000,
      category: 'E-commerce Integrations',
      description: 'Integrate with Shopify for MLM commission calculation.',
      features: ['Automated commission tracking', 'Real-time sales data sync', 'Secure transaction handling']
    },
    {
      name: 'Woo-commerce Integration',
      price: 1200,
      category: 'E-commerce Integrations',
      description: 'Connect MLM software to your WooCommerce for commission calculation.',
      features: ['Comprehensive sales tracking', 'Flexible commission rules', 'User-friendly dashboard']
    },
    {
      name: 'Basic E-commerce - OpenCart Development',
      price: 800,
      category: 'E-commerce Development',
      description: 'E-commerce development for your product selling.',
      features: ['Custom OpenCart setup', 'Product catalog management', 'Secure payment gateway integration']
    },
    {
      name: 'Magento Integration',
      price: 1200,
      category: 'E-commerce Integrations',
      description: 'Offers integration with your Magento to manage sales commission with MLM software.',
      features: ['Robust sales tracking', 'Advanced commission management', 'Scalable for large inventories']
    },
    {
      name: 'Payout Module',
      price: 250,
      category: 'Financial Modules',
      description: 'Automates distributor payouts, saving time and reducing errors.',
      features: ['Automated payment processing', 'Multiple payout methods', 'Detailed transaction reports']
    },
    {
      name: 'Residual Commission Module',
      price: 200,
      category: 'Financial Modules',
      description: "Allocates a percentage commission from downline's recurring payments to sponsors.",
      features: ['Automated residual payments', 'Configurable commission rates', 'Transparent earnings tracking']
    },
    {
      name: 'Dynamic Compression',
      price: 250,
      category: 'Commission Management',
      description: 'Ensures commissions are correctly allocated by compressing inactive or low-performing accounts.',
      features: ['Automatic account compression', 'Maintains commission integrity', 'Reduces payout delays']
    },
    {
      name: 'Fast Start Bonus',
      price: 250,
      category: 'Bonus Modules',
      description: 'Rewards new recruits who achieve milestones within a set period.',
      features: ['Time-bound incentives', 'Encourages quick engagement', 'Boosts initial sales']
    },
    {
      name: 'Breakaway Bonus',
      price: 350,
      category: 'Bonus Modules',
      description: 'Provides bonuses to distributors who achieve a breakaway rank.',
      features: ['Rewards top performers', 'Encourages rank progression', 'Enhances motivation']
    },
    {
      name: 'Performance Bonus',
      price: 250,
      category: 'Bonus Modules',
      description: 'Encourages distributors to meet or exceed performance goals.',
      features: ['Performance-based rewards', 'Flexible goal settings', 'Increases productivity']
    },
    {
      name: 'Re-Entry Bonus',
      price: 250,
      category: 'Bonus Modules',
      description: 'Rewards users re-entering the board after completing the feeder board.',
      features: ['Incentivizes reactivation', 'Smooth transition between boards', 'Rewards loyalty']
    },
    {
      name: 'MS Integration / OTP',
      price: 250,
      category: 'Security Enhancements',
      description: 'Enhances security with OTP integration for user verification.',
      features: ['Two-factor authentication', 'Secure user access', 'Reduces fraud risks']
    },
    {
      name: 'Product Purchase Using Commission Wallet',
      price: 350,
      category: 'Financial Modules',
      description: 'Allows users to purchase products using their commission earnings.',
      features: ['Integrated commission wallet', 'Seamless product transactions', 'Boosts product sales']
    },
    {
      name: 'Shipping Integration',
      price: 250,
      category: 'Logistics Integrations',
      description: 'Integrates shipping options to ensure seamless order fulfillment.',
      features: ['Multiple shipping carriers', 'Real-time tracking', 'Automated shipping labels']
    },
    {
      name: 'Monthly/Yearly Subscription',
      price: 250,
      category: 'Subscription Services',
      description: 'Keep active in the system with monthly or yearly subscriptions.',
      features: ['Flexible billing cycles', 'Automatic renewals', 'Exclusive member benefits']
    },
    {
      name: 'Package Upgrade/Renewal',
      price: 200,
      category: 'Subscription Services',
      description: 'Upgrade or renew your existing joining package plan.',
      features: ['Seamless package upgrades', 'Flexible renewal options', 'Enhanced package benefits']
    },
    {
      name: 'Basic ERP Integration (like Odoo)',
      price: 6000,
      category: 'Enterprise Integrations',
      description: 'Comprehensive enterprise resource planning integration for seamless business operations.',
      features: ['Integrated business processes', 'Real-time data synchronization', 'Scalable for large enterprises']
    },
    {
      name: 'Support / Ticket System Module',
      price: 350,
      category: 'Customer Support',
      description: 'A support/ticket system module streamlines customer service by organizing and managing inquiries efficiently.',
      features: ['Ticket tracking and management', 'Automated responses', 'Customer interaction history']
    },
    {
      name: 'Basic Android App',
      price: 900,
      category: 'Mobile Applications',
      description: "An Android app expands your business's reach by offering a mobile platform for users to access your services anytime, anywhere.",
      features: ['User-friendly interface', 'Push notifications', 'Secure user authentication']
    },
    {
      name: 'Basic iOS App',
      price: 1000,
      category: 'Mobile Applications',
      description: 'An iOS App provides a smooth, user-friendly mobile experience for Apple device users.',
      features: ['Optimized for iPhone and iPad', 'Seamless integration with iOS features', 'High-performance standards']
    },
    {
      name: 'Basic Dashboard Design Customization',
      price: 500,
      category: 'Design Customization',
      description: 'Customization of color schemes, fonts, logos, and basic layout adjustments.',
      features: ['Brand identity alignment', 'User interface tweaks', 'Enhanced visual appeal']
    },
    {
      name: 'Advanced Design Customization',
      price: 1500,
      category: 'Design Customization',
      description: 'Comprehensive UI/UX redesign, custom dashboard design, and mobile optimization.',
      features: ['Full UI/UX overhaul', 'Responsive design enhancements', 'Custom graphics and animations']
    },
    {
      name: 'Full Custom Design Customization',
      price: 3000,
      category: 'Design Customization',
      description: 'Complete rebranding, tailored UX strategy, custom animations, and multilingual support.',
      features: ['Complete brand transformation', 'Advanced user experience strategies', 'Multilingual interface support']
    },
    {
      name: 'Custom Landing Page Design',
      price: 400,
      category: 'Design Customization',
      description: 'Unique landing pages designed to enhance user engagement and conversions. (WordPress)',
      features: ['High-conversion layouts', 'SEO-friendly design', 'Integration with marketing tools']
    },
    {
      name: 'Bulk Email Integration',
      price: 300,
      category: 'Marketing Integrations',
      description: 'Bulk Email integration with Mail Gun, Mailchimp, etc.',
      features: ['Automated email campaigns', 'Subscriber management', 'Detailed analytics and reporting']
    },
    {
      name: 'Hourly Rate for Custom Work',
      price: 50,
      category: 'Custom Services',
      description: 'For any smaller or ad-hoc design changes or updates.',
      features: ['$50 per hour', 'Flexible scheduling', 'Expert developers available']
    }
  ]
};

export default factories.createCoreController('api::pricing-submission.pricing-submission', ({ strapi }) => ({
  async requestOtp(ctx) {
    const { name, contact, email, country } = ctx.request.body ?? {};

    if (!name || !contact || !email || !country) {
      return ctx.badRequest('All fields are required.');
    }

    const normalisedEmail = String(email).trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalisedEmail)) {
      return ctx.badRequest('Invalid email address.');
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const otpHash = crypto.createHash('sha256').update(otp).digest('hex');
    const otpExpiresAt = new Date(Date.now() + OTP_TTL_MINUTES * 60 * 1000);

    const payload = {
      name: String(name).trim(),
      contact: String(contact).trim(),
      email: normalisedEmail,
      country: String(country).trim(),
      otpHash,
      otpExpiresAt,
      verified: false
    };

    const existing = await strapi.db.query('api::pricing-submission.pricing-submission').findOne({
      where: { email: normalisedEmail }
    });

    try {
      if (existing) {
        await strapi.db.query('api::pricing-submission.pricing-submission').update({
          where: { id: existing.id },
          data: payload
        });
      } else {
        await strapi.db.query('api::pricing-submission.pricing-submission').create({ data: payload });
      }
    } catch (error) {
      strapi.log.error('Failed to store pricing submission', error);
      return ctx.internalServerError('Failed to store submission.');
    }

    try {
      await strapi.plugin('email').service('email').send({
        to: normalisedEmail,
        subject: 'Your Cloud MLM Software pricing access code',
        text: `Hello ${payload.name},\n\nYour one-time access code is ${otp}.\nIt expires in ${OTP_TTL_MINUTES} minutes.\n\nThank you,\nCloud MLM Software`
      });
    } catch (error) {
      strapi.log.error('Failed to send pricing OTP email', error);
      return ctx.internalServerError('Failed to send OTP email.');
    }

    ctx.body = {
      ok: true,
      message: 'OTP sent successfully.'
    };
  },

  async verifyOtp(ctx) {
    const { email, otp } = ctx.request.body ?? {};

    if (!email || !otp) {
      return ctx.badRequest('Email and OTP are required.');
    }

    const normalisedEmail = String(email).trim().toLowerCase();
    const otpHash = crypto.createHash('sha256').update(String(otp)).digest('hex');

    const submission = await strapi.db.query('api::pricing-submission.pricing-submission').findOne({
      where: { email: normalisedEmail }
    });

    if (!submission || !submission.otpHash || !submission.otpExpiresAt) {
      return ctx.badRequest('Invalid OTP or email.');
    }

    if (submission.otpHash !== otpHash) {
      return ctx.badRequest('Invalid OTP or email.');
    }

    if (new Date(submission.otpExpiresAt).getTime() < Date.now()) {
      return ctx.badRequest('OTP has expired.');
    }

    try {
      await strapi.db.query('api::pricing-submission.pricing-submission').update({
        where: { id: submission.id },
        data: {
          verified: true,
          otpHash: null,
          otpExpiresAt: null
        }
      });
    } catch (error) {
      strapi.log.error('Failed to update submission after OTP verification', error);
      return ctx.internalServerError('Failed to verify OTP.');
    }

    ctx.body = {
      ok: true,
      message: 'OTP verified successfully.',
      data: {
        name: submission.name,
        email: submission.email,
        country: submission.country
      }
    };
  },

  async pricingItems(ctx) {
    ctx.body = { ok: true, data: pricingItems };
  }
}));
