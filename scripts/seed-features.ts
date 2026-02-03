import { createFeature, listFeatures, updateFeature } from '../lib/api/features';
import { randomUUID } from 'crypto';

// All features from https://cloudmlmsoftware.com/features/
const featuresData = [
  // AI Features
  {
    title: 'Smart Product Recommendations',
    description: 'Boost sales with AI-driven suggestions tailored to each distributor\'s buying habits and customer preferences.',
    category: 'AI',
    slug: 'smart-product-recommendations',
    icon: 'Sparkles',
    showOnHomePage: true,
    features: [
      'AI-driven product suggestions',
      'Personalized recommendations based on buying habits',
      'Customer preference analysis',
      'Sales boost automation'
    ],
  },
  {
    title: 'Predictive Commission Forecasting',
    description: 'Leverage machine learning to estimate upcoming commissions, bonuses, and team earnings—before the month ends.',
    category: 'AI',
    slug: 'predictive-commission-forecasting',
    icon: 'TrendingUp',
    showOnHomePage: true,
    features: [
      'Machine learning-based forecasting',
      'Commission estimation',
      'Bonus predictions',
      'Team earnings projections'
    ],
  },
  {
    title: 'AI-powered Smart Recruiter',
    description: 'Identify high-potential leads and fast-growing team members using intelligent algorithms that learn from past performance.',
    category: 'AI',
    slug: 'ai-powered-smart-recruiter',
    icon: 'Users',
    showOnHomePage: true,
    features: [
      'Intelligent lead identification',
      'High-potential lead detection',
      'Performance-based team member analysis',
      'Algorithm-driven recruitment'
    ],
  },
  
  // Core Features
  {
    title: 'Highly Extensible',
    description: 'MLM software is essential for any direct selling business to operate seamlessly. Our secure, reliable, and user-friendly MLM software enables your company to effectively track customers and manage operations. With our software, your MLM company is equipped to expand beyond expectations.',
    category: 'Core',
    slug: 'highly-extensible',
    icon: 'Layers',
    showOnHomePage: true,
    features: [
      'Customizable architecture',
      'Modular design',
      'Easy integration',
      'Scalable infrastructure',
      'Plugin support',
      'API access'
    ],
  },
  {
    title: 'In-built E-Wallet',
    description: 'An E-wallet is an online prepaid account where you can store money to use when needed. With this preloaded facility, consumers can purchase a wide range of products, from airline tickets to groceries, without swiping a debit or credit card.',
    category: 'Core',
    slug: 'in-built-e-wallet',
    icon: 'Wallet',
    showOnHomePage: true,
    features: [
      'Prepaid account management',
      'Secure money storage',
      'Easy fund transfers',
      'E-pin generation',
      'Repurchase using wallet funds',
      'Payout to wallet transfer'
    ],
  },
  {
    title: 'Multilingual Translation System',
    description: 'Multilingual module helps to expand the MLM business beyond the borders. Our MLM software supports multiple languages to reach global markets.',
    category: 'Core',
    slug: 'multilingual-translation-system',
    icon: 'Languages',
    showOnHomePage: true,
    features: [
      'Multi-language support',
      'Global market reach',
      'Localized content',
      'Translation management',
      'Language switching',
      'Regional customization'
    ],
  },
  {
    title: 'Multi Currency System',
    description: 'Support multiple currencies with accurate conversion and tax handling. Enable international teams to operate smoothly and receive accurate commissions based on local exchange rates.',
    category: 'Core',
    slug: 'multi-currency-system',
    icon: 'DollarSign',
    showOnHomePage: true,
    features: [
      'Multiple currency support',
      'Real-time exchange rates',
      'Accurate commission calculations',
      'Tax handling by region',
      'Currency conversion',
      'International payment support'
    ],
  },
  {
    title: 'Great Support',
    description: '24x7 customer support to help you with all your MLM software needs. Our expert team is always ready to assist you.',
    category: 'Core',
    slug: 'great-support',
    icon: 'Headphones',
    showOnHomePage: false,
    features: [
      '24x7 customer support',
      'Expert technical assistance',
      'Quick response times',
      'Multiple support channels',
      'Comprehensive documentation'
    ],
  },
  {
    title: 'Easy Navigation',
    description: 'User-friendly interface with intuitive navigation that makes it easy for distributors to manage their accounts and track performance.',
    category: 'Core',
    slug: 'easy-navigation',
    icon: 'Navigation',
    showOnHomePage: false,
    features: [
      'Intuitive user interface',
      'Easy account management',
      'Performance tracking',
      'User-friendly design',
      'Quick access to features'
    ],
  },
  {
    title: 'Support / Ticket System Module',
    description: 'Cloud MLM Software\'s ticket system module is a great way to be in touch with users and provide efficient customer support.',
    category: 'Core',
    slug: 'support-ticket-system-module',
    icon: 'Ticket',
    showOnHomePage: true,
    features: [
      'Ticket creation and management',
      'User support tracking',
      'Efficient customer support',
      'Canned responses',
      'Ticket status tracking',
      'Support team collaboration'
    ],
  },
  {
    title: 'SMS Integration',
    description: 'Integrate SMS notifications to keep your distributors informed about commissions, bonuses, and important updates.',
    category: 'Core',
    slug: 'sms-integration',
    icon: 'MessageSquare',
    showOnHomePage: true,
    features: [
      'SMS notifications',
      'Commission alerts',
      'Bonus notifications',
      'Important updates',
      'Automated messaging',
      'Multi-carrier support'
    ],
  },
  {
    title: 'White Label MLM Software',
    description: 'Fully customizable white label solution that allows you to brand the software with your company name and logo.',
    category: 'Core',
    slug: 'white-label-mlm-software',
    icon: 'Tag',
    showOnHomePage: true,
    features: [
      'Custom branding',
      'Company logo integration',
      'Branded interface',
      'Customizable design',
      'White label solution',
      'Full customization'
    ],
  },
  
  // Performance Features
  {
    title: 'Advanced Reporting System',
    description: 'The Advanced Reporting system gives the facts you require at your fingertips. Choose the right report fast with templates packaged for production, large scale, builder, and distribution.',
    category: 'Performance',
    slug: 'advanced-reporting-system',
    icon: 'BarChart',
    showOnHomePage: true,
    features: [
      'Comprehensive reporting',
      'Report templates',
      'Production reports',
      'Sales analytics',
      'Team performance reports',
      'Exportable dashboards',
      'Scheduled reports'
    ],
  },
  {
    title: 'Payment Processing System',
    description: 'Online payment processing influences creative technologies that enable companies to take payments through the web, including credit and debit cards. Supports weekly and monthly payout processing with income-wise statement details.',
    category: 'Performance',
    slug: 'payment-processing-system',
    icon: 'CreditCard',
    showOnHomePage: true,
    features: [
      'Online payment processing',
      'Credit and debit card support',
      'Weekly payout processing',
      'Monthly payout processing',
      'Income statement details',
      'Multiple payment gateways',
      'Secure transactions'
    ],
  },
  
  // Security Features
  {
    title: 'Privileged User System',
    description: 'The Cloud MLM Privilege system provides features to set up users to handle the network, allow them authorizations to handle admin performance. This system allows the company to add its members with assured privilege or tasks.',
    category: 'Security',
    slug: 'privileged-user-system',
    icon: 'Shield',
    showOnHomePage: true,
    features: [
      'User privilege management',
      'Role-based access control',
      'Network administration',
      'Admin authorization',
      'Task-based permissions',
      'Secure user management'
    ],
  },
  
  // Unique Features
  {
    title: 'Auto-responder System',
    description: 'An auto-responder is a system that enables you to generate leads, build targeted prospect lists, increase sales and referrals, and automatically send a single email response based on predefined forms, client interactions, and selected activities.',
    category: 'Unique',
    slug: 'auto-responder-system',
    icon: 'Mail',
    showOnHomePage: true,
    features: [
      'Automated email responses',
      'Lead generation',
      'Targeted prospect lists',
      'Sales automation',
      'Referral management',
      'Predefined form responses',
      'Activity-based triggers'
    ],
  },
  {
    title: 'Theme Changing Options',
    description: 'Theme options could be a system admin page which provides some WordPress themes. It enables members to modify theme settings without changing theme files or touching any code.',
    category: 'Unique',
    slug: 'theme-changing-options',
    icon: 'Palette',
    showOnHomePage: true,
    features: [
      'Theme customization',
      'No-code theme changes',
      'Multiple theme options',
      'Customizable colors',
      'Font selection',
      'Layout options',
      'Visual customization'
    ],
  },
  {
    title: 'Powerful Email System',
    description: 'The Cloud MLM Software is integrated with the powerful E-mail system and it is used to communicate between users on the internet, the user to admin, user to sponsor, user to user, form, send, receive or reply emails.',
    category: 'Unique',
    slug: 'powerful-email-system',
    icon: 'Inbox',
    showOnHomePage: true,
    features: [
      'Internal messaging system',
      'User-to-user communication',
      'Admin communication',
      'Sponsor messaging',
      'Email marketing',
      'Bulk email sending',
      'Email templates'
    ],
  },
  {
    title: 'Web Designing',
    description: 'We are the creators of the global introduction scenario and the designers and consultants of websites. We provide trendy MLM website designs relevant to your site along with their MLM software.',
    category: 'Unique',
    slug: 'web-designing',
    icon: 'Globe',
    showOnHomePage: true,
    features: [
      'Custom website design',
      'MLM-specific designs',
      'Responsive layouts',
      'Modern UI/UX',
      'Brand integration',
      'Professional design services',
      'Website consultation'
    ],
  },
  {
    title: 'E-Voucher Generator',
    description: 'E-vouchers are a secure and simple method for online product payments and membership purchases. Many MLM companies have adopted this method to collect payments from members across the country.',
    category: 'Unique',
    slug: 'e-voucher-generator',
    icon: 'Ticket',
    showOnHomePage: true,
    features: [
      'Secure voucher generation',
      'Online payment method',
      'Membership purchase support',
      'Voucher encoding',
      'Voucher tracking',
      'Franchise distribution',
      'Member ordering concept'
    ],
  },
  
  // Compensation Features
  {
    title: 'Compensation Plan Studio',
    description: 'Model binary, matrix, unilevel, board, and hybrid plans with governance-ready workflows that keep finance and compliance aligned.',
    category: 'Compensation',
    slug: 'compensation-plan-studio',
    icon: 'Settings',
    showOnHomePage: true,
    features: [
      'Drag-and-drop rules, bonuses, and rank logic',
      'Version control with sandbox approvals',
      'Scenario simulations before payroll lock',
      'Multiple plan types support',
      'Governance-ready workflows'
    ],
  },
  {
    title: 'Commission Operations',
    description: 'Schedule weekly, monthly, and incentive-based payouts with automated validations, deductions, and audit-ready exports.',
    category: 'Compensation',
    slug: 'commission-operations',
    icon: 'DollarSign',
    showOnHomePage: true,
    features: [
      'Automated period closing and adjustments',
      'Ledger sync with ERP and banking partners',
      'Exception routing for finance sign-off',
      'Weekly and monthly payout processing',
      'Audit-ready exports'
    ],
  },
  {
    title: 'Leadership & Pool Management',
    description: 'Fund, allocate, and reconcile executive bonuses, influencer pools, and incentive trips—all tracked inside Cloud MLM Software.',
    category: 'Compensation',
    slug: 'leadership-pool-management',
    icon: 'Users',
    showOnHomePage: true,
    features: [
      'Pool eligibility dashboards',
      'Real-time funding projections',
      'Recognition feeds tied to payouts',
      'Executive bonus management',
      'Incentive trip tracking'
    ],
  },
  {
    title: 'Tax, Compliance, and KYC',
    description: 'Collect documentation, apply withholding, and maintain locality-specific compliance artifacts with minimal manual effort.',
    category: 'Compensation',
    slug: 'tax-compliance-kyc',
    icon: 'FileText',
    showOnHomePage: true,
    features: [
      'Automated TDS/VAT handling per market',
      'Document vault with expiry alerts',
      'Country-specific onboarding workflows',
      'KYC documentation management',
      'Compliance artifact tracking'
    ],
  },
  
  // Performance Features (additional)
  {
    title: 'Clean Interface',
    description: 'Modern UX keeps focus on the metrics and workflows that matter without clutter or training bloat.',
    category: 'Performance',
    slug: 'clean-interface',
    icon: 'Layout',
    showOnHomePage: true,
    features: [
      'Drag-and-drop dashboards',
      'Inline help and tours',
      'Modern user experience',
      'Clutter-free interface',
      'Intuitive workflows'
    ],
  },
  {
    title: 'Mobile Friendly',
    description: 'Responsive layouts deliver full functionality on phones and tablets with offline-friendly patterns.',
    category: 'Performance',
    slug: 'mobile-friendly',
    icon: 'Smartphone',
    showOnHomePage: true,
    features: [
      'Adaptive navigation',
      'Push-ready alerts',
      'Full functionality on mobile',
      'Offline-friendly patterns',
      'Responsive layouts'
    ],
  },
  {
    title: 'Improved Page Speed',
    description: 'Aggressive caching, async assets, and optimized queries keep experiences fast even during peak volume.',
    category: 'Performance',
    slug: 'improved-page-speed',
    icon: 'Zap',
    showOnHomePage: true,
    features: [
      'Server-side rendering',
      'Real-time monitoring',
      'Aggressive caching',
      'Async asset loading',
      'Optimized database queries'
    ],
  },
  {
    title: 'Dynamic Compression',
    description: 'Plan compression rules keep non-performing legs from blocking payouts while protecting true earners.',
    category: 'Performance',
    slug: 'dynamic-compression',
    icon: 'Compress',
    showOnHomePage: true,
    features: [
      'Binary and unilevel compatible',
      'Configurable eligibility',
      'Non-performing leg management',
      'Payout protection',
      'Performance optimization'
    ],
  },
  {
    title: 'Minified Resources',
    description: 'Bundled and minified assets reduce payload size and accelerate renders across global connections.',
    category: 'Performance',
    slug: 'minified-resources',
    icon: 'Package',
    showOnHomePage: false,
    features: [
      'Optimized CSS/JS',
      'Deferred non-critical loads',
      'Reduced payload size',
      'Faster page loads',
      'Global connection optimization'
    ],
  },
  {
    title: 'Backend Caching',
    description: 'Smart cache layers cut database load and deliver consistent performance during enrollment spikes.',
    category: 'Performance',
    slug: 'backend-caching',
    icon: 'Database',
    showOnHomePage: true,
    features: [
      'Granular controls',
      'Instant cache busting',
      'Reduced database load',
      'Consistent performance',
      'Enrollment spike handling'
    ],
  },
  {
    title: 'Optimized Everywhere',
    description: 'Device-aware rendering ensures every page looks great and performs on any screen or OS.',
    category: 'Performance',
    slug: 'optimized-everywhere',
    icon: 'Monitor',
    showOnHomePage: false,
    features: [
      'Viewport detection',
      'Asset scaling',
      'Cross-device compatibility',
      'OS-specific optimizations',
      'Responsive design'
    ],
  },
  {
    title: 'Web-based Management',
    description: 'Run the entire business from any browser with no thick-client installs or VPN requirements.',
    category: 'Performance',
    slug: 'web-based-management',
    icon: 'Globe',
    showOnHomePage: true,
    features: [
      'Responsive admin console',
      'Secure remote access',
      'No client installation',
      'Browser-based access',
      'VPN-free operation'
    ],
  },
  {
    title: 'Flexible Integrations',
    description: 'Connect commerce, CRM, BI, and communications platforms with prebuilt and API-level integrations.',
    category: 'Performance',
    slug: 'flexible-integrations',
    icon: 'Plug',
    showOnHomePage: true,
    features: [
      'REST and webhooks',
      'SDKs for custom apps',
      'Prebuilt connectors',
      'API-level integrations',
      'Platform connectivity'
    ],
  },
  {
    title: 'Powerfully Responsive',
    description: 'Component-driven UI scales elegantly across device rotations, split screens, and accessibility settings.',
    category: 'Performance',
    slug: 'powerfully-responsive',
    icon: 'Maximize',
    showOnHomePage: false,
    features: [
      'Accessible typography',
      'Touch-friendly controls',
      'Device rotation support',
      'Split screen compatibility',
      'Accessibility settings'
    ],
  },
  
  // Security Features (additional)
  {
    title: 'Secure MLM Foundation',
    description: 'Defense-in-depth spans infrastructure, data, and admin guardrails so scaling never compromises trust.',
    category: 'Security',
    slug: 'secure-mlm-foundation',
    icon: 'Shield',
    showOnHomePage: true,
    features: [
      'Role-based access',
      'IP allowlisting',
      'Audit logging',
      'Infrastructure security',
      'Data protection'
    ],
  },
  {
    title: 'Laravel Platform',
    description: 'Built on Laravel for modern security patterns, rapid iteration, and proven enterprise stability.',
    category: 'Security',
    slug: 'laravel-platform',
    icon: 'Code',
    showOnHomePage: true,
    features: [
      'Framework-level protections',
      'Testing harnesses',
      'Modern security patterns',
      'Enterprise stability',
      'Rapid iteration'
    ],
  },
  {
    title: 'Secure Authentication',
    description: 'MFA, password policies, and session management keep every identity verified across devices.',
    category: 'Security',
    slug: 'secure-authentication',
    icon: 'Lock',
    showOnHomePage: true,
    features: [
      'Conditional access',
      'Device trust scoring',
      'Multi-factor authentication',
      'Password policies',
      'Session management'
    ],
  },
  {
    title: 'Resilient Backups',
    description: 'Encrypted, versioned backups with rapid restore paths keep you covered against any outage or incident.',
    category: 'Security',
    slug: 'resilient-backups',
    icon: 'HardDrive',
    showOnHomePage: true,
    features: [
      'Geo redundancy',
      'Point-in-time recovery',
      'Encrypted backups',
      'Versioned storage',
      'Rapid restore'
    ],
  },
  {
    title: 'Payment Gateways',
    description: 'Certified integrations with global gateways deliver compliant payment acceptance and settlement.',
    category: 'Security',
    slug: 'payment-gateways',
    icon: 'CreditCard',
    showOnHomePage: true,
    features: [
      'Tokenized payments',
      'Multi-currency support',
      'Certified integrations',
      'Compliant processing',
      'Global gateway support'
    ],
  },
  
  // Commerce Features
  {
    title: 'Unified Commerce Hub',
    description: 'Manage catalogues, pricing, promos, and inventory for B2B, B2C, and distributor storefronts in one control centre.',
    category: 'Commerce',
    slug: 'unified-commerce-hub',
    icon: 'ShoppingCart',
    showOnHomePage: true,
    features: [
      'Localized pricing and taxation',
      'Inventory sync across warehouses',
      'Promotion builder with guardrails',
      'B2B and B2C support',
      'Centralized management'
    ],
  },
  {
    title: 'Customer Journeys',
    description: 'Deliver onboarding, autoship, subscription, and loyalty experiences that drive repeat purchases and referrals.',
    category: 'Commerce',
    slug: 'customer-journeys',
    icon: 'Route',
    showOnHomePage: true,
    features: [
      'Lifecycle messaging across channels',
      'Autoship and subscription management',
      'Loyalty tiers tied to recognition',
      'Onboarding automation',
      'Referral programs'
    ],
  },
  {
    title: 'Field Enablement Storefronts',
    description: 'Launch replicated sites and mobile selling tools that mirror corporate content while providing personalisation control to sellers.',
    category: 'Commerce',
    slug: 'field-enablement-storefronts',
    icon: 'Store',
    showOnHomePage: true,
    features: [
      'Brand-safe content governance',
      'Personalised landing page builder',
      'Media library with usage analytics',
      'Replicated sites',
      'Mobile selling tools'
    ],
  },
  {
    title: 'Order Orchestration',
    description: 'Connect fulfilment, shipping, and customer care with real-time status updates to distributors and buyers.',
    category: 'Commerce',
    slug: 'order-orchestration',
    icon: 'Package',
    showOnHomePage: true,
    features: [
      'Carrier integrations and webhook alerts',
      'Return and replacement workflows',
      'Support ticket linkage for escalations',
      'Real-time status updates',
      'Fulfilment management'
    ],
  },
  
  // Integration Features
  {
    title: 'Commerce Platforms',
    description: 'Prebuilt connectors for Shopify, Magento, WooCommerce, and custom storefronts keep orders, inventory, and payouts in sync.',
    category: 'Integrations',
    slug: 'commerce-platforms',
    icon: 'ShoppingBag',
    showOnHomePage: true,
    features: [
      'Two-way product and order sync',
      'Payment gateway tokenisation',
      'Extensible webhooks and SDKs',
      'Shopify integration',
      'Magento and WooCommerce support'
    ],
  },
  {
    title: 'CRM and Marketing Automation',
    description: 'Bring Salesforce, HubSpot, Zoho, and marketing clouds into the mix so campaigns, leads, and service data stay unified.',
    category: 'Integrations',
    slug: 'crm-marketing-automation',
    icon: 'Target',
    showOnHomePage: true,
    features: [
      'Field activity back to CRM timelines',
      'Lead scoring and routing automation',
      'Consent and preference synchronisation',
      'Salesforce and HubSpot integration',
      'Marketing cloud connectivity'
    ],
  },
  {
    title: 'Data & BI Pipelines',
    description: 'Stream data into Snowflake, BigQuery, Power BI, and Looker to fuel enterprise analytics without bespoke engineering.',
    category: 'Integrations',
    slug: 'data-bi-pipelines',
    icon: 'BarChart',
    showOnHomePage: true,
    features: [
      'Managed data models and APIs',
      'Event streaming for near real-time dashboards',
      'Secure token-based access controls',
      'Snowflake and BigQuery support',
      'Power BI and Looker integration'
    ],
  },
  {
    title: 'Support & Communications',
    description: 'Integrate with Zendesk, Freshdesk, Twilio, and WhatsApp Business to coordinate tickets, notifications, and conversations.',
    category: 'Integrations',
    slug: 'support-communications',
    icon: 'MessageCircle',
    showOnHomePage: true,
    features: [
      'Ticket sync with distributor records',
      'Template libraries for SMS and chat',
      'Automated SLA and escalation triggers',
      'Zendesk and Freshdesk integration',
      'Twilio and WhatsApp Business support'
    ],
  },
  
  // Enablement Features
  {
    title: 'Learning Paths',
    description: 'Curate multimedia training, certifications, and quizzes that adapt to role, rank, and market objectives.',
    category: 'Enablement',
    slug: 'learning-paths',
    icon: 'GraduationCap',
    showOnHomePage: true,
    features: [
      'Role-based curriculum sequencing',
      'Progress tracking and nudges',
      'Micro-learning content builder',
      'Multimedia training',
      'Certification programs'
    ],
  },
  {
    title: 'Field Coaching',
    description: 'Give leaders dashboards, scorecards, and coaching templates to grow emerging talent and accelerate momentum.',
    category: 'Enablement',
    slug: 'field-coaching',
    icon: 'Users',
    showOnHomePage: true,
    features: [
      'One-on-one coaching plans',
      'Leaderboards with fair scoring',
      'Recognition and rewards automation',
      'Leader dashboards',
      'Coaching templates'
    ],
  },
  {
    title: 'Knowledge Base',
    description: 'Publish product updates, compliance guides, and playbooks with AI search so answers surface instantly across the field.',
    category: 'Enablement',
    slug: 'knowledge-base',
    icon: 'BookOpen',
    showOnHomePage: true,
    features: [
      'Granular access and versioning',
      'AI-powered semantic search',
      'Embedded feedback loops',
      'Product updates',
      'Compliance guides'
    ],
  },
  {
    title: 'Partner Success Desk',
    description: 'Dedicated success managers help plan launches, review metrics, and share best practices tailored to your growth stage.',
    category: 'Enablement',
    slug: 'partner-success-desk',
    icon: 'Headphones',
    showOnHomePage: true,
    features: [
      'Quarterly business reviews',
      'Adoption scorecards and benchmarks',
      'Executive briefings and workshops',
      'Launch planning support',
      'Best practices sharing'
    ],
  },
  
  // Unique Features (additional)
  {
    title: 'Self-hosted Deployments',
    description: 'Retain complete infrastructure control with optional self-hosted installs and managed updates.',
    category: 'Unique',
    slug: 'self-hosted-deployments',
    icon: 'Server',
    showOnHomePage: true,
    features: [
      'Complete infrastructure control',
      'Optional self-hosted installs',
      'Managed updates',
      'On-premise deployment',
      'Infrastructure flexibility'
    ],
  },
  {
    title: 'Replicated Websites',
    description: 'Launch distributor-branded microsites with SEO-friendly URLs and content governance.',
    category: 'Unique',
    slug: 'replicated-websites',
    icon: 'Globe',
    showOnHomePage: true,
    features: [
      'Distributor-branded microsites',
      'SEO-friendly URLs',
      'Content governance',
      'Brand customization',
      'Multi-site management'
    ],
  },
  {
    title: 'Lead Capture Management',
    description: 'Build high-converting lead capture pages and track conversion journeys end-to-end.',
    category: 'Unique',
    slug: 'lead-capture-management',
    icon: 'UserPlus',
    showOnHomePage: true,
    features: [
      'High-converting lead pages',
      'Conversion journey tracking',
      'Lead capture forms',
      'End-to-end tracking',
      'Conversion optimization'
    ],
  },
  {
    title: 'OpenCart, WordPress, Drupal APIs',
    description: 'Connect commerce stacks with secure APIs and keep catalogs, orders, and payouts in sync.',
    category: 'Unique',
    slug: 'opencart-wordpress-drupal-apis',
    icon: 'Code',
    showOnHomePage: true,
    features: [
      'Secure API connections',
      'Catalog synchronization',
      'Order sync',
      'Payout synchronization',
      'OpenCart, WordPress, Drupal support'
    ],
  },
  {
    title: 'Magento Integration',
    description: 'Synchronize Magento stores for inventory, orders, and memberships without custom plumbing.',
    category: 'Unique',
    slug: 'magento-integration',
    icon: 'ShoppingBag',
    showOnHomePage: true,
    features: [
      'Inventory synchronization',
      'Order synchronization',
      'Membership sync',
      'No custom coding required',
      'Seamless integration'
    ],
  },
];

async function seedFeatures() {
  console.log('🌱 Starting Features seed...\n');

  try {
    const existing = await listFeatures('en');

    let created = 0;
    let skipped = 0;
    let updated = 0;

    for (const featureData of featuresData) {
      const slugLower = featureData.slug?.toLowerCase();
      const titleLower = featureData.title.toLowerCase();

      // Check if feature already exists by slug or title
      const existingBySlug = slugLower ? existing.find((e) => e.slug?.toLowerCase() === slugLower) : null;
      const existingByTitle = existing.find((e) => e.title.toLowerCase() === titleLower);
      const existingFeature = existingBySlug || existingByTitle;

      if (existingFeature) {
        // Update existing feature with new data (category, icon, features)
        try {
          await updateFeature(
            existingFeature.id,
            'en',
            {
              slug: featureData.slug || existingFeature.slug,
              title: featureData.title,
              description: featureData.description,
              category: featureData.category,
              icon: featureData.icon || existingFeature.icon || null,
              showOnHomePage: featureData.showOnHomePage ?? existingFeature.showOnHomePage,
              hasDetailPage: existingFeature.hasDetailPage,
              features: featureData.features || null,
            }
          );
          console.log(`🔄 Updated: "${featureData.title}" (${featureData.category})`);
          updated++;
        } catch (error: any) {
          console.error(`❌ Error updating "${featureData.title}":`, error.message);
        }
        continue;
      }

      try {
        const slug = featureData.slug || featureData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        
        await createFeature({
          slug,
          title: featureData.title,
          description: featureData.description,
          category: featureData.category,
          icon: featureData.icon || null,
          showOnHomePage: featureData.showOnHomePage ?? false,
          hasDetailPage: false,
          locale: 'en',
          features: featureData.features || null,
        });
        
        console.log(`✅ Created: "${featureData.title}" (${featureData.category})`);
        created++;
      } catch (error: any) {
        console.error(`❌ Error creating "${featureData.title}":`, error.message);
      }
    }

    console.log(`\n✨ Seed completed! Created: ${created}, Skipped: ${skipped}, Updated: ${updated}`);
  } catch (error: any) {
    console.error('❌ Seed failed:', error.message);
    process.exit(1);
  }
}

seedFeatures()
  .then(() => {
    console.log('\n🎉 All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
