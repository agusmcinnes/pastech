"use client"

import { motion } from "framer-motion"
import { useTranslations } from 'next-intl'
import Image from "next/image"

const cofounders = [
  { name: "Fernando Genin", role: "Co-Founder & CEO", image: "/team/Fernando Genin.png", imageStyle: "" },
  { name: "Juan Insua", role: "Co-Founder & International R&D & Technology Director", image: "/team/Juan-Insua.png", imageStyle: "" },
  { name: "Alejandra Marino", role: "Co-Founder & Regional Business Development & Logistics Director", image: "/team/Alejandra Marino.jpg", imageStyle: "" }
]

const team = [
  { name: "Ciro Tapia", role: "Commercial Strategy Director", image: "/team/Ciro Tapia.jpg", imageStyle: "" },
  { name: "Yael Arricar", role: "Marketing & Communications Director", image: "/team/Yael Arricar.jpg", imageStyle: "" },
  { name: "Celina Laplacette", role: "Agricultural Data Analyst", image: "/team/Celina Laplacette.jpg", imageStyle: "" },
  { name: "Teo Ramos Kees", role: "DevOps Engineer", image: "/team/Teo Ramos Kees.jpg", imageStyle: "" },
  { name: "Lucas De Lellis", role: "Software Engineer", image: "/team/Lucas De Lellis.jpg", imageStyle: "" },
  { name: "Ramiro Fulgueira", role: "Communication & Design Analyst", image: "/team/Ramiro Fulgueira.jpg", imageStyle: "" },
  { name: "Oliver Fast", role: "Pastech Partner Uruguay", image: "/team/Oliver Fast.jpg", imageStyle: "" }
]

interface TeamMember {
  name: string
  role: string
  image: string
  imageStyle: string
}

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2"
    >
      {/* Imagen con overlay */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${member.imageStyle}`}
        />
        {/* Gradiente overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.35_0.15_145)] via-[oklch(0.45_0.18_140)/60%] to-transparent" />
      </div>

      {/* Contenido sobre la imagen */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-lg drop-shadow-md">{member.name}</h3>
        <p className="text-white/90 text-sm mt-1 leading-snug drop-shadow-sm">{member.role}</p>
      </div>

      {/* Borde sutil */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none" />
    </motion.div>
  )
}

export function Team() {
  const t = useTranslations('team')

  return (
    <section id="equipo" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t('title')}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Co-founders - nivel destacado */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cofounders.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Resto del equipo - grid de 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index + cofounders.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
