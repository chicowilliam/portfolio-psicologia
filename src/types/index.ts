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
  href?: string
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
    title: string
    headline: string
    crp: string
    approach: string
    tagline: string
    bio: string
    photoAlt: string
    welcomeLine: string
  }
  voice: {
    heroQuote: string
    aboutPullQuote: string
    credentialsNote: string
    bookingReassurance: string
    faqClosing: string
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
  crpVerifyUrl: string
  social: {
    instagram: string
    linkedin: string
  }
  emergency: {
    cvv: string
    samu: string
  }
  responseTimeHours: number
}
