
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from  './img6.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from  './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from  './img14.jpg'
import img15 from './img15.jpg'
import img16 from  './img16.jpg'
import img17 from './img17.jpg'
import img18 from './img18.jpg'
import img19 from './img19.jpg'
import img20 from './img20.jpg'
import img21 from  './img21.jpg'
import img22 from './img22.jpg'
import img23 from './img23.jpg'
import img24 from './img24.jpg'
import img25 from './img25.jpg'
import img26 from './img26.jpg'
import img27 from './img27.jpg'
import img28 from './img28.jpg'
import img29 from './img29.jpg'
import img30 from './img30.jpg'
import img31 from './img31.jpg'
import img32 from './img32.jpg'
import img33 from './img33.jpg'
import img34 from './img34.jpg'
import img35 from './img35.jpg'
import cart1 from './cart1.png'
import cart3 from './cart3.png'
import profile from './profile.png'
import profile1 from './profile1.png'
import profile2 from './profile2.png'
import cart2 from './cart2.png'
import bb1 from './bb1.png'
import dress from './dress.png'
import P from './P.png'
import search1 from './search1.png'
import menu1 from './menu1.png'
import back from './back.png'
import sb from './sb.gif'
import necklace from './necklace.png'
import mbook from './mbook.png'
import r1 from './r1.gif'
import w1 from './w1.png'
import G from './G.png'
import arrow from './arrow.png'
import arrow1 from './arrow1.png'
import cc from './cc.png'
import loc from './loc.gif'
import mw from './mw.gif'
import drr from './drr.gif'
import cross_icon from './cross_icon.png'
import bin_icon from './bin_icon.png'
import razorpay_logo from './razorpay_logo.png'

export const asset = {
  search1,cart1,profile,cart2,bb1,dress,profile1,profile2,cart3,P,menu1
  ,back,mbook,necklace,sb,r1,w1,G,arrow,arrow1,cc,loc,mw,drr,cross_icon,bin_icon,
  razorpay_logo
}
 export const Bookss = [
  {
    id: 1,
    name: "The Standard Book of Spells",
    author: "Miranda Goshawk",
    description: "This essential guide for budding wizards features detailed instructions for mastering basic spells. Its glowing aura reflects the magic within, with silver script surrounded by mystical symbols.",
    price: 12,
    currency: "Galleons",
    image: [img1],
    keyFeatures: [
      "Includes step-by-step spellcasting techniques.",
      "Visual illustrations for proper wand movements.",
      "Beginner-friendly tips for avoiding spell mishaps."
    ],
    extra: "Comes with a free bookmark enchanted to glow when it marks a key page.",
    sizes: ["Standard", "Large"],
    bestseller: true,
    category: "Spells",
    bestseller:true,
  },
  {
    id: 2,
    name: "Magical Theory",
    author: "Adalbert Waffling",
    description: "Dive deep into the science behind magic with this scholarly book featuring ancient runes and glowing diagrams. A must-read for curious wizards who want to understand the 'why' behind the magic.",
    price: 15,
    currency: "Galleons",
    image: [img2],
    keyFeatures: [
      "Explores the mechanics of spell creation.",
      "Annotated diagrams of magical phenomena.",
      "Perfect for advanced wizarding students."
    ],
    extra: "Includes a free chapter on experimental spells.",
    sizes: ["Standard"],
    bestseller: true,
    category: "Theory",
    
  },
  {
    id: 3,
    name: "One Thousand Magical Herbs and Fungi",
    author: "Phyllida Spore",
    description: "A beautifully illustrated guide to magical plants and fungi, highlighting their uses in potions, spells, and healing. Each entry is vividly detailed with glowing illustrations.",
    price: 18,
    currency: "Galleons",
    image: [img3, img4],
    keyFeatures: [
      "Comprehensive descriptions of magical plants.",
      "Tips for cultivating and harvesting rare herbs.",
      "Includes antidote recipes."
    ],
    extra: "Comes with a fold-out map of magical botanical hotspots.",
    sizes: ["Large"],
    category: "Herbology",
    bestseller:true,
  },
  {
    id: 4,
    name: "The Dark Forces: A Guide to Self-Protection",
    author: "Quentin Trimble",
    description: "An invaluable resource for defending against dark magic, this book features protective spells, warding charms, and defensive strategies. Its dark forest-themed cover sets the tone for what’s inside.",
    price: 20,
    currency: "Galleons",
    image: [img1],
    keyFeatures: [
      "Protective spell incantations.",
      "Strategies for recognizing and countering curses.",
      "Illustrated examples of defense techniques."
    ],
    extra: "Includes a free dark arts detection amulet.",
    sizes: ["Standard"],
    category: "Defense"
  },
  {
    id: 5,
    name: "Fantastic Beasts and Where to Find Them",
    author: "Newt Scamander",
    description: "A vibrant guide to magical creatures, showcasing their habitats, behaviors, and magical properties. Perfect for aspiring magizoologists.",
    price: 22,
    currency: "Galleons",
    image: [img5, img6],
    keyFeatures: [
      "Detailed profiles of 100+ magical creatures.",
      "Insight into care and handling techniques.",
      "Enchanted images that move on the page."
    ],
    extra: "Comes with a magical creature tracker journal.",
    sizes: ["Large"],
    bestseller: true,
    category: "Magical-Creatures",
    bestseller:true,
  },
  {
    id: 6,
    name: "The Potions Master's Handbook",
    author: "Anonymous",
    description: "A dark green tome filled with potion recipes, from simple healing drafts to complex transformative elixirs. The cover glows with alchemical symbols.",
    price: 25,
    currency: "Galleons",
    image: [img7, img8, img9, img10],
    keyFeatures: [
      "Step-by-step potion brewing guides.",
      "Includes rare potion variations.",
      "Tips for ingredient substitutions."
    ],
    extra: "Includes a free enchanted spoon that stirs potions on its own.",
    sizes: ["Standard"],
    bestseller: true,
    category: "Potions",
    bestseller:true,
  },
  {
    id: 7,
    name: "The Herbology Companion",
    author: "Dr. Wilhelmina Guffy",
    description: "A soft, botanical guide featuring vibrant magical herbs and their uses in spells, potions, and charms. Ideal for herbology enthusiasts.",
    price: 16,
    currency: "Galleons",
    image: [img11, img12, img13, img14],
    keyFeatures: [
      "Color-coded sections for easy reference.",
      "Illustrations of magical herbs in different stages of growth.",
      "Field notes from expert herbologists."
    ],
    extra: "Comes with an enchanted seed pouch to grow a random magical herb.",
    sizes: ["Standard"],
    category: "Herbology",
    bestseller:true,
  },
  {
    id: 8,
    name: "The Book of Charms and Spells",
    author: "Professor Casandra Pindle",
    description: "A colorful spellbook filled with unique charms and spell variations for every situation. It’s designed for creative wizards eager to expand their magical arsenal.",
    price: 19,
    currency: "Galleons",
    image: [img31, img32, img33, img34],
    keyFeatures: [
      "50+ creative charm recipes.",
      "Wand technique visual guides.",
      "Includes enchanted practice scrolls."
    ],
    extra: "Free glowing quill for spell annotation.",
    sizes: ["Standard"],
    bestseller: true,
    category: "Charms",
    bestseller:true,
  },
  {
    id: 9,
    name: "A History of Magic",
    author: "Bathilda Bagshot",
    description: "This leather-bound classic chronicles key events, legendary figures, and the evolution of magical society. The cover’s vintage engravings give it an ancient charm.",
    price: 30,
    currency: "Galleons",
    image: [img15, img16],
    keyFeatures: [
      "Timelines of magical events.",
      "Portraits of iconic wizards and witches.",
      "Rare artifacts and spell origins."
    ],
    extra: "Includes a free enchanted scroll with historical trivia.",
    sizes: ["Large"],
    category: "History",
    bestseller:true,
  },
  {
    id: 10,
    name: "The Complete Guide to Wizarding Plants and Their Potions",
    author: "Various Experts",
    description: "A detailed guide connecting magical plants to their uses in potion-making, with vivid illustrations and brewing instructions.",
    price: 24,
    currency: "Galleons",
    image: [img17],
    keyFeatures: [
      "Cross-referenced sections for plants and potions.",
      "Detailed illustrations of plant anatomy.",
      "Includes advanced brewing tips."
    ],
    extra: "Includes a bonus chapter on creating hybrid magical plants.",
    sizes: ["Standard"],
    bestseller: true,
    category: "Herbology"
  },
  {
    id: 11,
    name: "Charmed Ingredients",
    author: "Elowen Sparkflick",
    description: "This mystical book focuses on enchanted ingredients like phoenix feathers and powdered unicorn horn, explaining their magical properties and uses in spells and potions.",
    price: 20,
    currency: "Galleons",
    image: [img18, img19],
    keyFeatures: [
      "Detailed properties of 50+ rare magical ingredients.",
      "Includes recipes for potions and charms using the ingredients.",
      "Glossary of magical symbols related to ingredient use."
    ],
    extra: "Comes with a magical ingredient pouch that keeps contents fresh.",
    sizes: ["Standard"],
    category: "Potions"
  },
  // ...Continue for the remaining books with their respective categories.
  {
    id: 12,
    name: "Enchanted Enigmas: Magical Riddles and Puzzles",
    author: "Riddlum Lockhart",
    description: "A fascinating collection of magical riddles, puzzles, and enchanted brain-teasers designed to challenge even the wisest wizards.",
    price: 14,
    currency: "Galleons",
    image: [img20, img21],
    keyFeatures: [
      "100+ unique magical puzzles and riddles.",
      "Interactive enchanted pages that change when solved.",
      "Includes solutions and magical tips."
    ],
    extra: "Comes with a charmed bookmark that hints at puzzle solutions.",
    sizes: ["Standard"],
    category: "Miscellaneous"
  },
  {
    id: 13,
    name: "Secrets of the Dark Arts",
    author: "Igor Grimshade",
    description: "A controversial book detailing the history, spells, and practices of dark magic. Only for those daring to explore the shadows.",
    price: 28,
    currency: "Galleons",
    image: [img22],
    keyFeatures: [
      "Explains forbidden spells and their effects.",
      "History of dark wizards and their rise to power.",
      "Includes techniques for resisting the lure of dark magic."
    ],
    extra: "Comes with a charm to keep the book hidden from prying eyes.",
    sizes: ["Standard"],
    category: "Defense",
    bestseller:true,
  },
  {
    id: 14,
    name: "The Care and Taming of Magical Creatures",
    author: "Luna Wistling",
    description: "A practical guide to handling magical creatures, from nurturing baby dragons to taming mischievous nifflers.",
    price: 21,
    currency: "Galleons",
    image: [img23],
    keyFeatures: [
      "Step-by-step care instructions for 30+ creatures.",
      "Safety tips for handling dangerous species.",
      "Field notes from magizoologists."
    ],
    extra: "Includes a free magical leash for creatures.",
    sizes: ["Standard"],
    category: "Magical-Creatures"
  },
  {
    id: 15,
    name: "Runes Unraveled",
    author: "Elara Glyph",
    description: "A deep dive into the world of magical runes, their meanings, and their uses in spell crafting and enchantments.",
    price: 17,
    currency: "Galleons",
    image: [img24],
    keyFeatures: [
      "Comprehensive guide to 100+ magical runes.",
      "Instructions for inscribing runes on objects.",
      "Illustrations of ancient rune scripts."
    ],
    extra: "Includes a free enchanted rune stencil set.",
    sizes: ["Standard"],
    category: "Enchantments",
    bestseller:true,
  },
  {
    id: 16,
    name: "Advanced Potion Brewing",
    author: "Horace Slughorn",
    description: "A definitive guide for experienced potion masters, featuring advanced recipes and techniques.",
    price: 26,
    currency: "Galleons",
    image: [img25],
    keyFeatures: [
      "Advanced potion recipes for rare effects.",
      "Illustrations of brewing techniques and tools.",
      "Tips for potion storage and preservation."
    ],
    extra: "Comes with a mini cauldron charm for practice.",
    sizes: ["Large"],
    category: "Potions"
  },
  {
    id: 17,
    name: "Mysteries of Time Travel",
    author: "Chronos Timekeeper",
    description: "A spellbinding book exploring the intricacies of magical time travel, from theories to practical applications.",
    price: 30,
    currency: "Galleons",
    image: [img26],
    keyFeatures: [
      "Theories of time loops and paradoxes.",
      "Spells and artifacts linked to time travel.",
      "Case studies of famous wizards who altered time."
    ],
    extra: "Includes a charm to pause the book mid-read and resume later.",
    sizes: ["Standard"],
    category: "Miscellaneous"
  },
  {
    id: 18,
    name: "Wandlore: The Art and Science of Wandmaking",
    author: "Garrick Ollivander",
    description: "An in-depth exploration of wand craftsmanship, from materials to the magic they channel.",
    price: 22,
    currency: "Galleons",
    image: [img27],
    keyFeatures: [
      "Profiles of wand woods and cores.",
      "Guidelines for wand care and maintenance.",
      "Insights into wand compatibility with wizards."
    ],
    extra: "Includes a miniature wand core sample kit.",
    sizes: ["Standard"],
    category: "Enchantments"
  },
  {
    id: 19,
    name: "Astronomy for Magical Beings",
    author: "Celestia Nova",
    description: "A stellar guide to the magical constellations, their lore, and their influence on spells and potions.",
    price: 18,
    currency: "Galleons",
    image: [img28],
    keyFeatures: [
      "Maps of magical constellations.",
      "Rituals aligned with celestial events.",
      "Myths and legends of magical astronomy."
    ],
    extra: "Includes a glow-in-the-dark star chart.",
    sizes: ["Standard"],
    category: "Astronomy"
  },
  {
    id: 20,
    name: "The Secrets of Hogwarts",
    author: "Hogwarts Founders",
    description: "A rare collection of secrets, spells, and legends tied to Hogwarts School of Witchcraft and Wizardry.",
    price: 35,
    currency: "Galleons",
    image: [img29],
    keyFeatures: [
      "Maps of secret passages and rooms.",
      "Histories of Hogwarts houses and founders.",
      "Exclusive spells taught only at Hogwarts."
    ],
    extra: "Includes an enchanted Hogwarts crest bookmark.",
    sizes: ["Large"],
    category: "History"
  }

  ]
  
  


