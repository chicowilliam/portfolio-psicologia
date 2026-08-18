import { z } from 'zod'
import { isValidPhone } from '@/lib/utils'

export const bookingSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Informe seu nome completo')
    .min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z
    .string()
    .min(1, 'Informe seu e-mail')
    .email('Digite um e-mail válido'),
  phone: z
    .string()
    .min(1, 'Informe seu telefone ou WhatsApp')
    .refine(isValidPhone, 'Digite um telefone válido com DDD'),
  modality: z.enum(['presencial', 'online'], {
    message: 'Selecione a modalidade preferida',
  }),
  timePreferences: z
    .array(z.enum(['manha', 'tarde', 'noite']))
    .min(1, 'Selecione ao menos um período de preferência'),
  message: z
    .string()
    .max(500, 'Mensagem deve ter no máximo 500 caracteres')
    .optional(),
  lgpdConsent: z.literal(true, {
    message: 'É necessário concordar com a Política de Privacidade',
  }),
})

export type BookingSchema = z.infer<typeof bookingSchema>
