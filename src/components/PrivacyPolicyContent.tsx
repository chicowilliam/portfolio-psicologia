export function PrivacyPolicyContent() {
  return (
    <div className="prose-policy space-y-6 text-sm leading-relaxed text-muted-foreground">
      <p>
        Esta Política de Privacidade descreve como tratamos os dados pessoais
        coletados por meio deste site, em conformidade com a Lei Geral de
        Proteção de Dados (LGPD — Lei nº 13.709/2018).
      </p>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          1. Dados coletados
        </h3>
        <p>
          Coletamos apenas os dados informados voluntariamente no formulário de
          agendamento: nome completo, e-mail, telefone/WhatsApp, modalidade
          preferida, períodos de disponibilidade e mensagem opcional.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          2. Finalidade do tratamento
        </h3>
        <p>
          Os dados são utilizados exclusivamente para responder à sua solicitação
          de agendamento, entrar em contato para confirmar horários e prestar
          informações sobre o atendimento psicológico.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          3. Base legal
        </h3>
        <p>
          O tratamento é realizado com base no consentimento do titular (Art. 7º,
          I, LGPD) e na execução de procedimentos preliminares relacionados a
          contrato (Art. 7º, V, LGPD).
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          4. Compartilhamento
        </h3>
        <p>
          Seus dados não são vendidos nem compartilhados com terceiros para fins
          comerciais. Podem ser armazenados em serviços de e-mail ou CRM
          utilizados exclusivamente para gestão de contatos profissionais.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          5. Retenção e segurança
        </h3>
        <p>
          Os dados são mantidos pelo tempo necessário para a finalidade descrita
          ou conforme exigido por normas profissionais e legais. Adotamos medidas
          técnicas razoáveis para proteger as informações contra acesso não
          autorizado.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          6. Seus direitos
        </h3>
        <p>
          Você pode solicitar acesso, correção, exclusão ou portabilidade dos
          seus dados, bem como revogar o consentimento, entrando em contato pelo
          e-mail indicado na seção de contato do site.
        </p>
      </section>

      <section>
        <h3 className="mb-2 font-display text-base font-semibold text-foreground">
          7. Contato do encarregado
        </h3>
        <p>
          Para dúvidas sobre esta política ou sobre o tratamento dos seus dados,
          entre em contato pelo e-mail:{' '}
          <a
            href="mailto:contato@helenavasconcelos.com.br"
            className="text-primary underline-offset-2 hover:underline"
          >
            contato@helenavasconcelos.com.br
          </a>
        </p>
      </section>

      <p className="text-xs text-muted-foreground/80">
        Última atualização: agosto de 2026.
      </p>
    </div>
  )
}
