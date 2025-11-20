"use client"

import { Star } from 'lucide-react'
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    role: "Productor Ganadero",
    content:
      "Desde que implementamos Pastech, hemos optimizado nuestra carga animal en un 20%. La precisión de los datos es impresionante.",
    rating: 5,
  },
  {
    id: 2,
    name: "María González",
    role: "Ingeniera Agrónoma",
    content:
      "La herramienta satelital nos permite monitorear campos a distancia con una facilidad increíble. Es un cambio de juego para la asesoría técnica.",
    rating: 5,
  },
  {
    id: 3,
    name: "Estancia El Amanecer",
    role: "Empresa Agropecuaria",
    content:
      "El soporte técnico y la calidad de la información nos han permitido tomar decisiones mucho más acertadas en momentos críticos de sequía.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground text-lg">
            Productores y asesores que ya están transformando su gestión con Pastech.
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
