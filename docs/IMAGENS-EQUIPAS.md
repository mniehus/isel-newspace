# Identidade visual de cada equipa

O portal não impõe ícones, cartoons nem fotografias a nenhuma atividade. Por defeito, os cartões são **tipográficos**.

Para acrescentar uma imagem: guardar em `public/groups/<slug>/capa.webp`, por exemplo `public/groups/rocketry/capa.webp`. No ficheiro `src/content/groups/<slug>/group.md`, acrescentar à metadata:

```yaml
image: "/groups/rocketry/capa.webp"
```

Para um projeto individual, usar a mesma propriedade `image` no ficheiro de projeto. Imagens só aparecem no Showroom quando forem fornecidas pelas equipas. Recomendações: ficheiros próprios com permissão de uso, WebP/JPEG, cerca de 1200px de largura, legenda/créditos quando necessários.

**Não guardar instruções internas dentro de `public/` ou `src/pages/`.** `docs/` e `templates/` não são publicados como páginas, mas permanecem acessíveis caso o repositório GitHub seja público.
