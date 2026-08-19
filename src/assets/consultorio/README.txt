# Fotos do consultório — guia de produção

Substitua os placeholders da seção `#consultorio` por imagens reais.

## Arquivos sugeridos

| ID | Arquivo sugerido | O que mostrar |
|----|------------------|---------------|
| sala-atendimento | `sala-atendimento.webp` | Poltrona do paciente, luminária, luz natural, sem rostos |
| detalhe-ambiente | `detalhe-ambiente.webp` | Plantas, estante, objetos neutros, textura acolhedora |
| recepcao-corredor | `recepcao-corredor.webp` | Entrada, corredor ou recepção, acesso/elevador se relevante |

## Especificações técnicas

- Formato: **WebP** (qualidade 80–85)
- Largura: **1200–1600 px**
- Proporção: **4:3** (crop consistente)
- Peso: **< 180 KB** por imagem

## Prompts para gerar fotos (IA ou briefing para fotógrafo)

### 1. Sala de atendimento
```
Fotografia editorial de consultório de psicologia em Belo Horizonte, sala privada
de terapia, duas poltronas confortáveis em tons neutros (bege, verde-sage),
luminária de chão suave, luz natural lateral, plantas discretas, estante com
livros, ambiente minimalista acolhedor, sem pessoas, sem logos, estilo
arquitetura de interiores premium, cores quentes, profundidade de campo suave.
```

### 2. Detalhe do ambiente
```
Close editorial de detalhes de consultório psicológico: vaso com planta,
livros de psicologia, xícara de cerâmica, tecido natural, madeira clara,
tons terrosos e verde-sage, luz suave, sensação de calma e sigilo, sem pessoas,
fotografia de interiores para site profissional de saúde mental.
```

### 3. Recepção / corredor
```
Corredor ou recepção de clínica psicológica em prédio comercial elegante,
iluminação indireta, plantas, placa discreta de sala, acesso por elevador,
ambiente limpo e acolhedor, sem pacientes, sem identidade visual de marca,
fotografia realista para site de psicóloga clínica.
```

## Ética e privacidade

- Nunca incluir pacientes ou documentos identificáveis
- Evitar diplomas com nome legível se for demo genérica
- Preferir fotos reais do consultório do cliente quando possível

## Como integrar no código

1. Salve as imagens em `src/assets/consultorio/`
2. Atualize `CONSULTORIO_GALLERY` em `src/lib/constants.ts` com `src` apontando para os imports
3. Substitua o placeholder em `ConsultorioGallery.tsx` por `<img>` quando os arquivos existirem
