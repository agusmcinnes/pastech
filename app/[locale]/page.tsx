import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { Solutions } from "@/components/solutions"
import { Stats } from "@/components/stats"
import { Alliances } from "@/components/alliances"
import { Testimonials } from "@/components/testimonials"
import { News } from "@/components/news"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Solutions />
      <Stats />
      <Alliances />
      <About />
      <News />
      <Contact />
      <Footer />
    </main>
  )
}
