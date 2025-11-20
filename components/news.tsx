"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from 'lucide-react'
import { motion } from "framer-motion"

const news = [
  {
    id: 1,
    title: "Lanzamiento del nuevo Pasturometro 3.0",
    date: "15 Nov 2024",
    category: "Producto",
    image: "/placeholder.svg?height=400&width=600&text=Nuevo+Dispositivo",
    excerpt: "Mayor precisión y conectividad satelital en nuestro dispositivo insignia.",
  },
  {
    id: 2,
    title: "Pastech presente en la Expo Rural 2024",
    date: "02 Oct 2024",
    category: "Eventos",
    image: "/placeholder.svg?height=400&width=600&text=Expo+Rural",
    excerpt: "Visitá nuestro stand y conocé las últimas novedades en tecnología ganadera.",
  },
  {
    id: 3,
    title: "Alianza estratégica con INTA",
    date: "20 Sep 2024",
    category: "Institucional",
    image: "/placeholder.svg?height=400&width=600&text=Alianza+INTA",
    excerpt: "Firmamos un convenio para validar nuevas métricas de sustentabilidad.",
  },
]

export function News() {
  return (
    <section id="novedades" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Novedades</h2>
            <p className="text-muted-foreground text-lg">
              Las últimas noticias sobre tecnología, eventos y lanzamientos.
            </p>
          </div>
          <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
            Ver todas las noticias
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{item.excerpt}</p>
              <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                Leer más <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
