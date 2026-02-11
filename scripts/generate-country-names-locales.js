/**
 * Generates shared/countries-availability/country-names-by-locale.json
 * Run from repo root: node scripts/generate-country-names-locales.js
 */
const fs = require("fs");
const path = require("path");

// Slugs from lib/countries-by-continent.ts CONTINENTS (flat list)
const slugs = [
  "algeria", "angola", "benin", "botswana", "burkina-faso", "burundi", "cameroon", "cabo-verde",
  "central-african-republic", "chad", "comoros", "cote-d-ivoire", "democratic-republic-of-the-congo",
  "djibouti", "egypt", "equatorial-guinea", "eritrea", "eswatini", "ethiopia", "gabon", "ghana",
  "guinea", "guinea-bissau", "kenya", "lesotho", "liberia", "libya", "madagascar", "malawi", "mali",
  "mauritania", "mauritius", "mayotte", "morocco", "mozambique", "namibia", "niger", "nigeria",
  "reunion", "rwanda", "saint-helena-ascension-and-tristan-da-cunha", "sao-tome-and-principe",
  "senegal", "seychelles", "sierra-leone", "somalia", "south-africa", "south-sudan", "sudan",
  "tanzania", "togo", "tunisia", "uganda", "western-sahara", "zambia", "zimbabwe",
  "afghanistan", "armenia", "azerbaijan", "bahrain", "bangladesh", "bhutan", "brunei", "cambodia",
  "china", "cyprus", "georgia", "india", "indonesia", "iran", "iraq", "israel", "japan", "jordan",
  "kazakhstan", "kuwait", "kyrgyzstan", "laos", "lebanon", "malaysia", "maldives", "mongolia",
  "myanmar", "nepal", "north-korea", "oman", "pakistan", "philippines", "qatar", "saudi-arabia",
  "singapore", "south-korea", "sri-lanka", "state-of-palestine", "syrian-arab-republic", "taiwan",
  "tajikistan", "thailand", "timor-leste", "turkey", "turkmenistan", "united-arab-emirates",
  "uzbekistan", "vietnam", "yemen", "hong-kong", "macao",
  "albania", "aland-islands", "andorra", "austria", "belarus", "belgium", "bosnia-and-herzegovina",
  "bulgaria", "croatia", "czech-republic", "denmark", "estonia", "faroe-islands", "finland",
  "france", "germany", "gibraltar", "greece", "guernsey", "holy-see", "hungary", "iceland", "ireland",
  "isle-of-man", "italy", "jersey", "latvia", "liechtenstein", "lithuania", "luxembourg", "malta",
  "moldova", "monaco", "montenegro", "netherlands", "north-macedonia", "norway", "poland",
  "portugal", "romania", "russian-federation", "san-marino", "serbia", "slovakia", "slovenia",
  "spain", "svalbard-and-jan-mayen", "sweden", "switzerland", "ukraine", "united-kingdom",
  "vatican-city",
  "anguilla", "antigua-and-barbuda", "aruba", "the-bahamas", "barbados", "belize", "bermuda",
  "british-indian-ocean-territory", "canada", "caribbean-netherlands", "cayman-islands",
  "costa-rica", "cuba", "curacao", "dominica", "dominican-republic", "el-salvador", "greenland",
  "grenada", "guadeloupe", "guatemala", "haiti", "honduras", "jamaica", "martinique", "mexico",
  "montserrat", "nicaragua", "panama", "puerto-rico", "saint-barthelemy", "saint-kitts-and-nevis",
  "saint-lucia", "saint-martin-french-part", "saint-pierre-and-miquelon",
  "saint-vincent-and-the-grenadines", "sint-maarten-dutch-part", "trinidad-and-tobago",
  "turks-and-caicos-islands", "united-states", "virgin-islands-british", "virgin-islands-us",
  "american-samoa", "australia", "cook-islands", "fiji", "french-polynesia", "guam", "kiribati",
  "marshall-islands", "micronesia", "nauru", "new-caledonia", "new-zealand", "niue", "norfolk-island",
  "northern-mariana-islands", "palau", "papua-new-guinea", "pitcairn-islands", "samoa",
  "solomon-islands", "tokelau", "tonga", "tuvalu", "vanuatu", "wallis-and-futuna",
  "argentina", "bolivia", "brazil", "chile", "colombia", "ecuador", "falkland-islands",
  "french-guiana", "guyana", "paraguay", "peru", "suriname", "uruguay", "venezuela",
];

// English names (from slugToCountryName logic - toTitle + special)
const specialEn = {
  "united-states": "United States", "united-kingdom": "United Kingdom", "united-arab-emirates": "United Arab Emirates",
  "cote-d-ivoire": "Ivory Coast", "democratic-republic-of-the-congo": "Democratic Republic of the Congo",
  "republic-of-the-congo": "Republic of the Congo", "central-african-republic": "Central African Republic",
  "dominican-republic": "Dominican Republic", "syrian-arab-republic": "Syrian Arab Republic",
  "russian-federation": "Russian Federation", "south-korea": "South Korea", "north-korea": "North Korea",
  "the-bahamas": "Bahamas", "the-gambia": "Gambia", "virgin-islands-british": "British Virgin Islands",
  "virgin-islands-us": "U.S. Virgin Islands", "saint-helena-ascension-and-tristan-da-cunha": "Saint Helena, Ascension and Tristan da Cunha",
  "saint-barthelemy": "Saint Barthélemy", "saint-kitts-and-nevis": "Saint Kitts and Nevis", "saint-lucia": "Saint Lucia",
  "saint-martin-french-part": "Saint Martin (French part)", "saint-pierre-and-miquelon": "Saint Pierre and Miquelon",
  "saint-vincent-and-the-grenadines": "Saint Vincent and the Grenadines", "sint-maarten-dutch-part": "Sint Maarten (Dutch part)",
  "south-georgia-and-the-south-sandwich-islands": "South Georgia and the South Sandwich Islands",
  "heard-island-and-mcdonald-islands": "Heard Island and McDonald Islands",
  "french-southern-and-antarctic-lands": "French Southern and Antarctic Lands", "caribbean-netherlands": "Caribbean Netherlands",
  "cabo-verde": "Cape Verde", "timor-leste": "Timor-Leste", "papua-new-guinea": "Papua New Guinea",
  "solomon-islands": "Solomon Islands", "cayman-islands": "Cayman Islands", "cook-islands": "Cook Islands",
  "turks-and-caicos-islands": "Turks and Caicos Islands", "pitcairn-islands": "Pitcairn Islands",
  "northern-mariana-islands": "Northern Mariana Islands", "marshall-islands": "Marshall Islands",
  "faroe-islands": "Faroe Islands", "aland-islands": "Åland Islands", "cocos-keeling-islands": "Cocos (Keeling) Islands",
  "christmas-island": "Christmas Island", "norfolk-island": "Norfolk Island",
  "british-indian-ocean-territory": "British Indian Ocean Territory", "bouvet-island": "Bouvet Island",
  "isle-of-man": "Isle of Man", "holy-see": "Vatican City", "state-of-palestine": "State of Palestine",
  "north-macedonia": "North Macedonia", "antigua-and-barbuda": "Antigua and Barbuda",
  "bosnia-and-herzegovina": "Bosnia and Herzegovina", "trinidad-and-tobago": "Trinidad and Tobago",
  "guinea-bissau": "Guinea-Bissau", "equatorial-guinea": "Equatorial Guinea", "new-caledonia": "New Caledonia",
  "french-polynesia": "French Polynesia", "wallis-and-futuna": "Wallis and Futuna", "el-salvador": "El Salvador",
  "costa-rica": "Costa Rica", "hong-kong": "Hong Kong", "sao-tome-and-principe": "São Tomé and Príncipe",
};
function toTitle(slug) {
  if (specialEn[slug]) return specialEn[slug];
  return slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}

// Translations: slug -> { fr, de, es, it, pt, zh }. Omit if same as English.
const translations = {
  algeria: { fr: "Algérie", de: "Algerien", es: "Argelia", it: "Algeria", pt: "Argélia", zh: "阿尔及利亚" },
  angola: { fr: "Angola", de: "Angola", es: "Angola", it: "Angola", pt: "Angola", zh: "安哥拉" },
  "united-states": { fr: "États-Unis", de: "Vereinigte Staaten", es: "Estados Unidos", it: "Stati Uniti", pt: "Estados Unidos", zh: "美国" },
  "united-kingdom": { fr: "Royaume-Uni", de: "Vereinigtes Königreich", es: "Reino Unido", it: "Regno Unito", pt: "Reino Unido", zh: "英国" },
  france: { fr: "France", de: "Frankreich", es: "Francia", it: "Francia", pt: "França", zh: "法国" },
  germany: { fr: "Allemagne", de: "Deutschland", es: "Alemania", it: "Germania", pt: "Alemanha", zh: "德国" },
  spain: { fr: "Espagne", de: "Spanien", es: "España", it: "Spagna", pt: "Espanha", zh: "西班牙" },
  italy: { fr: "Italie", de: "Italien", es: "Italia", it: "Italia", pt: "Itália", zh: "意大利" },
  china: { fr: "Chine", de: "China", es: "China", it: "Cina", pt: "China", zh: "中国" },
  japan: { fr: "Japon", de: "Japan", es: "Japón", it: "Giappone", pt: "Japão", zh: "日本" },
  india: { fr: "Inde", de: "Indien", es: "India", it: "India", pt: "Índia", zh: "印度" },
  brazil: { fr: "Brésil", de: "Brasilien", es: "Brasil", it: "Brasile", pt: "Brasil", zh: "巴西" },
  canada: { fr: "Canada", de: "Kanada", es: "Canadá", it: "Canada", pt: "Canadá", zh: "加拿大" },
  australia: { fr: "Australie", de: "Australien", es: "Australia", it: "Australia", pt: "Austrália", zh: "澳大利亚" },
  mexico: { fr: "Mexique", de: "Mexiko", es: "México", it: "Messico", pt: "México", zh: "墨西哥" },
  "south-korea": { fr: "Corée du Sud", de: "Südkorea", es: "Corea del Sur", it: "Corea del Sud", pt: "Coreia do Sul", zh: "韩国" },
  "north-korea": { fr: "Corée du Nord", de: "Nordkorea", es: "Corea del Norte", it: "Corea del Nord", pt: "Coreia do Norte", zh: "朝鲜" },
  "russian-federation": { fr: "Russie", de: "Russland", es: "Rusia", it: "Russia", pt: "Rússia", zh: "俄罗斯" },
  "united-arab-emirates": { fr: "Émirats arabes unis", de: "Vereinigte Arabische Emirate", es: "Emiratos Árabes Unidos", it: "Emirati Arabi Uniti", pt: "Emirados Árabes Unidos", zh: "阿联酋" },
  "saudi-arabia": { fr: "Arabie saoudite", de: "Saudi-Arabien", es: "Arabia Saudita", it: "Arabia Saudita", pt: "Arábia Saudita", zh: "沙特阿拉伯" },
  "south-africa": { fr: "Afrique du Sud", de: "Südafrika", es: "Sudáfrica", it: "Sudafrica", pt: "África do Sul", zh: "南非" },
  netherlands: { fr: "Pays-Bas", de: "Niederlande", es: "Países Bajos", it: "Paesi Bassi", pt: "Países Baixos", zh: "荷兰" },
  belgium: { fr: "Belgique", de: "Belgien", es: "Bélgica", it: "Belgio", pt: "Bélgica", zh: "比利时" },
  switzerland: { fr: "Suisse", de: "Schweiz", es: "Suiza", it: "Svizzera", pt: "Suíça", zh: "瑞士" },
  austria: { fr: "Autriche", de: "Österreich", es: "Austria", it: "Austria", pt: "Áustria", zh: "奥地利" },
  sweden: { fr: "Suède", de: "Schweden", es: "Suecia", it: "Svezia", pt: "Suécia", zh: "瑞典" },
  norway: { fr: "Norvège", de: "Norwegen", es: "Noruega", it: "Norvegia", pt: "Noruega", zh: "挪威" },
  denmark: { fr: "Danemark", de: "Dänemark", es: "Dinamarca", it: "Danimarca", pt: "Dinamarca", zh: "丹麦" },
  poland: { fr: "Pologne", de: "Polen", es: "Polonia", it: "Polonia", pt: "Polónia", zh: "波兰" },
  portugal: { fr: "Portugal", de: "Portugal", es: "Portugal", it: "Portogallo", pt: "Portugal", zh: "葡萄牙" },
  greece: { fr: "Grèce", de: "Griechenland", es: "Grecia", it: "Grecia", pt: "Grécia", zh: "希腊" },
  turkey: { fr: "Turquie", de: "Türkei", es: "Turquía", it: "Turchia", pt: "Turquia", zh: "土耳其" },
  indonesia: { fr: "Indonésie", de: "Indonesien", es: "Indonesia", it: "Indonesia", pt: "Indonésia", zh: "印度尼西亚" },
  malaysia: { fr: "Malaisie", de: "Malaysia", es: "Malasia", it: "Malesia", pt: "Malásia", zh: "马来西亚" },
  philippines: { fr: "Philippines", de: "Philippinen", es: "Filipinas", it: "Filippine", pt: "Filipinas", zh: "菲律宾" },
  vietnam: { fr: "Viêt Nam", de: "Vietnam", es: "Vietnam", it: "Vietnam", pt: "Vietnã", zh: "越南" },
  thailand: { fr: "Thaïlande", de: "Thailand", es: "Tailandia", it: "Thailandia", pt: "Tailândia", zh: "泰国" },
  argentina: { fr: "Argentine", de: "Argentinien", es: "Argentina", it: "Argentina", pt: "Argentina", zh: "阿根廷" },
  chile: { fr: "Chili", de: "Chile", es: "Chile", it: "Cile", pt: "Chile", zh: "智利" },
  colombia: { fr: "Colombie", de: "Kolumbien", es: "Colombia", it: "Colombia", pt: "Colômbia", zh: "哥伦比亚" },
  egypt: { fr: "Égypte", de: "Ägypten", es: "Egipto", it: "Egitto", pt: "Egito", zh: "埃及" },
  morocco: { fr: "Maroc", de: "Marokko", es: "Marruecos", it: "Marocco", pt: "Marrocos", zh: "摩洛哥" },
  nigeria: { fr: "Nigeria", de: "Nigeria", es: "Nigeria", it: "Nigeria", pt: "Nigéria", zh: "尼日利亚" },
  kenya: { fr: "Kenya", de: "Kenia", es: "Kenia", it: "Kenya", pt: "Quénia", zh: "肯尼亚" },
  "new-zealand": { fr: "Nouvelle-Zélande", de: "Neuseeland", es: "Nueva Zelanda", it: "Nuova Zelanda", pt: "Nova Zelândia", zh: "新西兰" },
  singapore: { fr: "Singapour", de: "Singapur", es: "Singapur", it: "Singapore", pt: "Singapura", zh: "新加坡" },
  "dominican-republic": { fr: "République dominicaine", de: "Dominikanische Republik", es: "República Dominicana", it: "Repubblica Dominicana", pt: "República Dominicana", zh: "多米尼加" },
  "czech-republic": { fr: "République tchèque", de: "Tschechien", es: "República Checa", it: "Repubblica Ceca", pt: "República Checa", zh: "捷克" },
  ireland: { fr: "Irlande", de: "Irland", es: "Irlanda", it: "Irlanda", pt: "Irlanda", zh: "爱尔兰" },
  romania: { fr: "Roumanie", de: "Rumänien", es: "Rumania", it: "Romania", pt: "Roménia", zh: "罗马尼亚" },
  hungary: { fr: "Hongrie", de: "Ungarn", es: "Hungría", it: "Ungheria", pt: "Hungria", zh: "匈牙利" },
  ukraine: { fr: "Ukraine", de: "Ukraine", es: "Ucrania", it: "Ucraina", pt: "Ucrânia", zh: "乌克兰" },
  "vatican-city": { fr: "Vatican", de: "Vatikanstadt", es: "Ciudad del Vaticano", it: "Città del Vaticano", pt: "Vaticano", zh: "梵蒂冈" },
  "holy-see": { fr: "Saint-Siège", de: "Heiliger Stuhl", es: "Santa Sede", it: "Santa Sede", pt: "Santa Sé", zh: "梵蒂冈" },
  ecuador: { fr: "Équateur", de: "Ecuador", es: "Ecuador", it: "Ecuador", pt: "Equador", zh: "厄瓜多尔" },
  peru: { fr: "Pérou", de: "Peru", es: "Perú", it: "Perù", pt: "Peru", zh: "秘鲁" },
  bolivia: { fr: "Bolivie", de: "Bolivien", es: "Bolivia", it: "Bolivia", pt: "Bolívia", zh: "玻利维亚" },
  paraguay: { fr: "Paraguay", de: "Paraguay", es: "Paraguay", it: "Paraguay", pt: "Paraguai", zh: "巴拉圭" },
  uruguay: { fr: "Uruguay", de: "Uruguay", es: "Uruguay", it: "Uruguay", pt: "Uruguai", zh: "乌拉圭" },
  tunisia: { fr: "Tunisie", de: "Tunesien", es: "Túnez", it: "Tunisia", pt: "Tunísia", zh: "突尼斯" },
  ethiopia: { fr: "Éthiopie", de: "Äthiopien", es: "Etiopía", it: "Etiopia", pt: "Etiópia", zh: "埃塞俄比亚" },
  pakistan: { fr: "Pakistan", de: "Pakistan", es: "Pakistán", it: "Pakistan", pt: "Paquistão", zh: "巴基斯坦" },
  bangladesh: { fr: "Bangladesh", de: "Bangladesch", es: "Bangladesh", it: "Bangladesh", pt: "Bangladesh", zh: "孟加拉国" },
  "cote-d-ivoire": { fr: "Côte d'Ivoire", de: "Elfenbeinküste", es: "Costa de Marfil", it: "Costa d'Avorio", pt: "Costa do Marfim", zh: "科特迪瓦" },
  "central-african-republic": { fr: "République centrafricaine", de: "Zentralafrikanische Republik", es: "República Centroafricana", it: "Repubblica Centrafricana", pt: "República Centro-Africana", zh: "中非" },
  "democratic-republic-of-the-congo": { fr: "République démocratique du Congo", de: "Demokratische Republik Kongo", es: "República Democrática del Congo", it: "Repubblica Democratica del Congo", pt: "República Democrática do Congo", zh: "刚果（金）" },
  "republic-of-the-congo": { fr: "République du Congo", de: "Republik Kongo", es: "República del Congo", it: "Repubblica del Congo", pt: "República do Congo", zh: "刚果（布）" },
  "syrian-arab-republic": { fr: "Syrie", de: "Syrien", es: "Siria", it: "Siria", pt: "Síria", zh: "叙利亚" },
  "state-of-palestine": { fr: "Palestine", de: "Palästina", es: "Palestina", it: "Palestina", pt: "Palestina", zh: "巴勒斯坦" },
  "north-macedonia": { fr: "Macédoine du Nord", de: "Nordmazedonien", es: "Macedonia del Norte", it: "Macedonia del Nord", pt: "Macedónia do Norte", zh: "北马其顿" },
  "bosnia-and-herzegovina": { fr: "Bosnie-Herzégovine", de: "Bosnien und Herzegowina", es: "Bosnia y Herzegovina", it: "Bosnia ed Erzegovina", pt: "Bósnia e Herzegovina", zh: "波黑" },
  "antigua-and-barbuda": { fr: "Antigua-et-Barbuda", de: "Antigua und Barbuda", es: "Antigua y Barbuda", it: "Antigua e Barbuda", pt: "Antígua e Barbuda", zh: "安提瓜和巴布达" },
  "trinidad-and-tobago": { fr: "Trinité-et-Tobago", de: "Trinidad und Tobago", es: "Trinidad y Tobago", it: "Trinidad e Tobago", pt: "Trindade e Tobago", zh: "特立尼达和多巴哥" },
  "guinea-bissau": { fr: "Guinée-Bissau", de: "Guinea-Bissau", es: "Guinea-Bisáu", it: "Guinea-Bissau", pt: "Guiné-Bissau", zh: "几内亚比绍" },
  "equatorial-guinea": { fr: "Guinée équatoriale", de: "Äquatorialguinea", es: "Guinea Ecuatorial", it: "Guinea Equatoriale", pt: "Guiné Equatorial", zh: "赤道几内亚" },
  "el-salvador": { fr: "Salvador", de: "El Salvador", es: "El Salvador", it: "El Salvador", pt: "El Salvador", zh: "萨尔瓦多" },
  "costa-rica": { fr: "Costa Rica", de: "Costa Rica", es: "Costa Rica", it: "Costa Rica", pt: "Costa Rica", zh: "哥斯达黎加" },
  "new-caledonia": { fr: "Nouvelle-Calédonie", de: "Neukaledonien", es: "Nueva Caledonia", it: "Nuova Caledonia", pt: "Nova Caledónia", zh: "新喀里多尼亚" },
  "french-polynesia": { fr: "Polynésie française", de: "Französisch-Polynesien", es: "Polinesia Francesa", it: "Polinesia francese", pt: "Polinésia Francesa", zh: "法属波利尼西亚" },
  "wallis-and-futuna": { fr: "Wallis-et-Futuna", de: "Wallis und Futuna", es: "Wallis y Futuna", it: "Wallis e Futuna", pt: "Wallis e Futuna", zh: "瓦利斯和富图纳" },
  "papua-new-guinea": { fr: "Papouasie-Nouvelle-Guinée", de: "Papua-Neuguinea", es: "Papúa Nueva Guinea", it: "Papua Nuova Guinea", pt: "Papua-Nova Guiné", zh: "巴布亚新几内亚" },
  "solomon-islands": { fr: "Îles Salomon", de: "Salomonen", es: "Islas Salomón", it: "Isole Salomone", pt: "Ilhas Salomão", zh: "所罗门群岛" },
  "timor-leste": { fr: "Timor oriental", de: "Osttimor", es: "Timor Oriental", it: "Timor Est", pt: "Timor-Leste", zh: "东帝汶" },
  "cabo-verde": { fr: "Cap-Vert", de: "Kap Verde", es: "Cabo Verde", it: "Capo Verde", pt: "Cabo Verde", zh: "佛得角" },
  "sao-tome-and-principe": { fr: "Sao Tomé-et-Príncipe", de: "São Tomé und Príncipe", es: "Santo Tomé y Príncipe", it: "São Tomé e Príncipe", pt: "São Tomé e Príncipe", zh: "圣多美和普林西比" },
};

const out = { fr: {}, de: {}, es: {}, it: {}, pt: {}, zh: {} };
slugs.forEach((slug) => {
  const en = specialEn[slug] || toTitle(slug);
  const t = translations[slug];
  ["fr", "de", "es", "it", "pt", "zh"].forEach((loc) => {
    out[loc][slug] = (t && t[loc]) ? t[loc] : en;
  });
});

const outPath = path.join(__dirname, "..", "shared", "countries-availability", "country-names-by-locale.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");
console.log("Wrote", outPath);
