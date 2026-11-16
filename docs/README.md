# ISEL NewSpace — guia das equipas

**Primeiro ponto de entrada para qualquer pessoa que contribua para este repositório.**

O ISEL NewSpace é uma plataforma comunitária de divulgação, colaboração e criação de oportunidades em engenharia, ciência e tecnologia espacial no ISEL. Não substitui os clubes, núcleos, grupos ou projetos existentes. As equipas mantêm a sua autonomia e indicam os responsáveis pelos seus conteúdos.

## Por onde começar

1. Ler [FILOSOFIA.md](FILOSOFIA.md) para compreender o modelo federado.
2. Consultar [START-HERE.md](START-HERE.md) para instalar e testar o site.
3. Escolher o que pretende atualizar: **Área**, **Projeto**, **Equipa**, **Evento** ou **Notícia**.
4. Copiar um exemplo existente, editar o Markdown e executar `npm run dev` / `npm run build`.
5. Propor alterações por *pull request*; uma revisão ligeira verifica links, autorização para imagens e eventual conflito de identificação.

## Onde colocar cada conteúdo

| Informação | Pasta / exemplo | Quem mantém |
| --- | --- | --- |
| Área científica/técnica | `src/content/areas/communications.md` | Curadoria conjunta, com contributos dos participantes |
| Projeto (mesmo interequipas) | `src/content/projects/optical-quantum.md` | Equipas listadas em `maintainers` |
| Perfil de equipa | `src/content/groups/rocketry/group.md` | A própria equipa |
| Evento de uma equipa | `src/content/groups/rocketry/events/` | A própria equipa |
| Notícia de uma equipa | `src/content/groups/rocketry/news/` | A própria equipa |
| Evento ou notícia conjunta | `src/content/shared/events/` ou `shared/news/` | Coordenação editorial partilhada |
| Fotografia publicada | `public/groups/<equipa>/` | Equipa fornecedora, com direitos assegurados |
| Instruções internas | `docs/` e `templates/` | Contribuidores/coordenação |

**Nota:** `docs/` não é publicado como páginas do Astro, mas fica visível a quem tiver acesso ao repositório. Se o GitHub for público, não colocar aqui dados confidenciais.

## Relações — nunca duplicar informação

Cada ficheiro de projeto tem identificador próprio (o nome sem `.md`) e declara `areas`, `teams` e `maintainers`. Uma equipa pode colaborar em diversos projetos; um projeto pode incluir várias equipas e áreas. As páginas ligadas são produzidas automaticamente.

As **áreas** descrevem competências e interesses e podem existir sem projeto ativo; os **projetos** representam realizações concretas; as **equipas** são entidades humanas e autónomas. Não criar uma equipa fictícia para representar uma área.

As entradas de demonstração existentes estão marcadas `demo: true` e devem ser validadas antes de se tornarem apresentação institucional.

## Idiomas, imagens e contactos

A interface começa em português e está disponível em inglês. Os perfis de equipas podem manter-se inicialmente numa só língua; evitar traduções automáticas não revistas. Não usar fotografias ou logótipos sem autorização. Não inventar contactos nem atribuir responsabilidades sem concordância.

## Regras simples de cooperação

- Uma equipa propõe e revê o seu próprio conteúdo; a publicação requer apenas revisão editorial/técnica leve.
- As ligações externas apontam para repositórios e páginas mantidos pelos respetivos responsáveis.
- Alterações a nomes, relações entre equipas e identificação institucional são coordenadas com os envolvidos.
- É preferível ter uma descrição curta e verdadeira a uma página extensa mas desatualizada.
- Consultar `docs/PROJECTS.md`, `EVENTS.md`, `NEWS.md` e `IDIOMAS.md` para detalhes.


## Identidade visual

Consultar [IDENTIDADE-VISUAL.md](IDENTIDADE-VISUAL.md) para variantes do badge e boas práticas.
