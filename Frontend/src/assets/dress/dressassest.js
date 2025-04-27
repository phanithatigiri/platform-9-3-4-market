import rimg1 from './rimg1.jpg'
import rimg2 from './rimg2.jpg'
import bimg1 from './bimg1.jpg'
import bimg2 from './bimg2.jpg'
import gimg1 from './gimg1.jpg'
import yimg1 from './yimg1.jpg'
import yimg2 from './yimg2.jpg'
import pimg1 from './pimg1.jpg'
import pimg2 from './pimg2.jpg'
import pimg3 from './pimg3.jpg'
import piimg1 from './piimg1.jpg'
import piimg2 from './piimg2.jpg'

export const products = [
    {
      id: 21,
      name: "Fiery Elegance Wizard Robe",
      description: "A bold and vibrant red wizard robe, crafted with shimmering velvet. Adorned with gold runes along the sleeves and hem, it features a high collar and a matching cape with fiery patterns. Includes a golden wand holster and a crystal brooch, perfect for enhancing your magical persona.",
      keyFeatures: [
        "Material: Luxurious velvet for comfort and durability.",
        "Design: Gold runes and fiery patterns for a dramatic flair.",
        "Set Includes : Wizard robe, cape, and crystal brooch.",
        "Care Instructions: Spot clean or use a fireproof cleaning charm."
      ],
      image:[rimg1],
      category:"Men",
      price: 40,
      currency:"Galleons",
      specialOffer: "Add a fire-element wand for a 10% discount on your total order.",
      sizeOptions: ["M", "L", "XL"],
      shipping: {
        processing: "2-3 magical days",
        freeDeliveryThreshold: "150 Galleons"
      },
      returnPolicy: "Returns within one moon cycle with the original spell intact.",
      bestseller:true
      
    },
    {
      id: 22,
      name: "Crimson Bloom Wizard Gown",
      description: "A fitted red wizard robe with intricate gold embroidery. The floor-length skirt flows like molten magic, and the wide belt with a golden buckle is adorned with delicate ruby accents. Paired with a ruby-encrusted wand and shimmering red hood for an elegant, magical look.",
      keyFeatures: [
        "Material: Shimmering satin with magical ruby detailing.",
        "Design: Elegant embroidery and flowing skirt.",
        "Set Includes: Gown, ruby-encrusted wand, and hood.",
        "Care Instructions: Dry clean with enchanted water only."
      ],
      image:[rimg2],
      category:"Women",
      price: 45,
      currency:"Galleons",
      specialOffer: "Pair with ruby jewelry for a free wand stand.",
      sizeOptions: ["XS", "S", "M", "L"],
      shipping: {
        processing: "3 magical days",
        freeDeliveryThreshold: "200 Galleons"
      }
    },
    {
      id: 23,
      name: "Celestial Starfire Wizard Robe",
      description: "Dive into the cosmos with this deep blue robe featuring a silver trim and constellation designs embroidered across the chest and back. Includes a matching pointed hat with silver stars and leather boots. The silver wand with a glowing sapphire tip completes this celestial look.",
      keyFeatures: [
        "Material: Midnight-blue satin with embroidered constellations.",
        "Design: Cosmic patterns for a starlit effect.",
        "Set Includes: Robe, pointed hat, boots, and silver wand."
      ],
      image:[bimg1],
      price: 38,
      currency:"Galleons",
      category:"Women",
      specialOffer: "Bundle with an astrological book for 5 Galleons off.",
      sizeOptions: ["M", "L", "XL"],
      shipping: {
        processing: "2-4 magical days"
      }
    },
    {
      id: 24,
      name: "Frostbite Wizard Gown",
      description: "This elegant blue wizard robe has an icy shimmer and flowing sleeves. The silver belt cinches the waist, while the glowing sapphire necklace adds a frosty aura. Perfect for spellcasting in style.",
      keyFeatures: [
        "Material: Silk infused with frost-resistance charms.",
        "Design: Frost-like patterns resembling magical ice.",
        "Set Includes: Gown, belt, and sapphire necklace."
      ],
      image:[bimg2],
      category:"Women",
      price: 42,
      currency:"Galleons",
      specialOffer: "Free icy wand charm for purchases above 50 Galleons.",
      sizeOptions: ["S", "M", "L"],
      bestseller:true,
    },
    {
      id: 25,
      name: "Sunny Sprout Kid's Robe",
      description: "A playful green robe featuring tiny golden star patterns, a hood, and a pouch for magical trinkets. Includes a wand with a glowing green gem, perfect for little wizards.",
      keyFeatures: [
        "Material: Durable enchanted cotton.",
        "Design: Star patterns for a magical touch.",
        "Set Includes: Robe, hood, pouch, and wand."
      ],
      image:[gimg1],
      category:"Kids",
      price: 15,
      currency:"Galleons",
      specialOffer: "Free trinket pouch with every purchase.",
      sizeOptions: ["Kids 4-6", "6-8", "8-10"],
      bestseller:true,
    },
    {
      id: 26,
      name: "Radiant Sunburst Wizard Robe",
      description: "A cheerful yellow robe with sunburst patterns and a flowing cape. Includes a bronze wand holster and enchanted boots for added stamina during long magical duels.",
      keyFeatures: [
        "Material: Lightweight, enchanted fabric.",
        "Design: Sunburst patterns with subtle golden accents.",
        "Set Includes: Robe, cape, boots, and wand holster."
      ],
      image:[yimg1],
      category:"women",
      price: 37,
      currency:"Galleons",
      specialOffer: "Free sunburst-themed wand case with purchase.",
      sizeOptions: ["S", "M", "L", "XL"],
      bestseller:true,
    },
    {
      id: 27,
      name: "Amber Glow Wizard Gown",
      description: "A radiant yellow gown with a fitted bodice, golden threads, and small amber gemstones. Comes with a golden tiara and a wand with a glowing topaz.",
      keyFeatures: [
        "Material: Satin with magical gemstones.",
        "Design: Subtle glow and flare.",
        "Set Includes: Gown, tiara, and wand."
      ],
      image:[yimg2],
      category:"Women",
      price: 40,
      currency:"Galleons",
      specialOffer: null,
      sizeOptions: ["S", "M", "L"],
      bestseller:true,
    },
    {
      id: 28,
      name: "Lunar Lilac Kid's Robe",
      description: "A playful purple robe with silver star and moon designs. Includes a wand that sparkles with purple light, making every spell fun.",
      keyFeatures: [
        "Material: Soft enchanted cotton.",
        "Set Includes: Robe, gloves, and sparkling wand."
      ],
      image:[pimg1],
      category:"Kids",
      price: 18 ,
      currency:"Galleons",
      specialOffer: null,
      sizeOptions: ["Kids 6-8", "8-10", "10-12"]
    },
    {
      id: 29,
      name: "Midnight Mystique Wizard Robe",
      description: "A deep purple robe with silver celestial patterns along the chest and sleeves. Includes a silver-edged cape and wide-brimmed hat with a crystal center.",
      keyFeatures: [
        "Material: Velvet with glowing runes.",
        "Set Includes: Robe, cape, and hat."
      ],
      image:[pimg2],
      category:"Women",
      price: 45,
      currency:"Galleons",
      specialOffer: null,
      sizeOptions: ["M", "L", "XL"],
      bestseller:true,
    },
    {
      id: 30,
      name: "Amethyst Enchantment Gown",
      description: "A flowing purple gown with shimmering sleeves and a high collar, trimmed with silver and gold runes. Includes a wand encrusted with amethysts.",
      keyFeatures: [
        "Material: Enchanted silk.",
        "Set Includes: Gown and wand."
      ],
      image:[pimg3],
      category:"Women",
      price: 48,
      currency:"Galleons",
      specialOffer: null,
      sizeOptions: ["XS", "S", "M", "L"],
      bestseller:true,
    },
   {
      id: 31,
      name: "Stardust Rose Wizard Robe",
      description: "A cute and playful pink wizard robe adorned with golden stars and a sparkly cape. Includes a small wand with a glowing heart-shaped tip, perfect for young wizards exploring their magical abilities.",
      keyFeatures: [
        "Material: Lightweight, durable enchanted fabric.",
        "Design: Golden star patterns with a sparkly cape.",
        "Set Includes: Robe, cape, and heart-tipped wand."
      ],
      image:[piimg1],
      category:"Kids",
      price: 14,
      currency:"Galleons",
      specialOffer: "Add a magical hairband for just 1 Galleon.",
      sizeOptions: ["Kids 4-6", "6-8", "8-10"],
      bestseller:true,
    },
    {
      id: 32,
      name: "Sunset Bloom Wizard Robe",
      description: "A light pink wizard robe featuring rose gold trim and delicate vine patterns. Comes with a rose gold wand holster and matching gloves, ideal for a sophisticated yet magical look.",
      keyFeatures: [
        "Material: Premium enchanted cotton for comfort.",
        "Design: Subtle floral patterns with vine embroidery.",
        "Set Includes: Robe, wand holster, and gloves."
      ],
      image:[piimg2],
      category:"Women",
      price: 38,
      currency:"Galleons",
      specialOffer: null,
      sizeOptions: ["S", "M", "L", "XL"],
      bestseller:true,
    },
   ]