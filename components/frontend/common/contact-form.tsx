'use client';

import * as React from "react";
import { Send } from "lucide-react";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { CountrySelect, COUNTRY_CODES, getCountryCode } from "@/components/ui/country-select";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";
import { Typography } from "@/components/ui/typography";

export interface ContactFormProps {
    badge?: string;
    heading?: string;
    headingHighlight?: string;
    onSubmit?: (data: ContactFormData) => void;
    className?: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    country: string;
    phone: string;
    message: string;
}


const ContactForm = React.forwardRef<HTMLFormElement, ContactFormProps>(
    ({ badge = "GET IN TOUCH", heading = "Drop Us a Line.", headingHighlight = "Line.", onSubmit, className }, ref) => {
        const { showToast, ToastComponent } = useToast();
        const [formData, setFormData] = React.useState<ContactFormData>({
            name: '',
            email: '',
            country: '',
            phone: '',
            message: ''
        });
        const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormData, string>>>({});

        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            // Validate form
            const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

            if (!formData.name.trim()) {
                newErrors.name = 'Name is required';
            }

            if (!formData.email.trim()) {
                newErrors.email = 'Email is required';
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }

            if (!formData.country) {
                newErrors.country = 'Please select a country';
            }

            if (!formData.phone.trim()) {
                newErrors.phone = 'Phone number is required';
            } else if (!/^\d{6,15}$/.test(formData.phone.replace(/\s/g, ''))) {
                newErrors.phone = 'Please enter a valid phone number (6-15 digits)';
            }

            if (!formData.message.trim()) {
                newErrors.message = 'Message is required';
            }

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                // Show first error in toast
                const firstError = Object.values(newErrors)[0];
                if (firstError) {
                    showToast(firstError, 'error');
                }
                return;
            }

            setErrors({});

            // Show success toast
            showToast('Message sent successfully!', 'success');

            if (onSubmit) {
                onSubmit(formData);
            }

            // Reset form
            setFormData({
                name: '',
                email: '',
                country: '',
                phone: '',
                message: ''
            });
        };

        const handleChange = (field: keyof ContactFormData, value: string) => {
            setFormData(prev => ({ ...prev, [field]: value }));
            // Clear error when user starts typing
            if (errors[field]) {
                setErrors(prev => {
                    const newErrors = { ...prev };
                    delete newErrors[field];
                    return newErrors;
                });
            }
        };

        const handleCountryChange = (value: string) => {
            handleChange('country', value);
            // Clear phone when country changes
            handleChange('phone', '');
        };


        const handlePhoneChange = (value: string) => {
            // Only allow digits and spaces
            const cleaned = value.replace(/[^\d\s]/g, '');
            handleChange('phone', cleaned);
        };

        return (
            <form
                ref={ref}
                onSubmit={handleSubmit}
                className={cn(
                    "rounded-2xl",
                    className
                )}
            >
                {/* Badge */}
                {badge && (
                    <div className="mb-6 flex items-center gap-2">
                        <div className="h-3 w-3 rounded-sm bg-primary" />
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                            {badge}
                        </span>
                    </div>
                )}

                {/* Heading */}
                {heading && (
                    <Typography variant="h4" className="mb-8 font-semibold text-white sm:text-4xl">
                        {heading}
                    </Typography>
                )}

                {/* Form Fields */}
                <div className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {/* Name Field */}
                        <div className="space-y-2">
                            <div className="relative">
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    placeholder="Full Name *"
                                    className={cn(
                                        "w-full border-0 border-b px-0 py-3 text-white placeholder:text-white placeholder:text-sm outline-none focus:outline-none focus:ring-0 focus:border-b transition-all",
                                        errors.name
                                            ? "border-destructive bg-transparent"
                                            : "border-white/30 bg-transparent"
                                    )}
                                />
                            </div>
                            {errors.name && (
                                <p className="text-xs text-destructive">{errors.name}</p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <div className="relative">
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="Email Address *"
                                    className={cn(
                                        "w-full border-0 border-b px-0 py-3 text-white placeholder:text-white placeholder:text-sm outline-none focus:outline-none focus:ring-0 focus:border-b transition-all",
                                        errors.email
                                            ? "border-destructive bg-transparent"
                                            : "border-white/30 bg-transparent"
                                    )}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-xs text-destructive">{errors.email}</p>
                            )}
                        </div>
                    </div>

                    {/* Country and Phone Row */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        {/* Country Field */}
                        <div className="space-y-2">
                            <CountrySelect
                                id="country"
                                required
                                value={formData.country}
                                onChange={handleCountryChange}
                                error={!!errors.country}
                                placeholder="Choose an option *"
                            />
                            {errors.country && (
                                <p className="text-xs text-destructive">{errors.country}</p>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div className="space-y-2">
                            <div className="relative">
                                <div className="flex items-center">
                                    {formData.country && (
                                        <div className="absolute left-0 flex items-center gap-1 text-sm font-medium text-white z-10">
                                            <span>{COUNTRY_CODES[formData.country]?.flag}</span>
                                            <span>{getCountryCode(formData.country)}</span>
                                        </div>
                                    )}
                                    <input
                                        id="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => {
                                            if (!formData.country) {
                                                showToast('Please select a country first', 'error');
                                                setErrors(prev => ({ ...prev, country: 'Please select a country first' }));
                                                return;
                                            }
                                            handlePhoneChange(e.target.value);
                                        }}
                                        onFocus={() => {
                                            if (!formData.country) {
                                                showToast('Please select a country first', 'error');
                                                setErrors(prev => ({ ...prev, country: 'Please select a country first' }));
                                            }
                                        }}
                                        disabled={!formData.country}
                                        placeholder="Phone number"
                                        className={cn(
                                            "w-full border-0 border-b px-0 py-3 text-white placeholder:text-white placeholder:text-sm outline-none focus:outline-none focus:ring-0 focus:border-b transition-all",
                                            formData.country ? "pl-16" : "",
                                            errors.phone
                                                ? "border-destructive bg-transparent"
                                                : "border-white/30 bg-transparent",
                                            !formData.country && "cursor-not-allowed opacity-50"
                                        )}
                                    />
                                </div>
                            </div>
                            {errors.phone && (
                                <p className="text-xs text-destructive">{errors.phone}</p>
                            )}
                        </div>
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                        <div className="relative">
                            <textarea
                                id="message"
                                required
                                value={formData.message}
                                onChange={(e) => handleChange('message', e.target.value)}
                                placeholder="Type message *"
                                rows={5}
                                className={cn(
                                    "w-full border-0 border-b px-0 py-3 text-white placeholder:text-white placeholder:text-sm focus:outline-none focus:border-b-2 transition-all resize-none",
                                    errors.message
                                        ? "border-destructive bg-transparent focus:border-destructive"
                                        : "border-white/30 bg-transparent focus:border-primary"
                                )}
                            />
                        </div>
                        {errors.message && (
                            <p className="text-xs text-destructive">{errors.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-end">
                        <button
                            type="submit"
                            className="read-more-button group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90 transition-all"
                        >
                            {/* Text container with sliding animation */}
                            <span className="relative inline-block h-[1.5em] overflow-hidden">
                                {/* Current text - moves up on hover */}
                                <span className="read-more-text-current inline-block transition-all duration-700 ease-in-out font-semibold group-hover:-translate-y-full group-hover:opacity-0">
                                    Send Message
                                </span>
                                {/* New text - appears from below on hover */}
                                <span className="read-more-text-new absolute left-0 top-0 inline-block w-full translate-y-full opacity-0 transition-all duration-700 ease-in-out font-semibold group-hover:translate-y-0 group-hover:opacity-100">
                                    Send Message
                                </span>
                            </span>

                            {/* Icon with rotation */}
                            <span className="read-more-icon inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-transform duration-600 group-hover:rotate-45">
                                <Send className="h-4 w-4 rotate-[-45deg]" />
                            </span>
                        </button>
                    </div>
                </div>
                {ToastComponent}
            </form>
        );
    }
);

ContactForm.displayName = "ContactForm";

export { ContactForm };
