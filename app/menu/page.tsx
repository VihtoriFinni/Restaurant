"use client";

import { useState } from "react";
import Link from "next/link";
import { mainMenu, lunchMenu, allergenInfo } from "@/lib/mock-data";
import { ArrowLeft, Leaf, Flame, Check } from "lucide-react";

const ALLERGEN_KEYS = Object.keys(allergenInfo);

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("starters");
  const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
  const [showLunch, setShowLunch] = useState(false);

  const currentCategory = mainMenu.find((cat) => cat.id === selectedCategory) || mainMenu[0];

  // Filter items by selected allergens
  const filteredItems = currentCategory.items.filter((item) => {
    if (selectedAllergens.length === 0) return true;
    // Show items that DON'T contain any of the selected allergens
    return !selectedAllergens.some((allergen) =>
      item.allergens.includes(allergen)
    );
  });

  const toggleAllergen = (allergen: string) => {
    setSelectedAllergens((prev) =>
      prev.includes(allergen)
        ? prev.filter((a) => a !== allergen)
        : [...prev, allergen]
    );
  };

  const clearFilters = () => setSelectedAllergens([]);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-stone-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-xl font-bold">
                XX
              </div>
              <span className="text-xl font-bold">Restaurant XX</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/menu" className="text-amber-400">Menu</Link>
              <Link href="/events" className="hover:text-amber-400 transition-colors">Events</Link>
              <Link href="/matches" className="hover:text-amber-400 transition-colors">Matches</Link>
              <Link href="/activities" className="hover:text-amber-400 transition-colors">Activities</Link>
              <Link href="/info" className="hover:text-amber-400 transition-colors">Info</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-amber-600 to-amber-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-amber-100 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Menu</h1>
          <p className="text-amber-100 text-lg">Fresh ingredients, locally sourced, always delicious</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters & Navigation */}
          <aside className="lg:w-72 flex-shrink-0">
            {/* Menu Toggle */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex gap-2">
                <button
                  onClick={() => setShowLunch(true)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    showLunch
                      ? "bg-amber-500 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  Lunch
                </button>
                <button
                  onClick={() => setShowLunch(false)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    !showLunch
                      ? "bg-amber-500 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  Main Menu
                </button>
              </div>
            </div>

            {/* Categories */}
            {!showLunch && (
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <h3 className="font-bold text-lg mb-3">Categories</h3>
                <div className="space-y-1">
                  {mainMenu.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? "bg-amber-100 text-amber-800 font-medium"
                          : "hover:bg-stone-50"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Allergen Filter */}
            <div className="bg-white rounded-xl shadow-md p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">Filter by Allergens</h3>
                {selectedAllergens.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-amber-600 hover:text-amber-700"
                  >
                    Clear
                  </button>
                )}
              </div>
              <p className="text-sm text-stone-500 mb-3">Select allergens to exclude</p>
              <div className="flex flex-wrap gap-2">
                {ALLERGEN_KEYS.map((key) => (
                  <button
                    key={key}
                    onClick={() => toggleAllergen(key)}
                    title={allergenInfo[key as keyof typeof allergenInfo].name}
                    className={`w-10 h-10 rounded-lg font-bold text-sm transition-all ${
                      selectedAllergens.includes(key)
                        ? "bg-red-500 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>
              {selectedAllergens.length > 0 && (
                <div className="mt-3 p-2 bg-red-50 rounded-lg text-sm">
                  <span className="font-medium text-red-700">Excluding: </span>
                  <span className="text-red-600">
                    {selectedAllergens.map((a) => allergenInfo[a as keyof typeof allergenInfo].name).join(", ")}
                  </span>
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="bg-white rounded-xl shadow-md p-4 mt-6">
              <h3 className="font-bold text-lg mb-3">Symbols</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-green-100 text-green-700 rounded flex items-center justify-center">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <span>Vegetarian / Vegan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-red-100 text-red-700 rounded flex items-center justify-center">
                    <Flame className="w-4 h-4" />
                  </div>
                  <span>Spicy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-amber-100 text-amber-700 rounded flex items-center justify-center text-xs font-bold">
                    🌱
                  </div>
                  <span>Locally Sourced</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {showLunch ? (
              // Lunch Menu
              <div>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h2 className="text-2xl font-bold mb-2">{lunchMenu.name}</h2>
                  <p className="text-stone-500">{lunchMenu.description}</p>
                </div>
                <div className="grid gap-4">
                  {lunchMenu.items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ) : (
              // Main Menu Category
              <div>
                <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                  <h2 className="text-2xl font-bold mb-2">{currentCategory.name}</h2>
                  <p className="text-stone-500">{currentCategory.description}</p>
                </div>
                {filteredItems.length > 0 ? (
                  <div className="grid gap-4">
                    {filteredItems.map((item) => (
                      <MenuItemCard key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-md p-12 text-center">
                    <p className="text-stone-500 mb-4">No items match your filter criteria.</p>
                    <button
                      onClick={clearFilters}
                      className="text-amber-600 hover:text-amber-700 font-medium"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>© 2026 Restaurant XX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function MenuItemCard({ item }: { item: typeof import("@/lib/mock-data").mainMenu[0]["items"][0] }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold">{item.name}</h3>
            {item.dietary.includes("vegetarian") || item.dietary.includes("vegan") ? (
              <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center" title="Vegetarian/Vegan">
                <Leaf className="w-4 h-4" />
              </span>
            ) : null}
            {item.spicy && (
              <span className="w-6 h-6 bg-red-100 text-red-700 rounded-full flex items-center justify-center" title="Spicy">
                <Flame className="w-4 h-4" />
              </span>
            )}
          </div>
          <p className="text-stone-600 mb-3">{item.description}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {item.allergens.length > 0 && (
              <div className="flex items-center gap-1">
                <span className="text-stone-400">Contains:</span>
                {item.allergens.map((allergen) => (
                  <span
                    key={allergen}
                    className="px-2 py-0.5 bg-stone-100 text-stone-600 rounded text-xs font-medium"
                    title={allergenInfo[allergen as keyof typeof allergenInfo]?.name}
                  >
                    {allergen}
                  </span>
                ))}
              </div>
            )}
            {item.sustainability && (
              <span className="text-green-600" title={item.sustainability}>
                🌱 Locally sourced
              </span>
            )}
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-amber-600">{item.price.toFixed(2)}€</span>
        </div>
      </div>
    </div>
  );
}
