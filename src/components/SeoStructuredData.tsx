import { FAQ_ITEMS, SITE } from '@/lib/constants'

export function SeoStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${SITE.url}/#person`,
        name: SITE.psychologist.name,
        jobTitle: SITE.psychologist.title,
        description: SITE.psychologist.bio,
        url: SITE.url,
        image: `${SITE.url}/og-cover.svg`,
        knowsAbout: ['Terapia Cognitivo-Comportamental', 'Psicologia clínica'],
        identifier: {
          '@type': 'PropertyValue',
          name: 'CRP',
          value: SITE.psychologist.crp,
        },
      },
      {
        '@type': 'MedicalBusiness',
        '@id': `${SITE.url}/#business`,
        name: `${SITE.psychologist.name} — ${SITE.psychologist.title}`,
        description: SITE.psychologist.tagline,
        url: SITE.url,
        image: `${SITE.url}/og-cover.svg`,
        telephone: SITE.contact.phone,
        email: SITE.contact.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.contact.address,
          addressLocality: 'Belo Horizonte',
          addressRegion: 'MG',
          addressCountry: 'BR',
        },
        openingHours: 'Mo-Fr 08:00-20:00',
        priceRange: '$$',
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE.url}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
