import Link from "next/link";
import { restaurantInfo, activities, matches, events } from "@/lib/mock-data";
import { MapPin, Clock, Phone, Mail, Calendar, Trophy } from "lucide-react";

export default function HomePage() {
  // Get today's matches and events
  const todayMatches = matches.filter(m => m.date === new Date().toISOString().split('T')[0]);
  const upcomingEvents = events.slice(0, 3);

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
              <span className="text-xl font-bold">{restaurantInfo.name}</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/menu" className="hover:text-amber-400 transition-colors">Menu</Link>
              <Link href="/events" className="hover:text-amber-400 transition-colors">Events</Link>
              <Link href="/matches" className="hover:text-amber-400 transition-colors">Matches</Link>
              <Link href="/activities" className="hover:text-amber-400 transition-colors">Activities</Link>
              <Link href="/info" className="hover:text-amber-400 transition-colors">Info</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/reservations"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Reserve
              </Link>
              <a
                href="https://wolt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-700 hover:bg-stone-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Order
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900 text-white py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{restaurantInfo.name}</h1>
          <p className="text-xl md:text-2xl text-amber-400 mb-8">{restaurantInfo.tagline}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-3 rounded-lg text-lg transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/reservations"
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors border border-white/20"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Matches Quick View */}
      {todayMatches.length > 0 && (
        <section className="bg-amber-500 text-black py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6" />
                <span className="font-bold">Today on Big Screens:</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {todayMatches.map((match) => (
                  <span key={match.id} className="font-medium">
                    {match.homeTeam} vs {match.awayTeam} ({match.time})
                  </span>
                ))}
              </div>
              <Link href="/matches" className="underline font-medium hover:no-underline">
                Full Schedule →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quick Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Clock className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-stone-600">
                <p>Mon - Thu: {restaurantInfo.hours.monday.open} - {restaurantInfo.hours.thursday.close}</p>
                <p>Friday: {restaurantInfo.hours.friday.open} - {restaurantInfo.hours.friday.close}</p>
                <p>Saturday: {restaurantInfo.hours.saturday.open} - {restaurantInfo.hours.saturday.close}</p>
                <p>Sunday: {restaurantInfo.hours.sunday.open} - {restaurantInfo.hours.sunday.close}</p>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <MapPin className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Find Us</h3>
              <p className="text-stone-600 mb-2">{restaurantInfo.address.street}</p>
              <p className="text-stone-600 mb-4">{restaurantInfo.address.postalCode} {restaurantInfo.address.city}</p>
              <Link href="/info#map" className="text-amber-600 hover:text-amber-700 font-medium">
                Get Directions →
              </Link>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Phone className="w-12 h-12 text-amber-500 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-stone-600">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {restaurantInfo.contact.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {restaurantInfo.contact.email}
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <a href={restaurantInfo.contact.socials.instagram} className="text-amber-600 hover:text-amber-700">Instagram</a>
                <a href={restaurantInfo.contact.socials.facebook} className="text-amber-600 hover:text-amber-700">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {activities.map((activity) => (
              <Link
                key={activity.id}
                href="/activities"
                className="bg-stone-50 hover:bg-stone-100 rounded-xl p-6 text-center transition-colors group"
              >
                <div className="text-5xl mb-4">{activity.icon}</div>
                <h3 className="font-bold text-lg mb-2">{activity.name}</h3>
                <p className="text-sm text-stone-500 line-clamp-2">{activity.description}</p>
                {activity.hasBooking && (
                  <span className="inline-block mt-3 text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-medium group-hover:bg-amber-200">
                    {activity.bookingType === "email" ? "Inquire" : "Book Online"}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Upcoming Events</h2>
            <Link href="/events" className="text-amber-600 hover:text-amber-700 font-medium text-lg">
              View All →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-48 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white text-6xl">
                  {event.category === "quiz" && "🧠"}
                  {event.category === "concert" && "🎸"}
                  {event.category === "bingo" && "🎱"}
                  {event.category === "sports-viewing" && "🏆"}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-amber-600 text-sm font-medium mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(event.date).toLocaleDateString("en-FI", { weekday: "short", month: "short", day: "numeric" })}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-stone-500 mb-4">{event.description}</p>
                  {event.isRecurring && (
                    <span className="text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full">
                      {event.recurrencePattern}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">{restaurantInfo.name}</h4>
              <p className="text-sm">{restaurantInfo.tagline}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
                <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
                <li><Link href="/matches" className="hover:text-white transition-colors">Match Schedule</Link></li>
                <li><Link href="/activities" className="hover:text-white transition-colors">Activities</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>{restaurantInfo.contact.phone}</li>
                <li>{restaurantInfo.contact.email}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href={restaurantInfo.contact.socials.instagram} className="hover:text-white">Instagram</a>
                <a href={restaurantInfo.contact.socials.facebook} className="hover:text-white">Facebook</a>
              </div>
            </div>
          </div>
          <div className="border-t border-stone-700 pt-8 text-sm text-center">
            <p>© 2026 {restaurantInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
