# ISEL NewSpace — v3.4 / Community federation

Website Astro com PT na raiz `/` e EN em `/en/`. Fundo espacial animado a nível de toda a página, sem dependências de animação externas.

## Iniciar

```sh
npm install
npm run dev
```

## Para participantes

**Editar apenas a própria área:** `src/content/groups/<nome>/` (projetos, eventos, notícias, perfil). Os textos de ajuda estão em `docs/`, **não** no website. Imagens são opcionais; consulte `docs/IMAGENS-EQUIPAS.md`. O Showroom apenas apresenta imagens acrescentadas por equipas.

**Importante:** perfil de áreas sem projetos é intencional; não indica a existência de um grupo formal. Não publicar contactos ou financiamento inventados.

## Publicação

As páginas são geradas automaticamente. Para verificar o projeto: `npm run build`.

A estrutura mantém as secções comuns e as identidades próprias das equipas. Não há qualquer integração com serviços ESA nem com a página FIT.

# ISEL NewSpace — v3 (protótipo Astro)

Portal federado de projetos e atividades espaciais do ISEL. **Português por omissão**; a interface inglesa está em `/en/`.

## Começar no VS Code

Requisitos: Node.js 22+.

```bash
npm install
npm run dev
```

Aceder a `http://localhost:4321/` (PT) ou `http://localhost:4321/en/` (EN).

Para testar a produção: `npm run build` e `npm run preview`.

## Onde editar

- `src/content/groups/<grupo>/group.md`: apresentação de uma equipa
- `src/content/groups/<grupo>/projects/`: projetos da equipa
- `src/content/groups/<grupo>/events/`: eventos da equipa
- `src/content/groups/<grupo>/news/`: notícias da equipa
- `src/content/shared/events/` e `shared/news/`: comunidade
- `docs/`: instruções internas (não são páginas públicas)
- `templates/`: exemplos para copiar e adaptar
- `src/lib/i18n.ts`: textos de interface PT/EN
- `public/hero/newspace-panorama.svg`: ilustração técnica editável
- `src/styles/global.css`: design e cores

## Notas editoriais

As descrições, eventos e notícias dos ficheiros de exemplo **não são dados confirmados**. Devem ser substituídos pelas respetivas equipas antes da publicação. A página Contactos não inventa e-mails ou responsáveis. A imagem do badge é provisória, sujeita a validação da marca.

Esta versão traduz a interface PT/EN, mas **não traduz automaticamente os conteúdos Markdown das equipas**. A autoria federada mantém uma fonte de verdade por grupo até existir um processo de tradução aprovado.

## Publicar

Inclui `.github/workflows/deploy.yml`. Para páginas de projeto do GitHub, configurar `PUBLIC_BASE=/nome-do-repositorio` no workflow. Para domínio próprio, usar `/`. Verificar com a equipa de IT a eventual utilização de subdomínio ISEL.


## v3.2 — Satellite passes

The hero starfield now includes occasional slow satellite passes, optionally with a faint illustrative ground link. Edit `src/components/Starfield.astro`; see `docs/STARFIELD.md` for settings. The PT/EN routing and group content structure are unchanged.


## v3.3: hero sem ilustrações do badge

A homepage apresenta exclusivamente o campo de estrelas animado, meteoros e passagens ocasionais de satélites. A marca ISEL NewSpace continua no cabeçalho. Para ajustar o movimento, consultar `docs/STARFIELD.md`. O website não carrega recursos externos para o hero.
