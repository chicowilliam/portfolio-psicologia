import type {
  Credential,
  FAQItem,
  NavLink,
  ProcessStep,
  SiteConfig,
  Specialty,
  TimelineItem,
} from '@/types'

export const SITE: SiteConfig = {
  url: 'https://portfolio-psicologia-theta.vercel.app',
  psychologist: {
    name: 'Dra. Helena Vasconcelos',
    title: 'Psicóloga Clínica',
    headline: 'Psicóloga clínica em Belo Horizonte',
    crp: '04/38921',
    approach: 'Terapia Cognitivo-Comportamental (TCC)',
    tagline:
      'Um espaço seguro para você se escutar, compreender suas emoções e construir caminhos possíveis, no seu ritmo, sem pressa de “resolver tudo”.',
    bio: 'Sou psicóloga clínica formada pela Universidade Federal de Minas Gerais (UFMG), com especialização em Terapia Cognitivo-Comportamental e experiência em atendimento adulto e adolescente. Acredito que a terapia é um processo de autoconhecimento e cuidado, não uma promessa de resultado rápido. Meu trabalho é oferecer escuta qualificada, baseada em evidências científicas, respeitando a singularidade de cada pessoa.',
    photoAlt:
      'Dra. Helena Vasconcelos, psicóloga clínica, em ambiente acolhedor do consultório',
    welcomeLine: 'Olá, fico feliz que você esteja aqui.',
  },
  voice: {
    heroQuote: 'Cuidar de si também é um ato de coragem.',
    aboutPullQuote:
      'Na terapia, não buscamos perfeição. Buscamos um lugar onde você possa ser inteira, com o que pesa e o que espera.',
    credentialsNote:
      'Transparência faz parte do cuidado: você pode verificar meu registro e formação antes de agendar.',
    bookingReassurance:
      'Levo alguns minutos para ler cada mensagem com atenção. Não é robô, não é reserva automática. É um primeiro contato humano.',
    faqClosing:
      'Se ainda ficou alguma dúvida, escreva. Responder com clareza também faz parte do acolhimento.',
  },
  contact: {
    email: 'contato@helenavasconcelos.com.br',
    phone: '+5531987654321',
    whatsapp: '5531987654321',
    whatsappDisplay: '(31) 98765-4321',
    address: 'Rua dos Inconfidentes, 842, Sala 304',
    neighborhood: 'Savassi',
    city: 'Belo Horizonte, MG',
    schedule: 'Segunda a sexta, das 8h às 20h',
    mapsQuery: 'Rua dos Inconfidentes, 842, Savassi, Belo Horizonte, MG',
  },
  crpVerifyUrl: 'https://cadastro.cfp.org.br/',
  social: {
    instagram: '',
    linkedin: '',
  },
  emergency: {
    cvv: '188',
    samu: '192',
  },
  responseTimeHours: 24,
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export const CREDENTIALS: Credential[] = [
  {
    icon: 'badge',
    label: 'Registro profissional',
    value: `CRP ${SITE.psychologist.crp}`,
    href: SITE.crpVerifyUrl,
  },
  {
    icon: 'graduation',
    label: 'Formação',
    value: 'Graduação e especialização em TCC, UFMG',
  },
  {
    icon: 'calendar',
    label: 'Experiência',
    value: 'Mais de 10 anos de atuação clínica',
  },
  {
    icon: 'heart',
    label: 'Abordagem',
    value: 'TCC com foco em acolhimento e evidências',
  },
]

export const TIMELINE: TimelineItem[] = [
  {
    year: '2012',
    title: 'Graduação em Psicologia',
    description: 'Universidade Federal de Minas Gerais (UFMG)',
  },
  {
    year: '2014',
    title: 'Registro no CRP-MG',
    description: `Início da atuação clínica, CRP ${SITE.psychologist.crp}`,
  },
  {
    year: '2016',
    title: 'Especialização em TCC',
    description: 'Formação avançada em Terapia Cognitivo-Comportamental',
  },
  {
    year: '2019',
    title: 'Atendimento online',
    description: 'Ampliação do atendimento para modalidade remota',
  },
  {
    year: 'Hoje',
    title: 'Consultório na Savassi',
    description: 'Atendimento presencial e online para adultos e adolescentes',
  },
]

export const SPECIALTIES: Specialty[] = [
  {
    id: 'ansiedade',
    title: 'Ansiedade',
    description:
      'Acompanhamento terapêutico para pessoas que vivenciam preocupação persistente, tensão ou dificuldade de relaxar.',
    icon: 'wind',
  },
  {
    id: 'luto',
    title: 'Luto e perdas',
    description:
      'Apoio profissional para processar perdas significativas e reorganizar a vida após mudanças difíceis.',
    icon: 'heart-handshake',
  },
  {
    id: 'relacionamentos',
    title: 'Relacionamentos',
    description:
      'Espaço para compreender padrões afetivos, comunicação e vínculos de forma mais consciente.',
    icon: 'users',
  },
  {
    id: 'casal',
    title: 'Terapia de casal',
    description:
      'Acompanhamento conjunto para casais que desejam melhorar a comunicação e o entendimento mútuo.',
    icon: 'heart',
  },
  {
    id: 'adolescentes',
    title: 'Adolescentes',
    description:
      'Atendimento para jovens a partir de 14 anos, com linguagem adequada e respeito à autonomia.',
    icon: 'sparkles',
  },
  {
    id: 'autoestima',
    title: 'Autoestima e autoconhecimento',
    description:
      'Processo terapêutico para desenvolver uma relação mais gentil consigo mesma(o).',
    icon: 'sun',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Primeiro contato',
    description:
      'Você preenche o formulário ou entra em contato pelo WhatsApp. Respondo em até 24 horas úteis para alinhar expectativas.',
  },
  {
    step: 2,
    title: 'Triagem inicial',
    description:
      'Conversamos brevemente sobre modalidade, disponibilidade e como posso ajudar, sem necessidade de expor detalhes clínicos por mensagem.',
  },
  {
    step: 3,
    title: 'Primeira sessão',
    description:
      'Encontro de acolhimento e escuta. Juntos, compreendemos sua demanda e definimos objetivos terapêuticos realistas.',
  },
  {
    step: 4,
    title: 'Acompanhamento contínuo',
    description:
      'Sessões semanais ou quinzenais, presenciais ou online, com revisão periódica do processo terapêutico.',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'valores',
    question: 'Qual o valor da sessão?',
    answer:
      'Os valores são informados pessoalmente após o primeiro contato, pois podem variar conforme modalidade (presencial ou online) e frequência. Entre em contato para receber essas informações de forma transparente.',
  },
  {
    id: 'convenio',
    question: 'Atende por convênio ou plano de saúde?',
    answer:
      'O atendimento é particular. Emito recibo para reembolso junto ao seu plano de saúde, quando aplicável. Consulte sua operadora sobre as condições de reembolso para psicoterapia.',
  },
  {
    id: 'duracao',
    question: 'Quanto tempo dura cada sessão?',
    answer:
      'Cada sessão tem duração de 50 minutos, tanto na modalidade presencial quanto online.',
  },
  {
    id: 'sigilo',
    question: 'Minhas informações são confidenciais?',
    answer:
      'Sim. O sigilo profissional é garantido pelo Código de Ética Profissional do Psicólogo. Suas informações só podem ser compartilhadas em situações previstas em lei, como risco de vida.',
  },
  {
    id: 'online',
    question: 'Como funciona o atendimento online?',
    answer:
      'Utilizo plataforma segura de videoconferência. Você precisa de um local privado, conexão estável e fones de ouvido. A qualidade do atendimento online é equivalente ao presencial para a maioria das demandas.',
  },
  {
    id: 'frequencia',
    question: 'Com que frequência são as sessões?',
    answer:
      'Geralmente semanalmente, especialmente no início. Conforme o processo avança, podemos ajustar para quinzenal ou mensal, sempre em acordo conjunto.',
  },
  {
    id: 'urgencia',
    question: 'Este site atende urgências ou crises?',
    answer:
      'Não. Este canal é para agendamento e informações sobre psicoterapia e não substitui atendimento de urgência. Em situação de crise ou risco imediato, ligue 188 (CVV, Centro de Valorização da Vida), 192 (SAMU) ou dirija-se ao serviço de emergência mais próximo.',
  },
]

export const TIME_PREFERENCE_LABELS = {
  manha: 'Manhã',
  tarde: 'Tarde',
  noite: 'Noite',
} as const

export const MODALITY_LABELS = {
  presencial: 'Presencial',
  online: 'Online',
} as const

export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.contact.mapsQuery)}&z=16&output=embed`

export const WHATSAPP_URL = `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(
  'Olá, gostaria de solicitar informações sobre agendamento de consulta.',
)}`
