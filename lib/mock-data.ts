// ============================================================
// RESTAURANT WEBSITE - MOCK DATA
// ============================================================
// This file contains all mock data for the prototype.
// When ready to integrate Sanity/Contentful, replace these
// imports with CMS client calls.
//
// STORAGE: Uses localStorage for admin edits during testing
// ============================================================

import { MenuCategory, MenuItem, Event, Match, Activity } from '@/types';

// ============================================================
// RESTAURANT INFO
// ============================================================

export const restaurantInfo = {
  name: "Restaurant XX",
  tagline: "Great Food. Great Sports. Great Times.",
  address: {
    street: "Example Street 12",
    city: "Helsinki",
    postalCode: "00100",
    country: "Finland"
  },
  hours: {
    monday: { open: "11:00", close: "23:00" },
    tuesday: { open: "11:00", close: "23:00" },
    wednesday: { open: "11:00", close: "23:00" },
    thursday: { open: "11:00", close: "23:00" },
    friday: { open: "11:00", close: "01:00" },
    saturday: { open: "12:00", close: "01:00" },
    sunday: { open: "12:00", close: "22:00" }
  },
  contact: {
    email: "info@restaurantxx.fi",
    phone: "+358 10 123 4567",
    socials: {
      instagram: "https://instagram.com/restaurantxx",
      facebook: "https://facebook.com/restaurantxx"
    }
  },
  accessibility: {
    wheelchairAccessible: true,
    hasDisabledToilet: true,
    hasHearingLoop: false,
    hasBrailleMenu: true,
    accessibleEntrance: "Street level entrance, no steps",
    notes: "We strive to make our venue accessible to everyone. Contact us for specific requirements."
  },
  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.123456789!2d24.9375!3d60.1708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDEwJzE1LjAiTiAyNMKwNTYnMTUuMCJF!5e0!3m2!1sen!2sfi!4v1234567890",
    directions: " Located in the heart of Helsinki. Closest tram stop: Erotaja (lines 3, 6). Parking available at Erottaja parking garage (entrance on Annankatu).",
    parking: "Erottaja parking garage (250m) - Mon-Sun 7-24. Street parking available (paid Mon-Fri 9-21, free on weekends)."
  }
};

// ============================================================
// MENU DATA
// ============================================================

const allergens = {
  gluten: "GL",
  milk: "M",
  egg: "EG",
  fish: "F",
  shellfish: "S",
  soy: "SO",
  celery: "C",
  mustard: "MU",
  sesame: "SE",
  lupin: "L",
  mollusk: "MO",
  nuts: "N",
  peanuts: "P"
};

export const lunchMenu: MenuCategory = {
  id: "lunch",
  name: "Lunch Menu",
  description: "Available Mon-Fri 11:00-15:00",
  items: [
    {
      id: "lunch-1",
      name: "Burger of the Day",
      description: "House-ground beef, cheddar, lettuce, tomato, house sauce, fries",
      price: 16.90,
      allergens: ["gluten", "milk", "eggs"],
      sustainability: "Local beef from farms within 50km",
      dietary: [],
      spicy: false
    },
    {
      id: "lunch-2",
      name: "Fish & Chips",
      description: "Battered haddock, hand-cut fries, mushy peas, tartare",
      price: 18.90,
      allergens: ["gluten", "fish", "milk", "eggs"],
      sustainability: "MSC-certified sustainable haddock",
      dietary: [],
      spicy: false
    },
    {
      id: "lunch-3",
      name: "Vegetarian Bowl",
      description: "Roasted vegetables, quinoa, hummus, tahini, pickled onions",
      price: 14.90,
      allergens: ["sesame"],
      sustainability: "Seasonal vegetables from local farms",
      dietary: ["vegetarian", "vegan"],
      spicy: false
    },
    {
      id: "lunch-4",
      name: "Chicken Wings",
      description: "6 pieces, choice of sauce (buffalo, bbq, garlic)",
      price: 13.90,
      allergens: ["gluten"],
      sustainability: "Finnish chicken",
      dietary: [],
      spicy: true
    }
  ]
};

export const mainMenu: MenuCategory[] = [
  {
    id: "starters",
    name: "Starters",
    description: "Kick things off",
    items: [
      {
        id: "starter-1",
        name: "Buffalo Wings",
        description: "Crispy chicken wings, buffalo sauce, blue cheese dip, celery sticks",
        price: 12.90,
        allergens: ["gluten", "milk"],
        sustainability: "Finnish chicken, locally sourced celery",
        dietary: [],
        spicy: true
      },
      {
        id: "starter-2",
        name: "Loaded Nachos",
        description: "Tortilla chips, chili con carne, cheese sauce, jalapeños, sour cream, guacamole",
        price: 14.90,
        allergens: ["gluten", "milk"],
        sustainability: "Beef from local farm, Finnish dairy",
        dietary: [],
        spicy: true
      },
      {
        id: "starter-3",
        name: "Soup of the Day",
        description: "Ask your server for today's selection. Served with sourdough bread",
        price: 9.90,
        allergens: ["gluten", "milk"],
        sustainability: "Made from scratch using seasonal ingredients",
        dietary: [],
        spicy: false
      }
    ]
  },
  {
    id: "burgers",
    name: "Burgers",
    description: "All burgers served with fries",
    items: [
      {
        id: "burger-1",
        name: "The XX Classic",
        description: "House-ground beef patty, cheddar, lettuce, tomato, red onion, pickles, house sauce, brioche bun",
        price: 19.90,
        allergens: ["gluten", "milk", "eggs"],
        sustainability: "Beef from farms within 50km, local vegetables",
        dietary: [],
        spicy: false
      },
      {
        id: "burger-2",
        name: "Blue Cheese Bacon",
        description: "Beef patty, bacon, blue cheese, caramelized onions, arugula, truffle mayo",
        price: 22.90,
        allergens: ["gluten", "milk", "eggs"],
        sustainability: "Finnish blue cheese, local beef",
        dietary: [],
        spicy: false
      },
      {
        id: "burger-3",
        name: "Beyond Burger",
        description: "Plant-based patty, vegan cheese, lettuce, tomato, onion, pickles, vegan mayo",
        price: 20.90,
        allergens: ["gluten"],
        sustainability: "Plant-based, lower carbon footprint",
        dietary: ["vegetarian", "vegan"],
        spicy: false
      },
      {
        id: "burger-4",
        name: "Spicy Jalapeño",
        description: "Beef patty, pepper jack cheese, jalapeños, chipotle mayo, lettuce, tomato",
        price: 20.90,
        allergens: ["gluten", "milk", "eggs"],
        sustainability: "Local beef, Finnish dairy",
        dietary: [],
        spicy: true
      }
    ]
  },
  {
    id: "mains",
    name: "Mains",
    description: "Heartier options",
    items: [
      {
        id: "main-1",
        name: "Ribeye Steak",
        description: "300g Finnish beef, herb butter, fries, peppercorn sauce",
        price: 32.90,
        allergens: ["gluten", "milk", "eggs"],
        sustainability: "Premium beef from local farm",
        dietary: [],
        spicy: false
      },
      {
        id: "main-2",
        name: "Fish & Chips",
        description: "Battered haddock, hand-cut fries, mushy peas, tartare sauce, lemon",
        price: 21.90,
        allergens: ["gluten", "fish", "milk", "eggs"],
        sustainability: "MSC-certified haddock",
        dietary: [],
        spicy: false
      },
      {
        id: "main-3",
        name: "Vegetarian Poke Bowl",
        description: "Marinated tofu, rice, edamame, avocado, mango, seaweed, pickled ginger, sesame",
        price: 18.90,
        allergens: ["soy", "sesame"],
        sustainability: "Locally grown vegetables",
        dietary: ["vegetarian", "vegan"],
        spicy: false
      }
    ]
  },
  {
    id: "sides",
    name: "Sides",
    description: "Extra to share",
    items: [
      {
        id: "side-1",
        name: "French Fries",
        description: "Hand-cut, skin-on",
        price: 5.90,
        allergens: ["gluten"],
        sustainability: "Finnish potatoes",
        dietary: ["vegetarian", "vegan"],
        spicy: false
      },
      {
        id: "side-2",
        name: "Onion Rings",
        description: "Beer-battered, served with ranch",
        price: 6.90,
        allergens: ["gluten", "milk", "eggs"],
        sustainability: "Local onions",
        dietary: [],
        spicy: false
      },
      {
        id: "side-3",
        name: "Buffalo Wings (6pc)",
        description: "Choice of sauce: buffalo, bbq, garlic",
        price: 12.90,
        allergens: ["gluten", "milk"],
        sustainability: "Finnish chicken",
        dietary: [],
        spicy: true
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet endings",
    items: [
      {
        id: "dessert-1",
        name: "Chocolate Brownie",
        description: "Warm chocolate brownie, vanilla ice cream, chocolate sauce",
        price: 8.90,
        allergens: ["gluten", "milk", "eggs"],
        sustainability: "Belgian chocolate, Finnish dairy",
        dietary: ["vegetarian"],
        spicy: false
      },
      {
        id: "dessert-2",
        name: "Affogato",
        description: "Vanilla ice cream, hot espresso shot",
        price: 7.90,
        allergens: ["milk"],
        sustainability: "Finnish dairy",
        dietary: ["vegetarian"],
        spicy: false
      }
    ]
  },
  {
    id: "drinks",
    name: "Drinks",
    description: "Beverages",
    items: [
      {
        id: "drink-1",
        name: "Coca-Cola / Coke Zero",
        description: "0.33l",
        price: 4.90,
        allergens: [],
        sustainability: "",
        dietary: ["vegetarian", "vegan"],
        spicy: false
      },
      {
        id: "drink-2",
        name: "Local Craft Beer",
        description: "Ask your server for today's selection",
        price: 7.90,
        allergens: ["gluten"],
        sustainability: "Finnish microbreweries",
        dietary: [],
        spicy: false
      },
      {
        id: "drink-3",
        name: "House Wine",
        description: "Red or white, 0.125l",
        price: 6.90,
        allergens: ["sulfites"],
        sustainability: "European organic wines",
        dietary: ["vegetarian", "vegan"],
        spicy: false
      }
    ]
  }
];

// ============================================================
// EVENTS
// ============================================================

export const events: Event[] = [
  {
    id: "event-1",
    title: "Live Quiz Night",
    description: "Test your knowledge! Teams of 2-6. Prizes for winners!",
    date: "2026-04-05",
    time: "19:00",
    category: "quiz",
    isRecurring: true,
    recurrencePattern: "Every Wednesday",
    image: "/events/quiz.jpg",
    requiresBooking: false
  },
  {
    id: "event-2",
    title: "Live Music: The Rocking Boys",
    description: "Classic rock and roll covers all night long!",
    date: "2026-04-12",
    time: "20:00",
    category: "concert",
    isRecurring: false,
    image: "/events/concert.jpg",
    requiresBooking: false
  },
  {
    id: "event-3",
    title: "Bingo Night",
    description: "Traditional bingo with great prizes! Free entry.",
    date: "2026-04-07",
    time: "18:00",
    category: "bingo",
    isRecurring: true,
    recurrencePattern: "Every Sunday",
    image: "/events/bingo.jpg",
    requiresBooking: false
  },
  {
    id: "event-4",
    title: "F1 Race Viewing - Monaco GP",
    description: "Watch the race on our big screens with fellow F1 fans!",
    date: "2026-05-25",
    time: "15:00",
    category: "sports-viewing",
    isRecurring: false,
    image: "/events/f1.jpg",
    requiresBooking: false
  }
];

// ============================================================
// MATCH SCHEDULE
// ============================================================

export const matches: Match[] = [
  {
    id: "match-1",
    homeTeam: "Finland",
    awayTeam: "Sweden",
    sport: "ice-hockey",
    league: "Liiga",
    date: "2026-04-05",
    time: "18:30",
    shownOnScreen: true,
    channel: "TV2"
  },
  {
    id: "match-2",
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    sport: "soccer",
    league: "Premier League",
    date: "2026-04-06",
    time: "17:00",
    shownOnScreen: true,
    channel: "Viaplay"
  },
  {
    id: "match-3",
    homeTeam: "Tappara",
    awayTeam: "Ilves",
    sport: "ice-hockey",
    league: "Liiga",
    date: "2026-04-06",
    time: "17:30",
    shownOnScreen: true,
    channel: "TV2"
  },
  {
    id: "match-4",
    homeTeam: "Finland",
    awayTeam: "Canada",
    sport: "ice-hockey",
    league: "IIHF World Championship",
    date: "2026-05-10",
    time: "16:20",
    shownOnScreen: true,
    channel: "TV2"
  },
  {
    id: "match-5",
    homeTeam: "HIFK",
    awayTeam: "Jokerit",
    sport: "ice-hockey",
    league: "Liiga",
    date: "2026-04-07",
    time: "16:00",
    shownOnScreen: false,
    channel: "TV2"
  },
  {
    id: "match-6",
    homeTeam: "NHL: Playoffs Game 1",
    awayTeam: "TBD",
    sport: "ice-hockey",
    league: "NHL",
    date: "2026-04-08",
    time: "02:00",
    shownOnScreen: true,
    channel: "Viasat"
  }
];

// ============================================================
// ACTIVITIES
// ============================================================

export const activities: Activity[] = [
  {
    id: "activity-darts",
    name: "Darts",
    description: "Professional dart boards available. Reserve your lane online!",
    icon: "🎯",
    bookingUrl: "https://example-booking.com/darts",
    bookingType: "external",
    hasBooking: true
  },
  {
    id: "activity-billiards",
    name: "Billiards",
    description: "Two pool tables available. First come, first served.",
    icon: "🎱",
    bookingUrl: null,
    bookingType: null,
    hasBooking: false
  },
  {
    id: "activity-f1",
    name: "F1 Simulators",
    description: "Two professional racing simulators with force feedback. Race your friends!",
    icon: "🏎️",
    bookingUrl: "https://example-booking.com/f1",
    bookingType: "external",
    hasBooking: true
  },
  {
    id: "activity-vip",
    name: "VIP Area",
    description: "Private area with dedicated service and premium views. Perfect for groups and events.",
    icon: "👑",
    bookingUrl: "mailto:info@restaurantxx.fi?subject=VIP%20Area%20Inquiry",
    bookingType: "email",
    hasBooking: true
  },
  {
    id: "activity-kids",
    name: "Kids' Playroom",
    description: "Safe and fun play area for children. Parental supervision required.",
    icon: "🧸",
    bookingUrl: null,
    bookingType: null,
    hasBooking: false
  }
];

// ============================================================
// EXTERNAL INTEGRATIONS
// ============================================================

export const integrations = {
  reservations: {
    platform: "tableonline", // or "sevenrooms"
    url: "https://tableonline.com/restaurant-xx",
    embedCode: '<iframe src="https://widget.tableonline.com/restaurant-xx" width="100%" height="600" frameborder="0"></iframe>'
  },
  wolt: {
    url: "https://wolt.com/en/fin/helsinki/restaurant/restaurant-xx",
    buttonText: "Order on Wolt"
  },
  reviews: {
    googlePlaceId: "ChIJxxxxxxxxxxxxxxx",
    url: "https://maps.google.com/?cid=123456789"
  },
  newsletter: {
    provider: "mailchimp", // or "klaviyo"
    formUrl: "https://restaurantxx.us1.list-manage.com/subscribe/post"
  }
};

// ============================================================
// ALLERGEN INFO
// ============================================================

export const allergenInfo = {
  GL: { name: "Gluten", description: "Wheat, barley, rye" },
  M: { name: "Milk", description: "Cow's milk and products" },
  EG: { name: "Eggs", description: "Chicken eggs" },
  F: { name: "Fish", description: "All fish species" },
  S: { name: "Shellfish", description: "Crustaceans and mollusks" },
  SO: { name: "Soy", description: "Soybeans" },
  C: { name: "Celery", description: "Celery and celeriac" },
  MU: { name: "Mustard", description: "Mustard products" },
  SE: { name: "Sesame", description: "Sesame seeds" },
  L: { name: "Lupin", description: "Lupin beans" },
  MO: { name: "Mollusks", description: "Mollusks" },
  N: { name: "Nuts", description: "Tree nuts" },
  P: { name: "Peanuts", description: "Peanuts" },
  sulfites: { name: "Sulfites", description: "Sulfur dioxide" }
};

// ============================================================
// SPORTS CATEGORIES (for filtering)
// ============================================================

export const sportCategories = [
  { id: "ice-hockey", name: "Ice Hockey", icon: "🏒" },
  { id: "soccer", name: "Soccer", icon: "⚽" },
  { id: "formula1", name: "Formula 1", icon: "🏎️" },
  { id: "basketball", name: "Basketball", icon: "🏀" },
  { id: "skiing", name: "Skiing", icon: "🎿" },
  { id: " athletics", name: "Athletics", icon: "🏃" }
];
