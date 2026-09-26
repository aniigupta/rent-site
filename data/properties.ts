// ✏️ Add, edit or hide properties here.
// - Set `available: false` when rented. It disappears from the listings (the QR code keeps working).
// - Photos: put files in /public/images/<id>/ and list them like "/images/room-01/1.jpg".
//   Cloudinary links (https://res.cloudinary.com/...) also work.
// - Never put the rent or the exact house address here — the website always shows "Rent: Contact for details".

export type Property = {
  id: string; // used in the URL, e.g. /rooms/room-01 — don't change once shared
  type: "room" | "shop";
  title: string;
  title_hi?: string;
  description: string;
  description_hi?: string;
  images: string[];
  location: string; // floor or side only, e.g. "Ground floor". The general area comes from data/site.ts
  location_hi?: string;
  mapLink?: string; // optional Google Maps link; defaults to the landmark in data/site.ts
  features: string[];
  features_hi?: string[];
  size?: string; // optional, e.g. "approx. 200 sq ft"
  size_hi?: string;
  available: boolean;
  contact?: { phone?: string; whatsapp?: string }; // optional, overrides data/site.ts
};

// Shared areas shown at the end of every room's gallery
const common = ["/images/common/hall-1.jpeg", "/images/common/hall-2.jpeg", "/images/common/terrace.jpeg"];
const photos = (id: string, n: number) => [
  ...Array.from({ length: n }, (_, i) => `/images/${id}/${i + 1}.jpeg`),
  ...common,
];

export const properties: Property[] = [
  {
    id: "room-01",
    type: "room",
    title: "Room 1",
    title_hi: "कमरा 1",
    description: "Clean, airy room with good ventilation and natural light.",
    description_hi: "साफ-सुथरा और हवादार कमरा। अच्छा वेंटिलेशन और प्राकृतिक रोशनी।",
    images: photos("room-01", 5),
    location: "First floor",
    location_hi: "पहली मंजिल",
    features: [],
    features_hi: [],
    available: true,
  },
  {
    id: "room-02",
    type: "room",
    title: "Room 2",
    title_hi: "कमरा 2",
    description: "Spacious room, suitable for a single person or couple.",
    description_hi: "बड़ा कमरा, अकेले व्यक्ति या जोड़े के लिए उपयुक्त।",
    images: photos("room-02", 3),
    location: "First floor",
    location_hi: "पहली मंजिल",
    features: [],
    features_hi: [],
    available: true,
  },
  {
    id: "room-03",
    type: "room",
    title: "Room 3",
    title_hi: "कमरा 3",
    description: "Well-maintained room close to the main road.",
    description_hi: "मुख्य सड़क के पास अच्छी तरह से बना कमरा।",
    images: photos("room-03", 4),
    location: "First floor",
    location_hi: "पहली मंजिल",
    features: [],
    features_hi: [],
    available: true,
  },
  {
    id: "room-04",
    type: "room",
    title: "Room 4",
    title_hi: "कमरा 4",
    description: "Well-lit room in a quiet building.",
    description_hi: "शांत इमारत में उजालेदार कमरा।",
    images: photos("room-04", 4),
    location: "First floor",
    location_hi: "पहली मंजिल",
    features: [],
    features_hi: [],
    available: true,
  },
  {
    id: "room-05",
    type: "room",
    title: "Room 5",
    title_hi: "कमरा 5",
    description: "Quiet room at the back of the building.",
    description_hi: "इमारत के पीछे शांत वातावरण वाला कमरा।",
    images: [],
    location: "First floor",
    location_hi: "पहली मंजिल",
    features: [],
    features_hi: [],
    available: false,
  },
  {
    id: "room-06",
    type: "room",
    title: "Room 6",
    title_hi: "कमरा 6",
    description: "Bright corner room with two windows.",
    description_hi: "दो खिड़कियों वाला उजालेदार कोना कमरा।",
    images: [],
    location: "First floor",
    location_hi: "पहली मंजिल",
    features: [],
    features_hi: [],
    available: false,
  },
  {
    id: "room-07",
    type: "room",
    title: "Room 7",
    title_hi: "कमरा 7",
    description: "Compact room, ideal for a student or working professional.",
    description_hi: "छात्र या कामकाजी व्यक्ति के लिए आदर्श कमरा।",
    images: [],
    location: "First floor",
    location_hi: "पहली मंजिल",
    features: [],
    features_hi: [],
    available: false,
  },
  {
    id: "shop-01",
    type: "shop",
    title: "Shop 1",
    title_hi: "दुकान 1",
    description: "Road-facing shop with a shutter front. Good footfall.",
    description_hi: "शटर वाली रोड-फेसिंग दुकान। ग्राहकों की अच्छी आवाजाही।",
    images: [],
    location: "Main Road",
    location_hi: "मेन रोड",
    features: ["Road facing", "Shutter", "Electricity connection"],
    features_hi: ["रोड फेसिंग", "शटर", "बिजली कनेक्शन"],
    size: "approx. 200 sq ft",
    size_hi: "लगभग 200 वर्ग फुट",
    available: true,
  },
  {
    id: "shop-02",
    type: "shop",
    title: "Shop 2",
    title_hi: "दुकान 2",
    description: "Shop suitable for retail or an office.",
    description_hi: "दुकान या कार्यालय (ऑफिस) के लिए उपयुक्त स्थान।",
    images: [],
    location: "Main Road",
    location_hi: "मेन रोड",
    features: ["Road facing", "Shutter"],
    features_hi: ["रोड फेसिंग", "शटर"],
    size: "approx. 150 sq ft",
    size_hi: "लगभग 150 वर्ग फुट",
    available: false,
  },
  {
    id: "shop-03",
    type: "shop",
    title: "Shop 3",
    title_hi: "दुकान 3",
    description: "Corner shop with visibility from two sides.",
    description_hi: "दो तरफ से दिखने वाली कोने की दुकान।",
    images: [],
    location: "Main Road",
    location_hi: "मेन रोड",
    features: ["Corner shop", "Shutter", "Water connection"],
    features_hi: ["कॉर्नर दुकान", "शटर", "पानी कनेक्शन"],
    size: "approx. 250 sq ft",
    size_hi: "लगभग 250 वर्ग फुट",
    available: false,
  },
];

// URL segment <-> property type
export const types = { rooms: "room", shops: "shop" } as const;
export type TypeSlug = keyof typeof types;
export const labels = { room: "Room", shop: "Shop" } as const;
export const labels_hi = { room: "कमरा", shop: "दुकान" } as const;

export const pathOf = (p: Property) => `/${p.type}s/${p.id}`;

export const availableOf = (type: Property["type"]) =>
  properties.filter((p) => p.type === type && p.available);

export const getLocalizedProperty = (p: Property, lang: "en" | "hi") => {
  if (lang === "hi") {
    return {
      ...p,
      title: p.title_hi || p.title,
      description: p.description_hi || p.description,
      location: p.location_hi || p.location,
      size: p.size_hi || p.size,
      features: p.features_hi && p.features_hi.length ? p.features_hi : p.features,
    };
  }
  return p;
};
