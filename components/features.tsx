"use client"

import { Activity, BarChart3, Sprout } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    number: "01",
    title: "Medición",
    description: "Dispositivo electrónico de medición de pasto que facilita la toma de datos precisos en campo, eliminando errores manuales.",
    icon: Activity,
    color: "primary"
  },
  {
    number: "02",
    title: "Monitoreo",
    description: "Monitoreo remoto del stock de pasto. Brindamos el dato exacto para que conozcas la disponibilidad forrajera en tiempo real.",
    icon: BarChart3,
    color: "secondary"
  },
  {
    number: "03",
    title: "Gestión",
    description: "Gestión integral en establecimientos ganaderos. Transformamos la información en decisiones para optimizar el aprovechamiento.",
    icon: Sprout,
    color: "accent"
  }
]

export function Features() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container px-4 md:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nuestro proceso
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tres pilares que transforman la gestión de tu campo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-${feature.color}/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-${feature.color}/10`}
            >
              <div className={`absolute -top-6 left-8 text-6xl font-bold text-${feature.color}/10 group-hover:text-${feature.color}/20 transition-colors duration-300`}>
                {feature.number}
              </div>
              <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-${feature.color}/10 text-${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${feature.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
