/**
 * Map country slug (from countries-by-continent) to ISO 3166-1 alpha-2 code for flag images.
 * Used by CountryFlag for flagcdn.com URLs.
 */
export const SLUG_TO_ISO: Record<string, string> = {
  // Africa
  algeria: "DZ", angola: "AO", benin: "BJ", botswana: "BW", "burkina-faso": "BF", burundi: "BI",
  cameroon: "CM", "cabo-verde": "CV", "central-african-republic": "CF", chad: "TD", comoros: "KM",
  "cote-d-ivoire": "CI", "democratic-republic-of-the-congo": "CD", djibouti: "DJ", egypt: "EG",
  "equatorial-guinea": "GQ", eritrea: "ER", eswatini: "SZ", ethiopia: "ET", gabon: "GA", ghana: "GH",
  guinea: "GN", "guinea-bissau": "GW", kenya: "KE", lesotho: "LS", liberia: "LR", libya: "LY",
  madagascar: "MG", malawi: "MW", mali: "ML", mauritania: "MR", mauritius: "MU", mayotte: "YT",
  morocco: "MA", mozambique: "MZ", namibia: "NA", niger: "NE", nigeria: "NG", reunion: "RE",
  rwanda: "RW", "saint-helena-ascension-and-tristan-da-cunha": "SH", "sao-tome-and-principe": "ST",
  senegal: "SN", seychelles: "SC", "sierra-leone": "SL", somalia: "SO", "south-africa": "ZA",
  "south-sudan": "SS", sudan: "SD", tanzania: "TZ", togo: "TG", tunisia: "TN", uganda: "UG",
  "western-sahara": "EH", zambia: "ZM", zimbabwe: "ZW",
  // Asia
  afghanistan: "AF", armenia: "AM", azerbaijan: "AZ", bahrain: "BH", bangladesh: "BD", bhutan: "BT",
  brunei: "BN", cambodia: "KH", china: "CN", cyprus: "CY", georgia: "GE", india: "IN", indonesia: "ID",
  iran: "IR", iraq: "IQ", israel: "IL", japan: "JP", jordan: "JO", kazakhstan: "KZ", kuwait: "KW",
  kyrgyzstan: "KG", laos: "LA", lebanon: "LB", malaysia: "MY", maldives: "MV", mongolia: "MN",
  myanmar: "MM", nepal: "NP", "north-korea": "KP", oman: "OM", pakistan: "PK", philippines: "PH",
  qatar: "QA", "saudi-arabia": "SA", singapore: "SG", "south-korea": "KR", "sri-lanka": "LK",
  "state-of-palestine": "PS", "syrian-arab-republic": "SY", taiwan: "TW", tajikistan: "TJ",
  thailand: "TH", "timor-leste": "TL", turkey: "TR", turkmenistan: "TM", "united-arab-emirates": "AE",
  uzbekistan: "UZ", vietnam: "VN", yemen: "YE", "hong-kong": "HK", macao: "MO",
  // Europe
  albania: "AL", "aland-islands": "AX", andorra: "AD", austria: "AT", belarus: "BY", belgium: "BE",
  "bosnia-and-herzegovina": "BA", bulgaria: "BG", croatia: "HR", "czech-republic": "CZ", denmark: "DK",
  estonia: "EE", "faroe-islands": "FO", finland: "FI", france: "FR", germany: "DE", gibraltar: "GI",
  greece: "GR", guernsey: "GG", "holy-see": "VA", hungary: "HU", iceland: "IS", ireland: "IE",
  "isle-of-man": "IM", italy: "IT", jersey: "JE", latvia: "LV", liechtenstein: "LI", lithuania: "LT",
  luxembourg: "LU", malta: "MT", moldova: "MD", monaco: "MC", montenegro: "ME", netherlands: "NL",
  "north-macedonia": "MK", norway: "NO", poland: "PL", portugal: "PT", romania: "RO",
  "russian-federation": "RU", "san-marino": "SM", serbia: "RS", slovakia: "SK", slovenia: "SI",
  spain: "ES", "svalbard-and-jan-mayen": "SJ", sweden: "SE", switzerland: "CH", ukraine: "UA",
  "united-kingdom": "GB", "vatican-city": "VA",
  // North America
  anguilla: "AI", "antigua-and-barbuda": "AG", aruba: "AW", "the-bahamas": "BS", barbados: "BB",
  belize: "BZ", bermuda: "BM", "british-indian-ocean-territory": "IO", canada: "CA",
  "caribbean-netherlands": "BQ", "cayman-islands": "KY", "costa-rica": "CR", cuba: "CU", curacao: "CW",
  dominica: "DM", "dominican-republic": "DO", "el-salvador": "SV", greenland: "GL", grenada: "GD",
  guadeloupe: "GP", guatemala: "GT", haiti: "HT", honduras: "HN", jamaica: "JM", martinique: "MQ",
  mexico: "MX", montserrat: "MS", nicaragua: "NI", panama: "PA", "puerto-rico": "PR",
  "saint-barthelemy": "BL", "saint-kitts-and-nevis": "KN", "saint-lucia": "LC",
  "saint-martin-french-part": "MF", "saint-pierre-and-miquelon": "PM",
  "saint-vincent-and-the-grenadines": "VC", "sint-maarten-dutch-part": "SX",
  "trinidad-and-tobago": "TT", "turks-and-caicos-islands": "TC", "united-states": "US",
  "virgin-islands-british": "VG", "virgin-islands-us": "VI",
  // Oceania
  "american-samoa": "AS", australia: "AU", "cook-islands": "CK", fiji: "FJ", "french-polynesia": "PF",
  guam: "GU", kiribati: "KI", "marshall-islands": "MH", micronesia: "FM", nauru: "NR",
  "new-caledonia": "NC", "new-zealand": "NZ", niue: "NU", "norfolk-island": "NF",
  "northern-mariana-islands": "MP", palau: "PW", "papua-new-guinea": "PG", "pitcairn-islands": "PN",
  samoa: "WS", "solomon-islands": "SB", tokelau: "TK", tonga: "TO", tuvalu: "TV", vanuatu: "VU",
  "wallis-and-futuna": "WF",
  // South America
  argentina: "AR", bolivia: "BO", brazil: "BR", chile: "CL", colombia: "CO", ecuador: "EC",
  "falkland-islands": "FK", "french-guiana": "GF", guyana: "GY", paraguay: "PY", peru: "PE",
  suriname: "SR", uruguay: "UY", venezuela: "VE",
};

export function getCountryIsoFromSlug(slug: string): string | null {
  return SLUG_TO_ISO[slug.toLowerCase()] ?? null;
}
