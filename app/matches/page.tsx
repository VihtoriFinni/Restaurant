"use client";

import { useState } from "react";
import Link from "next/link";
import { matches, sportCategories } from "@/lib/mock-data";
import { ArrowLeft, Calendar, Tv, Filter, CheckCircle } from "lucide-react";

export default function MatchesPage() {
  const [selectedSport, setSelectedSport] = useState("all");
  const [showOnlyOnScreen, setShowOnlyOnScreen] = useState(false);

  // Get unique sports from matches
  const availableSports = Array.from(new Set(matches.map((m) => m.sport)));

  // Filter matches
  const filteredMatches = matches.filter((match) => {
    const sportMatch = selectedSport === "all" || match.sport === selectedSport;
    const screenMatch = !showOnlyOnScreen || match.shownOnScreen;
    return sportMatch && screenMatch;
  });

  // Group matches by date
  const matchesByDate = filteredMatches.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = [];
    }
    acc[match.date].push(match);
    return acc;
  }, {} as Record<string, typeof matches>);

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
              <Link href="/menu" className="hover:text-amber-400 transition-colors">Menu</Link>
              <Link href="/events" className="hover:text-amber-400 transition-colors">Events</Link>
              <Link href="/matches" className="text-amber-400">Matches</Link>
              <Link href="/activities" className="hover:text-amber-400 transition-colors">Activities</Link>
              <Link href="/info" className="hover:text-amber-400 transition-colors">Info</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-green-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-green-100 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Match Schedule</h1>
          <p className="text-green-100 text-lg">All the big games on our screens</p>
        </div>
      </header>

      {/* Today's Matches Bar */}
      <div className="bg-green-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">
              {matches.filter(m => m.shownOnScreen).length} matches showing this week
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-green-600" />
                <h3 className="font-bold text-lg">Filters</h3>
              </div>

              {/* Show on screen toggle */}
              <div className="mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showOnlyOnScreen}
                    onChange={(e) => setShowOnlyOnScreen(e.target.checked)}
                    className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
                  />
                  <div>
                    <span className="font-medium">Showing on big screens</span>
                    <p className="text-sm text-stone-500">Only matches shown at the venue</p>
                  </div>
                </label>
              </div>

              {/* Sport filter */}
              <div>
                <h4 className="font-medium mb-3">Filter by Sport</h4>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedSport("all")}
                    className={`w-full text-left py-2 px-3 rounded-lg transition-colors flex items-center gap-2 ${
                      selectedSport === "all"
                        ? "bg-green-100 text-green-800 font-medium"
                        : "hover:bg-stone-50"
                    }`}
                  >
                    <span>All Sports</span>
                  </button>
                  {availableSports.map((sport) => {
                    const category = sportCategories.find((c) => c.id === sport);
                    return (
                      <button
                        key={sport}
                        onClick={() => setSelectedSport(sport)}
                        className={`w-full text-left py-2 px-3 rounded-lg transition-colors flex items-center gap-2 ${
                          selectedSport === sport
                            ? "bg-green-100 text-green-800 font-medium"
                            : "hover:bg-stone-50"
                        }`}
                      >
                        <span>{category?.icon || "🏆"}</span>
                        <span className="capitalize">{sport.replace("-", " ")}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {Object.keys(matchesByDate).length > 0 ? (
              <div className="space-y-6">
                {Object.entries(matchesByDate)
                  .sort(([a], [b]) => a.localeCompare(b))
                  .map(([date, dayMatches]) => (
                    <div key={date}>
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-green-600" />
                        <h2 className="text-xl font-bold">
                          {new Date(date).toLocaleDateString("en-FI", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                          })}
                        </h2>
                      </div>
                      <div className="grid gap-4">
                        {dayMatches.map((match) => (
                          <MatchCard key={match.id} match={match} />
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <p className="text-stone-500 mb-4">No matches found with your selected filters.</p>
                <button
                  onClick={() => {
                    setSelectedSport("all");
                    setShowOnlyOnScreen(false);
                  }}
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  Clear all filters
                </button>
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

function MatchCard({ match }: { match: typeof matches[0] }) {
  const sportCategory = sportCategories.find((c) => c.id === match.sport);

  return (
    <div className={`bg-white rounded-xl shadow-md p-5 border-l-4 ${
      match.shownOnScreen ? "border-green-500" : "border-stone-300"
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="text-3xl">{sportCategory?.icon || "🏆"}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs px-2 py-0.5 bg-stone-100 text-stone-600 rounded font-medium">
                {match.league}
              </span>
              {match.shownOnScreen && (
                <span className="text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded font-medium flex items-center gap-1">
                  <Tv className="w-3 h-3" />
                  On Screen
                </span>
              )}
            </div>
            <h3 className="font-bold text-lg">
              {match.homeTeam} vs {match.awayTeam}
            </h3>
            <p className="text-sm text-stone-500">Channel: {match.channel}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-600">{match.time}</div>
          <button
            onClick={() => {
              // Add to calendar functionality (placeholder)
              const eventDate = new Date(match.date);
              alert(`Add to calendar:\n${match.homeTeam} vs ${match.awayTeam}\n${eventDate.toLocaleDateString()} at ${match.time}`);
            }}
            className="text-sm text-green-600 hover:text-green-700 font-medium"
          >
            + Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
}
