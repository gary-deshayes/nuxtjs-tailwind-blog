import { towns } from "./data/town"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  security: {
    nonce: true, // Enables HTML nonce support in SSR mode
    headers: {
      contentSecurityPolicy: {
        'script-src': [
          "'strict-dynamic'", // Modify with your custom CSP sources
          "'nonce-gdhs'" // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
        ]
      }
    },
  },
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
  devtools: { enabled: true },
  target: 'static',
  modules: [
    "@nuxt/content",
    "nuxt-svgo",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "nuxt-security"
  ],
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