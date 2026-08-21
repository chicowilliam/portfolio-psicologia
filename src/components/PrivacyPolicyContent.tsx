import { SITE } from '@/lib/constants'

export function PrivacyPolicyContent() {
  return (
    <div className="prose-policy space-y-6 text-sm leading-relaxed text-muted-foreground">
      <p>
        Esta Política de Privacidade descreve como tratamos os dados pessoais
        coletados por meio deste site, em conformidade com a Lei Geral de
        Proteção de Dados (LGPD, Lei nº 13.709/2018).
      </p>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          1. Controladora dos dados
        </h3>
        <p>
          {SITE.psychologist.name}, {SITE.psychologist.title}, com consultório em{' '}
          {SITE.contact.address}, {SITE.contact.neighborhood}, {SITE.contact.city}.{' '}
          {SITE.conceptualNotice}
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          2. Dados coletados
        </h3>
        <p>
          Coletamos apenas os dados informados voluntariamente no formulário de
          agendamento: nome completo, e-mail, telefone/WhatsApp, modalidade
          preferida, data preferida, períodos de disponibilidade e mensagem
          opcional.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          3. Finalidade do tratamento
        </h3>
        <p>
          Os dados são utilizados exclusivamente para responder à sua solicitação
          de agendamento, entrar em contato para confirmar horários e prestar
          informações sobre o atendimento psicológico.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          4. Base legal
        </h3>
        <p>
          O tratamento é realizado com base no consentimento do titular (Art. 7º,
          I, LGPD) e na execução de procedimentos preliminares relacionados a
          contrato (Art. 7º, V, LGPD).
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          5. Compartilhamento
        </h3>
        <p>
          Seus dados não são vendidos nem compartilhados com terceiros para fins
          comerciais. Podem ser armazenados em serviços de e-mail, WhatsApp ou
          ferramentas de gestão de contatos utilizados exclusivamente para
          comunicação profissional.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          6. Retenção e segurança
        </h3>
        <p>
          Os dados são mantidos pelo tempo necessário para a finalidade descrita
          ou conforme exigido por normas profissionais e legais (incluindo
          prontuário e documentação clínica, quando aplicável). Adotamos medidas
          técnicas razoáveis para proteger as informações contra acesso não
          autorizado.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          7. Cookies e analytics
        </h3>
        <p>
          Este site não utiliza cookies de rastreamento ou ferramentas de
          analytics por padrão. Caso recursos de mapa (Google Maps) ou
          incorporações externas sejam carregados, esses serviços podem aplicar
          suas próprias políticas de privacidade.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          8. Seus direitos
        </h3>
        <p>
          Você pode solicitar acesso, correção, exclusão, portabilidade,
          revogação do consentimento ou oposição ao tratamento, conforme Art. 18
          da LGPD. Também pode registrar reclamação perante a Autoridade Nacional
          de Proteção de Dados (ANPD).
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          9. Contato do encarregado
        </h3>
        <p>
          Para dúvidas sobre esta política ou sobre o tratamento dos seus dados,
          entre em contato pelo e-mail:{' '}
          <a
            href={`mailto:${SITE.contact.email}`}
            className="text-primary underline-offset-2 hover:underline"
          >
            {SITE.contact.email}
          </a>
        </p>
      </section>

      <p className="text-xs text-muted-foreground/80">
        Última atualização: agosto de 2026.
      </p>
    </div>
  )
}
