"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from 'lucide-react'
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'

export function News() {
  const t = useTranslations('news')

  const news = [
    {
      id: 1,
      title: t('items.launch.title'),
      date: "15 Nov 2024",
      category: t('items.launch.category'),
      image: "/placeholder.svg?height=400&width=600&text=Nuevo+Dispositivo",
      excerpt: t('items.launch.description'),
    },
    {
      id: 2,
      title: t('items.expo.title'),
      date: "02 Oct 2024",
      category: t('items.expo.category'),
      image: "/placeholder.svg?height=400&width=600&text=Expo+Rural",
      excerpt: t('items.expo.description'),
    },
    {
      id: 3,
      title: t('items.alliance.title'),
      date: "20 Sep 2024",
      category: t('items.alliance.category'),
      image: "/placeholder.svg?height=400&width=600&text=Alianza+INTA",
      excerpt: t('items.alliance.description'),
    },
  ]

  return (
    <section id="novedades" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('title')}</h2>
            <p className="text-muted-foreground text-lg">
              {t('subtitle')}
            </p>
          </div>
          <Button variant="outline" className="text-foreground border-foreground/20 hover:bg-foreground/5">
            {t('viewAll')}
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
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">{item.excerpt}</p>
              <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transition-transform">
                {t('readMore')} <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
