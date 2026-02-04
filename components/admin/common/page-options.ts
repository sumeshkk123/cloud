// Shared page options for admin forms (meta-details, page-titles, etc.)
export interface PageOption {
    value: string;
    label: string;
}

export const pageOptions: PageOption[] = [
    { value: 'home', label: 'Home' },
    { value: 'about-company', label: 'About Company' },
    { value: 'features', label: 'Features' },
    { value: 'faq', label: 'FAQ' },
    { value: 'contact', label: 'Contact' },
    { value: 'free-mlm-software-demo', label: 'Demo' },
    { value: 'blog', label: 'Blog' },
    { value: 'press-release', label: 'Press Release' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'testimonials', label: 'Testimonials' },
    { value: 'mlm-software-modules', label: 'Modules' },
    { value: 'mlm-software-integration', label: 'Integration' },
    { value: 'mlm-plans', label: 'MLM Plans' },
    { value: 'services', label: 'Services' },
    { value: 'industries', label: 'Industries' },
    { value: 'changelog', label: 'Changelog' },
    { value: 'ai-copilot', label: 'AI Co-pilot' },
];

// Page display names for tables
export const pageDisplayNames: Record<string, string> = {
    'home': 'Home',
    'about-company': 'About Company',
    'features': 'Features',
    'faq': 'FAQ',
    'contact': 'Contact',
    'free-mlm-software-demo': 'Demo',
    'blog': 'Blog',
    'press-release': 'Press Release',
    'pricing': 'Pricing',
    'testimonials': 'Testimonials',
    'mlm-software-modules': 'Modules',
    'mlm-software-integration': 'Integration',
    'mlm-plans': 'MLM Plans',
    'services': 'Services',
    'industries': 'Industries',
    'changelog': 'Changelog',
    'ai-copilot': 'AI Co-pilot',
};
