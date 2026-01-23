// Shared page options for admin forms (meta-details, page-titles, etc.)
export interface PageOption {
    value: string;
    label: string;
}

export const pageOptions: PageOption[] = [
    { value: 'home', label: 'Home' },
    { value: 'about', label: 'About' },
    { value: 'features', label: 'Features' },
    { value: 'faq', label: 'FAQ' },
    { value: 'contact', label: 'Contact' },
    { value: 'blog', label: 'Blog' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'testimonials', label: 'Testimonials' },
    { value: 'mlm-software-modules', label: 'Modules' },
    { value: 'mlm-plans', label: 'MLM Plans' },
    { value: 'services', label: 'Services' },
    { value: 'industries', label: 'Industries' },
];

// Page display names for tables
export const pageDisplayNames: Record<string, string> = {
    'home': 'Home',
    'about': 'About',
    'features': 'Features',
    'faq': 'FAQ',
    'contact': 'Contact',
    'blog': 'Blog',
    'pricing': 'Pricing',
    'testimonials': 'Testimonials',
    'mlm-software-modules': 'Modules',
    'mlm-plans': 'MLM Plans',
    'services': 'Services',
    'industries': 'Industries',
};
