"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function Contact() {
  const t = useTranslations('contact')

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('title')}</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {t('subtitle')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t('email')}</h3>
                  <p className="text-muted-foreground">contacto@pastech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t('phone')}</h3>
                  <p className="text-muted-foreground">+54 9 11 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{t('offices')}</h3>
                  <p className="text-muted-foreground">{t('address')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 shadow-sm">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    {t('form.name')}
                  </label>
                  <Input id="name" placeholder={t('form.namePlaceholder')} className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    {t('form.phone')}
                  </label>
                  <Input id="phone" placeholder={t('form.phonePlaceholder')} className="bg-background border-border" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  {t('form.email')}
                </label>
                <Input id="email" type="email" placeholder={t('form.emailPlaceholder')} className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  {t('form.message')}
                </label>
                <Textarea
                  id="message"
                  placeholder={t('form.messagePlaceholder')}
                  className="min-h-[120px] bg-background border-border"
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12">
                {t('form.submit')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
