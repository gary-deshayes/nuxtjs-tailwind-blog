import { towns } from "./data/town"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  security: {
    nonce: true, // Enables HTML nonce support in SSR mode
    headers: {
      contentSecurityPolicy: {
        'style-src': [
          "'unsafe-inline'",
          "'nonce-{{nonce}}'"
        ],
        'script-src': [
          "'nonce-1fz1fe1zdf1zd1fzfd'" // Enables CSP nonce support for scripts in SSR mode, supported by almost any browser (level 2)
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
  modules: [
    "@nuxt/content",
    "nuxt-svgo",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/sitemap",
    "nuxt-security"
  ],
  site: {
    url: 'portfolio.gary-deshayes.com'
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', 'sitemap.xml'],
    },
  },
  sitemap: {
    sources: [
      '/api/towns',
    ]
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