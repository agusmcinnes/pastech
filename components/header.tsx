"use client"

import * as React from "react"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { Menu, X, Ruler, Satellite, Plane, Brain, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslations } from 'next-intl'

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [solutionsOpen, setSolutionsOpen] = React.useState(false)
  const closeTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  const t = useTranslations('header')

  const solutions = [
    {
      title: t('solutionsMenu.pasturometer.title'),
      href: "#pasturometro",
      description: t('solutionsMenu.pasturometer.description'),
      icon: Ruler,
    },
    {
      title: t('solutionsMenu.satellite.title'),
      href: "#satelital",
      description: t('solutionsMenu.satellite.description'),
      icon: Satellite,
    },
    {
      title: t('solutionsMenu.drone.title'),
      href: "#dron",
      description: t('solutionsMenu.drone.description'),
      icon: Plane,
    },
    {
      title: t('solutionsMenu.intelligent.title'),
      href: "#inteligente",
      description: t('solutionsMenu.intelligent.description'),
      icon: Brain,
    },
  ]

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setSolutionsOpen(true)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false)
    }, 150)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed px-8 md:px-10 top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isOpen ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-12 w-30">
              <Image
                src="/images/logo-pastech.png"
                alt="Pastech Logo"
                fill
                className={`object-contain object-left transition-all duration-300 ${
                  !isScrolled && !isOpen ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-primary transition-colors rounded-md hover:bg-white/5">
              {t('home')}
            </Link>

            <DropdownMenu modal={false} open={solutionsOpen} onOpenChange={setSolutionsOpen}>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

              >
                <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-primary transition-colors outline-none rounded-md hover:bg-white/5 cursor-pointer">
                  {t('solutions')} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-[320px] p-2 z-1000"
                  sideOffset={4}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {solutions.map((solution) => (
                    <DropdownMenuItem key={solution.title} asChild className="focus:bg-white/10 data-[highlighted]:bg-white/10">
                      <Link href={solution.href} className="flex items-start gap-3 p-3 rounded-md cursor-pointer hover:bg-white/10 transition-colors">
                        <solution.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-medium text-white">{solution.title}</span>
                          <span className="text-xs text-white/60">{solution.description}</span>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </div>
            </DropdownMenu>

            <Link href="#testimonios" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-primary transition-colors rounded-md hover:bg-white/5">
              {t('testimonials')}
            </Link>

            <Link href="#nosotros" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-primary transition-colors rounded-md hover:bg-white/5">
              {t('about')}
            </Link>

            <Link href="#alianzas" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-primary transition-colors rounded-md hover:bg-white/5">
              {t('community')}
            </Link>

            <Link href="#novedades" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-primary transition-colors rounded-md hover:bg-white/5">
              {t('news')}
            </Link>

            <Link href="#contacto" className="px-4 py-2 text-sm font-medium text-white/80 hover:text-primary transition-colors rounded-md hover:bg-white/5">
              {t('contact')}
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="hidden lg:block">
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fullscreen */}
      {isOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-20 min-h-[calc(100vh-5rem)] bg-background border-t border-border">
          <div className="container mx-auto px-6 py-8 flex flex-col">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-lg font-medium text-white hover:text-primary py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('home')}
              </Link>

              {/* Soluciones Mobile Accordion */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-lg font-medium text-white py-3">
                  {t('solutions')}
                </div>
                <div className="flex flex-col gap-1 pl-4 border-l-2 border-primary/50">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.title}
                      href={solution.href}
                      className="flex items-center gap-3 text-base text-white/70 hover:text-primary py-3 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <solution.icon className="w-5 h-5" />
                      {solution.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="#testimonios"
                className="text-lg font-medium text-white hover:text-primary py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('testimonials')}
              </Link>
              <Link
                href="#nosotros"
                className="text-lg font-medium text-white hover:text-primary py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href="#alianzas"
                className="text-lg font-medium text-white hover:text-primary py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('communityAlliances')}
              </Link>
              <Link
                href="#novedades"
                className="text-lg font-medium text-white hover:text-primary py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('news')}
              </Link>
              <Link
                href="#contacto"
                className="text-lg font-medium text-white hover:text-primary py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t('contact')}
              </Link>
            </nav>

            <div className="mt-8">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
