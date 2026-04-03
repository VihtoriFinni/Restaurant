// ============================================================
// RESTAURANT WEBSITE - TYPES
// ============================================================

// ============================================================
// MENU TYPES
// ============================================================

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  allergens: string[];
  sustainability: string;
  dietary: ("vegetarian" | "vegan" | "gluten-free")[];
  spicy: boolean;
};

export type MenuCategory = {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
};

// ============================================================
// EVENT TYPES
// ============================================================

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  category: "quiz" | "concert" | "bingo" | "sports-viewing" | "other";
  isRecurring: boolean;
  recurrencePattern?: string;
  image: string;
  requiresBooking: boolean;
};

// ============================================================
// MATCH TYPES
// ============================================================

export type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  sport: string;
  league: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  shownOnScreen: boolean;
  channel: string;
};

// ============================================================
// ACTIVITY TYPES
// ============================================================

export type Activity = {
  id: string;
  name: string;
  description: string;
  icon: string;
  bookingUrl: string | null;
  bookingType: "external" | "email" | null;
  hasBooking: boolean;
};

// ============================================================
// RESTAURANT INFO TYPES
// ============================================================

export type RestaurantInfo = {
  name: string;
  tagline: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  hours: {
    monday: { open: string; close: string };
    tuesday: { open: string; close: string };
    wednesday: { open: string; close: string };
    thursday: { open: string; close: string };
    friday: { open: string; close: string };
    saturday: { open: string; close: string };
    sunday: { open: string; close: string };
  };
  contact: {
    email: string;
    phone: string;
    socials: {
      instagram: string;
      facebook: string;
    };
  };
  accessibility: {
    wheelchairAccessible: boolean;
    hasDisabledToilet: boolean;
    hasHearingLoop: boolean;
    hasBrailleMenu: boolean;
    accessibleEntrance: string;
    notes: string;
  };
  map: {
    embedUrl: string;
    directions: string;
    parking: string;
  };
};

// ============================================================
// INTEGRATION TYPES
// ============================================================

export type Integrations = {
  reservations: {
    platform: "tableonline" | "sevenrooms";
    url: string;
    embedCode: string;
  };
  wolt: {
    url: string;
    buttonText: string;
  };
  reviews: {
    googlePlaceId: string;
    url: string;
  };
  newsletter: {
    provider: "mailchimp" | "klaviyo";
    formUrl: string;
  };
};
