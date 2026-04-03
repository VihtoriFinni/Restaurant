import Link from "next/link";
import { restaurantInfo } from "@/lib/mock-data";
import { ArrowLeft, MapPin, Phone, Mail, Clock, Accessibility, Car } from "lucide-react";

export default function InfoPage() {
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
              <Link href="/matches" className="hover:text-amber-400 transition-colors">Matches</Link>
              <Link href="/activities" className="hover:text-amber-400 transition-colors">Activities</Link>
              <Link href="/info" className="text-amber-400">Info</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-stone-700 to-stone-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-stone-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Visit Us</h1>
          <p className="text-stone-200 text-lg">All the information you need to plan your visit</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map Section */}
            <section id="map" className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-6 h-6 text-amber-600" />
                  <h2 className="text-2xl font-bold">Location</h2>
                </div>
                <p className="text-stone-600">
                  {restaurantInfo.address.street}, {restaurantInfo.address.postalCode} {restaurantInfo.address.city}
                </p>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.5!2d24.9375!3d60.1708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDEwJzE1LjAiTiAyNMKwNTYnMTUuMCJF!5e0!3m2!1sen!2sfi!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
              <div className="p-6 bg-stone-50">
                <h3 className="font-bold mb-2">Directions</h3>
                <p className="text-stone-600 mb-4">{restaurantInfo.map.directions}</p>
                <div className="flex items-start gap-2">
                  <Car className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Parking</h4>
                    <p className="text-stone-600 text-sm">{restaurantInfo.map.parking}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Opening Hours */}
            <section className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold">Opening Hours</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(restaurantInfo.hours).map(([day, times]) => (
                  <div
                    key={day}
                    className={`flex justify-between p-3 rounded-lg ${
                      day === "saturday" || day === "sunday"
                        ? "bg-amber-50"
                        : "bg-stone-50"
                    }`}
                  >
                    <span className="font-medium capitalize">{day}</span>
                    <span className="text-stone-600">
                      {times.open} - {times.close}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Accessibility */}
            <section className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-6">
                <Accessibility className="w-6 h-6 text-amber-600" />
                <h2 className="text-2xl font-bold">Accessibility</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <AccessibilityItem
                  available={restaurantInfo.accessibility.wheelchairAccessible}
                  label="Wheelchair Accessible"
                />
                <AccessibilityItem
                  available={restaurantInfo.accessibility.hasDisabledToilet}
                  label="Accessible Toilet"
                />
                <AccessibilityItem
                  available={restaurantInfo.accessibility.hasHearingLoop}
                  label="Hearing Loop"
                />
                <AccessibilityItem
                  available={restaurantInfo.accessibility.hasBrailleMenu}
                  label="Braille Menu"
                />
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-medium mb-2">Entrance</h4>
                <p className="text-stone-600 text-sm">{restaurantInfo.accessibility.accessibleEntrance}</p>
                <p className="text-stone-600 text-sm mt-2">{restaurantInfo.accessibility.notes}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${restaurantInfo.contact.phone}`}
                  className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Phone</div>
                    <div className="font-medium">{restaurantInfo.contact.phone}</div>
                  </div>
                </a>
                <a
                  href={`mailto:${restaurantInfo.contact.email}`}
                  className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-stone-500">Email</div>
                    <div className="font-medium">{restaurantInfo.contact.email}</div>
                  </div>
                </a>
              </div>
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href={restaurantInfo.contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Instagram
                  </a>
                  <a
                    href={restaurantInfo.contact.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/reservations"
                  className="block w-full text-center py-3 px-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors"
                >
                  Make a Reservation
                </Link>
                <a
                  href="https://wolt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 px-4 bg-stone-700 hover:bg-stone-800 text-white font-semibold rounded-lg transition-colors"
                >
                  Order on Wolt
                </a>
              </div>
            </div>

            {/* Google Reviews */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Reviews</h3>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-stone-600 text-sm">4.8 (127 reviews)</span>
              </div>
              <a
                href={restaurantInfo.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 px-4 border border-stone-300 hover:bg-stone-50 rounded-lg transition-colors text-sm"
              >
                View on Google Maps
              </a>
            </div>
          </aside>
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

function AccessibilityItem({ available, label }: { available: boolean; label: string }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg ${
      available ? "bg-green-50" : "bg-stone-100"
    }`}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
        available ? "bg-green-500" : "bg-stone-300"
      }`}>
        {available && (
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      <span className={`font-medium ${available ? "text-green-700" : "text-stone-500"}`}>
        {label}
      </span>
    </div>
  );
}
