import { towns } from "./data/town"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    output: { dir: '.output', serverDir: '.output/server', publicDir: '.output/public' }
  },
  devtools: { enabled: true },
  target: 'static',
  modules: ["@nuxt/content", "nuxt-svgo", "@nuxt/image", "@nuxtjs/tailwindcss", "@nuxtjs/sitemap"],
  site: {
    url: 'gary-deshayes.com'
  },
  sitemap: {
    hostname: 'https://gary-deshayes.com',
    routes: () => {
      return towns.map(town => {
        const formattedTown = town.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[éèêë]/g, 'e')
          .replace(/[ç]/g, 'c');
        return `/developpeur-web-fullstack/${formattedTown}`;
      });
    }
  },
  css: ["@/assets/css/main.css"],
  components: true,
  content: {
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: "github-dark",
      langs: [
        'json',
        'js',
        'ts',
        'html',
        'css',
        'vue',
        'shell',
        'mdc',
        'md',
        'yaml',
        'c',
        'cpp',
        'java',
        'javascript'
      ]
    }
  },
  runtimeConfig: {
    public: {
        wordpressUrl: 'https://gary-deshayes.com/graphql'
    }
  },
})