import type {
  ArriveItem,
  ConsultorioPhoto,
  FAQItem,
  NavLink,
  Principle,
  ProcessStep,
  SiteConfig,
  Specialty,
} from '@/types'

export const BOOKING_CTA = {
  primary: 'Conversar sobre o primeiro atendimento',
  short: 'Agendar',
  dialogTitle: 'Solicitar primeira conversa',
  nav: 'Primeira conversa',
  whatsappIntro:
    'Olá, gostaria de conversar sobre o primeiro atendimento psicológico.',
} as const

export const SITE: SiteConfig = {
  url: 'https://portfolio-psicologia-theta.vercel.app',
  psychologist: {
    name: 'Helena Vasconcelos',
    shortName: 'Helena Vasconcelos',
    title: 'Psicóloga clínica',
    approach: 'Terapia Cognitivo-Comportamental',
    bio: 'Trabalho com adultos e adolescentes a partir de uma escuta cuidadosa e de práticas baseadas em evidência. A terapia, para mim, não é um atalho para “ficar bem”: é um espaço para compreender padrões, nomear o que pesa e experimentar novos caminhos no ritmo possível.',
    quote:
      'Não buscamos perfeição. Buscamos um lugar onde você possa se escutar com mais clareza.',
    photoAlt: 'Helena Vasconcelos, psicóloga clínica, em retrato editorial',
  },
  brand: {
    identification: 'Psicologia clínica · Terapia Cognitivo-Comportamental',
    heroTitle: 'Você não precisa estar em crise para começar a se escutar.',
    heroBody:
      'Psicoterapia baseada em TCC para adultos e adolescentes que convivem com ansiedade, luto, conflitos nas relações ou sensação de sobrecarga.',
    heroCta: 'Conversar sobre o primeiro atendimento',
    heroPractical: 'Atendimento presencial na Savassi e online.',
  },
  contact: {
    email: 'contato@helenavasconcelos.com.br',
    phone: import.meta.env.VITE_CONTACT_PHONE?.trim() ?? '',
    address: 'Rua dos Inconfidentes, 842, Sala 304',
    neighborhood: 'Savassi',
    city: 'Belo Horizonte, MG',
    schedule: 'Segunda a sexta, das 8h às 20h',
    mapsQuery: 'Rua dos Inconfidentes, 842, Savassi, Belo Horizonte, MG',
  },
  social: {
    instagram: '',
    linkedin: '',
  },
  emergency: {
    cvv: '188',
    samu: '192',
  },
  responseTimeHours: 24,
  conceptualNotice:
    'Projeto conceitual de portfólio. Profissional, credenciais e informações apresentadas são fictícias.',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Atendimento', href: '#atendimento' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export const ARRIVE_ITEMS: ArriveItem[] = [
  {
    index: '01',
    text: 'A mente não desacelera, mesmo quando o dia termina.',
  },
  {
    index: '02',
    text: 'Você tem carregado responsabilidades demais.',
  },
  {
    index: '03',
    text: 'Uma perda ou mudança alterou a forma como você vive.',
  },
  {
    index: '04',
    text: 'Seus relacionamentos parecem repetir os mesmos conflitos.',
  },
  {
    index: '05',
    text: 'Você deseja se compreender sem recorrer a fórmulas prontas.',
  },
]

export const PRINCIPLES: Principle[] = [
  {
    index: '01',
    title: 'Escuta que não apressa',
    description:
      'Um espaço para falar no seu tempo, sem urgência de concluir o que ainda está se formando.',
  },
  {
    index: '02',
    title: 'Compreensão baseada em evidências',
    description:
      'A TCC oferece estrutura para observar pensamentos, emoções e comportamentos com mais clareza.',
  },
  {
    index: '03',
    title: 'Ferramentas aplicáveis à vida real',
    description:
      'Cada sessão busca algo concreto para experimentar fora do consultório, no ritmo possível.',
  },
]

export const SPECIALTIES: Specialty[] = [
  {
    id: 'ansiedade',
    title: 'Ansiedade',
    description:
      'Acompanhamento para preocupação persistente, tensão e dificuldade de desligar da rotina.',
  },
  {
    id: 'luto',
    title: 'Luto e perdas',
    description:
      'Apoio para reorganizar a vida após mudanças e perdas significativas.',
  },
  {
    id: 'relacionamentos',
    title: 'Relacionamentos',
    description:
      'Espaço para compreender padrões afetivos, limites e comunicação.',
  },
  {
    id: 'casal',
    title: 'Terapia de casal',
    description:
      'Acompanhamento conjunto para melhorar entendimento e diálogo.',
  },
  {
    id: 'adolescentes',
    title: 'Adolescentes',
    description:
      'Atendimento a partir de 14 anos, com respeito à autonomia e à linguagem do jovem.',
  },
  {
    id: 'autoestima',
    title: 'Autoestima e autoconhecimento',
    description:
      'Processo para desenvolver uma relação mais gentil e consciente consigo.',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Primeira conversa',
    description:
      'Alinhamos expectativas, modalidade e disponibilidade, sem pressa de decidir.',
  },
  {
    step: 2,
    title: 'Primeira sessão',
    description:
      'Escuta inicial para compreender sua demanda e o contexto do momento.',
  },
  {
    step: 3,
    title: 'Acompanhamento',
    description:
      'Sessões semanais ou quinzenais, presenciais ou online, com revisão periódica.',
  },
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'primeira',
    question: 'Como funciona a primeira conversa?',
    answer:
      'É um contato inicial para alinhar expectativas, modalidade e disponibilidade. Não é uma sessão clínica completa: serve para entendermos juntos se o acompanhamento faz sentido.',
  },
  {
    id: 'duracao',
    question: 'Qual é a duração das sessões?',
    answer: 'Cada sessão tem duração de 50 minutos, presencial ou online.',
  },
  {
    id: 'online',
    question: 'O atendimento pode ser online?',
    answer:
      'Sim. Utilizo videoconferência em ambiente reservado, com a mesma atenção do presencial. Você precisa de local privado e conexão estável.',
  },
  {
    id: 'frequencia',
    question: 'Com que frequência acontecem as sessões?',
    answer:
      'Em geral semanalmente no início. Conforme o processo avança, podemos ajustar para quinzenal, sempre em acordo.',
  },
  {
    id: 'fit',
    question: 'Como saber se essa abordagem faz sentido para mim?',
    answer:
      'Na primeira conversa conversamos sobre sua demanda e o que a TCC pode oferecer. Se não for o melhor caminho, indico com honestidade outras possibilidades.',
  },
  {
    id: 'cancelamento',
    question: 'Como funciona o cancelamento?',
    answer:
      'Pedimos aviso com antecedência combinada no enquadre. Detalhes de reagendamento e cancelamento são alinhados no primeiro contato.',
  },
]

export const CONSULTORIO_GALLERY: ConsultorioPhoto[] = [
  {
    id: 'sala-atendimento',
    alt: 'Sala de atendimento com poltronas e luz natural',
    caption: 'Sala de atendimento',
  },
  {
    id: 'detalhe-ambiente',
    alt: 'Detalhe do consultório com plantas e materiais neutros',
    caption: 'Ambiente',
  },
  {
    id: 'recepcao-corredor',
    alt: 'Recepção e acesso do consultório',
    caption: 'Recepção · Savassi',
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

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') ?? ''

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_CTA.whatsappIntro)}`
  : null
