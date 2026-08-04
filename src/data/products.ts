export type Category = "Avant-Garde Apparel" | "Haute Timepieces" | "Cyber-Luxury Tech";

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
  blurb: string;
}

const apparelImgs = [
  "https://images.pexels.com/photos/9132079/pexels-photo-9132079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/15834470/pexels-photo-15834470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/38652618/pexels-photo-38652618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/38652623/pexels-photo-38652623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/38652631/pexels-photo-38652631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/12877069/pexels-photo-12877069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/10370359/pexels-photo-10370359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/33798235/pexels-photo-33798235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/11701102/pexels-photo-11701102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/29301758/pexels-photo-29301758.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/38561616/pexels-photo-38561616.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/19461584/pexels-photo-19461584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/20248584/pexels-photo-20248584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/10530102/pexels-photo-10530102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/3649765/pexels-photo-3649765.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/28746074/pexels-photo-28746074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/8125855/pexels-photo-8125855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/10259873/pexels-photo-10259873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/31034509/pexels-photo-31034509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
];

const watchImgs = [
  "https://images.pexels.com/photos/13273982/pexels-photo-13273982.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/13273983/pexels-photo-13273983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/30746010/pexels-photo-30746010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/8306529/pexels-photo-8306529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/18285660/pexels-photo-18285660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/6774653/pexels-photo-6774653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/8306528/pexels-photo-8306528.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/30746009/pexels-photo-30746009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/13273980/pexels-photo-13273980.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/8306527/pexels-photo-8306527.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/19314176/pexels-photo-19314176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/29554150/pexels-photo-29554150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
];

const techImgs = [
  "https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/14005916/pexels-photo-14005916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/8981857/pexels-photo-8981857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/14785825/pexels-photo-14785825.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/3394657/pexels-photo-3394657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/11591876/pexels-photo-11591876.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/18641665/pexels-photo-18641665.png?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/16045136/pexels-photo-16045136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/31050364/pexels-photo-31050364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
  "https://images.pexels.com/photos/20321375/pexels-photo-20321375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=900",
];

const apparelNames = [
  "Vanguard Matte Trench", "Obsidian Silk Overcoat", "Meridian Wool Blazer", "Halcyon Draped Gown",
  "Nocturne Leather Jacket", "Empyrean Cashmere Coat", "Ivory Cascade Blouse", "Solstice Tailored Suit",
  "Astra Pleated Skirt", "Regalia Velvet Blazer", "Zenith Denim Trench", "Aurora Satin Slip Dress",
  "Cindral Wrap Coat", "Lumen Structured Shirt", "Thessaly Wool Cape", "Vesper Quilted Parka",
  "Ondine Silk Kimono", "Kestrel Leather Trench", "Marlowe Double-Breasted Coat", "Elyria Sculpted Jumpsuit",
];

const watchNames = [
  "Aetheris Chrono-IV", "Onyx Horizon Skeleton", "Meridian Gold Tourbillon", "Nocturne Diver Pro",
  "Solaris Rose-Gold Automatic", "Vantage Titanium Chrono", "Empire Sapphire Dial", "Halcyon Moonphase",
  "Zenith Carbon Tourbillon", "Regalia Platinum Classic", "Aurelius Perpetual Calendar", "Voyager GMT Steel",
  "Lumina White-Gold Minute Repeater", "Cascade Diamond Bezel", " Echelon Bronze Field Watch",
  "Obsidian Chrono Split-Seconds", "Celestia Star-Dial Automatic", "Aegis Skeleton Flyback", "Monarch Grand Complication", "Vertex Ultra-Slim Dress",
];

const techNames = [
  "Onyx Horizon Pods", "Aether Neural Headset", "Vantage Titanium Drone", "Nimbus Levitating Speaker",
  "Cortex AI Wristband", "Prism Holographic Display", "Voidwalker VR Visor", "Halo Smart Ring",
  "Quantum Fold Tablet", "Specter Noise-Nullify Buds", "Ion-Flux Power Core", "Lumen Glass Keyboard",
  "Nexus Modular Hub", "Kinetic Charging Mat", "Obsidian Cyber Camera", "Astra Drone Pod",
  "Synth Wave Turntable", "Reactor Compact Projector", "Glacier Cooling Laptop Stand", "Meridian Smart Mirror",
  "Vertex Bone-Conduction Buds",
];

function buildCategory(
  names: string[],
  imgs: string[],
  category: Category,
  startId: number,
  basePrice: number,
  priceStep: number,
  blurbs: string[]
): Product[] {
  return names.map((name, i) => {
    const price = Math.round((basePrice + i * priceStep + (i % 3) * 37) * 100) / 100;
    const hasDiscount = i % 5 === 0;
    return {
      id: startId + i,
      name,
      category,
      price,
      originalPrice: hasDiscount ? Math.round(price * 1.22) : undefined,
      image: imgs[i % imgs.length],
      tag: i % 7 === 0 ? "New" : i % 11 === 0 ? "Limited" : hasDiscount ? "Sale" : undefined,
      blurb: blurbs[i % blurbs.length],
    };
  });
}

const apparelBlurbs = [
  "Hand-finished silhouette cut from rare deadstock fabric.",
  "Structured tailoring engineered for a sculpted, architectural drape.",
  "Atelier-grade construction with reinforced French seams.",
  "A quiet-luxury statement piece built for permanent rotation.",
];
const watchBlurbs = [
  "Swiss-grade automatic movement housed in a hand-polished case.",
  "Sapphire crystal glass with anti-reflective coating and 100m depth rating.",
  "Limited production run, individually numbered on the caseback.",
  "Precision chronometry married to sculptural, wearable art.",
];
const techBlurbs = [
  "Adaptive spatial audio tuned by an in-house acoustics lab.",
  "Aerospace-grade alloy chassis with self-healing nano coating.",
  "On-device neural processing for zero-latency response.",
  "48-hour cell life with 10-minute rapid induction charging.",
];

export const products: Product[] = [
  ...buildCategory(apparelNames, apparelImgs, "Avant-Garde Apparel", 1000, 420, 35, apparelBlurbs),
  ...buildCategory(watchNames, watchImgs, "Haute Timepieces", 2000, 1850, 210, watchBlurbs),
  ...buildCategory(techNames, techImgs, "Cyber-Luxury Tech", 3000, 260, 45, techBlurbs),
];

export const categories: Category[] = ["Avant-Garde Apparel", "Haute Timepieces", "Cyber-Luxury Tech"];

export function formatPrice(value: number): string {
  return `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
