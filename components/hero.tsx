"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Made the overlay darker (from /60 to /75) */}
        <div className="absolute inset-0 bg-black/75 z-10" />
        {/* Updated the hero image source */}
        <img
          src="/images/hero-pastech.jpg"
          alt="Campo con tecnología agrícola"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-20 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Innovación en gestión ganadera
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Tecnología para gestionar el pasto con <span className="text-primary">precisión.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Medimos, analizamos y gestionamos el pasto con herramientas conectadas que transforman datos en decisiones
            productivas y sustentables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 h-12 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              Comenzá gratis
            </Button>
            
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
        
      </motion.div>
    </section>
  )
}
