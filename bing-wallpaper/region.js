// https://github.com/genzj/pybingwallpaper/blob/f616f320b0b9783f0ec68bc0ee7d2475bd00b010/pybingwallpaper/main.py
const REGIONS = {
    "United States - English": 'en-US',
    "United Kingdom": 'en-GB',
    "India": 'en-IN',
    "Argentina": 'es-AR',
    "Australia": 'en-AU',
    "Austria": 'de-AT',
    "Belgium - Dutch": 'nl-BE',
    "Belgium - French": 'fr-BE',
    "Brazil": 'pt-BR',
    "Canada - English": 'en-CA',
    "Canada - French": 'fr-CA',
    "Chile": 'es-CL',
    "China": 'zh-CN',
    "Denmark": 'da-DK',
    "Egypt": 'ar-EG',
    "Finland": 'fi-FI',
    "France": 'fr-FR',
    "Germany": 'de-DE',
    "Hong Kong SAR": 'zh-HK',
    "Indonesia": 'en-ID',
    "Ireland": 'en-IE',
    "Italy": 'it-IT',
    "Japan": 'ja-JP',
    "Korea": 'ko-KR',
    "Malaysia": 'en-MY',
    "Mexico": 'es-MX',
    "Netherlands": 'nl-NL',
    "New Zealand": 'en-NZ',
    "Norway": 'nb-NO',
    "Philippines": 'en-PH',
    "Poland": 'pl-PL',
    "Portugal": 'pt-PT',
    "Russia": 'ru-RU',
    "Saudi Arabia": 'ar-SA',
    "Singapore": 'en-SG',
    "South Africa": 'en-ZA',
    "Spain": 'es-ES',
    "Sweden": 'sv-SE',
    "Switzerland - French": 'fr-CH',
    "Switzerland - German": 'de-CH',
    "Taiwan": 'zh-TW',
    "Turkey": 'tr-TR',
    "United Arab Emirates": 'ar-AE',
    "United States - Spanish": 'es-US'
}

function getRegions() {
    return Object.keys(REGIONS);
}

function getRegionCode(region) {
    return REGIONS[region];
}

function defaultRegion() {
    return Object.keys(REGIONS)[0];
}
