import { Music, Wine, Utensils, Gavel } from "lucide-react"

const highlights = [
  {
    icon: Music,
    title: "Live music",
    description: "A local band on the docks to set the evening mood.",
  },
  {
    icon: Wine,
    title: "Drinks",
    description: "Sip something refreshing as the sun goes down.",
  },
  {
    icon: Utensils,
    title: "Light snacks",
    description: "Bites to enjoy while you mingle by the water.",
  },
  {
    icon: Gavel,
    title: "Silent auction",
    description: "Bid on great finds — every dollar supports our schools.",
  },
]

export function AboutEvent() {
  return (
    <section className="bg-slate-50 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-[#0f2846] sm:text-4xl">
          Join the Boatyard Bash
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-slate-600">
          Annapolis neighbors, come raise money for Annapolis schools at a
          relaxed evening down at the marina. Bring your friends and enjoy live
          music, drinks, light snacks, and a silent auction — all for a great cause.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {highlights.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0f2846] text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-[#0f2846]">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
