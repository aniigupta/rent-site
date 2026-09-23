// ✏️ Change your contact details and location here. Used on every page.
export const site = {
  name: "Rooms & Shops for Rent",
  name_hi: "कमरे और दुकानें किराए के लिए",
  description:
    "Rooms and shops for rent in Jaitpur, Arpan Vihar, near Arpan Public School, Delhi. See photos and features, then contact the owner on WhatsApp or phone.",
  description_hi:
    "जैतपुर, अर्पण विहार, अर्पण पब्लिक स्कूल के पास कमरे और दुकानें किराए के लिए उपलब्ध। फोटो देखें और मालिक से संपर्क करें।",
  // Phone number with country code, digits only for WhatsApp (e.g. India: 91 + 10 digits).
  phone: "+91 87997 62746",
  whatsapp: "918076206264",
  // General public location. Don't put the exact house address here.
  area: "Jaitpur, Arpan Vihar, near Arpan Public School, Delhi",
  area_hi: "जैतपुर, अर्पण विहार, अर्पण पब्लिक स्कूल के पास, दिल्ली",
  // What "Get Directions" navigates to in Google Maps: a landmark, not the house.
  mapsDestination: "Arpan Public School, Arpan Vihar, Jaitpur, Delhi",
};

export const directionsLink = (destination = site.mapsDestination) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;

// Full site URL for share previews. On Vercel this is detected automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
