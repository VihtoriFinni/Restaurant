import Link from "next/link";
import { integrations } from "@/lib/mock-data";
import { ArrowLeft, Calendar, Clock, Users } from "lucide-react";

export default function ReservationsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Reservations</h1>
          <p className="text-amber-100 text-lg">Book your table in advance</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Widget */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b bg-stone-50">
                <h2 className="text-2xl font-bold">Make a Reservation</h2>
                <p className="text-stone-500 mt-1">Powered by {integrations.reservations.platform === "tableonline" ? "TableOnline" : "SevenRooms"}</p>
              </div>

              {/* Placeholder for booking widget iframe */}
              <div className="p-8 bg-stone-100 min-h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Booking Widget</h3>
                  <p className="text-stone-500 mb-6 max-w-md">
                    The {integrations.reservations.platform === "tableonline" ? "TableOnline" : "SevenRooms"} booking widget
                    will be embedded here. For now, use the button below to make a reservation.
                  </p>
                  <a
                    href={integrations.reservations.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    Open {integrations.reservations.platform === "tableonline" ? "TableOnline" : "SevenRooms"} Booking
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* To use real widget, uncomment and replace with actual iframe: */}
              {/* <div dangerouslySetInnerHTML={{ __html: integrations.reservations.embedCode }} /> */}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Reservation Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Reservation Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Opening Hours</h4>
                    <p className="text-sm text-stone-500">Mon-Thu 11:00-23:00</p>
                    <p className="text-sm text-stone-500">Fri 11:00-01:00</p>
                    <p className="text-sm text-stone-500">Sat 12:00-01:00</p>
                    <p className="text-sm text-stone-500">Sun 12:00-22:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Groups</h4>
                    <p className="text-sm text-stone-500">For groups over 10, please email us directly.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Large Groups */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">Large Groups & Events</h3>
              <p className="text-blue-100 text-sm mb-4">
                Planning a birthday, company event, or other celebration? We have options for you!
              </p>
              <a
                href="mailto:info@restaurantxx.fi?subject=Large%20Group%20Inquiry"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors text-sm"
              >
                Contact Us
              </a>
            </div>

            {/* VIP Area */}
            <div className="bg-gradient-to-br from-amber-600 to-amber-500 text-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">VIP Area</h3>
              <p className="text-amber-100 text-sm mb-4">
                Looking for a private experience? Ask about our VIP area.
              </p>
              <Link
                href="/activities"
                className="inline-flex items-center gap-2 bg-white text-amber-700 font-semibold py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors text-sm"
              >
                Learn More
              </Link>
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
