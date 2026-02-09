'use client';

import * as React from "react";
import { cn } from "@/lib/utils";

export interface Country {
  name: string;
  code: string;
  flag: string;
}

export const COUNTRY_CODES: Record<string, Country> = {
  "United States": { name: "United States", code: "+1", flag: "🇺🇸" },
  "United Kingdom": { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  "Canada": { name: "Canada", code: "+1", flag: "🇨🇦" },
  "Australia": { name: "Australia", code: "+61", flag: "🇦🇺" },
  "Germany": { name: "Germany", code: "+49", flag: "🇩🇪" },
  "France": { name: "France", code: "+33", flag: "🇫🇷" },
  "Italy": { name: "Italy", code: "+39", flag: "🇮🇹" },
  "Spain": { name: "Spain", code: "+34", flag: "🇪🇸" },
  "Netherlands": { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  "Belgium": { name: "Belgium", code: "+32", flag: "🇧🇪" },
  "Switzerland": { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  "Austria": { name: "Austria", code: "+43", flag: "🇦🇹" },
  "Sweden": { name: "Sweden", code: "+46", flag: "🇸🇪" },
  "Norway": { name: "Norway", code: "+47", flag: "🇳🇴" },
  "Denmark": { name: "Denmark", code: "+45", flag: "🇩🇰" },
  "Finland": { name: "Finland", code: "+358", flag: "🇫🇮" },
  "Poland": { name: "Poland", code: "+48", flag: "🇵🇱" },
  "Portugal": { name: "Portugal", code: "+351", flag: "🇵🇹" },
  "Greece": { name: "Greece", code: "+30", flag: "🇬🇷" },
  "Ireland": { name: "Ireland", code: "+353", flag: "🇮🇪" },
  "India": { name: "India", code: "+91", flag: "🇮🇳" },
  "China": { name: "China", code: "+86", flag: "🇨🇳" },
  "Japan": { name: "Japan", code: "+81", flag: "🇯🇵" },
  "South Korea": { name: "South Korea", code: "+82", flag: "🇰🇷" },
  "Singapore": { name: "Singapore", code: "+65", flag: "🇸🇬" },
  "Malaysia": { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  "Thailand": { name: "Thailand", code: "+66", flag: "🇹🇭" },
  "Indonesia": { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  "Philippines": { name: "Philippines", code: "+63", flag: "🇵🇭" },
  "Vietnam": { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  "Taiwan": { name: "Taiwan", code: "+886", flag: "🇹🇼" },
  "Hong Kong": { name: "Hong Kong", code: "+852", flag: "🇭🇰" },
  "New Zealand": { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  "Brazil": { name: "Brazil", code: "+55", flag: "🇧🇷" },
  "Mexico": { name: "Mexico", code: "+52", flag: "🇲🇽" },
  "Argentina": { name: "Argentina", code: "+54", flag: "🇦🇷" },
  "Chile": { name: "Chile", code: "+56", flag: "🇨🇱" },
  "Colombia": { name: "Colombia", code: "+57", flag: "🇨🇴" },
  "Peru": { name: "Peru", code: "+51", flag: "🇵🇪" },
  "Venezuela": { name: "Venezuela", code: "+58", flag: "🇻🇪" },
  "South Africa": { name: "South Africa", code: "+27", flag: "🇿🇦" },
  "Egypt": { name: "Egypt", code: "+20", flag: "🇪🇬" },
  "Nigeria": { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  "Kenya": { name: "Kenya", code: "+254", flag: "🇰🇪" },
  "United Arab Emirates": { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  "Saudi Arabia": { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  "Israel": { name: "Israel", code: "+972", flag: "🇮🇱" },
  "Turkey": { name: "Turkey", code: "+90", flag: "🇹🇷" },
  "Russia": { name: "Russia", code: "+7", flag: "🇷🇺" },
  "Ukraine": { name: "Ukraine", code: "+380", flag: "🇺🇦" },
  "Czech Republic": { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
  "Hungary": { name: "Hungary", code: "+36", flag: "🇭🇺" },
  "Romania": { name: "Romania", code: "+40", flag: "🇷🇴" },
  "Bulgaria": { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
  "Croatia": { name: "Croatia", code: "+385", flag: "🇭🇷" },
  "Serbia": { name: "Serbia", code: "+381", flag: "🇷🇸" },
  "Slovakia": { name: "Slovakia", code: "+421", flag: "🇸🇰" },
  "Slovenia": { name: "Slovenia", code: "+386", flag: "🇸🇮" },
  "Estonia": { name: "Estonia", code: "+372", flag: "🇪🇪" },
  "Latvia": { name: "Latvia", code: "+371", flag: "🇱🇻" },
  "Lithuania": { name: "Lithuania", code: "+370", flag: "🇱🇹" },
  "Luxembourg": { name: "Luxembourg", code: "+352", flag: "🇱🇺" },
  "Iceland": { name: "Iceland", code: "+354", flag: "🇮🇸" },
  "Malta": { name: "Malta", code: "+356", flag: "🇲🇹" },
  "Cyprus": { name: "Cyprus", code: "+357", flag: "🇨🇾" },
  "Bangladesh": { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  "Pakistan": { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  "Sri Lanka": { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  "Nepal": { name: "Nepal", code: "+977", flag: "🇳🇵" },
  "Myanmar": { name: "Myanmar", code: "+95", flag: "🇲🇲" },
  "Cambodia": { name: "Cambodia", code: "+855", flag: "🇰🇭" },
  "Laos": { name: "Laos", code: "+856", flag: "🇱🇦" },
  "Mongolia": { name: "Mongolia", code: "+976", flag: "🇲🇳" },
  "Kazakhstan": { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
  "Uzbekistan": { name: "Uzbekistan", code: "+998", flag: "🇺🇿" },
  "Afghanistan": { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  "Iraq": { name: "Iraq", code: "+964", flag: "🇮🇶" },
  "Iran": { name: "Iran", code: "+98", flag: "🇮🇷" },
  "Jordan": { name: "Jordan", code: "+962", flag: "🇯🇴" },
  "Lebanon": { name: "Lebanon", code: "+961", flag: "🇱🇧" },
  "Qatar": { name: "Qatar", code: "+974", flag: "🇶🇦" },
  "Kuwait": { name: "Kuwait", code: "+965", flag: "🇰🇼" },
  "Oman": { name: "Oman", code: "+968", flag: "🇴🇲" },
  "Bahrain": { name: "Bahrain", code: "+973", flag: "🇧🇭" },
  "Yemen": { name: "Yemen", code: "+967", flag: "🇾🇪" },
  "Morocco": { name: "Morocco", code: "+212", flag: "🇲🇦" },
  "Algeria": { name: "Algeria", code: "+213", flag: "🇩🇿" },
  "Tunisia": { name: "Tunisia", code: "+216", flag: "🇹🇳" },
  "Libya": { name: "Libya", code: "+218", flag: "🇱🇾" },
  "Sudan": { name: "Sudan", code: "+249", flag: "🇸🇩" },
  "Ethiopia": { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
  "Tanzania": { name: "Tanzania", code: "+255", flag: "🇹🇿" },
  "Uganda": { name: "Uganda", code: "+256", flag: "🇺🇬" },
  "Ghana": { name: "Ghana", code: "+233", flag: "🇬🇭" },
  "Ivory Coast": { name: "Ivory Coast", code: "+225", flag: "🇨🇮" },
  "Senegal": { name: "Senegal", code: "+221", flag: "🇸🇳" },
  "Cameroon": { name: "Cameroon", code: "+237", flag: "🇨🇲" },
  "Angola": { name: "Angola", code: "+244", flag: "🇦🇴" },
  "Mozambique": { name: "Mozambique", code: "+258", flag: "🇲🇿" },
  "Madagascar": { name: "Madagascar", code: "+261", flag: "🇲🇬" },
  "Zimbabwe": { name: "Zimbabwe", code: "+263", flag: "🇿🇼" },
  "Zambia": { name: "Zambia", code: "+260", flag: "🇿🇲" },
  "Botswana": { name: "Botswana", code: "+267", flag: "🇧🇼" },
  "Namibia": { name: "Namibia", code: "+264", flag: "🇳🇦" },
  "Mauritius": { name: "Mauritius", code: "+230", flag: "🇲🇺" },
  "Seychelles": { name: "Seychelles", code: "+248", flag: "🇸🇨" },
  "Ecuador": { name: "Ecuador", code: "+593", flag: "🇪🇨" },
  "Uruguay": { name: "Uruguay", code: "+598", flag: "🇺🇾" },
  "Paraguay": { name: "Paraguay", code: "+595", flag: "🇵🇾" },
  "Bolivia": { name: "Bolivia", code: "+591", flag: "🇧🇴" },
  "Guatemala": { name: "Guatemala", code: "+502", flag: "🇬🇹" },
  "Costa Rica": { name: "Costa Rica", code: "+506", flag: "🇨🇷" },
  "Panama": { name: "Panama", code: "+507", flag: "🇵🇦" },
  "Dominican Republic": { name: "Dominican Republic", code: "+1", flag: "🇩🇴" },
  "Cuba": { name: "Cuba", code: "+53", flag: "🇨🇺" },
  "Jamaica": { name: "Jamaica", code: "+1", flag: "🇯🇲" },
  "Trinidad and Tobago": { name: "Trinidad and Tobago", code: "+1", flag: "🇹🇹" },
  "Barbados": { name: "Barbados", code: "+1", flag: "🇧🇧" },
  "Bahamas": { name: "Bahamas", code: "+1", flag: "🇧🇸" },
  "Belize": { name: "Belize", code: "+501", flag: "🇧🇿" },
  "Honduras": { name: "Honduras", code: "+504", flag: "🇭🇳" },
  "El Salvador": { name: "El Salvador", code: "+503", flag: "🇸🇻" },
  "Nicaragua": { name: "Nicaragua", code: "+505", flag: "🇳🇮" },
  "Haiti": { name: "Haiti", code: "+509", flag: "🇭🇹" },
};

/** ISO 3166-1 alpha-2 (2-letter) codes for flag image URLs (e.g. flagcdn.com) */
export const COUNTRY_ISO: Record<string, string> = {
  "United States": "us", "United Kingdom": "gb", "Canada": "ca", "Australia": "au", "Germany": "de", "France": "fr", "Italy": "it", "Spain": "es", "Netherlands": "nl", "Belgium": "be", "Switzerland": "ch", "Austria": "at", "Sweden": "se", "Norway": "no", "Denmark": "dk", "Finland": "fi", "Poland": "pl", "Portugal": "pt", "Greece": "gr", "Ireland": "ie", "India": "in", "China": "cn", "Japan": "jp", "South Korea": "kr", "Singapore": "sg", "Malaysia": "my", "Thailand": "th", "Indonesia": "id", "Philippines": "ph", "Vietnam": "vn", "Taiwan": "tw", "Hong Kong": "hk", "New Zealand": "nz", "Brazil": "br", "Mexico": "mx", "Argentina": "ar", "Chile": "cl", "Colombia": "co", "Peru": "pe", "Venezuela": "ve", "South Africa": "za", "Egypt": "eg", "Nigeria": "ng", "Kenya": "ke", "United Arab Emirates": "ae", "Saudi Arabia": "sa", "Israel": "il", "Turkey": "tr", "Russia": "ru", "Ukraine": "ua", "Czech Republic": "cz", "Hungary": "hu", "Romania": "ro", "Bulgaria": "bg", "Croatia": "hr", "Serbia": "rs", "Slovakia": "sk", "Slovenia": "si", "Estonia": "ee", "Latvia": "lv", "Lithuania": "lt", "Luxembourg": "lu", "Iceland": "is", "Malta": "mt", "Cyprus": "cy", "Bangladesh": "bd", "Pakistan": "pk", "Sri Lanka": "lk", "Nepal": "np", "Myanmar": "mm", "Cambodia": "kh", "Laos": "la", "Mongolia": "mn", "Kazakhstan": "kz", "Uzbekistan": "uz", "Afghanistan": "af", "Iraq": "iq", "Iran": "ir", "Jordan": "jo", "Lebanon": "lb", "Qatar": "qa", "Kuwait": "kw", "Oman": "om", "Bahrain": "bh", "Yemen": "ye", "Morocco": "ma", "Algeria": "dz", "Tunisia": "tn", "Libya": "ly", "Sudan": "sd", "Ethiopia": "et", "Tanzania": "tz", "Uganda": "ug", "Ghana": "gh", "Ivory Coast": "ci", "Senegal": "sn", "Cameroon": "cm", "Angola": "ao", "Mozambique": "mz", "Madagascar": "mg", "Zimbabwe": "zw", "Zambia": "zm", "Botswana": "bw", "Namibia": "na", "Mauritius": "mu", "Seychelles": "sc", "Ecuador": "ec", "Uruguay": "uy", "Paraguay": "py", "Bolivia": "bo", "Guatemala": "gt", "Costa Rica": "cr", "Panama": "pa", "Dominican Republic": "do", "Cuba": "cu", "Jamaica": "jm", "Trinidad and Tobago": "tt", "Barbados": "bb", "Bahamas": "bs", "Belize": "bz", "Honduras": "hn", "El Salvador": "sv", "Nicaragua": "ni", "Haiti": "ht",
};

export function getCountryCode(countryName: string): string {
  return COUNTRY_CODES[countryName]?.code || "";
}

/** Get ISO 2-letter code for flag image URL (e.g. flagcdn.com/w40/lt.png). Returns null if not found. */
export function getCountryIsoCode(countryName: string): string | null {
  if (!countryName) return null;
  const exact = COUNTRY_ISO[countryName];
  if (exact) return exact;
  const lower = countryName.toLowerCase();
  const key = Object.keys(COUNTRY_ISO).find((k) => k.toLowerCase() === lower || lower.includes(k.toLowerCase()) || k.toLowerCase().includes(lower));
  return key ? COUNTRY_ISO[key] : null;
}

// Helper to get flag emoji from country name (case-insensitive, partial match)
export function getCountryFlag(countryName: string): string | null {
  if (!countryName) return null;
  const normalizedName = countryName.toLowerCase();
  for (const key in COUNTRY_CODES) {
    if (key.toLowerCase() === normalizedName || normalizedName.includes(key.toLowerCase())) {
      return COUNTRY_CODES[key].flag;
    }
  }
  return null;
}

export interface CountrySelectProps {
  id?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
  placeholder?: string;
  className?: string;
}

export function CountrySelect({
  id,
  required,
  value,
  onChange,
  error,
  placeholder = "Choose country",
  className,
}: CountrySelectProps) {
  const countries = Object.keys(COUNTRY_CODES).sort();

  return (
    <div className="relative">
      <select
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full appearance-none border-0 border-b bg-transparent px-0 py-3 text-white outline-none transition-all focus:border-b focus:ring-0",
          error
            ? "border-destructive"
            : "border-white/30",
          className
        )}
      >
        <option value="" disabled className="bg-slate-800 text-white">
          {placeholder}
        </option>
        {countries.map((country) => (
          <option key={country} value={country} className="bg-slate-800 text-white">
            {COUNTRY_CODES[country].flag} {country}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2">
        <svg
          className="h-4 w-4 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
