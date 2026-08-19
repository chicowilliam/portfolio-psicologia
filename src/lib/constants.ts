import type {
  ApproachPillar,
  BlogPost,
  ConsultorioPhoto,
  Credential,
  FAQItem,
  ForWhoItem,
  NavLink,
  ProcessStep,
  SiteConfig,
  Specialty,
  TimelineItem,
  TrustSeal,
} from '@/types'

export const BOOKING_CTA = {
  primary: 'Agendar primeira conversa',
  short: 'Primeira conversa',
  dialogTitle: 'Solicitar primeira conversa',
  whatsappIntro: 'Olá, gostaria de agendar uma primeira conversa sobre atendimento psicológico.',
} as const

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
  brand: {
    line: 'escuta · evidência · ritmo',
    heroLead: 'Um espaço para se escutar',
    heroAccent: 'e reorganizar a vida com calma.',
    manifesto:
      'Buscar apoio psicológico é um gesto de cuidado, não de fraqueza. A terapia não promete cura rápida: oferece presença, clareza e ferramentas para você atravessar o que pesa com mais consciência.',
  },
  niche: {
    eyebrow: 'Para quem é',
    title: 'Para quem sente que carrega',
    titleAccent: 'demais e se escuta de menos',
    description:
      'Atendo adultos e adolescentes (a partir de 14 anos) que buscam acolhimento, clareza emocional e mudanças possíveis, no consultório ou online.',
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
    phone: import.meta.env.VITE_CONTACT_PHONE?.trim() ?? '',
    address: 'Rua dos Inconfidentes, 842, Sala 304',
    neighborhood: 'Savassi',
    city: 'Belo Horizonte, MG',
    schedule: 'Segunda a sexta, das 8h às 20h',
    mapsQuery: 'Rua dos Inconfidentes, 842, Savassi, Belo Horizonte, MG',
  },
  crpVerifyUrl: 'https://cadastro.cfp.org.br/',
  online: {
    ePsiUrl: 'https://e-psi.cfp.org.br/',
    ePsiRegistered: true,
    platform: 'Google Meet (sessão criptografada em trânsito)',
    tcleNote:
      'Antes do primeiro atendimento online, você recebe orientações e termo de consentimento (TCLE) sobre privacidade, limites da modalidade e uso de tecnologia.',
    syncNote:
      'As sessões online são síncronas (ao vivo), em ambiente reservado, com a mesma duração e sigilo do presencial.',
    urgencyNote:
      'Atendimento online não substitui urgência psiquiátrica ou risco imediato. Em crise, ligue 188 (CVV) ou 192 (SAMU).',
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
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem sou eu', href: '#sobre' },
  { label: 'Para quem', href: '#para-quem' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

export const FOR_WHO_ITEMS: ForWhoItem[] = [
  {
    index: '01',
    text: 'Sente ansiedade persistente, cansaço emocional ou dificuldade de desligar da rotina.',
  },
  {
    index: '02',
    text: 'Passou por perdas, mudanças ou luto e precisa reorganizar a vida com apoio.',
  },
  {
    index: '03',
    text: 'Quer melhorar relações, limites e comunicação sem se anular no processo.',
  },
  {
    index: '04',
    text: 'Busca autoconhecimento e autoestima com escuta profissional, não fórmulas prontas.',
  },
  {
    index: '05',
    text: 'É adolescente (14+) ou responsável buscando acolhimento respeitoso à autonomia.',
  },
  {
    index: '06',
    text: 'Prefere combinar presencial na Savassi com sessões online quando necessário.',
  },
]

export const APPROACH_PILLARS: ApproachPillar[] = [
  {
    index: '01',
    title: 'TCC com escuta',
    subtitle: 'Ciência + acolhimento',
    description:
      'Trabalho com Terapia Cognitivo-Comportamental integrada a uma escuta empática. Observamos pensamentos, emoções e comportamentos sem julgamento.',
    benefit: 'Você entende padrões que se repetem e experimenta formas mais gentis de responder à vida.',
  },
  {
    index: '02',
    title: 'Ferramentas práticas',
    subtitle: 'Do insight à ação',
    description:
      'Técnicas validadas para ansiedade, humor, relações e regulação emocional, sempre adaptadas ao seu contexto.',
    benefit: 'Sai da sessão com algo concreto para observar ou praticar, no seu ritmo.',
  },
  {
    index: '03',
    title: 'Processo colaborativo',
    subtitle: 'Metas realistas',
    description:
      'Objetivos definidos juntos, com revisão periódica. Não existe receita única: cada trajetória é singular.',
    benefit: 'Mais clareza sobre onde você está e para onde quer ir, sem promessa de cura.',
  },
]

export const TRUST_SEALS: TrustSeal[] = [
  {
    icon: 'supervision',
    label: 'Supervisão clínica',
    value: 'Acompanhamento contínuo',
    note: 'Prática supervisionada conforme ética profissional.',
  },
  {
    icon: 'formation',
    label: 'Formação contínua',
    value: 'Especialização em TCC',
    note: 'Atualização em práticas baseadas em evidência.',
  },
  {
    icon: 'ethics',
    label: 'Ética CFP',
    value: 'Sem promessa de cura',
    note: 'Publicidade conforme Resolução CFP nº 011/2018.',
  },
  {
    icon: 'privacy',
    label: 'LGPD',
    value: 'Dados protegidos',
    note: 'Consentimento explícito no formulário de contato.',
  },
]

export const CONSULTORIO_GALLERY: ConsultorioPhoto[] = [
  {
    id: 'sala-atendimento',
    alt: 'Sala de atendimento psicológico com poltrona, luminária e luz natural suave',
    caption: 'Sala de atendimento',
    placeholder: 'sala',
  },
  {
    id: 'detalhe-ambiente',
    alt: 'Detalhe do consultório com plantas, livros e tons neutros acolhedores',
    caption: 'Ambiente acolhedor',
    placeholder: 'detalhe',
  },
  {
    id: 'recepcao-corredor',
    alt: 'Recepção ou corredor do consultório com iluminação calma e acesso por elevador',
    caption: 'Recepção · Savassi',
    placeholder: 'recepcao',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ansiedade-ritmo',
    slug: 'ansiedade-no-seu-ritmo',
    category: 'Psicoeducação',
    title: 'Ansiedade não é “frescura”: entender o corpo antes de se cobrar',
    excerpt:
      'Quando a mente acelera, o corpo também fala. Entender esse ciclo é o primeiro passo para responder com mais cuidado, não com autocrítica.',
    readMinutes: 4,
    publishedAt: '2026-02-10',
    body: [
      'Ansiedade é uma resposta humana, não um defeito de caráter. Em muitas situações, ela surge como tentativa de proteção: antecipar riscos, evitar erros, manter controle.',
      'Na Terapia Cognitivo-Comportamental, observamos três camadas: pensamentos automáticos, sensações corporais e comportamentos de escape ou hipervigilância. Quando você nomeia o ciclo, ganha margem para escolher diferente.',
      'Pequenas pausas de respiração, registro emocional e conversa terapêutica não “eliminam” a ansiedade da noite para o dia. Elas constroem tolerância e autocompreensão ao longo do tempo.',
      'Se a ansiedade limita sono, trabalho ou relações, buscar apoio profissional é um gesto de cuidado. Este texto é psicoeducativo e não substitui avaliação clínica individual.',
    ],
  },
  {
    id: 'limites-relacoes',
    slug: 'limites-nas-relacoes',
    category: 'Relações',
    title: 'Dizer não sem culpa: limites como forma de proximidade',
    excerpt:
      'Limites não afastam quem ama: protegem o vínculo do desgaste. Aprender a comunicá-los é parte do processo terapêutico.',
    readMinutes: 5,
    publishedAt: '2026-01-22',
    body: [
      'Muitas pessoas aprendem cedo que ser “boazinha” ou “forte” significa aceitar tudo. Com o tempo, isso vira exaustão, ressentimento e sensação de se perder.',
      'Na terapia, exploramos crenças como “se eu impor limite, vou ser rejeitada” ou “preciso resolver tudo sozinha”. Essas ideias podem ser questionadas com gentileza e evidência.',
      'Um limite claro pode soar assim: “Eu me importo com você, mas hoje não tenho energia para essa conversa. Podemos retomar amanhã?” Clareza reduz conflito, não amor.',
      'Construir limites é habilidade, não personalidade fixa. Com prática e apoio, dá para se posicionar mantendo vínculos mais honestos.',
    ],
  },
  {
    id: 'terapia-online',
    slug: 'como-funciona-terapia-online',
    category: 'Atendimento online',
    title: 'Terapia online: o que muda, o que permanece',
    excerpt:
      'Sigilo, vínculo e profundidade clínica continuam centrais. O que muda é o cenário: um espaço privado seu e conexão segura.',
    readMinutes: 3,
    publishedAt: '2026-01-08',
    body: [
      'O atendimento online regulamentado pelo CFP exige cadastro no e-Psi e plataforma adequada. A sessão é síncrona, com mesma duração e confidencialidade do presencial.',
      'Recomendo local reservado, fones de ouvido e conexão estável. Antes da primeira sessão online, alinhamos TCLE e cuidados com privacidade digital.',
      'Para urgências ou risco imediato, canais de crise (CVV 188, SAMU 192) são os indicados. A psicoterapia online não substitui esses serviços.',
      'Se você tem curiosidade sobre modalidade híbrida (presencial + online), podemos definir juntos o que faz sentido para sua rotina.',
    ],
  },
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
    title: 'Primeira conversa',
    description:
      'Você preenche o formulário ou envia mensagem. Respondo em até 24 horas úteis para alinhar expectativas, sem pressa de decidir.',
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
      'Utilizo plataforma segura de videoconferência (Google Meet), com cadastro no e-Psi. Antes da primeira sessão online, você recebe orientações e termo de consentimento (TCLE). É necessário local privado, conexão estável e fones de ouvido. A qualidade clínica é equivalente ao presencial para a maioria das demandas.',
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

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, '') ?? ''

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(BOOKING_CTA.whatsappIntro)}`
  : null
