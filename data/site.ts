// ✏️ Change your contact details and location here. Used on every page.
export const site = {
  name: "Rooms & Shops for Rent",
  name_hi: "कमरे और दुकानें किराए के लिए",
  description:
    "Rooms and shops for rent at Shivam Namkeen and General Store, J-7, Street No. 7, Arpan Vihar colony, Jaitpur, New Delhi. See photos and features, then contact the owner on WhatsApp or phone.",
  description_hi:
    "जैतपुर, अर्पण विहार कॉलोनी (शिवम नमकीन एंड जनरल स्टोर, गली नं. 7) में कमरे और दुकानें किराए के लिए उपलब्ध। फोटो देखें और मालिक से संपर्क करें।",
  // Phone number with country code, digits only for WhatsApp (e.g. India: 91 + 10 digits).
  phone: "+91 87997 62746",
  whatsapp: "918076206264",
  // Property address and location
  area: "Shivam Namkeen and General Store, J-7, Street No. 7, Arpan Vihar colony, Jaitpur, New Delhi, Delhi 110044",
  area_hi: "शिवम नमकीन एंड जनरल स्टोर, जे-7, गली नं. 7, अर्पण विहार कॉलोनी, जैतपुर, नई दिल्ली, दिल्ली 110044",
  // What "Get Directions" navigates to in Google Maps
  mapsDestination: "Shivam Namkeen and General Store, J-7, Street No. 7, Arpan Vihar colony, Jaitpur, New Delhi, Delhi 110044",
};

export const directionsLink = (destination = site.mapsDestination) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;

// Full site URL for share previews. On Vercel this is detected automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
