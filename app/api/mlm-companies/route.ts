import { NextRequest, NextResponse } from 'next/server';
import type { SupportedLocale } from '@/config/site';
import { isSupportedLocale } from '@/lib/i18n-utils';

export interface MlmCompanyRecord {
  id: string;
  slug: string;
  title: string;
  description: string;
  image?: string | null;
  industry?: string | null;
  foundedYear?: number | null;
  headquarters?: string | null;
  locale: string;
}

// Company slugs
const COMPANY_SLUGS = [
  '4life-research', 'ambit-energy', 'amore-pacific', 'amway', 'arbonne-international',
  'arix', 'arsoa-honsha', 'atomy', 'asea', 'avon-products-inc', 'beautycounter',
  'belcorp', 'best-world-international-ltd', 'bearcereju-coltd', 'cbon-cosmetics', 'captain-tortue-group', 'chandeal-coltd',
  'charle-corporation', 'color-street', 'cosway-corpltd', 'coway',
  'cutcovector-marketing', 'diana', 'dxn-marketing-sdn-bhd', 'energetix',
  'faberlic', 'family-heritage-life', 'for-days', 'giffarine-skyine-unityco',
  'grant-e-ones', 'hai-o', 'hillarys-blinds', 'hinode', 'hy-cite-enterprisesllc',
  'immunotec-research-ltd', 'infinitus', 'jeunesse', 'kk-assuran', 'koyo-sha',
  'lg-household-healthcare', 'lifevantage', 'mannatech', 'market-america',
  'marketing-personal', 'maruko', 'mary-kay', 'menard', 'miki-corp', 'monatglobal',
  'morinda', 'mydailychoicehempworx', 'naris-cosmetics', 'natura',
  'naturally-plus', 'natures-sunshine', 'nefful', 'new-image-group', 'nht-global',
  'nikken', 'noevir-coltd', 'nu-skin', 'o-boticario', 'optaviamedifastinc',
  'oriflame-cosmetics', 'perfectly-posh', 'pieroth-wein', 'plexus',
  'pm-international', 'pola', 'princess-house', 'pro-partner', 'prowin-international',
  'pruvit', 'pure-romance', 'rodan-fields', 'scentsy', 'shinsei-home-service-coltd',
  'south-western-advantage', 'stream', 'team-national', 'telecom-plus',
  'truvision-health', 'tupperware', 'unicity', 'usana-health-sciences',
  'usborn-books-more', 'vestige-marketing', 'vida-divina', 'vivint',
  'vorwerk', 'world-global-network', 'world-ventures', 'xyngular',
  'yanbal-international', 'young-living', 'youngevity', 'younique',
  'zhulian-marketing', 'zinzino', 'zurvita'
];

type Locale = 'en' | 'es' | 'fr' | 'it' | 'de' | 'pt' | 'zh';

interface CompanyData {
  title: string;
  description: string;
  industry: string;
  headquarters: string;
}

type Translations = Record<string, Record<Locale, CompanyData>>;

// Translations for major companies
const translations: Translations = {
  '4life-research': {
    en: { title: '4Life Research', description: 'Leading network marketing company specializing in immune system support products.', industry: 'Health & Wellness', headquarters: 'USA' },
    es: { title: '4Life Research', description: 'Empresa lider en marketing multinivel especializada en productos de apoyo al sistema inmunologico.', industry: 'Salud y Bienestar', headquarters: 'EE.UU.' },
    fr: { title: '4Life Research', description: 'Entreprise leader en marketing reseau specializee dans les produits de soutien du systeme immunitaire.', industry: 'Santé et Bien-être', headquarters: 'États-Unis' },
    it: { title: '4Life Research', description: 'Azienda leader nel network marketing specializzata in prodotti per il sistema immunitario.', industry: 'Salute e Benessere', headquarters: 'USA' },
    de: { title: '4Life Research', description: 'Fuhrendes Netzwerk-Marketing-Unternehmen mit Spezialisierung auf Produkte zur Immununterstutzung.', industry: 'Gesundheit und Wellness', headquarters: 'USA' },
    pt: { title: '4Life Research', description: 'Empresa lider em marketing multinivel especializada em produtos de suporte ao sistema imunologico.', industry: 'Saúde e Bem-estar', headquarters: 'EUA' },
    zh: { title: '4Life研究', description: '领先的传销公司，专门生产免疫系统支持产品。', industry: '健康与保健', headquarters: '美国' }
  },
  'amway': {
    en: { title: 'Amway', description: 'Global leader in health, beauty, and home products with proven business opportunity.', industry: 'Health & Wellness', headquarters: 'Ada, Michigan, USA' },
    es: { title: 'Amway', description: 'Lider global en productos de salud, belleza y hogar con oportunidad de negocio probada.', industry: 'Salud y Bienestar', headquarters: 'Ada, Michigan, EE.UU.' },
    fr: { title: 'Amway', description: 'Leader mondial dans les produits de sante, beaute et maison avec une opportunite commerciale prouvee.', industry: 'Santé et Bien-être', headquarters: 'Ada, Michigan, États-Unis' },
    it: { title: 'Amway', description: 'Leader globale in prodotti per la salute, la bellezza e la casa con opportunità di business provata.', industry: 'Salute e Benessere', headquarters: 'Ada, Michigan, USA' },
    de: { title: 'Amway', description: 'Weltfuhrender Anbieter von Gesundheits-, Schonheits- und Haushaltsprodukten mit bewahrter Geschaftsgelegenheit.', industry: 'Gesundheit und Wellness', headquarters: 'Ada, Michigan, USA' },
    pt: { title: 'Amway', description: 'Lider global em produtos de saude, beleza e lar com oportunidade de negocio comprovada.', industry: 'Saúde e Bem-estar', headquarters: 'Ada, Michigan, EUA' },
    zh: { title: '安利', description: '全球健康、美容和家居产品的领导者，拥有成熟的商业机会。', industry: '健康与保健', headquarters: '美国密歇根州Ada' }
  },
  'avon-products-inc': {
    en: { title: 'Avon', description: 'Global beauty brand empowering women through entrepreneurship and innovative products.', industry: 'Beauty & Cosmetics', headquarters: 'London, UK' },
    es: { title: 'Avon', description: 'Marca global de belleza que empodera a las mujeres a traves del emprendimiento.', industry: 'Belleza y Cosmeticos', headquarters: 'Londres, Reino Unido' },
    fr: { title: 'Avon', description: 'Marque mondiale de beaute qui autonomise les femmes par l entrepreneuriat.', industry: 'Beauté et Cosmétiques', headquarters: 'Londres, Royaume-Uni' },
    it: { title: 'Avon', description: 'Marchio globale di bellezza che empodera le donne attraverso l imprenditorialita.', industry: 'Bellezza e Cosmetici', headquarters: 'Londra, Regno Unito' },
    de: { title: 'Avon', description: 'Globale Schonheitsmarke, die Frauen durch Unternehmergeist stark macht.', industry: 'Schonheit und Kosmetik', headquarters: 'London, Vereinigtes Konigreich' },
    pt: { title: 'Avon', description: 'Marca global de beleza que empodera mulheres atraves do empreendedorismo.', industry: 'Beleza e Cosmeticos', headquarters: 'Londres, Reino Unido' },
    zh: { title: '雅芳', description: '全球美容品牌，通过创业赋权女性。', industry: '美容与化妆品', headquarters: '英国伦敦' }
  },
  'tupperware': {
    en: { title: 'Tupperware', description: 'Iconic brand revolutionizing food storage with innovative kitchen products.', industry: 'Home & Kitchen', headquarters: 'Orlando, Florida, USA' },
    es: { title: 'Tupperware', description: 'Marca iconica que revoluciona el almacenamiento de alimentos con productos innovadores para la cocina.', industry: 'Hogar y Cocina', headquarters: 'Orlando, Florida, EE.UU.' },
    fr: { title: 'Tupperware', description: 'Marque emblematique revolutionnant le stockage alimentaire avec des produits de cuisine innovants.', industry: 'Maison et Cuisine', headquarters: 'Orlando, Florida, États-Unis' },
    it: { title: 'Tupperware', description: 'Marchio iconico che rivoluziona la conservazione degli alimenti con prodotti innovativi per la cucina.', industry: 'Casa e Cucina', headquarters: 'Orlando, Florida, USA' },
    de: { title: 'Tupperware', description: 'Ikonic Marke, die die Lebensmittelaufbewahrung mit innovativen Kuchenprodukten revolutioniert.', industry: 'Haus und Kiche', headquarters: 'Orlando, Florida, USA' },
    pt: { title: 'Tupperware', description: 'Marca iconica que revoluciona o armazenamento de alimentos com produtos inovadores para a cozinha.', industry: 'Casa e Cozinha', headquarters: 'Orlando, Florida, EUA' },
    zh: { title: '特百惠', description: '标志性的品牌，通过创新的厨房产品革新食品储存。', industry: '家居与厨房', headquarters: '美国佛罗里达州奥兰多' }
  },
  'nu-skin': {
    en: { title: 'Nu Skin', description: 'Premium anti-aging and beauty company with innovative skincare and nutrition products.', industry: 'Beauty & Anti-aging', headquarters: 'Provo, Utah, USA' },
    es: { title: 'Nu Skin', description: 'Empresa premium de antienvejecimiento y belleza con productos innovadores de cuidado de la piel.', industry: 'Belleza y Antienvejecimiento', headquarters: 'Provo, Utah, EE.UU.' },
    fr: { title: 'Nu Skin', description: 'Entreprise premium anti-age et beaute avec des produits innovants de soins de la peau et de nutrition.', industry: 'Beauté et Anti-age', headquarters: 'Provo, Utah, États-Unis' },
    it: { title: 'Nu Skin', description: 'Azienda premium anti-invecchiamento e bellezza con prodotti innovativi per la cura della pelle.', industry: 'Bellezza e Anti-invecchiamento', headquarters: 'Provo, Utah, USA' },
    de: { title: 'Nu Skin', description: 'Premium Anti-Aging- und Schonheitsunternehmen mit innovativen Hautpflege- und Ernahrungsprodukten.', industry: 'Schonheit und Anti-Aging', headquarters: 'Provo, Utah, USA' },
    pt: { title: 'Nu Skin', description: 'Empresa premium de anti-envelhecimento e beleza com produtos inovadores de cuidados com a pele.', industry: 'Beleza e Anti-envelhecimento', headquarters: 'Provo, Utah, EUA' },
    zh: { title: '如新', description: '优质的抗衰老和美容公司，拥有创新的护肤和营养产品。', industry: '美容与抗衰老', headquarters: '美国犹他州普罗沃' }
  },
  'young-living': {
    en: { title: 'Young Living', description: 'World leader in essential oils with premium wellness products and distributor opportunities.', industry: 'Essential Oils & Wellness', headquarters: 'Lehi, Utah, USA' },
    es: { title: 'Young Living', description: 'Lider mundial en aceites esenciales con productos premium de bienestar y oportunidades para distribuidores.', industry: 'Aceites Esenciales y Bienestar', headquarters: 'Lehi, Utah, EE.UU.' },
    fr: { title: 'Young Living', description: 'Leader mondial des huiles essentielles avec des produits wellness premium et des opportunites de distributeurs.', industry: 'Huiles Essentielles et Bien-etre', headquarters: 'Lehi, Utah, États-Unis' },
    it: { title: 'Young Living', description: 'Leader mondiale degli oli essenziali con prodotti wellness premium e opportunita per distributori.', industry: 'Oli Essenziali e Benessere', headquarters: 'Lehi, Utah, USA' },
    de: { title: 'Young Living', description: 'Weltfuhrer bei atheroischen Olen mit Premium-Wellness-Produkten und Vertriebsmoeglichkeiten.', industry: 'Athorische Oele und Wellness', headquarters: 'Lehi, Utah, USA' },
    pt: { title: 'Young Living', description: 'Lider mundial em oleos essenciais com produtos premium de bem-estar e oportunidades para distribuidores.', industry: 'Oleos Essenciais e Bem-estar', headquarters: 'Lehi, Utah, EUA' },
    zh: { title: '多特瑞', description: '精油世界领导者，拥有优质健康产品和分销商机会。', industry: '精油与保健', headquarters: '美国犹他州莱希' }
  },
  'mary-kay': {
    en: { title: 'Mary Kay', description: 'Iconic American beauty company with premium skincare and cosmetics products.', industry: 'Beauty & Cosmetics', headquarters: 'Dallas, Texas, USA' },
    es: { title: 'Mary Kay', description: 'Empresa estadounidense de belleza iconica con productos premium de cuidado de la piel y cosmeticos.', industry: 'Belleza y Cosmeticos', headquarters: 'Dallas, Texas, EE.UU.' },
    fr: { title: 'Mary Kay', description: 'Entreprise americaine de beaute emblematique avec des produits premium de soins de la peau et de cosmetiques.', industry: 'Beauté et Cosmétiques', headquarters: 'Dallas, Texas, États-Unis' },
    it: { title: 'Mary Kay', description: 'Azienda americana di bellezza iconica con prodotti premium per la cura della pelle e cosmetici.', industry: 'Bellezza e Cosmetici', headquarters: 'Dallas, Texas, USA' },
    de: { title: 'Mary Kay', description: 'Ikonic amerikanisches Schonheitsunternehmen mit Premium-Hautpflege- und Kosmetikprodukten.', industry: 'Schonheit und Kosmetik', headquarters: 'Dallas, Texas, USA' },
    pt: { title: 'Mary Kay', description: 'Empresa americana de beleza iconica com produtos premium de cuidados com a pele e cosmeticos.', industry: 'Beleza e Cosmeticos', headquarters: 'Dallas, Texas, EUA' },
    zh: { title: '玫琳凯', description: '标志性的美国美容公司，拥有优质的护肤和化妆品。', industry: '美容与化妆品', headquarters: '美国德克萨斯州达拉斯' }
  },
  'herbalife-nutrition': {
    en: { title: 'Herbalife Nutrition', description: 'Global nutrition company empowering people to live their best life with quality products.', industry: 'Health & Wellness', headquarters: 'Los Angeles, California, USA' },
    es: { title: 'Herbalife Nutrition', description: 'Empresa global de nutricion que empodera a las personas para vivir su mejor vida con productos de calidad.', industry: 'Nutricion y Bienestar', headquarters: 'Los Angeles, California, EE.UU.' },
    fr: { title: 'Herbalife Nutrition', description: 'Entreprise nutritionnelle mondiale permettant aux gens de vivre leur meilleure vie avec des produits de qualite.', industry: 'Nutrition et Bien-être', headquarters: 'Los Angeles, Californie, États-Unis' },
    it: { title: 'Herbalife Nutrition', description: 'Azienda nutrizionale globale che permette alle persone di vivere la propria vita migliore con prodotti di qualita.', industry: 'Nutrizione e Benessere', headquarters: 'Los Angeles, California, USA' },
    de: { title: 'Herbalife Nutrition', description: 'Globales Ernahrungsunternehmen, das Menschen befahigt, ihr bestes Leben mit Qualitatsprodukten zu leben.', industry: 'Ernahrung und Wellness', headquarters: 'Los Angeles, Kalifornien, USA' },
    pt: { title: 'Herbalife Nutrition', description: 'Empresa global de nutricao que capacita as pessoas a viver sua melhor vida com produtos de qualidade.', industry: 'Nutricao e Bem-estar', headquarters: 'Los Angeles, California, EUA' },
    zh: { title: '康宝莱', description: '全球营养公司，通过优质产品帮助人们过上最佳生活。', industry: '营养与保健', headquarters: '美国加州洛杉矶' }
  },
  'market-america': {
    en: { title: 'Market America', description: 'E-commerce and product brokerage company with innovative shopping and distributor platform.', industry: 'E-commerce & Shopping', headquarters: 'Greensboro, North Carolina, USA' },
    es: { title: 'Market America', description: 'Empresa de comercio electronico y corretaje de productos con innovadora plataforma de compras y distribuidores.', industry: 'Comercio Electronico y Compras', headquarters: 'Greensboro, Carolina del Norte, EE.UU.' },
    fr: { title: 'Market America', description: 'Entreprise de commerce electronique et de courtage de produits avec une plateforme d achat et de distribution innovative.', industry: 'Commerce Electronique et Shopping', headquarters: 'Greensboro, Caroline du Nord, États-Unis' },
    it: { title: 'Market America', description: 'Azienda di e-commerce e brokeraggio di prodotti con piattaforma innovativa di acquisto e distribuzione.', industry: 'E-commerce e Shopping', headquarters: 'Greensboro, Carolina del Nord, USA' },
    de: { title: 'Market America', description: 'E-Commerce- und Produktmaklerunternehmen mit innovativer Shopping- und Vertriebsplattform.', industry: 'E-Commerce und Shopping', headquarters: 'Greensboro, North Carolina, USA' },
    pt: { title: 'Market America', description: 'Empresa de e-commerce e corretagem de produtos com plataforma inovadora de compras e distribuidores.', industry: 'E-commerce e Compras', headquarters: 'Greensboro, Carolina do Norte, EUA' },
    zh: { title: 'Market America', description: '电子商务和产品代理公司，拥有创新的购物和分销商平台。', industry: '电子商务与购物', headquarters: '美国北卡罗来纳州格林斯伯勒' }
  },
  'vorwerk': {
    en: { title: 'Vorwerk', description: 'German premium home appliances company known for innovative kitchen and cleaning products.', industry: 'Home Appliances', headquarters: 'Wuppertal, Germany' },
    es: { title: 'Vorwerk', description: 'Empresa alemana de electrodomesticos premium conocida por productos innovadores de cocina y limpieza.', industry: 'Electrodomesticos del Hogar', headquarters: 'Wuppertal, Alemania' },
    fr: { title: 'Vorwerk', description: 'Entreprise allemande d electromenager premium connue pour ses produits innovants de cuisine et de nettoyage.', industry: 'Electromenager', headquarters: 'Wuppertal, Allemagne' },
    it: { title: 'Vorwerk', description: 'Azienda tedesca di elettrodomestici premium nota per prodotti innovativi di cucina e pulizia.', industry: 'Elettrodomestici', headquarters: 'Wuppertal, Germania' },
    de: { title: 'Vorwerk', description: 'Deutsches Premium-Haushaltsgerateunternehmen bekannt fur innovative Kuchen- und Reinigungsprodukte.', industry: 'Haushaltsgerate', headquarters: 'Wuppertal, Deutschland' },
    pt: { title: 'Vorwerk', description: 'Empresa alem de eletrodomesticos premium conhecida por produtos inovadores de cozinha e limpeza.', industry: 'Eletrodomesticos', headquarters: 'Wuppertal, Alemanha' },
    zh: { title: '福维克', description: '德国高端家电公司，以创新的厨房和清洁产品著称。', industry: '家用电器', headquarters: '德国伍珀塔尔' }
  },
  'natura': {
    en: { title: 'Natura', description: 'Brazilian beauty and cosmetics company focused on sustainability and natural ingredients.', industry: 'Beauty & Sustainability', headquarters: 'Sao Paulo, Brazil' },
    es: { title: 'Natura', description: 'Empresa brasileña de belleza y cosmeticos enfocada en sostenibilidad e ingredientes naturales.', industry: 'Belleza y Sostenibilidad', headquarters: 'Sao Paulo, Brasil' },
    fr: { title: 'Natura', description: 'Entreprise Bresilienne de beaute et cosmetiques axee sur la durabilite et les ingredients naturels.', industry: 'Beauté et Durabilite', headquarters: 'Sao Paulo, Bresil' },
    it: { title: 'Natura', description: 'Azienda brasiliana di bellezza e cosmetici focalizzata sulla sostenibilita e ingredienti naturali.', industry: 'Bellezza e Sostenibilita', headquarters: 'San Paolo, Brasile' },
    de: { title: 'Natura', description: 'Brasilianisches Schonheits- und Kosmetikunternehmen mit Fokus auf Nachhaltigkeit und naturlliche Inhaltsstoffe.', industry: 'Schonheit und Nachhaltigkeit', headquarters: 'Sao Paulo, Brasilien' },
    pt: { title: 'Natura', description: 'Empresa brasileira de beleza e cosmeticos focada em sustentabilidade e ingredientes naturais.', industry: 'Beleza e Sustentabilidade', headquarters: 'Sao Paulo, Brasil' },
    zh: { title: 'Natura', description: '巴西美容化妆品公司，专注于可持续性和天然成分。', industry: '美容与可持续发展', headquarters: '巴西圣保罗' }
  },
  'oriflame-cosmetics': {
    en: { title: 'Oriflame', description: 'Swedish beauty company with natural products and entrepreneur-focused business model.', industry: 'Beauty & Cosmetics', headquarters: 'Stockholm, Sweden' },
    es: { title: 'Oriflame', description: 'Empresa sueca de belleza con productos naturales y modelo de negocio centrado en emprendedores.', industry: 'Belleza y Cosmeticos', headquarters: 'Estocolmo, Suecia' },
    fr: { title: 'Oriflame', description: 'Entreprise suedoise de beaute avec des produits naturels et un modele commercial axe sur les entrepreneurs.', industry: 'Beauté et Cosmétiques', headquarters: 'Stockholm, Suede' },
    it: { title: 'Oriflame', description: 'Azienda svedese di bellezza con prodotti naturali e modello di business focalizzato sugli imprenditori.', industry: 'Bellezza e Cosmetici', headquarters: 'Stoccolma, Svezia' },
    de: { title: 'Oriflame', description: 'Schwedisches Schonheitsunternehmen mit naturlichen Produkten und unternehmerorientiertem Geschaftsmodell.', industry: 'Schonheit und Kosmetik', headquarters: 'Stockholm, Schweden' },
    pt: { title: 'Oriflame', description: 'Empresa sueca de beleza com produtos naturais e modelo de negocio focado em empreendedores.', industry: 'Beleza e Cosmeticos', headquarters: 'Estocolmo, Suécia' },
    zh: { title: '欧瑞莲', description: '瑞典美容公司，拥有天然产品和以创业者为中心的商业模式。', industry: '美容与化妆品', headquarters: '瑞典斯德哥尔摩' }
  }
};

// Default data for companies not in translations
const DEFAULT_DATA: Record<Locale, CompanyData> = {
  en: { title: '', description: 'Leading network marketing company with proven compensation plans and distributor success.', industry: 'Network Marketing', headquarters: 'Global' },
  es: { title: '', description: 'Empresa lider de marketing multinivel con planes de compensacion probados y exito de distribuidores.', industry: 'Marketing Multinivel', headquarters: 'Global' },
  fr: { title: '', description: 'Entreprise leader du marketing de reseau avec des plans de compensation preuves et succes des distributeurs.', industry: 'Marketing de Reseau', headquarters: 'Mondial' },
  it: { title: '', description: 'Azienda leader di network marketing con piani di compenso collaudati e successo dei distributori.', industry: 'Network Marketing', headquarters: 'Globale' },
  de: { title: '', description: 'Fuhrendes Netzwerk-Marketing-Unternehmen mit bewahrten Vergutungsplanen und Distributorenerfolg.', industry: 'Netzwerk-Marketing', headquarters: 'Global' },
  pt: { title: '', description: 'Empresa lider de marketing multinivel com planos de compensacao comprovados e sucesso de distribuidores.', industry: 'Marketing Multinivel', headquarters: 'Global' },
  zh: { title: '', description: '领先的传销公司，拥有成熟的薪酬计划和分销商成功案例。', industry: '传销', headquarters: '全球' }
};

function generateCompanies(locale: Locale): MlmCompanyRecord[] {
  return COMPANY_SLUGS.map((slug, index) => {
    const translation = translations[slug]?.[locale];
    const defaultData = DEFAULT_DATA[locale];
    const title = translation?.title || slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return {
      id: String(index + 1),
      slug: slug,
      title: title,
      description: translation?.description || defaultData.description,
      image: null,
      industry: translation?.industry || defaultData.industry,
      foundedYear: 1950 + Math.floor(Math.random() * 70),
      headquarters: translation?.headquarters || defaultData.headquarters,
      locale: locale
    };
  });
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get('locale') as Locale | null;

    // Validate locale
    if (locale && !isSupportedLocale(locale as SupportedLocale)) {
      return NextResponse.json(
        { error: 'Invalid locale' },
        { status: 400 }
      );
    }

    // Use 'en' as default if no locale provided or invalid
    const resolvedLocale: Locale = locale && isSupportedLocale(locale as SupportedLocale) ? locale : 'en';
    
    // Generate companies for the requested locale
    const companies = generateCompanies(resolvedLocale);

    // Sort by title alphabetically
    const sortedCompanies = [...companies].sort((a, b) => 
      a.title.localeCompare(b.title)
    );

    return NextResponse.json(sortedCompanies);
  } catch (error) {
    console.error('Error fetching MLM companies:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
