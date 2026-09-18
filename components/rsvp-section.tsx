import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const BROOKE_EMAIL = "brookersvp@gmail.com"

const mailtoHref = `mailto:${BROOKE_EMAIL}?subject=${encodeURIComponent(
  "RSVP: Annapolis Boatyard Bash",
)}&body=${encodeURIComponent(
  "Hi Brooke,\n\nI'd love to RSVP for the Annapolis Boatyard Bash on Friday, October 23.\n\nName:\nNumber of guests:\n\nThanks!",
)}`

export function RsvpSection() {
  return (
    <section id="rsvp" className="bg-[#0f2846] px-6 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="flex mx-auto mb-6 h-14 w-14 items-center justify-center rounded-full bg-white/10 text-sky-100">
          <Mail className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 className="text-3xl font-semibold sm:text-4xl">RSVP</h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-sky-100">
          Admission is free — just let us know you&apos;re coming. Reach out to
          Brooke by email to reserve your spot.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#0f2846] hover:bg-sky-100"
          >
            <a href={mailtoHref}>Email Brooke to RSVP</a>
          </Button>
        </div>
        <p className="mt-5 text-sm text-sky-200/80">
          Open to all Annapolis residents.
        </p>
      </div>
    </section>
  )
}
