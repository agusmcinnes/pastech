"use client"

import { Star } from 'lucide-react'
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'

export function Testimonials() {
  const t = useTranslations('testimonials')

  const testimonials = [
    {
      id: 1,
      name: t('items.carlos.name'),
      role: t('items.carlos.role'),
      content: t('items.carlos.content'),
      rating: 5,
    },
    {
      id: 2,
      name: t('items.maria.name'),
      role: t('items.maria.role'),
      content: t('items.maria.content'),
      rating: 5,
    },
    {
      id: 3,
      name: t('items.estancia.name'),
      role: t('items.estancia.role'),
      content: t('items.estancia.content'),
      rating: 5,
    },
  ]

  return (
    <section id="testimonios" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-muted-foreground text-lg">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
