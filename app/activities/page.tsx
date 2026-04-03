import Link from "next/link";
import { activities } from "@/lib/mock-data";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";

export default function ActivitiesPage() {
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
              <Link href="/activities" className="text-amber-400">Activities</Link>
              <Link href="/info" className="hover:text-amber-400 transition-colors">Info</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Activities</h1>
          <p className="text-blue-100 text-lg">More than just great food and sports</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>

      {/* Photo Gallery Section (Placeholder) */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg flex items-center justify-center text-stone-400"
              >
                📷
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://instagram.com/restaurantxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              See more on Instagram
            </a>
          </div>
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

function ActivityCard({ activity }: { activity: typeof activities[0] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-7xl">
        {activity.icon}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{activity.name}</h3>
        <p className="text-stone-600 mb-6">{activity.description}</p>

        {activity.hasBooking ? (
          activity.bookingType === "email" ? (
            <a
              href={activity.bookingUrl || "#"}
              className="flex items-center justify-center gap-2 w-full bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              <Mail className="w-4 h-4" />
              Send Inquiry
            </a>
          ) : (
            <a
              href={activity.bookingUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              Book Now
              <ExternalLink className="w-4 h-4" />
            </a>
          )
        ) : (
          <div className="flex items-center justify-center w-full bg-stone-100 text-stone-500 font-medium py-3 px-4 rounded-lg">
            Walk-in Only
          </div>
        )}
      </div>
    </div>
  );
}
