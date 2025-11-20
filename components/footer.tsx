import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-12 w-40">
                <Image 
                  src="/images/logo-pastech.png" 
                  alt="Pastech Logo" 
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Tecnología para gestionar el pasto con precisión. Transformamos datos en decisiones productivas y
              sustentables.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Soluciones</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pasturometro
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pastech Satelital
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pastech Dron
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pastoreo Inteligente
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Novedades
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Pastech. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
