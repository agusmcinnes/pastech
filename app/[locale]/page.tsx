import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Solutions } from "@/components/solutions"
import { Stats } from "@/components/stats"
import { Team } from "@/components/team"
import { Alliances } from "@/components/alliances"
import { Testimonials } from "@/components/testimonials"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Header transparent />
      <Hero />
      <About />
      <Solutions />
      <Stats />
      <Team />
      <News />
      {/* Comunidad: Testimonios + Alianzas */}
      <section id="comunidad">
        <Testimonials />
        <Alliances />
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
