import { lazy, Suspense, useCallback, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChatTextIcon } from '@phosphor-icons/react/ChatText'
import { EnvelopeSimpleIcon } from '@phosphor-icons/react/EnvelopeSimple'
import { PhoneIcon } from '@phosphor-icons/react/Phone'
import { UserIcon } from '@phosphor-icons/react/User'
import { WhatsappLogoIcon } from '@phosphor-icons/react/WhatsappLogo'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Checkbox } from '@/components/ui/Checkbox'
import { MultiSelect } from '@/components/ui/RadioGroup'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { DatePickerField } from '@/components/ui/DatePickerField'
import { PrivacyPolicyContent } from '@/components/PrivacyPolicyContent'
import {
  MODALITY_LABELS,
  SITE,
  TIME_PREFERENCE_LABELS,
  WHATSAPP_URL,
} from '@/lib/constants'
import { bookingSchema, type BookingSchema } from '@/lib/validation'
import { formatPhone, submitBookingRequest } from '@/lib/utils'
import { useBookingDialog } from '@/components/providers/booking-dialog-context'

const Modal = lazy(() =>
  import('@/components/ui/Modal').then((module) => ({ default: module.Modal })),
)

const AnimatedCheck = lazy(() =>
  import('@/components/ui/AnimatedCheck').then((module) => ({
    default: module.AnimatedCheck,
  })),
)

interface BookingFormContentProps {
  onSuccess?: () => void
  closeAfterSuccess?: boolean
}

export function BookingFormContent({
  onSuccess,
  closeAfterSuccess = false,
}: BookingFormContentProps) {
  const { closeBooking } = useBookingDialog()
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const closeSuccessModal = useCallback(() => {
    setShowSuccessModal(false)
    if (closeAfterSuccess) closeBooking()
  }, [closeAfterSuccess, closeBooking])

  const closePrivacyModal = useCallback(() => setShowPrivacyModal(false), [])

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      modality: 'presencial',
      preferredDate: undefined,
      timePreferences: [],
      message: '',
      lgpdConsent: undefined,
    },
  })

  async function onSubmit(data: BookingSchema) {
    await submitBookingRequest(data)
    reset()
    setShowSuccessModal(true)
    onSuccess?.()
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
      >
        <Input
          label="Nome completo"
          placeholder="Seu nome"
          icon={UserIcon}
          error={errors.fullName?.message}
          {...register('fullName')}
        />

        <Input
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          autoComplete="email"
          icon={EnvelopeSimpleIcon}
          error={errors.email?.message}
          {...register('email')}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input
              label="Telefone / WhatsApp"
              type="tel"
              placeholder="(31) 99999-9999"
              autoComplete="tel"
              icon={PhoneIcon}
              value={field.value}
              onChange={(e) => field.onChange(formatPhone(e.target.value))}
              error={errors.phone?.message}
            />
          )}
        />

        <Controller
          name="modality"
          control={control}
          render={({ field }) => (
            <SegmentedControl
              name="modality"
              label="Modalidade preferida"
              options={[
                { value: 'presencial', label: MODALITY_LABELS.presencial },
                { value: 'online', label: MODALITY_LABELS.online },
              ]}
              value={field.value}
              onChange={field.onChange}
              error={errors.modality?.message}
            />
          )}
        />

        <Controller
          name="preferredDate"
          control={control}
          render={({ field }) => (
            <DatePickerField
              label="Data preferida"
              value={field.value}
              onChange={field.onChange}
              error={errors.preferredDate?.message}
            />
          )}
        />

        <Controller
          name="timePreferences"
          control={control}
          render={({ field }) => (
            <MultiSelect
              label="Períodos de preferência"
              options={[
                { value: 'manha', label: TIME_PREFERENCE_LABELS.manha },
                { value: 'tarde', label: TIME_PREFERENCE_LABELS.tarde },
                { value: 'noite', label: TIME_PREFERENCE_LABELS.noite },
              ]}
              values={field.value}
              onChange={field.onChange}
              error={errors.timePreferences?.message}
            />
          )}
        />

        <Textarea
          label="Mensagem (opcional)"
          placeholder="Alguma observação sobre disponibilidade ou preferências?"
          hint="Não é necessário descrever sintomas ou motivos clínicos neste formulário."
          icon={ChatTextIcon}
          error={errors.message?.message}
          {...register('message')}
        />

        <Controller
          name="lgpdConsent"
          control={control}
          render={({ field }) => (
            <Checkbox
              label={
                <>
                  Concordo com o tratamento dos meus dados conforme a{' '}
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="font-medium text-primary underline-offset-2 hover:underline"
                  >
                    Política de Privacidade
                  </button>
                  .
                </>
              }
              checked={field.value === true}
              onChange={(e) => field.onChange(e.target.checked)}
              error={errors.lgpdConsent?.message}
            />
          )}
        />

        <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
          Enviar solicitação
        </Button>
      </form>

      <Suspense fallback={null}>
        {showSuccessModal && (
          <Modal
            isOpen={showSuccessModal}
            onClose={closeSuccessModal}
            title="Solicitação recebida"
          >
            <div className="flex flex-col items-center text-center">
              <AnimatedCheck />
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                Recebemos sua solicitação!
              </h3>
              <p className="mt-3 text-muted-foreground">
                Entrarei em contato em até {SITE.responseTimeHours} horas úteis pelo
                WhatsApp ou e-mail informado.
              </p>
              <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row">
                <Button variant="secondary" className="flex-1" onClick={closeSuccessModal}>
                  Fechar
                </Button>
                <Button className="flex-1 gap-2" href={WHATSAPP_URL} external>
                  <WhatsappLogoIcon className="size-4" weight="fill" aria-hidden="true" />
                  Falar agora pelo WhatsApp
                </Button>
              </div>
            </div>
          </Modal>
        )}

        {showPrivacyModal && (
          <Modal
            isOpen={showPrivacyModal}
            onClose={closePrivacyModal}
            title="Política de Privacidade"
            size="lg"
          >
            <PrivacyPolicyContent />
          </Modal>
        )}
      </Suspense>
    </>
  )
}
