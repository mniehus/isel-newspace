> **Atualização v3.5:** começar por [README.md](README.md) e [CONTENT-MODEL.md](CONTENT-MODEL.md). Algumas instruções abaixo descrevem a estrutura anterior e devem ser consideradas históricas.

# Group-owned folders

Every group has one folder named with a simple lower-case `slug`.

- `group.md` — introduction and contact info
- `projects/*.md` — one Markdown file per project
- `events/*.md` — workshops, meetings, demonstrations
- `news/*.md` — brief updates

New groups: copy `_TEMPLATE_GROUP` from `templates/` into `groups/new-slug/`, edit `group.md`, then add content.
The site automatically finds the new group and its projects, events and news. No menu edits needed.
