export interface NavLink {
  label: string
  href: string
}

export interface Specialty {
  id: string
  title: string
  description: string
  icon: string
}

export interface TimelineItem {
  year: string
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

export interface Credential {
  icon: string
  label: string
  value: string
}

export type Modality = 'presencial' | 'online'

export type TimePreference = 'manha' | 'tarde' | 'noite'

export interface BookingFormData {
  fullName: string
  email: string
  phone: string
  modality: Modality
  timePreferences: TimePreference[]
  message?: string
  lgpdConsent: boolean
}

export interface SiteConfig {
  psychologist: {
    name: string
    title: string
    crp: string
    approach: string
    tagline: string
    bio: string
    photoAlt: string
  }
  contact: {
    email: string
    phone: string
    whatsapp: string
    whatsappDisplay: string
    address: string
    neighborhood: string
    city: string
    schedule: string
  }
  responseTimeHours: number
}
