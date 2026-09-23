export type Language = "en" | "hi";

export type TranslationKey =
  | "siteName"
  | "rooms"
  | "shops"
  | "room"
  | "shop"
  | "allRooms"
  | "allShops"
  | "heroTitle"
  | "heroSubtitle"
  | "availableNow"
  | "availableCount"
  | "available"
  | "rented"
  | "viewDetails"
  | "rentStatus"
  | "rentNote"
  | "exactAddressNote"
  | "propertyRentedNotice"
  | "seeAvailable"
  | "photosCount"
  | "photosComingSoon"
  | "swipePhotos"
  | "size"
  | "location"
  | "noPropertiesAvailable"
  | "getDirections"
  | "whatsapp"
  | "call"
  | "enquiries"
  | "footerRentNote"
  | "switchLang"
  | "currentLangName";

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    // Navigation & Site
    siteName: "Rooms & Shops for Rent",
    rooms: "Rooms",
    shops: "Shops",
    room: "Room",
    shop: "Shop",
    allRooms: "All Rooms",
    allShops: "All Shops",

    // Hero & Headers
    heroTitle: "Properties Available for Rent",
    heroSubtitle: "Rooms and shops rented directly by the owner. See the photos, then WhatsApp or call to ask about the rent.",
    availableNow: "available now",
    availableCount: "available",
    available: "Available",
    rented: "Rented",

    // Property Card & Detail
    viewDetails: "View photos & details",
    rentStatus: "Rent: Contact for details",
    rentNote: "The owner will share the rent, the exact address and answer any questions on WhatsApp or by phone.",
    exactAddressNote: "Exact address shared on call or WhatsApp.",
    propertyRentedNotice: "This property has been rented.",
    seeAvailable: "See available",
    photosCount: "photos",
    photosComingSoon: "Photos coming soon",
    swipePhotos: "Swipe to see all {count} photos",
    size: "Size",
    location: "Location",

    // Empty States
    noPropertiesAvailable: "No {type} available right now. WhatsApp or call to ask about upcoming availability.",

    // Actions & Buttons
    getDirections: "Get Directions",
    whatsapp: "WhatsApp",
    call: "Call",

    // Footer
    enquiries: "Enquiries",
    footerRentNote: "Rent details shared on call or WhatsApp.",

    // Language Toggle
    switchLang: "हिंदी",
    currentLangName: "English",
  },
  hi: {
    // Navigation & Site
    siteName: "कमरे और दुकानें किराए के लिए",
    rooms: "कमरे",
    shops: "दुकानें",
    room: "कमरा",
    shop: "दुकान",
    allRooms: "सभी कमरे",
    allShops: "सभी दुकानें",

    // Hero & Headers
    heroTitle: "किराए के लिए उपलब्ध संपत्तियां",
    heroSubtitle: "मालिक द्वारा सीधे किराए पर दिए जाने वाले कमरे और दुकानें। फोटो देखें, फिर किराए की जानकारी के लिए व्हाट्सएप या कॉल करें।",
    availableNow: "अभी उपलब्ध",
    availableCount: "उपलब्ध",
    available: "उपलब्ध",
    rented: "किराए पर दिया गया",

    // Property Card & Detail
    viewDetails: "फोटो और विवरण देखें",
    rentStatus: "किराया: संपर्क करके जानें",
    rentNote: "मालिक व्हाट्सएप या कॉल पर किराया, सटीक पता और आपके सभी सवालों के जवाब देंगे।",
    exactAddressNote: "सटीक पता कॉल या व्हाट्सएप पर दिया जाएगा।",
    propertyRentedNotice: "यह संपत्ति किराए पर दी जा चुकी है।",
    seeAvailable: "उपलब्ध देखें",
    photosCount: "फोटो",
    photosComingSoon: "फोटो जल्द आ रहे हैं",
    swipePhotos: "सभी {count} फोटो देखने के लिए स्वाइप करें",
    size: "आकार (साइज)",
    location: "स्थान",

    // Empty States
    noPropertiesAvailable: "वर्तमान में कोई {type} उपलब्ध नहीं हैं। आगामी उपलब्धता के लिए व्हाट्सएप या कॉल करें।",

    // Actions & Buttons
    getDirections: "रास्ता देखें (दिशा-निर्देश)",
    whatsapp: "व्हाट्सएप",
    call: "कॉल करें",

    // Footer
    enquiries: "पूछताछ",
    footerRentNote: "किराए की जानकारी कॉल या व्हाट्सएप पर साझा की जाएगी।",

    // Language Toggle
    switchLang: "English",
    currentLangName: "हिंदी",
  },
};

// Common feature translations
export const featureTranslations: Record<string, string> = {
  "Attached Bathroom": "अटैच्ड बाथरूम",
  "Attached Kitchen": "अटैच्ड किचन",
  "Shared Bathroom": "साझा (शेयर्ड) बाथरूम",
  "Unfurnished": "बिना फर्नीचर (अनफर्निश्ड)",
  "Semi-furnished": "सेमी-फर्निश्ड",
  "Furnished": "फर्निश्ड",
  "Water supply": "पानी की सुविधा",
  "Balcony": "बालकनी",
  "Road facing": "रोड फेसिंग",
  "Shutter": "शटर",
  "Electricity connection": "बिजली कनेक्शन",
  "Corner shop": "कॉर्नर शॉप",
};

// Common location translations (floors/roads)
export const locationTranslations: Record<string, string> = {
  "Ground floor": "ग्राउंड फ्लोर (भू-तल)",
  "First floor": "पहली मंजिल",
  "Second floor": "दूसरी मंजिल",
  "Third floor": "तीसरी मंजिल",
  "Main Road": "मेन रोड",
};
