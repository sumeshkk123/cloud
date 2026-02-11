/**
 * Countries grouped by continent for the MLM Software Availability Across Countries page.
 * Slugs match app/[lang]/mlm-software-payment-gateways/[slug] for consistency.
 */

export type CountryEntry = { slug: string; name: string };

export type ContinentEntry = {
  id: string;
  name: string;
  countries: CountryEntry[];
};

function toTitle(slug: string): string {
  const special: Record<string, string> = {
    "united-states": "United States",
    "united-kingdom": "United Kingdom",
    "united-arab-emirates": "United Arab Emirates",
    "cote-d-ivoire": "Ivory Coast",
    "democratic-republic-of-the-congo": "Democratic Republic of the Congo",
    "republic-of-the-congo": "Republic of the Congo",
    "central-african-republic": "Central African Republic",
    "dominican-republic": "Dominican Republic",
    "syrian-arab-republic": "Syrian Arab Republic",
    "russian-federation": "Russian Federation",
    "south-korea": "South Korea",
    "north-korea": "North Korea",
    "the-bahamas": "Bahamas",
    "the-gambia": "Gambia",
    "virgin-islands-british": "British Virgin Islands",
    "virgin-islands-us": "U.S. Virgin Islands",
    "saint-helena-ascension-and-tristan-da-cunha": "Saint Helena, Ascension and Tristan da Cunha",
    "saint-barthelemy": "Saint Barthélemy",
    "saint-kitts-and-nevis": "Saint Kitts and Nevis",
    "saint-lucia": "Saint Lucia",
    "saint-martin-french-part": "Saint Martin (French part)",
    "saint-pierre-and-miquelon": "Saint Pierre and Miquelon",
    "saint-vincent-and-the-grenadines": "Saint Vincent and the Grenadines",
    "sint-maarten-dutch-part": "Sint Maarten (Dutch part)",
    "south-georgia-and-the-south-sandwich-islands": "South Georgia and the South Sandwich Islands",
    "heard-island-and-mcdonald-islands": "Heard Island and McDonald Islands",
    "french-southern-and-antarctic-lands": "French Southern and Antarctic Lands",
    "caribbean-netherlands": "Caribbean Netherlands",
    "cabo-verde": "Cape Verde",
    "timor-leste": "Timor-Leste",
    "papua-new-guinea": "Papua New Guinea",
    "solomon-islands": "Solomon Islands",
    "cayman-islands": "Cayman Islands",
    "cook-islands": "Cook Islands",
    "turks-and-caicos-islands": "Turks and Caicos Islands",
    "pitcairn-islands": "Pitcairn Islands",
    "northern-mariana-islands": "Northern Mariana Islands",
    "marshall-islands": "Marshall Islands",
    "faroe-islands": "Faroe Islands",
    "aland-islands": "Åland Islands",
    "cocos-keeling-islands": "Cocos (Keeling) Islands",
    "christmas-island": "Christmas Island",
    "norfolk-island": "Norfolk Island",
    "british-indian-ocean-territory": "British Indian Ocean Territory",
    "bouvet-island": "Bouvet Island",
    "isle-of-man": "Isle of Man",
    "holy-see": "Vatican City",
    "state-of-palestine": "State of Palestine",
    "north-macedonia": "North Macedonia",
    "antigua-and-barbuda": "Antigua and Barbuda",
    "bosnia-and-herzegovina": "Bosnia and Herzegovina",
    "trinidad-and-tobago": "Trinidad and Tobago",
    "guinea-bissau": "Guinea-Bissau",
    "equatorial-guinea": "Equatorial Guinea",
    "new-caledonia": "New Caledonia",
    "french-polynesia": "French Polynesia",
    "wallis-and-futuna": "Wallis and Futuna",
    "el-salvador": "El Salvador",
    "costa-rica": "Costa Rica",
    "hong-kong": "Hong Kong",
    "sao-tome-and-principe": "São Tomé and Príncipe",
  };
  if (special[slug]) return special[slug];
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function country(slug: string): CountryEntry {
  return { slug, name: toTitle(slug) };
}

function countries(...slugs: string[]): CountryEntry[] {
  return slugs.map(country);
}

/**
 * Continents and their countries. Order and slugs aligned with the availability page and future inner country pages.
 */
export const CONTINENTS: ContinentEntry[] = [
  {
    id: "africa",
    name: "Africa",
    countries: countries(
      "algeria", "angola", "benin", "botswana", "burkina-faso", "burundi", "cameroon", "cabo-verde",
      "central-african-republic", "chad", "comoros", "cote-d-ivoire", "democratic-republic-of-the-congo",
      "djibouti", "egypt", "equatorial-guinea", "eritrea", "eswatini", "ethiopia", "gabon", "ghana",
      "guinea", "guinea-bissau", "kenya", "lesotho", "liberia", "libya", "madagascar", "malawi", "mali",
      "mauritania", "mauritius", "mayotte", "morocco", "mozambique", "namibia", "niger", "nigeria",
      "reunion", "rwanda", "saint-helena-ascension-and-tristan-da-cunha", "sao-tome-and-principe",
      "senegal", "seychelles", "sierra-leone", "somalia", "south-africa", "south-sudan", "sudan",
      "tanzania", "togo", "tunisia", "uganda", "western-sahara", "zambia", "zimbabwe"
    ),
  },
  {
    id: "asia",
    name: "Asia",
    countries: countries(
      "afghanistan", "armenia", "azerbaijan", "bahrain", "bangladesh", "bhutan", "brunei", "cambodia",
      "china", "cyprus", "georgia", "india", "indonesia", "iran", "iraq", "israel", "japan", "jordan",
      "kazakhstan", "kuwait", "kyrgyzstan", "laos", "lebanon", "malaysia", "maldives", "mongolia",
      "myanmar", "nepal", "north-korea", "oman", "pakistan", "philippines", "qatar", "saudi-arabia",
      "singapore", "south-korea", "sri-lanka", "state-of-palestine", "syrian-arab-republic", "taiwan",
      "tajikistan", "thailand", "timor-leste", "turkey", "turkmenistan", "united-arab-emirates",
      "uzbekistan", "vietnam", "yemen", "hong-kong", "macao"
    ),
  },
  {
    id: "europe",
    name: "Europe",
    countries: countries(
      "albania", "aland-islands", "andorra", "austria", "belarus", "belgium", "bosnia-and-herzegovina",
      "bulgaria", "croatia", "cyprus", "czech-republic", "denmark", "estonia", "faroe-islands", "finland",
      "france", "germany", "gibraltar", "greece", "guernsey", "holy-see", "hungary", "iceland", "ireland",
      "isle-of-man", "italy", "jersey", "latvia", "liechtenstein", "lithuania", "luxembourg", "malta",
      "moldova", "monaco", "montenegro", "netherlands", "north-macedonia", "norway", "poland",
      "portugal", "romania", "russian-federation", "san-marino", "serbia", "slovakia", "slovenia",
      "spain", "svalbard-and-jan-mayen", "sweden", "switzerland", "ukraine", "united-kingdom",
      "vatican-city"
    ),
  },
  {
    id: "north-america",
    name: "North America",
    countries: countries(
      "anguilla", "antigua-and-barbuda", "aruba", "the-bahamas", "barbados", "belize", "bermuda",
      "british-indian-ocean-territory", "canada", "caribbean-netherlands", "cayman-islands",
      "costa-rica", "cuba", "curacao", "dominica", "dominican-republic", "el-salvador", "greenland",
      "grenada", "guadeloupe", "guatemala", "haiti", "honduras", "jamaica", "martinique", "mexico",
      "montserrat", "nicaragua", "panama", "puerto-rico", "saint-barthelemy", "saint-kitts-and-nevis",
      "saint-lucia", "saint-martin-french-part", "saint-pierre-and-miquelon",
      "saint-vincent-and-the-grenadines", "sint-maarten-dutch-part",
      "trinidad-and-tobago", "turks-and-caicos-islands", "united-states", "virgin-islands-british",
      "virgin-islands-us"
    ),
  },
  {
    id: "oceania",
    name: "Oceania",
    countries: countries(
      "american-samoa", "australia", "cook-islands", "fiji", "french-polynesia", "guam", "kiribati",
      "marshall-islands", "micronesia", "nauru", "new-caledonia", "new-zealand", "niue", "norfolk-island",
      "northern-mariana-islands", "palau", "papua-new-guinea", "pitcairn-islands", "samoa",
      "solomon-islands", "tokelau", "tonga", "tuvalu", "vanuatu", "wallis-and-futuna"
    ),
  },
  {
    id: "south-america",
    name: "South America",
    countries: countries(
      "argentina", "bolivia", "brazil", "chile", "colombia", "ecuador", "falkland-islands",
      "french-guiana", "guyana", "paraguay", "peru", "suriname", "uruguay", "venezuela"
    ),
  },
];

/** Convert slug to display name (e.g. united-states → United States). */
export function slugToCountryName(slug: string): string {
  for (const c of CONTINENTS) {
    const found = c.countries.find((x) => x.slug === slug);
    if (found) return found.name;
  }
  return toTitle(slug);
}

/** All country slugs in one flat array. */
export function getAllCountrySlugs(): string[] {
  return CONTINENTS.flatMap((c) => c.countries.map((x) => x.slug));
}
