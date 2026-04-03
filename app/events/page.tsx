"use client";

import { useState } from "react";
import Link from "next/link";
import { events } from "@/lib/mock-data";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const EVENT_CATEGORIES = [
  { id: "all", name: "All Events" },
  { id: "quiz", name: "Quiz" },
  { id: "concert", name: "Live Music" },
  { id: "bingo", name: "Bingo" },
  { id: "sports-viewing", name: "Sports Viewing" },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents = events.filter((event) =>
    selectedCategory === "all" || event.category === selectedCategory
  );

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
              <Link href="/events" className="text-amber-400">Events</Link>
              <Link href="/matches" className="hover:text-amber-400 transition-colors">Matches</Link>
              <Link href="/activities" className="hover:text-amber-400 transition-colors">Activities</Link>
              <Link href="/info" className="hover:text-amber-400 transition-colors">Info</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Events</h1>
          <p className="text-purple-100 text-lg">Join us for quizzes, live music, and more!</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {EVENT_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-purple-600 text-white"
                  : "bg-white text-stone-700 hover:bg-stone-100 shadow-sm"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-stone-500">No events found for this category.</p>
          </div>
        )}
      </div>

      {/* Newsletter Signup */}
      <section className="bg-white py-12 mt-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
          <p className="text-stone-500 mb-6">Subscribe to our newsletter for event updates</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>© 2026 Restaurant XX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function EventCard({ event }: { event: typeof events[0] }) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-FI", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className={`h-48 flex items-center justify-center text-white text-6xl ${
        event.category === "quiz" ? "bg-gradient-to-br from-blue-400 to-blue-600" :
        event.category === "concert" ? "bg-gradient-to-br from-purple-400 to-purple-600" :
        event.category === "bingo" ? "bg-gradient-to-br from-pink-400 to-pink-600" :
        "bg-gradient-to-br from-amber-400 to-amber-600"
      }`}>
        {event.category === "quiz" && "🧠"}
        {event.category === "concert" && "🎸"}
        {event.category === "bingo" && "🎱"}
        {event.category === "sports-viewing" && "🏆"}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-sm text-purple-600 font-medium mb-3">
          <Calendar className="w-4 h-4" />
          {formattedDate}
          <Clock className="w-4 h-4 ml-2" />
          {event.time}
        </div>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-stone-500 mb-4">{event.description}</p>
        {event.isRecurring && event.recurrencePattern && (
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            {event.recurrencePattern}
          </div>
        )}
        <div className="flex gap-2">
          <button
            onClick={() => {
              // Add to calendar functionality (placeholder)
              alert("Add to calendar: " + event.title);
            }}
            className="flex-1 bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            Add to Calendar
          </button>
          <button
            onClick={() => {
              // Share functionality (placeholder)
              if (navigator.share) {
                navigator.share({
                  title: event.title,
                  text: `${event.title} at Restaurant XX - ${formattedDate} at ${event.time}`,
                  url: window.location.href,
                });
              }
            }}
            className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
