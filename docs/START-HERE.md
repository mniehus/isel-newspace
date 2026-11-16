> **Atualização v3.5:** começar por [README.md](README.md) e [CONTENT-MODEL.md](CONTENT-MODEL.md). Algumas instruções abaixo descrevem a estrutura anterior e devem ser consideradas históricas.

# ISEL NewSpace — editorial team guide (repository only)

**This documentation is not displayed on the public website.** If the GitHub repository is public, however, the files are publicly readable on GitHub. Do not store passwords, private student data, unpublished research or confidential material here.

## Your workspace

- Rocketry: `src/content/groups/rocketry/`
- CubeSat: `src/content/groups/cubesat/`
- RF Ground Station: `src/content/groups/rf-ground/`
- Optical & Quantum: `src/content/groups/optical-quantum/`
- Ground software/FPGA: `src/content/groups/ground-software/`
- Eclipse science: `src/content/groups/eclipse-science/`
- Joint events and news: `src/content/shared/`

Each group owns `group.md`, `projects/`, `events/` and `news/` within its folder. Upload public imagery to `public/images/<group-slug>/` and reference it using site-root paths, for example `/images/rocketry/launch.jpg` (for a project deployed at a GitHub Pages subpath, use the configured base path or a site utility for images).

Only edit these content files for normal updates; **do not edit HTML, `.astro`, CSS or configuration**. The site auto-builds its navigation, activity cards, events and news from content.

## Publish a change

1. Copy the nearest Markdown example in your team's folder.
2. Give the new file a descriptive `kebab-case.md` name.
3. Fill in the metadata between the two `---` markers and the short body text.
4. From VS Code, run `npm run dev` and inspect the page.
5. Submit your change by pull request (recommended for shared repository).

Read `docs/PROJECTS.md`, `docs/EVENTS.md`, and `docs/NEWS.md` for copy/paste examples.
