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
    onSubmit?: (data: ContactFormData) => Promise<void> | void;
    className?: string;
    translations?: {
        fields: {
            name: { label: string; placeholder: string };
            email: { label: string; placeholder: string };
            country: { label: string; placeholder: string };
            phone: { label: string; placeholder: string };
            message: { label: string; placeholder: string };
        };
        submitButton: string;
        errors: {
            nameRequired: string;
            emailRequired: string;
            emailInvalid: string;
            countryRequired: string;
            phoneRequired: string;
            phoneInvalid: string;
            messageRequired: string;
            selectCountryFirst: string;
        };
        successMessage: string;
    };
}

export interface ContactFormData {
    name: string;
    email: string;
    country: string;
    phone: string;
    message: string;
}


const ContactForm = React.forwardRef<HTMLFormElement, ContactFormProps>(
    ({ badge = "GET IN TOUCH", heading = "Drop Us a Line.", headingHighlight = "Line.", onSubmit, className, translations }, ref) => {
        const { showToast, ToastComponent } = useToast();
        const [formData, setFormData] = React.useState<ContactFormData>({
            name: '',
            email: '',
            country: '',
            phone: '',
            message: ''
        });
        const [errors, setErrors] = React.useState<Partial<Record<keyof ContactFormData, string>>>({});

        // Default translations fallback
        const t = translations || {
            fields: {
                name: { label: "Full Name", placeholder: "Full Name *" },
                email: { label: "Email Address", placeholder: "Email Address *" },
                country: { label: "Country", placeholder: "Choose an option *" },
                phone: { label: "Phone Number", placeholder: "Phone number" },
                message: { label: "Message", placeholder: "Type message *" }
            },
            submitButton: "Send Message",
            errors: {
                nameRequired: "Name is required",
                emailRequired: "Email is required",
                emailInvalid: "Please enter a valid email address",
                countryRequired: "Please select a country",
                phoneRequired: "Phone number is required",
                phoneInvalid: "Please enter a valid phone number (6-15 digits)",
                messageRequired: "Message is required",
                selectCountryFirst: "Please select a country first"
            },
            successMessage: "Message sent successfully!"
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            // Validate form
            const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

            if (!formData.name.trim()) {
                newErrors.name = t.errors.nameRequired;
            }

            if (!formData.email.trim()) {
                newErrors.email = t.errors.emailRequired;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = t.errors.emailInvalid;
            }

            if (!formData.country) {
                newErrors.country = t.errors.countryRequired;
            }

            if (!formData.phone.trim()) {
                newErrors.phone = t.errors.phoneRequired;
            } else if (!/^\d{6,15}$/.test(formData.phone.replace(/\s/g, ''))) {
                newErrors.phone = t.errors.phoneInvalid;
            }

            if (!formData.message.trim()) {
                newErrors.message = t.errors.messageRequired;
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

            // Submit form
            if (onSubmit) {
                try {
                    await onSubmit(formData);
                    // Show success toast
                    showToast(t.successMessage, 'success');
                    // Reset form
                    setFormData({
                        name: '',
                        email: '',
                        country: '',
                        phone: '',
                        message: ''
                    });
                } catch (error) {
                    // Show error toast
                    const errorMessage = error instanceof Error ? error.message : 'Failed to submit form. Please try again.';
                    showToast(errorMessage, 'error');
                }
            } else {
                // Fallback: just show success if no onSubmit handler
                showToast(t.successMessage, 'success');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    country: '',
                    phone: '',
                    message: ''
                });
            }
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
                                    placeholder={t.fields.name.placeholder}
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
                                    placeholder={t.fields.email.placeholder}
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
                                placeholder={t.fields.country.placeholder}
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
                                                showToast(t.errors.selectCountryFirst, 'error');
                                                setErrors(prev => ({ ...prev, country: t.errors.selectCountryFirst }));
                                                return;
                                            }
                                            handlePhoneChange(e.target.value);
                                        }}
                                        onFocus={() => {
                                            if (!formData.country) {
                                                showToast(t.errors.selectCountryFirst, 'error');
                                                setErrors(prev => ({ ...prev, country: t.errors.selectCountryFirst }));
                                            }
                                        }}
                                        disabled={!formData.country}
                                        placeholder={t.fields.phone.placeholder}
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
                                placeholder={t.fields.message.placeholder}
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
                                    {t.submitButton}
                                </span>
                                {/* New text - appears from below on hover */}
                                <span className="read-more-text-new absolute left-0 top-0 inline-block w-full translate-y-full opacity-0 transition-all duration-700 ease-in-out font-semibold group-hover:translate-y-0 group-hover:opacity-100">
                                    {t.submitButton}
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
