export interface NavLink {
  label: string
  href: string
}

export interface Specialty {
  id: string
  title: string
  description: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export interface ArriveItem {
  index: string
  text: string
}

export interface Principle {
  index: string
  title: string
  description: string
}

export interface ConsultorioPhoto {
  id: 'sala-atendimento' | 'detalhe-ambiente' | 'recepcao-corredor'
  alt: string
  caption: string
}

export type Modality = 'presencial' | 'online'
export type TimePreference = 'manha' | 'tarde' | 'noite'

export interface BookingFormData {
  fullName: string
  email: string
  phone: string
  modality: Modality
  preferredDate: Date
  timePreferences: TimePreference[]
  message?: string
  lgpdConsent: boolean
}

export interface SiteConfig {
  url: string
  psychologist: {
    name: string
    shortName: string
    title: string
    approach: string
    bio: string
    quote: string
    photoAlt: string
  }
  brand: {
    identification: string
    heroTitle: string
    heroBody: string
    heroCta: string
    heroPractical: string
  }
  contact: {
    email: string
    phone: string
    address: string
    neighborhood: string
    city: string
    schedule: string
    mapsQuery: string
  }
  social: {
    instagram: string
    linkedin: string
  }
  emergency: {
    cvv: string
    samu: string
  }
  responseTimeHours: number
  conceptualNotice: string
}
