import _Highlight from 'C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":"github-dark"}