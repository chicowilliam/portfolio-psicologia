import salaAtendimento from '@/assets/consultorio/sala-atendimento.webp'
import detalheAmbiente from '@/assets/consultorio/detalhe-ambiente.webp'
import recepcaoCorredor from '@/assets/consultorio/recepcao-corredor.webp'

export const CONSULTORIO_IMAGES = {
  'sala-atendimento': salaAtendimento,
  'detalhe-ambiente': detalheAmbiente,
  'recepcao-corredor': recepcaoCorredor,
} as const

export type ConsultorioImageId = keyof typeof CONSULTORIO_IMAGES
