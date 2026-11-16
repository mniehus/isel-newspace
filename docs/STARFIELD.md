# Animação de fundo — v3.4

O fundo usa `src/components/Starfield.astro`, montado **uma vez** em `src/layouts/Base.astro`, ocupando toda a janela mesmo durante o scroll. O site não depende de ESA nem de bibliotecas para a animação.

Parâmetros em `SETTINGS`: `driftPxPerSecond`, `twinkleStrength`, `meteorIntervalSeconds`, `satelliteIntervalSeconds`, `satelliteShapeProbability`. Intervalos em segundos. Efeitos decorativos, **não** são simulações orbitais ou posições reais.

A animação pára quando o separador não está visível e respeita `prefers-reduced-motion`. Para tornar o fundo menos intrusivo, ajustar os intervalos para valores superiores ou reduzir a opacidade do canvas em `src/styles/global.css`.
