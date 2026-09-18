import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react"

const details = [
  {
    icon: CalendarDays,
    label: "Date",
    value: "Friday, October 23, 2026",
  },
  {
    icon: Clock,
    label: "Time",
    value: "6:00 – 9:00 PM",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Annapolis Marina",
  },
  {
    icon: Ticket,
    label: "Admission",
    value: "Free — RSVP required",
  },
]

export function EventDetails() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {details.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-3 border-b border-slate-100 px-6 py-10 text-center last:border-b-0 sm:border-b-0"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-[#0f2846]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              {label}
            </span>
            <span className="text-base font-medium text-[#0f2846]">{value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
