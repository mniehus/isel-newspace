# Modelo de dados v3.5 — Áreas, Projetos, Equipas

Áreas: `src/content/areas/<id>.md` (campos `title`, `titleEn`, `summary`, `order`).

Projetos: `src/content/projects/<id>.md`, com `areas: [<id-area>]`, `teams: [<id-equipa>]`, `maintainers: [<id-equipa>]`. Os IDs devem corresponder aos nomes de ficheiros/pastas já existentes. Um projeto pode ter várias equipas; `teams: []` é permitido para iniciativas em exploração.

Equipas: `src/content/groups/<id>/group.md`. Apesar da designação histórica `groups`, estas entradas representam **Equipas**, e não domínios temáticos. Os eventos e notícias locais continuam em subpastas `events/` e `news/` sob a mesma equipa.

As páginas públicas `/areas/`, `/projects/` e `/teams/` representam as três perspetivas. As rotas antigas `/groups/` permanecem como compatibilidade nesta fase.

## Exemplo de relações

```yaml
title: "Estação terrestre ótica"
summary: "Descrição confirmada pela equipa"
status: "Active"
areas: [communications, photonics-quantum, computing]
teams: [optical-quantum, ground-software]
maintainers: [optical-quantum]
demo: false
```

Não criar páginas de equipas apenas para preencher as páginas de área. O campo `demo` identifica conteúdo ilustrativo por validar.
