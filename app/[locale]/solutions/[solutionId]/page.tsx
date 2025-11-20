import { getTranslations } from 'next-intl/server'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, Satellite, Ruler, Plane, BrainCircuit, Layers } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const solutionConfig = {
  pasturometro: {
    icon: Ruler,
    color: "text-primary",
    bg: "bg-primary/10",
    translationKey: "pasturometer"
  },
  satelital: {
    icon: Satellite,
    color: "text-secondary",
    bg: "bg-secondary/10",
    translationKey: "satellite"
  },
  dron: {
    icon: Plane,
    color: "text-accent",
    bg: "bg-accent/10",
    translationKey: "drone"
  },
  inteligente: {
    icon: BrainCircuit,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    translationKey: "intelligent"
  },
  "gestion-pastoreo": {
    icon: Layers,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    translationKey: "grazingManagement"
  }
}

type SolutionId = keyof typeof solutionConfig

export async function generateStaticParams() {
  return Object.keys(solutionConfig).map((solutionId) => ({
    solutionId,
  }))
}

interface PageProps {
  params: Promise<{
    locale: string
    solutionId: string
  }>
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { locale, solutionId } = await params

  if (!(solutionId in solutionConfig)) {
    notFound()
  }

  const config = solutionConfig[solutionId as SolutionId]
  const t = await getTranslations('solutions')

  const Icon = config.icon
  const title = t(`${config.translationKey}.title`)
  const description = t(`${config.translationKey}.description`)
  const longDescription = t(`detail.${config.translationKey}.longDescription`)
  const features = t.raw(`detail.${config.translationKey}.features`) as string[]
  const benefits = t.raw(`detail.${config.translationKey}.benefits`) as string[]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-card">
        <div className="container px-4 md:px-6">
          <Link
            href={`/${locale}/#soluciones`}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('detail.backToSolutions')}
          </Link>

          <div className="flex items-start gap-6">
            <div className={`w-16 h-16 rounded-xl ${config.bg} flex items-center justify-center shrink-0`}>
              <Icon className={`w-8 h-8 ${config.color}`} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {longDescription}
              </p>

              <div className="mt-8">
                <Link href={`/${locale}/#contacto`}>
                  <Button size="lg" className="w-full sm:w-auto">
                    {t('detail.contact')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="space-y-8">
              {/* Features */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  {t('detail.features')}
                </h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${config.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Check className={`w-3 h-3 ${config.color}`} />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  {t('detail.benefits')}
                </h2>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full ${config.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                        <Check className={`w-3 h-3 ${config.color}`} />
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
