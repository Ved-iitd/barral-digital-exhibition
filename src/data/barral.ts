import sachet from "@/assets/mr-barral-sachet.webp.asset.json";
import full from "@/assets/mr-barral-full.webp.asset.json";
import panipuri from "@/assets/mr-barral-panipuri.webp.asset.json";
import cupSignature from "@/assets/barral-cup-signature.webp.asset.json";
import shrug from "@/assets/mr-barral-shrug.webp.asset.json";
import brandSheet from "@/assets/barral-brand-sheet.webp.asset.json";

export const media = {
  mrBarralSachet: sachet.url,
  mrBarralFull: full.url,
  mrBarralPanipuri: panipuri.url,
  cupSignature: cupSignature.url,
  mrBarralShrug: shrug.url,
  brandSheet: brandSheet.url,
};

export const brand = {
  name: "BARRAL",
  instagram: "PLACEHOLDER — Instagram handle",
  instagramUrl: "#",
  email: "PLACEHOLDER — contact email",
  fssai: "PLACEHOLDER — FSSAI licence number",
};

export type Flavour = {
  id: string;
  index: string;
  name: string;
  moment: string;
  world: string;
  copy: string;
  accent: string;
  note: string;
};

export const flavours: Flavour[] = [
  {
    id: "refreshing",
    index: "01",
    name: "REFRESHING",
    moment: "Morning and post-breakfast refreshment",
    world: "Ice, citrus atmosphere, wind and crisp daylight",
    copy: "RESET THE MORNING.",
    accent: "var(--flavour-refreshing)",
    note: "A clean, cold opening note for the first hours of the day.",
  },
  {
    id: "caffeine",
    index: "02",
    name: "CAFFEINE",
    moment: "Afternoon energy and post-lunch recovery",
    world: "Deep brown, electric red, controlled energy and motion",
    copy: "WAKE UP THE SECOND HALF.",
    accent: "var(--flavour-caffeine)",
    note: "Built for the hour the day usually loses.",
  },
  {
    id: "panipuri",
    index: "03",
    name: "PANIPURI",
    moment: "Tangy, spicy and nostalgic craving",
    world: "Bold red, spice particles, street-culture energy",
    copy: "STREET FLAVOUR. DIFFERENT FORM.",
    accent: "var(--flavour-panipuri)",
    note: "India's most argued-about flavour, moved into a cup.",
  },
  {
    id: "brownie-hazelnut",
    index: "04",
    name: "BROWNIE HAZELNUT",
    moment: "Indulgence and craving satisfaction",
    world: "Cocoa textures, hazelnut tones and dessert lighting",
    copy: "DRINK THE CRAVING.",
    accent: "var(--flavour-brownie)",
    note: "Dessert behaviour, without the plate.",
  },
];

export const prepSteps = [
  {
    step: "01",
    label: "TEAR",
    detail: "The instant mixer sachet enters the frame.",
    image: media.mrBarralSachet,
    alt: "Mr. Barral holding a Barral instant mixer sachet on a black background",
  },
  {
    step: "02",
    label: "POUR",
    detail: "The mixer goes into the double-wall paper cup.",
    image: media.mrBarralFull,
    alt: "Mr. Barral holding a Barral mixer sachet and a Barral cup",
  },
  {
    step: "03",
    label: "ADD WATER",
    detail: "Cold water fills the cup.",
    image: media.cupSignature,
    alt: "Two Barral cups with dome lids and straws shown front and back",
  },
  {
    step: "04",
    label: "STIR. SIP. BARRAL.",
    detail: "Close the dome lid and stir. Roughly 10–15 seconds.",
    image: media.mrBarralPanipuri,
    alt: "Mr. Barral raising a prepared Barral Panipuri cup",
  },
];

export type CupDesign = {
  number: number;
  name: string;
  personality: string;
  /** Replace with a CDN asset URL when the artwork is ready. */
  image: string | null;
};

const designNames: Array<[string, string]> = [
  ["THE HOST", "Opens the room before anyone else does"],
  ["THE LATE REPLY", "Reads it. Answers tomorrow"],
  ["THE FRONT ROW", "Never watches from a distance"],
  ["THE QUIET FLEX", "Says nothing. Owns everything"],
  ["THE STREET SAINT", "Faith in footpath flavour"],
  ["THE SECOND WIND", "Peaks after four in the afternoon"],
  ["THE ARGUMENT", "Right, loudly"],
  ["THE MIDNIGHT SHIFT", "Works when the city sleeps"],
  ["THE FIRST DRAFT", "Messy on purpose"],
  ["THE COLLECTOR", "Keeps the cup, not the receipt"],
  ["THE OUTSIDER", "Invited anyway"],
  ["THE SHORTCUT", "Knows a faster lane"],
  ["THE ENCORE", "One more, always"],
  ["THE DEADPAN", "Funny without moving a muscle"],
  ["THE LOUD SILENCE", "Present without speaking"],
  ["THE RITUALIST", "Same order. Different mood"],
  ["THE UNDERDOG", "Counted out. Still here"],
  ["THE FIRE ESCAPE", "Best conversations happen here"],
  ["THE MONSOON", "Arrives without notice"],
  ["THE LAST TRAIN", "Cuts it fine, makes it"],
  ["THE BOLD TYPE", "Never whispers a headline"],
  ["THE SLOW BURN", "Takes the long way, wins"],
  ["THE MASK", "Shows exactly what it chooses"],
  ["THE BEGINNING", "Number twenty-four. Or number one"],
];

export const cupDesigns: CupDesign[] = designNames.map(([name, personality], i) => ({
  number: i + 1,
  name,
  personality,
  image: null,
}));

export type Pack = {
  id: string;
  name: string;
  cups: number;
  contents: string[];
  price: string;
  offerPrice: string;
  inventory: string;
  delivery: string;
  image: string;
  alt: string;
};

export const packs: Pack[] = [
  {
    id: "pack-6",
    name: "PACK OF 6",
    cups: 6,
    contents: [
      "6 Barral cups",
      "6 instant mixers",
      "A surprise selection of cup designs",
      "Multiple flavour experiences",
    ],
    price: "PLACEHOLDER — MRP",
    offerPrice: "PLACEHOLDER — pre-order price",
    inventory: "PLACEHOLDER — inventory status",
    delivery: "PLACEHOLDER — delivery information",
    image: media.cupSignature,
    alt: "Barral pack of six — black double-wall cups with dome lids",
  },
  {
    id: "pack-24",
    name: "PACK OF 24",
    cups: 24,
    contents: [
      "24 Barral cups",
      "24 instant mixers",
      "A larger collectible design selection",
      "Best for sharing, events and discovery",
    ],
    price: "PLACEHOLDER — MRP",
    offerPrice: "PLACEHOLDER — pre-order price",
    inventory: "PLACEHOLDER — inventory status",
    delivery: "PLACEHOLDER — delivery information",
    image: media.brandSheet,
    alt: "Barral pack of twenty-four — collectible cup design range",
  },
];

export const productInfo = {
  details: [
    "Format: double-wall paper cup, dome lid, straw and one instant mixer sachet per cup.",
    "Category: Prepare-to-Drink. The cup is sealed until you prepare it.",
    "Each pack ships with a surprise selection from the 24 collectible designs.",
  ],
  ingredients: ["PLACEHOLDER — full ingredient declaration per flavour, as printed on pack."],
  preparation: [
    "Open the cup and tear the instant mixer sachet.",
    "Empty the mixer into the cup.",
    "Add cold water to the fill line.",
    "Close the dome lid and stir for roughly 10–15 seconds.",
  ],
  shipping: ["PLACEHOLDER — dispatch timelines, serviceable pin codes and shipping charges."],
};

export const faq: Array<{ q: string; a: string }> = [
  {
    q: "What is a Prepare-to-Drink beverage?",
    a: "The cup and the instant mixer ship separately inside one sealed unit. You add cold water and stir when you want the drink — it is not filled in advance.",
  },
  {
    q: "How long does preparation take?",
    a: "Roughly 10–15 seconds: tear, pour, add cold water, close the dome lid and stir.",
  },
  {
    q: "Can I choose which cup designs I receive?",
    a: "No. Every pack contains a surprise selection from the 24 designs.",
  },
  {
    q: "Can I choose flavours?",
    a: "Yes — select your flavour mix on this page before adding the pack to your cart.",
  },
  {
    q: "When will pre-orders ship?",
    a: "PLACEHOLDER — dispatch window to be confirmed before pre-orders open.",
  },
];

export const propositions = {
  old: {
    title: "THE OLD ROUTINE",
    points: ["Manufactured in advance", "Same experience every time", "Consumed and forgotten"],
  },
  barral: {
    title: "THE BARRAL RITUAL",
    points: [
      "Prepared when you want it",
      "Interactive and personal",
      "Collectible packaging",
      "A drink that becomes an experience",
    ],
  },
};
