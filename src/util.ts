import { Apartment } from "./interfaces/Apartment";

export const imageUrls = [
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export interface Service {
  id: number;
  title: string;
  description: string[];
  location: string;
  imageUrl: string;
}
// export const services: Service[] = [
//   {
//     id: 1,
//     title: "Relocation and Residency",
//     description: [
//       "Are you thinking about moving to a different country? Portugal will be the right place to fulfil your dreams and needs.",
//       "We can tailor a package of services perfectly suited to your exact needs, including residency permits, tax advice, home search, opening bank account, health insurance, driving license, and others.",
//     ],
//     location: "relocation",
//     imageUrl: "/images/relocation.png",
//   },
//   {
//     id: 2,
//     title: "Tax Planning and advice",
//     description: [
//       "Understanding your tax obligations and its impact on your personal life and business is essential when you decide to relocate or invest in a new country.    ",
//     ],
//     location: "tax",
//     imageUrl: "/images/tax.png",
//   },
//   {
//     id: 3,
//     title: "Business Solutions",
//     description: [
//       "You can count on E-golden to provide you with full company services in Portugal, including registration, domiciliation, bank account opening, accounting, tax planning, etc",
//     ],
//     location: "business",
//     imageUrl: "/images/business.png",
//   },
//   {
//     id: 4,
//     title: "Real Estate Investments and Management",
//     description: [
//       "With E-golden you can have an integrated real estate solution from the planning stage down to the day-to-day management of properties in Portugal.",
//     ],
//     location: "realestate",
//     imageUrl: "/images/realestate.png",
//   },
//   // Add other services similarly
// ];

export const modals = {
  apartment: "apartment",
  contact: "contact",
  testemonial: "testemonial",
};

export const countriesEn: string[] = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
export const countriesHe: string[] = [
  "אפגניסטן",
  "אלבניה",
  "אלג'יריה",
  "אנדורה",
  "אנגולה",
  "אנטיגואה וברבודה",
  "ארגנטינה",
  "ארמניה",
  "אוסטרליה",
  "אוסטריה",
  "אזרבייג'ן",
  "בהאמה",
  "בחריין",
  "בנגלדש",
  "ברבדוס",
  "בלארוס",
  "בלגיה",
  "בליז",
  "בנין",
  "בהוטן",
  "בוליביה",
  "בוסניה והרצגובינה",
  "בוטסואנה",
  "ברזיל",
  "ברוניי",
  "בולגריה",
  "בורקינה פאסו",
  "בורונדי",
  "כף ורדה",
  "קמבודיה",
  "קמרון",
  "קנדה",
  "הרפובליקה המרכז-אפריקאית",
  "צ'אד",
  "צ'ילה",
  "סין",
  "קולומביה",
  "קומורו",
  "קונגו, הרפובליקה הדמוקרטית של",
  "קונגו, הרפובליקה של",
  "קוסטה ריקה",
  "חוף השנהב",
  "קרואטיה",
  "קובה",
  "קפריסין",
  "הרפובליקה הצ'כית",
  "דנמרק",
  "ג'יבוטי",
  "דומיניקה",
  "הרפובליקה הדומיניקנית",
  "מזרח טימור",
  "אקוודור",
  "מצרים",
  "אל סלבדור",
  "גינאה המשוונית",
  "אריתריאה",
  "אסטוניה",
  "אסוואטיני",
  "אתיופיה",
  "פיג'י",
  "פינלנד",
  "צרפת",
  "גבון",
  "גמביה",
  "גאורגיה",
  "גרמניה",
  "גאנה",
  "יוון",
  "גרנדה",
  "גואטמלה",
  "גינאה",
  "גינאה-ביסאו",
  "גיאנה",
  "האיטי",
  "הונדורס",
  "הונגריה",
  "איסלנד",
  "הודו",
  "אינדונזיה",
  "איראן",
  "עיראק",
  "אירלנד",
  "ישראל",
  "איטליה",
  "ג'מייקה",
  "יפן",
  "ירדן",
  "קזחסטן",
  "קניה",
  "קיריבאטי",
  "קוריאה הצפונית",
  "קוריאה הדרומית",
  "קוסובו",
  "כווית",
  "קירגיזסטן",
  "לאוס",
  "לטביה",
  "לבנון",
  "לסוטו",
  "ליבריה",
  "לוב",
  "ליכטנשטיין",
  "ליטא",
  "לוקסמבורג",
  "מדגסקר",
  "מלאווי",
  "מלזיה",
  "האיים המלדיביים",
  "מאלי",
  "מלטה",
  "איי מרשל",
  "מאוריטניה",
  "מאוריציוס",
  "מקסיקו",
  "מיקרונזיה",
  "מולדובה",
  "מונקו",
  "מונגוליה",
  "מונטנגרו",
  "מרוקו",
  "מוזמביק",
  "מיאנמר",
  "נמיביה",
  "נאורו",
  "נפאל",
  "הולנד",
  "ניו זילנד",
  "ניקרגואה",
  "ניז'ר",
  "ניגריה",
  "צפון מקדוניה",
  "נורווגיה",
  "עומאן",
  "פקיסטן",
  "פלאו",
  "פלסטין",
  "פנמה",
  "פפואה גינאה החדשה",
  "פרגוואי",
  "פרו",
  "פיליפינים",
  "פולין",
  "פורטוגל",
  "קטאר",
  "רומניה",
  "רוסיה",
  "רואנדה",
  "סנט קיטס ונוויס",
  "סנט לוסיה",
  "סנט וינסנט והגרנדינים",
  "סמואה",
  "סן מרינו",
  "סאו טומה ופרינסיפה",
  "ערב הסעודית",
  "סנגל",
  "סרביה",
  "איי סיישל",
  "סיירה לאון",
  "סינגפור",
  "סלובקיה",
  "סלובניה",
  "איי שלמה",
  "סומליה",
  "דרום אפריקה",
  "דרום סודן",
  "ספרד",
  "סרי לנקה",
  "סודן",
  "סורינאם",
  "שבדיה",
  "שווייץ",
  "סוריה",
  "טייוואן",
  "טג'יקיסטן",
  "טנזניה",
  "תאילנד",
  "טוגו",
  "טונגה",
  "טרינידד וטובגו",
  "תוניסיה",
  "טורקיה",
  "טורקמניסטן",
  "טובאלו",
  "אוגנדה",
  "אוקראינה",
  "איחוד האמירויות הערביות",
  "הממלכה המאוחדת",
  "ארצות הברית",
  "אורוגוואי",
  "אוזבקיסטן",
  "ונואטו",
  "קריית הוותיקן",
  "ונצואלה",
  "וייטנאם",
  "תימן",
  "זמביה",
  "זימבבואה",
];
export const countriesPt: string[] = [
  "Afeganistão",
  "Albânia",
  "Argélia",
  "Andorra",
  "Angola",
  "Antígua e Barbuda",
  "Argentina",
  "Armênia",
  "Austrália",
  "Áustria",
  "Azerbaijão",
  "Bahamas",
  "Bahrein",
  "Bangladesh",
  "Barbados",
  "Bielorrússia",
  "Bélgica",
  "Belize",
  "Benin",
  "Butão",
  "Bolívia",
  "Bósnia e Herzegovina",
  "Botsuana",
  "Brasil",
  "Brunei",
  "Bulgária",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Camboja",
  "Camarões",
  "Canadá",
  "República Centro-Africana",
  "Chade",
  "Chile",
  "China",
  "Colômbia",
  "Comores",
  "Congo, República Democrática do",
  "Congo, República do",
  "Costa Rica",
  "Costa do Marfim",
  "Croácia",
  "Cuba",
  "Chipre",
  "República Tcheca",
  "Dinamarca",
  "Djibouti",
  "Dominica",
  "República Dominicana",
  "Timor-Leste",
  "Equador",
  "Egito",
  "El Salvador",
  "Guiné Equatorial",
  "Eritreia",
  "Estônia",
  "Eswatini",
  "Etiópia",
  "Fiji",
  "Finlândia",
  "França",
  "Gabão",
  "Gâmbia",
  "Geórgia",
  "Alemanha",
  "Gana",
  "Grécia",
  "Granada",
  "Guatemala",
  "Guiné",
  "Guiné-Bissau",
  "Guiana",
  "Haiti",
  "Honduras",
  "Hungria",
  "Islândia",
  "Índia",
  "Indonésia",
  "Irã",
  "Iraque",
  "Irlanda",
  "Israel",
  "Itália",
  "Jamaica",
  "Japão",
  "Jordânia",
  "Cazaquistão",
  "Quênia",
  "Kiribati",
  "Coreia do Norte",
  "Coreia do Sul",
  "Kosovo",
  "Kuwait",
  "Quirguistão",
  "Laos",
  "Letônia",
  "Líbano",
  "Lesoto",
  "Libéria",
  "Líbia",
  "Liechtenstein",
  "Lituânia",
  "Luxemburgo",
  "Madagáscar",
  "Malawi",
  "Malásia",
  "Maldivas",
  "Mali",
  "Malta",
  "Ilhas Marshall",
  "Mauritânia",
  "Maurícia",
  "México",
  "Micronésia",
  "Moldávia",
  "Mônaco",
  "Mongólia",
  "Montenegro",
  "Marrocos",
  "Moçambique",
  "Mianmar",
  "Namíbia",
  "Nauru",
  "Nepal",
  "Países Baixos",
  "Nova Zelândia",
  "Nicarágua",
  "Níger",
  "Nigéria",
  "Macedônia do Norte",
  "Noruega",
  "Omã",
  "Paquistão",
  "Palau",
  "Palestina",
  "Panamá",
  "Papua Nova Guiné",
  "Paraguai",
  "Peru",
  "Filipinas",
  "Polônia",
  "Portugal",
  "Catar",
  "Romênia",
  "Rússia",
  "Ruanda",
  "São Cristóvão e Nevis",
  "Santa Lúcia",
  "São Vicente e Granadinas",
  "Samoa",
  "San Marino",
  "São Tomé e Príncipe",
  "Arábia Saudita",
  "Senegal",
  "Sérvia",
  "Seychelles",
  "Serra Leoa",
  "Singapura",
  "Eslováquia",
  "Eslovênia",
  "Ilhas Salomão",
  "Somália",
  "África do Sul",
  "Sudão do Sul",
  "Espanha",
  "Sri Lanka",
  "Sudão",
  "Suriname",
  "Suécia",
  "Suíça",
  "Síria",
  "Taiwan",
  "Tajiquistão",
  "Tanzânia",
  "Tailândia",
  "Togo",
  "Tonga",
  "Trinidad e Tobago",
  "Tunísia",
  "Turquia",
  "Turcomenistão",
  "Tuvalu",
  "Uganda",
  "Ucrânia",
  "Emirados Árabes Unidos",
  "Reino Unido",
  "Estados Unidos",
  "Uruguai",
  "Uzbequistão",
  "Vanuatu",
  "Cidade do Vaticano",
  "Venezuela",
  "Vietnã",
  "Iêmen",
  "Zâmbia",
  "Zimbábue",
];

// export const stepsContent: StepsContent = {
//   visa: {
//     title: "Visa Information",
//     content:
//       "Visa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necessary visas for relocation. This includes helping with the application process, documentation, and understanding the requirements for different types of visas such as work visas, student visas, and family reunion visas.",
//   },
//   home_search: {
//     title: "Home Search",
//     content:
//       "Home search services assist you in finding a suitable place to live in your new country. This includes helping you understand the housing market, arranging property viewings, negotiating lease agreements, and ensuring you find a home that meets your needs and budget.",
//   },
//   nif_number: {
//     title: "NIF Number",
//     content:
//       "The NIF (Número de Identificação Fiscal) is a tax identification number required for many financial and legal transactions in Portugal. Our services help you obtain your NIF number quickly and efficiently, guiding you through the application process and ensuring all necessary documentation is in order.",
//   },
//   commodities_support: {
//     title: "Commodities Support",
//     content:
//       "Commodities support services provide assistance with the logistics and management of moving your personal belongings to your new location. This includes coordinating with moving companies, handling customs clearance, and ensuring that your belongings arrive safely and on time.",
//   },
//   bank_account: {
//     title: "Bank Account",
//     content:
//       "Opening a bank account is a crucial step in relocating to a new country. Our services help you understand the banking system, choose the right bank and account type for your needs, and assist with the documentation and application process to ensure a smooth account opening experience.",
//   },
//   money_transfer: {
//     title: "Money Transfer",
//     content:
//       "Money transfer sa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necsa services provide assistance with obtaining the necservices assist you in transferring funds between countries. This includes finding the best rates, ensuring compliance with legal requirements, and providing a secure and efficient way to move your money to support your relocation and living expenses in your new country.",
//   },
// };

export const residency_relocation_name = "residency_relocation";

export const handleWhatsAppClick = () => {
  // const phoneNumber = "+972 54-222-6958"; // Replace with your phone number
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE; // Replace with your phone number
  const message = "Hello, I would like to contact you."; // Optional: default message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
};

export const apartment: Apartment[] = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    location: "123 Main St, Springfield",
    price: 55,
    bedrooms: 2,
    bathrooms: 1,
    square_feet: 850,
    amenities: ["WiFi", "Air Conditioning", "Kitchen", "Washer"],
    images: ["/images/house.png", "/images/house.png"],
    description:
      "A modern apartment located in the heart of the city, close to all amenities.",
    occupancy: 0,
  },

  {
    id: 2,
    title: "Cozy Studio Near the Park",
    location: "456 Park Ave, Springfield",
    price: 45,
    bedrooms: 1,
    bathrooms: 1,
    square_feet: 500,
    amenities: ["WiFi", "Heating", "Kitchen"],
    images: ["/images/house.png", "/images/house.png"],
    description: "A cozy studio apartment with a beautiful view of the park.",
    occupancy: 0,
  },
  {
    id: 3,
    title: "Spacious Family Apartment",
    location: "789 Elm St, Springfield",
    price: 70000,
    bedrooms: 3,
    bathrooms: 2,
    square_feet: 1200,
    amenities: [
      "WiFi",
      "Air Conditioning",
      "Kitchen",
      "Washer",
      "Dryer",
      "Parking",
    ],
    images: ["/images/house.png", "/images/house.png"],
    description:
      "A spacious apartment perfect for families, located in a quiet neighborhood.",
    occupancy: 12,
  },
];

export const getUrl = () => {
  return process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASIC_URL
    : process.env.NEXT_PUBLIC_BASIC_URL_PRODUCTION;
};

export const isDev = () => process.env.NODE_ENV === "development";
