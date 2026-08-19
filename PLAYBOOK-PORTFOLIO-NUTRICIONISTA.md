# Playbook: portfolio de nutricionista (a partir do portfolio-psicologia)

Guia para replicar a estrutura, UX e posicionamento do site **Dra. Helena Vasconcelos** em um novo portfolio para **nutricionista**. Use este arquivo como briefing no Cursor ou copie para a raiz do novo repositório.

**Referência base:** `portfolio-psicologia` (React 19 + Vite + Tailwind v4 + Motion + Lenis)

---

## 1. O que copiar do projeto atual

### Stack e arquitetura (manter igual)

| Item | Onde está |
|------|-----------|
| SPA single-page com hash anchors | `App.tsx` |
| Conteúdo centralizado em constants | `src/lib/constants.ts` |
| Tipografia editorial (Fraunces + Manrope) | `index.css` @theme |
| Menu mobile drawer (portal + z-index alto) | `Header.tsx` |
| Modal de agendamento + scroll lock + Lenis | `BookingDialog.tsx`, `useBodyScrollLock.ts` |
| Calendário mobile (sheet z-220 acima do modal) | `DatePickerField.tsx` |
| WhatsApp via env (`VITE_WHATSAPP_NUMBER`) | `constants.ts` |
| LGPD + política de privacidade | `PrivacyPolicyContent.tsx`, formulário |
| Lazy loading de seções | `App.tsx` |

### Seções do site (ordem recomendada)

1. **Hero** — manifesto + CTA “primeira conversa”
2. **Credenciais** — CRN, formação, selos éticos
3. **Quem sou eu** — bio + timeline
4. **Para quem é** — 6 bullets numerados (nicho claro)
5. **Abordagem / pilares** — 3 pilares da prática
6. **Especialidades / focos** — cards (emagrecimento, diabetes, etc.)
7. **Como funciona** — 4 passos
8. **Consultório / clínica** — galeria 3 fotos
9. **Atendimento online** — teleconsulta, LGPD, limites
10. **Conteúdo / blog** — 3 artigos psicoeducativos
11. **FAQ** — dúvidas frequentes
12. **Agendamento** — formulário + modal
13. **Contato** — mapa, e-mail, WhatsApp

---

## 2. Adaptações: psicologia → nutricionista

| Psicologia | Nutricionista |
|------------|---------------|
| CRP + link CFP | **CRN** + região (ex.: CRN-3) + link conselho |
| e-Psi (obrigatório online) | Teleconsulta conforme resoluções CFN; documentar plataforma |
| TCC / abordagem clínica | **Abordagem nutricional** (comportamental, clínica, esportiva, materno-infantil…) |
| Especialidades emocionais | **Focos:** emagrecimento saudável, diabetes, gestantes, vegetarianismo, performance |
| “Primeira conversa” | “**Primeira consulta**” ou “**Avaliação inicial**” (menos clínico, mais acolhedor que “consulta nutricional” seco) |
| CVV / SAMU (crise) | **Não substitui emergência médica** — orientar pronto-socorro; opcional: aviso para transtornos alimentares (link CVV) |
| Sigilo CFP 010/2005 | LGPD + ética CFN; não prometer emagrecimento garantido |
| Sessão 50 min | **Consulta 60 min** (ajustar FAQ) |
| Modalidade presencial/online | Idem — muito comum em nutrição |

### O que NÃO fazer (ética / CFN / LGPD)

- Prometer “-X kg em Y dias”
- Antes/depois identificável sem consentimento explícito
- Depoimentos que pareçam garantia de resultado
- Preço em destaque no hero (informar após contato ou na FAQ)
- Diagnóstico ou prescrição de dieta pelo site (só no consultório)
- Comparar com outros profissionais

### O que PODE (prova social ética)

- “Atendimento acolhedor e consultório organizado” (avaliação genérica)
- Selos: CRN, pós-graduação, congressos, supervisão/especialização
- Conteúdo educativo (mitos sobre carboidrato, proteína, etc.)

---

## 3. Template de conteúdo (`constants.ts`)

Preencha e cole no novo projeto. Ajuste nomes, CRN e cidade.

```typescript
export const BOOKING_CTA = {
  primary: 'Agendar primeira consulta',
  short: 'Primeira consulta',
  dialogTitle: 'Solicitar avaliação inicial',
  whatsappIntro:
    'Olá, gostaria de agendar uma primeira consulta de nutrição.',
} as const

export const SITE = {
  professional: {
    name: 'Dra. [Nome Completo]',
    title: 'Nutricionista',
    crn: 'CRN-X XXXXX',
    approach: 'Nutrição clínica comportamental',
    tagline:
      'Plano alimentar realista, no seu ritmo — sem dietas da moda e sem culpa.',
  },
  brand: {
    line: 'equilíbrio · ciência · rotina',
    heroLead: 'Comer bem sem guerra',
    heroAccent: 'com a comida e com você.',
    manifesto:
      'Nutrição não é punição. É cuidado com corpo e mente, com escolhas possíveis na sua vida real.',
  },
  niche: {
    eyebrow: 'Para quem é',
    title: 'Para quem cansou de dietas',
    titleAccent: 'que não cabem na sua rotina',
    description:
      'Atendo adultos que buscam emagrecimento saudável, mais energia ou reorganização alimentar — presencial ou online.',
  },
}

export const FOR_WHO_ITEMS = [
  { index: '01', text: 'Quer emagrecer sem efeito sanfona ou restrição extrema.' },
  { index: '02', text: 'Vive ansiedade à mesa ou culpa depois de comer.' },
  { index: '03', text: 'Precisa de orientação para diabetes, colesterol ou intestino.' },
  { index: '04', text: 'Busca performance esportiva com nutrição baseada em evidência.' },
  { index: '05', text: 'Está gestante ou amamentando e quer segurança nutricional.' },
  { index: '06', text: 'Prefere consulta online ou híbrida por agenda apertada.' },
]

export const APPROACH_PILLARS = [
  {
    index: '01',
    title: 'Escuta antes do plano',
    subtitle: 'Anamnese completa',
    description: 'Rotina, sono, histórico, relação com comida e metas realistas.',
    benefit: 'O plano nasce da sua vida, não de um PDF genérico.',
  },
  {
    index: '02',
    title: 'Evidência científica',
    subtitle: 'Sem modismos',
    description: 'Recomendações alinhadas às diretrizes e ao seu contexto clínico.',
    benefit: 'Decisões explicadas — você entende o porquê.',
  },
  {
    index: '03',
    title: 'Acompanhamento',
    subtitle: 'Ajustes contínuos',
    description: 'Retornos para revisar estratégias, não só pesar.',
    benefit: 'Mudança sustentável, não sprint de 21 dias.',
  },
]

export const SPECIALTIES = [
  { id: 'emagrecimento', title: 'Emagrecimento saudável', icon: 'scale' },
  { id: 'comportamento', title: 'Comportamento alimentar', icon: 'heart' },
  { id: 'clinica', title: 'Nutrição clínica', icon: 'activity' },
  { id: 'esportiva', title: 'Nutrição esportiva', icon: 'run' },
  { id: 'gestantes', title: 'Gestantes e lactantes', icon: 'baby' },
  { id: 'vegetariana', title: 'Vegetarianismo e veganismo', icon: 'leaf' },
]

export const PROCESS_STEPS = [
  { step: 1, title: 'Primeiro contato', description: 'Formulário ou WhatsApp. Retorno em até 24h úteis.' },
  { step: 2, title: 'Avaliação inicial', description: 'Consulta com anamnese, medidas se presencial, alinhamento de metas.' },
  { step: 3, title: 'Plano personalizado', description: 'Orientações práticas, sem lista rígida quando não for necessário.' },
  { step: 4, title: 'Retornos', description: 'Frequência combinada (quinzenal/mensal) conforme objetivo.' },
]

export const FAQ_ITEMS = [
  {
    id: 'valores',
    question: 'Qual o valor da consulta?',
    answer: 'Valores informados após o primeiro contato, conforme modalidade e tipo de acompanhamento.',
  },
  {
    id: 'online',
    question: 'A consulta online funciona?',
    answer: 'Sim. Anamnese detalhada, orientações e material de apoio digital. Presencial inclui bioimpedância quando indicado.',
  },
  {
    id: 'dieta',
    question: 'Você passa dieta pronta?',
    answer: 'Trabalho com plano alimentar individualizado e educação nutricional, não receitas milagrosas.',
  },
  // … incluir convênio, duração (60 min), retorno, urgência médica
]
```

---

## 4. Identidade visual sugerida (nutricionista)

Manter a **estrutura editorial** do site de psicologia; mudar a paleta para diferenciar demos na prospecção.

| Token | Psicologia (atual) | Sugestão nutrição |
|-------|--------------------|-------------------|
| Primary | `#3d6b6e` (sage) | `#4a6741` (verde oliva) ou `#2d6a4f` |
| Accent | `#c4a882` | `#d4a373` (terracota claro) ou `#e9c46a` |
| Background | `#f5f1ea` | `#f7f5f0` ou `#faf8f4` |

Tipografia: manter **Fraunces + Manrope** ou trocar display por **Lora** / **Source Serif** se quiser mais “food & wellness”.

---

## 5. Fotos a gerar / produzir

### Retrato profissional
```
Retrato de nutricionista brasileira, jaleco leve ou blusa neutra verde-oliva,
expressão acolhedora e confiante, fundo de consultório desfocado, luz natural,
estilo editorial premium, 4:5, sem alimentos clichê (maçã genérica).
```

### Galeria consultório (3 fotos — mesmo padrão do psicologia)

1. **Sala de consulta** — mesa, duas cadeiras, computador discreto, luz natural  
2. **Detalhe** — balança bioimpedância (opcional), plantas, material educativo  
3. **Recepção** — corredor/clínica acolhedora  

Salvar em `src/assets/consultorio/` como WebP 1400px (quality 82).

### Fotos opcionais (diferencial nutri)
- Bancada com meal prep organizado (sem rosto)
- Material entregue ao paciente (folder, app — mockup)

---

## 6. Checklist de implementação (novo repo)

### Fase A — Bootstrap
- [ ] Clonar ou fork `portfolio-psicologia` → `portfolio-nutricao`
- [ ] Renomear `package.json`, URLs, `index.html` title/meta
- [ ] Trocar paleta em `index.css` @theme
- [ ] Substituir `constants.ts` com conteúdo nutri (template acima)
- [ ] Renomear `psychologist` → `professional` nos types (refactor mínimo)

### Fase B — Conteúdo e seções
- [ ] Hero: brand.line, heroLead, heroAccent, BOOKING_CTA
- [ ] Credenciais: CRN verificável + TRUST_SEALS
- [ ] FOR_WHO_ITEMS + APPROACH_PILLARS + SPECIALTIES
- [ ] FAQ adaptado (sem promessa de peso)
- [ ] Blog: 3 posts (mitos proteína, ansiedade alimentar, consulta online)
- [ ] Galeria consultório (3 WebP)

### Fase C — Compliance
- [ ] Política de privacidade (LGPD) — trocar “psicoterapia” por “consulta nutricional”
- [ ] Aviso: site não substitui emergência médica
- [ ] Formulário: consentimento LGPD + campos adequados (objetivo, não diagnóstico)
- [ ] Remover referências e-Psi; adicionar bloco teleconsulta + TCLE se online

### Fase D — Deploy
- [ ] `VITE_WHATSAPP_NUMBER` e `VITE_CONTACT_PHONE` na Vercel
- [ ] Domínio + Google Meu Negócio
- [ ] OG image com nome + CRN + cidade

---

## 7. Prompt pronto para o Cursor (novo projeto)

Cole no chat do novo repositório:

```
Crie um portfolio de nutricionista clonando a arquitetura de portfolio-psicologia:

- Mesma stack: React 19, Vite, Tailwind v4, Motion, Lenis, radix-ui, react-hook-form, Zod
- Mesmas seções: Hero, Credentials, About, ForWho, ApproachPillars, Specialties,
  HowItWorks, ConsultorioGallery, OnlineAttendance, BlogPreview, FAQ, BookingForm, Contact
- Conteúdo via src/lib/constants.ts (profissional nutricionista, CRN, não CRP)
- CTAs: "Agendar primeira consulta"
- Compliance CFN/LGPD: sem promessa de emagrecimento, sem antes/depois identificável
- Paleta verde-oliva + terracota (ver PLAYBOOK-PORTFOLIO-NUTRICIONISTA.md)
- Manter: menu mobile portal, booking modal z-200, date picker sheet z-220, WhatsApp env
- Adaptar FAQ, pilares, para-quem e 3 posts de blog para nutrição clínica comportamental

Leia PLAYBOOK-PORTFOLIO-NUTRICIONISTA.md na raiz para copy e checklist completo.
```

---

## 8. Diferenciais para vender na prospecção (nutricionistas)

Ao apresentar o demo para clientes da área:

1. **Posicionamento de nicho** (“para quem cansou de dieta”) — igual sites premium tipo Amanda Andrade
2. **Compliance** — sem promessas proibidas; LGPD pronta
3. **Mobile premium** — menu, calendário e modal testados
4. **Blog demo** — autoridade + SEO local
5. **Galeria consultório** — confiança visual
6. **Configuração rápida** — só trocar `constants.ts` + fotos entre clientes

---

## 9. Arquivos-chave para copiar/adaptar

```
src/lib/constants.ts          → todo o copy
src/types/index.ts            → SiteConfig (renomear campos)
src/components/sections/*     → seções (Hero, ForWho, etc.)
src/components/ui/*           → design system
src/index.css                 → tokens de cor
src/lib/consultorio-images.ts → galeria
src/assets/consultorio/       → fotos WebP
.env.example                  → WhatsApp + telefone
```

---

## 10. Próximo passo sugerido

1. Criar repo `portfolio-nutricao` a partir deste  
2. Abrir este `.md` no Cursor  
3. Executar o prompt da seção 7  
4. Preencher constants com **1 persona demo** (ex.: nutri clínica comportamental, SP ou BH)  
5. Gerar 3 fotos + 1 retrato  
6. Deploy Vercel + link na prospecção  

---

*Gerado a partir do portfolio-psicologia (commit `12b9c7a`). Atualize este playbook quando novas seções forem adicionadas ao template base.*
