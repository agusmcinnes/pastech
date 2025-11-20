"use client"

import { CheckCircle2 } from 'lucide-react'
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('about')

  return (
    <section id="nosotros" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('badge')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('description')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-primary h-5 w-5" /> {t('mission.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('mission.content')}
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="text-secondary h-5 w-5" /> {t('vision.title')}
                </h3>
                <p className="text-muted-foreground">
                  {t('vision.content')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src="/agronomist-using-tablet-in-field.jpg"
                alt="Equipo Pastech en campo"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                <p className="text-white font-medium text-lg">
                  "{t('tool')}"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
