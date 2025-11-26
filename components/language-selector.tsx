"use client"

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { Globe, ChevronDown } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const languages = [
  { code: 'es', label: 'ES', fullName: 'Español' },
  { code: 'en', label: 'EN', fullName: 'English' },
  { code: 'pt', label: 'PT', fullName: 'Português' },
]

interface LanguageSelectorProps {
  isScrolled?: boolean
}

export function LanguageSelector({ isScrolled = true }: LanguageSelectorProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const currentLang = languages.find(lang => lang.code === locale) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    router.replace(pathname, { locale: langCode })
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`flex items-center cursor-pointer gap-2 px-3 py-2 text-sm font-medium transition-colors ${
            isScrolled ? "text-foreground/80 hover:bg-foreground/5" : "text-white/90 hover:bg-white/10"
          }`}
        >
          <Globe className="w-4 h-4" />
          <span>{currentLang.label}</span>
          <ChevronDown className="w-3 h-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-1000 w-[140px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`cursor-pointer ${
              locale === lang.code ? 'bg-primary/10 text-primary ' : ''
            }`}
          >
            <span className="text-sm font-medium">{lang.fullName}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
