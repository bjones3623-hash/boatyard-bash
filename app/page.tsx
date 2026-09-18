import { Hero } from "@/components/hero"
import { EventDetails } from "@/components/event-details"
import { AboutEvent } from "@/components/about-event"
import { RsvpSection } from "@/components/rsvp-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <EventDetails />
      <AboutEvent />
      <RsvpSection />
      <SiteFooter />
    </main>
  )
}
