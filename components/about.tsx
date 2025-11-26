"use client"

import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'

export function About() {
  const t = useTranslations('about')

  return (
    <section id="empresa" className="py-24 md:px-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('title')}
            </h2>

            <div className="space-y-4">
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('paragraph1')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('paragraph2')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('paragraph3')}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                {t('paragraph4')}
              </p>
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
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl max-w-xs mx-auto">
              <video
                src="/videos/verde-esperanza.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
