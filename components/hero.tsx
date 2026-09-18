import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/annapolis-marina.png"
        alt="Sailboats docked at the Annapolis marina at dusk with string lights glowing on the water"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0f2846]/70" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center text-white">
        <p className="mb-5 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-sky-100 backdrop-blur-sm">
          A benefit for Annapolis schools
        </p>
        <h1 className="text-balance text-5xl font-semibold leading-tight sm:text-6xl md:text-7xl">
          Annapolis Boatyard Bash
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg text-sky-100 sm:text-xl">
          An evening on the water with live music, drinks, and a silent auction — all to support our local schools.
        </p>
        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#0f2846] hover:bg-sky-100"
          >
            <a href="#rsvp">RSVP — it&apos;s free</a>
          </Button>
          <p className="text-sm font-medium text-sky-100">
            Friday, October 23, 2026 · 6&ndash;9 PM
          </p>
        </div>
      </div>
    </section>
  )
}
