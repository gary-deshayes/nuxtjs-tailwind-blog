import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHost, getRequestProtocol, getResponseHeader, removeResponseHeader, setResponseHeader, getResponseHeaders, setResponseStatus, send, getRequestHeaders, createError, getQuery as getQuery$1, getCookie, setHeader, getHeader, appendHeader, handleCors, readMultipartFormData, readBody, lazyEventHandler, useBase, createApp, createRouter as createRouter$1, toNodeListener } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/ofetch/dist/node.mjs';
import destr, { destr as destr$1 } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/hookable/dist/index.mjs';
import { klona } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/klona/dist/index.mjs';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/scule/dist/index.mjs';
import defu, { defuFn, defu as defu$1, createDefu } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/defu/dist/defu.mjs';
import { hash } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, hasProtocol, withHttps, withoutProtocol, withTrailingSlash, withLeadingSlash, withBase, withoutTrailingSlash, decodePath, isRelative } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/ufo/dist/index.mjs';
import { createStorage, prefixStorage } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unstorage/drivers/fs.mjs';
import file_58_47_47_47C_58_47Users_47Gary_47Documents_47Projets_47nuxtjs_45tailwind_45blog_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js from 'file:///C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import unstorage_47drivers_47lru_45cache from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unstorage/drivers/lru-cache.mjs';
import unstorage_47drivers_47fs_45lite from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unstorage/drivers/fs-lite.mjs';
import { toRouteMatcher, createRouter } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/radix3/dist/index.mjs';
import { toValue } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/vue/index.mjs';
import { createHash } from 'node:crypto';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve as resolve$1, extname, isAbsolute } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/pathe/dist/index.mjs';
import { isSpecialLang, isSpecialTheme, addClassToHast, createHighlighterCore } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/core.mjs';
import { transformerNotationDiff, transformerNotationFocus, transformerNotationHighlight, transformerNotationErrorLevel } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/@shikijs/transformers/dist/index.mjs';
import { unified } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unified/index.js';
import { toString as toString$1 } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/mdast-util-to-string/index.js';
import { postprocess, preprocess } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark/index.js';
import { stringifyPosition } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unist-util-stringify-position/index.js';
import { markdownLineEnding, markdownSpace } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark-util-character/index.js';
import { push, splice } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark-util-chunked/index.js';
import { resolveAll } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark-util-resolve-all/index.js';
import { normalizeUri } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark-util-sanitize-uri/index.js';
import slugify from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/slugify/slugify.js';
import remarkParse from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-parse/index.js';
import remark2rehype from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-rehype/index.js';
import remarkMDC, { parseFrontMatter } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-mdc/dist/index.mjs';
import remarkEmoji from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-emoji/index.js';
import remarkGFM from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-gfm/index.js';
import rehypeExternalLinks from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/rehype-external-links/index.js';
import rehypeSortAttributeValues from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/rehype-sort-attribute-values/index.js';
import rehypeSortAttributes from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/rehype-sort-attributes/index.js';
import rehypeRaw from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/rehype-raw/index.js';
import { detab } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/detab/index.js';
import { toString } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/hast-util-to-string/index.js';
import Slugger from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/github-slugger/index.js';
import { FilterXSS } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/xss/lib/index.js';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/ipx/dist/index.mjs';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {}
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "cca875d5-a7b9-42db-9e5f-dec20a9c1503",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/sitemap.xsl": {
        "headers": {
          "Content-Type": "application/xslt+xml"
        }
      },
      "/sitemap.xml": {
        "swr": 600,
        "cache": {
          "swr": true,
          "maxAge": 600,
          "varies": [
            "X-Forwarded-Host",
            "X-Forwarded-Proto",
            "Host"
          ]
        }
      },
      "/**": {
        "headers": {
          "Referrer-Policy": "no-referrer",
          "Strict-Transport-Security": "max-age=15552000; includeSubDomains;",
          "X-Content-Type-Options": "nosniff",
          "X-Download-Options": "noopen",
          "X-Frame-Options": "SAMEORIGIN",
          "X-Permitted-Cross-Domain-Policies": "none",
          "X-XSS-Protection": "0"
        }
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "wordpressUrl": "https://gary-deshayes.com/graphql",
    "mdc": {
      "useNuxtImage": true,
      "components": {
        "prose": true,
        "map": {
          "p": "prose-p",
          "a": "prose-a",
          "blockquote": "prose-blockquote",
          "code-inline": "prose-code-inline",
          "code": "ProseCodeInline",
          "em": "prose-em",
          "h1": "prose-h1",
          "h2": "prose-h2",
          "h3": "prose-h3",
          "h4": "prose-h4",
          "h5": "prose-h5",
          "h6": "prose-h6",
          "hr": "prose-hr",
          "img": "prose-img",
          "ul": "prose-ul",
          "ol": "prose-ol",
          "li": "prose-li",
          "strong": "prose-strong",
          "table": "prose-table",
          "thead": "prose-thead",
          "tbody": "prose-tbody",
          "td": "prose-td",
          "th": "prose-th",
          "tr": "prose-tr"
        }
      },
      "headings": {
        "anchorLinks": {
          "h1": false,
          "h2": false,
          "h3": false,
          "h4": false,
          "h5": false,
          "h6": false
        }
      }
    },
    "content": {
      "locales": [],
      "defaultLocale": "",
      "integrity": 1728243177748,
      "experimental": {
        "stripQueryParameters": false,
        "advanceQuery": false,
        "clientDB": false
      },
      "respectPathCase": false,
      "api": {
        "baseURL": "/api/_content"
      },
      "navigation": {
        "fields": []
      },
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "highlight": {
        "theme": "github-dark",
        "langs": [
          "json",
          "js",
          "ts",
          "html",
          "css",
          "vue",
          "shell",
          "mdc",
          "md",
          "yaml",
          "c",
          "cpp",
          "java",
          "javascript"
        ],
        "highlighter": "shiki"
      },
      "wsUrl": "",
      "documentDriven": false,
      "host": "",
      "trailingSlash": false,
      "search": "",
      "contentHead": true,
      "anchorLinks": false
    }
  },
  "content": {
    "cacheVersion": 2,
    "cacheIntegrity": "JDWGmoXRE7",
    "transformers": [],
    "base": "",
    "api": {
      "baseURL": "/api/_content"
    },
    "watch": {
      "ws": {
        "port": {
          "port": 4000,
          "portRange": [
            4000,
            4040
          ]
        },
        "hostname": "localhost",
        "showURL": false
      }
    },
    "sources": {},
    "ignores": [],
    "locales": [],
    "defaultLocale": "",
    "highlight": {
      "theme": "github-dark",
      "langs": [
        "json",
        "js",
        "ts",
        "html",
        "css",
        "vue",
        "shell",
        "mdc",
        "md",
        "yaml",
        "c",
        "cpp",
        "java",
        "javascript"
      ],
      "highlighter": "shiki"
    },
    "markdown": {
      "tags": {
        "p": "prose-p",
        "a": "prose-a",
        "blockquote": "prose-blockquote",
        "code-inline": "prose-code-inline",
        "code": "ProseCodeInline",
        "em": "prose-em",
        "h1": "prose-h1",
        "h2": "prose-h2",
        "h3": "prose-h3",
        "h4": "prose-h4",
        "h5": "prose-h5",
        "h6": "prose-h6",
        "hr": "prose-hr",
        "img": "prose-img",
        "ul": "prose-ul",
        "ol": "prose-ol",
        "li": "prose-li",
        "strong": "prose-strong",
        "table": "prose-table",
        "thead": "prose-thead",
        "tbody": "prose-tbody",
        "td": "prose-td",
        "th": "prose-th",
        "tr": "prose-tr"
      },
      "anchorLinks": {
        "depth": 0,
        "exclude": []
      },
      "remarkPlugins": {},
      "rehypePlugins": {}
    },
    "yaml": {},
    "csv": {
      "delimeter": ",",
      "json": true
    },
    "navigation": {
      "fields": []
    },
    "contentHead": true,
    "documentDriven": false,
    "respectPathCase": false,
    "experimental": {
      "clientDB": false,
      "cacheContents": true,
      "stripQueryParameters": false,
      "advanceQuery": false,
      "search": ""
    }
  },
  "sitemap": {
    "isI18nMapped": false,
    "sitemapName": "sitemap.xml",
    "isMultiSitemap": false,
    "excludeAppSources": [],
    "cacheMaxAgeSeconds": 600,
    "autoLastmod": false,
    "defaultSitemapsChunkSize": 1000,
    "sortEntries": true,
    "debug": false,
    "discoverImages": true,
    "isNuxtContentDocumentDriven": false,
    "xsl": "/__sitemap__/style.xsl",
    "xslTips": true,
    "xslColumns": [
      {
        "label": "URL",
        "width": "50%"
      },
      {
        "label": "Images",
        "width": "25%",
        "select": "count(image:image)"
      },
      {
        "label": "Last Updated",
        "width": "25%",
        "select": "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"
      }
    ],
    "credits": true,
    "version": "5.2.2",
    "sitemaps": {
      "sitemap.xml": {
        "sitemapName": "sitemap.xml",
        "route": "sitemap.xml",
        "defaults": {},
        "include": [],
        "exclude": [
          "/_nuxt/**",
          "/_**"
        ],
        "includeAppSources": true
      }
    }
  },
  "private": {
    "basicAuth": false
  },
  "security": {
    "strict": false,
    "headers": {
      "crossOriginResourcePolicy": "same-origin",
      "crossOriginOpenerPolicy": "same-origin",
      "crossOriginEmbedderPolicy": "credentialless",
      "contentSecurityPolicy": {
        "base-uri": [
          "'none'"
        ],
        "font-src": [
          "'self'",
          "https:",
          "data:"
        ],
        "form-action": [
          "'self'"
        ],
        "frame-ancestors": [
          "'self'"
        ],
        "img-src": [
          "'self'",
          "data:"
        ],
        "object-src": [
          "'none'"
        ],
        "script-src-attr": [
          "'none'"
        ],
        "style-src": [
          "'unsafe-inline'",
          "'nonce-{{nonce}}'"
        ],
        "script-src": [
          "'nonce-1fz1fe1zdf1zd1fzfd'"
        ],
        "upgrade-insecure-requests": true
      },
      "originAgentCluster": "?1",
      "referrerPolicy": "no-referrer",
      "strictTransportSecurity": {
        "maxAge": 15552000,
        "includeSubdomains": true
      },
      "xContentTypeOptions": "nosniff",
      "xDNSPrefetchControl": "off",
      "xDownloadOptions": "noopen",
      "xFrameOptions": "SAMEORIGIN",
      "xPermittedCrossDomainPolicies": "none",
      "xXSSProtection": "0",
      "permissionsPolicy": {
        "camera": [],
        "display-capture": [],
        "fullscreen": [],
        "geolocation": [],
        "microphone": []
      }
    },
    "requestSizeLimiter": {
      "maxRequestSizeInBytes": 2000000,
      "maxUploadFileRequestInBytes": 8000000,
      "throwError": true
    },
    "rateLimiter": {
      "tokensPerInterval": 150,
      "interval": 300000,
      "headers": false,
      "driver": {
        "name": "lruCache"
      },
      "throwError": true
    },
    "xssValidator": {
      "methods": [
        "GET",
        "POST"
      ],
      "throwError": true
    },
    "corsHandler": {
      "origin": "http://localhost:3000",
      "methods": [
        "GET",
        "HEAD",
        "PUT",
        "PATCH",
        "POST",
        "DELETE"
      ],
      "preflight": {
        "statusCode": 204
      }
    },
    "allowedMethodsRestricter": {
      "methods": "*",
      "throwError": true
    },
    "hidePoweredBy": true,
    "enabled": true,
    "csrf": false,
    "nonce": true,
    "removeLoggers": {
      "external": [],
      "consoleType": [
        "log",
        "debug"
      ],
      "include": [
        {},
        {}
      ],
      "exclude": [
        {},
        {}
      ]
    },
    "ssg": {
      "meta": true,
      "hashScripts": true,
      "hashStyles": false,
      "nitroHeaders": true,
      "exportToPresets": true
    },
    "sri": true
  },
  "nuxt-site-config": {
    "stack": [
      {
        "_context": "system",
        "_priority": -15,
        "name": "nuxtjs-tailwind-blog",
        "env": "production"
      },
      {
        "_context": "package.json",
        "_priority": -10,
        "name": "nuxt-app"
      },
      {
        "_priority": -3,
        "_context": "nuxt-site-config:config",
        "url": "portfolio.gary-deshayes.com"
      }
    ],
    "version": "2.2.12",
    "debug": false
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": [
        "C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/public"
      ]
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  if (!event) {
    return _sharedAppConfig;
  }
  if (event.context.nitro.appConfig) {
    return event.context.nitro.appConfig;
  }
  const appConfig$1 = klona(appConfig);
  event.context.nitro.appConfig = appConfig$1;
  return appConfig$1;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', file_58_47_47_47C_58_47Users_47Gary_47Documents_47Projets_47nuxtjs_45tailwind_45blog_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"file:///C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/.nuxt/cache/nitro/prerender"}));
storage.mount('#rate-limiter-storage', unstorage_47drivers_47lru_45cache({"driver":"lruCache"}));
storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"C:\\Users\\Gary\\Documents\\Projets\\nuxtjs-tailwind-blog\\.data\\kv"}));
storage.mount('content:source:content', unstorage_47drivers_47fs({"name":"content:source:content","driver":"fs","base":"C:\\Users\\Gary\\Documents\\Projets\\nuxtjs-tailwind-blog\\content","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache:content', unstorage_47drivers_47fs({"driver":"fs","base":"C:\\Users\\Gary\\Documents\\Projets\\nuxtjs-tailwind-blog\\.nuxt\\content-cache","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\Gary\\Documents\\Projets\\nuxtjs-tailwind-blog","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"C:\\Users\\Gary\\Documents\\Projets\\nuxtjs-tailwind-blog\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\Gary\\Documents\\Projets\\nuxtjs-tailwind-blog\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"C:\\Users\\Gary\\Documents\\Projets\\nuxtjs-tailwind-blog\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
const unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
const reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
const escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
const objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  const counts = /* @__PURE__ */ new Map();
  let logNum = 0;
  function log(message) {
    if (logNum < 100) {
      console.warn(message);
      logNum += 1;
    }
  }
  function walk(thing) {
    if (typeof thing === "function") {
      log(`Cannot stringify a function ${thing.name}`);
      return;
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          const proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            if (typeof thing.toJSON !== "function") {
              log(`Cannot stringify arbitrary non-POJOs ${thing.constructor.name}`);
            }
          } else if (Object.getOwnPropertySymbols(thing).length > 0) {
            log(`Cannot stringify POJOs with symbolic keys ${Object.getOwnPropertySymbols(thing).map((symbol) => symbol.toString())}`);
          } else {
            Object.keys(thing).forEach((key) => walk(thing[key]));
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    const type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify(thing.valueOf())})`;
      case "RegExp":
        return thing.toString();
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = thing.map((v, i) => i in thing ? stringify(v) : "");
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify).join(",")}])`;
      default:
        if (thing.toJSON) {
          let json = thing.toJSON();
          if (getType(json) === "String") {
            try {
              json = JSON.parse(json);
            } catch (e) {
            }
          }
          return stringify(json);
        }
        if (Object.getPrototypeOf(thing) === null) {
          if (Object.keys(thing).length === 0) {
            return "Object.create(null)";
          }
          return `Object.create(null,{${Object.keys(thing).map((key) => `${safeKey(key)}:{writable:true,enumerable:true,value:${stringify(thing[key])}}`).join(",")}})`;
        }
        return `{${Object.keys(thing).map((key) => `${safeKey(key)}:${stringify(thing[key])}`).join(",")}}`;
    }
  }
  const str = stringify(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (isPrimitive(thing)) {
        values.push(stringifyPrimitive(thing));
        return;
      }
      const type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify(v)}`);
          });
          break;
        case "Set":
          values.push("new Set");
          statements.push(`${name}.${Array.from(thing).map((v) => `add(${stringify(v)})`).join(".")}`);
          break;
        case "Map":
          values.push("new Map");
          statements.push(`${name}.${Array.from(thing).map(([k, v]) => `set(${stringify(k)}, ${stringify(v)})`).join(".")}`);
          break;
        default:
          values.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach((key) => {
            statements.push(`${name}${safeProp(key)}=${stringify(thing[key])}`);
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(";")}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function getName(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string") {
    return stringifyString(thing);
  }
  if (thing === void 0) {
    return "void 0";
  }
  if (thing === 0 && 1 / thing < 0) {
    return "-0";
  }
  const str = String(thing);
  if (typeof thing === "number") {
    return str.replace(/^(-)?0\./, "$1.");
  }
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? `.${key}` : `[${escapeUnsafeChars(JSON.stringify(key))}]`;
}
function stringifyString(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

function normalizeSiteConfig(config) {
  if (typeof config.indexable !== "undefined")
    config.indexable = String(config.indexable) !== "false";
  if (typeof config.trailingSlash !== "undefined" && !config.trailingSlash)
    config.trailingSlash = String(config.trailingSlash) !== "false";
  if (config.url && !hasProtocol(config.url, { acceptRelative: true, strict: false }))
    config.url = withHttps(config.url);
  const keys = Object.keys(config).sort((a, b) => a.localeCompare(b));
  const newConfig = {};
  for (const k of keys)
    newConfig[k] = config[k];
  return newConfig;
}
function createSiteConfigStack(options) {
  const debug = options?.debug || false;
  const stack = [];
  function push(input) {
    if (!input || typeof input !== "object" || Object.keys(input).length === 0)
      return;
    if (!input._context && debug) {
      let lastFunctionName = new Error("tmp").stack?.split("\n")[2].split(" ")[5];
      if (lastFunctionName?.includes("/"))
        lastFunctionName = "anonymous";
      input._context = lastFunctionName;
    }
    const entry = {};
    for (const k in input) {
      const val = input[k];
      if (typeof val !== "undefined" && val !== "")
        entry[k] = val;
    }
    if (Object.keys(entry).filter((k) => !k.startsWith("_")).length > 0)
      stack.push(entry);
  }
  function get(options2) {
    const siteConfig = {};
    if (options2?.debug)
      siteConfig._context = {};
    for (const o in stack.sort((a, b) => (a._priority || 0) - (b._priority || 0))) {
      for (const k in stack[o]) {
        const key = k;
        const val = options2?.resolveRefs ? toValue(stack[o][k]) : stack[o][k];
        if (!k.startsWith("_") && typeof val !== "undefined") {
          siteConfig[k] = val;
          if (options2?.debug)
            siteConfig._context[key] = stack[o]._context?.[key] || stack[o]._context || "anonymous";
        }
      }
    }
    return options2?.skipNormalize ? siteConfig : normalizeSiteConfig(siteConfig);
  }
  return {
    stack,
    push,
    get
  };
}

function envSiteConfig(env) {
  return Object.fromEntries(Object.entries(env).filter(([k]) => k.startsWith("NUXT_SITE_") || k.startsWith("NUXT_PUBLIC_SITE_")).map(([k, v]) => [
    k.replace(/^NUXT_(PUBLIC_)?SITE_/, "").split("_").map((s, i) => i === 0 ? s.toLowerCase() : s[0].toUpperCase() + s.slice(1).toLowerCase()).join(""),
    v
  ]));
}

function useSiteConfig(e, _options) {
  e.context.siteConfig = e.context.siteConfig || createSiteConfigStack();
  const options = defu$1(_options, useRuntimeConfig(e)["nuxt-site-config"], { debug: false });
  return e.context.siteConfig.get(options);
}

function useNitroOrigin(e) {
  const cert = process.env.NITRO_SSL_CERT;
  const key = process.env.NITRO_SSL_KEY;
  let host = process.env.NITRO_HOST || process.env.HOST || false;
  let port = false;
  let protocol = cert && key || !false ? "https" : "http";
  if (process.env.__NUXT_DEV__) {
    const origin = JSON.parse(process.env.__NUXT_DEV__).proxy.url;
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else if (process.env.NUXT_VITE_NODE_OPTIONS) {
    const origin = JSON.parse(process.env.NUXT_VITE_NODE_OPTIONS).baseURL.replace("/__nuxt_vite_node__", "");
    host = withoutProtocol(origin);
    protocol = origin.includes("https") ? "https" : "http";
  } else {
    host = getRequestHost(e, { xForwardedHost: true }) || host;
    protocol = getRequestProtocol(e, { xForwardedProto: true }) || protocol;
  }
  if (typeof host === "string" && host.includes(":")) {
    port = host.split(":").pop();
    host = host.split(":")[0];
  }
  port = port ? `:${port}` : "";
  return withTrailingSlash(`${protocol}://${host}${port}`);
}

function resolveSitePath(pathOrUrl, options) {
  let path = pathOrUrl;
  if (hasProtocol(pathOrUrl, { strict: false, acceptRelative: true })) {
    const parsed = parseURL(pathOrUrl);
    path = parsed.pathname;
  }
  const base = withLeadingSlash(options.base || "/");
  if (base !== "/" && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const origin = options.absolute ? options.siteUrl : "";
  const baseWithOrigin = options.withBase ? withBase(base, origin || "/") : origin;
  const resolvedUrl = withBase(path, baseWithOrigin);
  return path === "/" && !options.withBase ? withTrailingSlash(resolvedUrl) : fixSlashes(options.trailingSlash, resolvedUrl);
}
function fixSlashes(trailingSlash, pathOrUrl) {
  const $url = parseURL(pathOrUrl);
  const isFileUrl = $url.pathname.includes(".");
  if (isFileUrl)
    return pathOrUrl;
  const fixedPath = trailingSlash ? withTrailingSlash($url.pathname) : withoutTrailingSlash($url.pathname);
  return `${$url.protocol ? `${$url.protocol}//` : ""}${$url.host || ""}${fixedPath}${$url.search || ""}${$url.hash || ""}`;
}

function createSitePathResolver(e, options = {}) {
  const siteConfig = useSiteConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  const nuxtBase = useRuntimeConfig(e).app.baseURL || "/";
  return (path) => {
    return resolveSitePath(path, {
      ...options,
      siteUrl: options.canonical !== false || true ? siteConfig.url : nitroOrigin,
      trailingSlash: siteConfig.trailingSlash,
      base: nuxtBase
    });
  };
}

function defineNitroPlugin(def) {
  return def;
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || isTag(vnode, Symbol.for("v-txt"));
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children?.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value || "";
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).filter(Boolean).join("");
  }
  return "";
}

const useProcessorPlugins = async (processor, plugins = {}) => {
  const toUse = Object.entries(plugins).filter((p) => p[1] !== false);
  for (const plugin of toUse) {
    const instance = plugin[1].instance || await import(
      /* @vite-ignore */
      plugin[0]
    ).then((m) => m.default || m);
    processor.use(instance, plugin[1].options);
  }
};

function emphasis(state, node) {
  const result = {
    type: "element",
    tagName: "em",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function parseThematicBlock(lang) {
  if (!lang?.trim()) {
    return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
  }
  const languageMatches = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokensMatches = lang.match(/\{([^}]*)\}/);
  const filenameMatches = lang.match(/\[((\\\]|[^\]])*)\]/);
  const meta = lang.replace(languageMatches?.[0] ?? "", "").replace(highlightTokensMatches?.[0] ?? "", "").replace(filenameMatches?.[0] ?? "", "").trim();
  return {
    language: languageMatches?.[0] || void 0,
    highlights: parseHighlightedLines(highlightTokensMatches?.[1] || void 0),
    // https://github.com/nuxt/content/pull/2169
    filename: filenameMatches?.[1].replace(/\\\]/g, "]") || void 0,
    meta
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([\w-]+)(\s[^>]*?)?\/?>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}

const code = (state, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename, meta } = parseThematicBlock(lang);
  const value = node.value ? detab(node.value + "\n") : "";
  let result = {
    type: "element",
    tagName: "code",
    properties: { __ignoreMap: "" },
    children: [{ type: "text", value }]
  };
  if (meta) {
    result.data = {
      meta
    };
  }
  state.patch(node, result);
  result = state.applyData(node, result);
  const properties = {
    language,
    filename,
    highlights,
    meta,
    code: value
  };
  if (language) {
    properties.className = ["language-" + language];
  }
  result = { type: "element", tagName: "pre", properties, children: [result] };
  state.patch(node, result);
  return result;
};

function html(state, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (state.dangerous || state.options?.allowDangerousHtml) {
    const result = { type: "raw", value: node.value };
    state.patch(node, result);
    return state.applyData(node, result);
  }
  return void 0;
}

function link$1(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(node.url)
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function list(state, node) {
  const properties = {};
  const results = state.all(node);
  let index = -1;
  if (typeof node.start === "number" && node.start !== 1) {
    properties.start = node.start;
  }
  while (++index < results.length) {
    const child = results[index];
    if (child.type === "element" && child.tagName === "li" && child.properties && Array.isArray(child.properties.className) && child.properties.className.includes("task-list-item")) {
      properties.className = ["contains-task-list"];
      break;
    }
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    properties.className = ["contains-task-list"];
  }
  const result = {
    type: "element",
    tagName: node.ordered ? "ol" : "ul",
    properties,
    children: state.wrap(results, true)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(state, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return state.all(node);
    }
  }
  const result = {
    type: "element",
    tagName: "p",
    properties: {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function image(state, node) {
  const properties = { ...node.attributes, src: normalizeUri(node.url) };
  if (node.alt !== null && node.alt !== void 0) {
    properties.alt = node.alt;
  }
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = { type: "element", tagName: "img", properties, children: [] };
  state.patch(node, result);
  return state.applyData(node, result);
}

function strong(state, node) {
  const result = {
    type: "element",
    tagName: "strong",
    properties: node.attributes || {},
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}

function inlineCode(state, node) {
  const language = node.attributes?.language || node.attributes?.lang;
  const text = { type: "text", value: node.value.replace(/\r?\n|\r/g, " ") };
  state.patch(node, text);
  const result = {
    type: "element",
    tagName: "code",
    properties: node.attributes || {},
    children: [text]
  };
  const classes = (result.properties.class || "").split(" ");
  delete result.properties.class;
  if (language) {
    result.properties.language = language;
    delete result.properties.lang;
    classes.push("language-" + language);
  }
  result.properties.className = classes.join(" ");
  state.patch(node, result);
  return state.applyData(node, result);
}

function containerComponent(state, node) {
  const result = {
    type: "element",
    tagName: node.name,
    properties: {
      ...node.attributes,
      ...node.data?.hProperties
    },
    children: state.all(node)
  };
  state.patch(node, result);
  result.attributes = node.attributes;
  result.fmAttributes = node.fmAttributes;
  return result;
}

const handlers$1 = {
  emphasis,
  code,
  link: link$1,
  paragraph,
  html,
  list,
  image,
  strong,
  inlineCode,
  containerComponent
};

const defaults = {
  remark: {
    plugins: {
      "remark-mdc": {
        instance: remarkMDC
      },
      "remark-emoji": {
        instance: remarkEmoji
      },
      "remark-gfm": {
        instance: remarkGFM
      }
    }
  },
  rehype: {
    options: {
      handlers: handlers$1,
      allowDangerousHtml: true
    },
    plugins: {
      "rehype-external-links": {
        instance: rehypeExternalLinks
      },
      "rehype-sort-attribute-values": {
        instance: rehypeSortAttributeValues
      },
      "rehype-sort-attributes": {
        instance: rehypeSortAttributes
      },
      "rehype-raw": {
        instance: rehypeRaw,
        options: {
          passThrough: ["element"]
        }
      }
    }
  },
  highlight: false,
  toc: {
    searchDepth: 2,
    depth: 2
  }
};

function flattenNodeText(node) {
  if (node.type === "comment") {
    return "";
  }
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

const unsafeLinkPrefix = [
  "javascript:",
  "data:text/html",
  "vbscript:",
  "data:text/javascript",
  "data:text/vbscript",
  "data:text/css",
  "data:text/plain",
  "data:text/xml"
];
const validateProp = (attribute, value) => {
  if (attribute.startsWith("on")) {
    return false;
  }
  if (attribute === "href" || attribute === "src") {
    return !unsafeLinkPrefix.some((prefix) => value.toLowerCase().startsWith(prefix));
  }
  return true;
};
const validateProps = (type, props) => {
  if (!props) {
    return {};
  }
  props = Object.fromEntries(
    Object.entries(props).filter(([name, value]) => {
      const isValid = validateProp(name, value);
      if (!isValid) {
        console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${name}="${value}"`);
      }
      return isValid;
    })
  );
  if (type === "pre") {
    if (typeof props.highlights === "string") {
      props.highlights = props.highlights.split(" ").map((i) => Number.parseInt(i));
    }
  }
  return props;
};

function compileHast(options = {}) {
  const slugs = new Slugger();
  function compileToJSON(node, parent) {
    if (node.type === "root") {
      return {
        type: "root",
        children: node.children.map((child) => compileToJSON(child, node)).filter(Boolean)
      };
    }
    if (node.type === "element") {
      if (node.tagName === "p" && node.children.every((child) => child.type === "text" && /^\s*$/.test(child.value))) {
        return null;
      }
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children?.flatMap((child) => {
          if (child.type === "element" && child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {},
                children: []
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName?.match(/^h\d$/)) {
        node.properties = node.properties || {};
        node.properties.id = String(node.properties?.id || slugs.slug(toString(node))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1");
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      const children = (node.tagName === "template" && node.content?.children.length ? node.content.children : node.children).map((child) => compileToJSON(child, node)).filter(Boolean);
      return {
        type: "element",
        tag: node.tagName,
        props: validateProps(node.tagName, node.properties),
        children
      };
    }
    if (node.type === "text") {
      if (!/^\n+$/.test(node.value || "") || parent?.properties?.emptyLinePlaceholder) {
        return {
          type: "text",
          value: node.value
        };
      }
    }
    if (options.keepComments && node.type === "comment") {
      return {
        type: "comment",
        value: node.value
      };
    }
    return null;
  }
  this.Compiler = (tree) => {
    const body = compileToJSON(tree);
    let excerpt = void 0;
    const excerptIndex = tree.children.findIndex((node) => node.type === "comment" && node.value?.trim() === "more");
    if (excerptIndex !== -1) {
      excerpt = compileToJSON({
        type: "root",
        children: tree.children.slice(0, excerptIndex)
      });
      if (excerpt.children.find((node) => node.type === "element" && node.tag === "pre")) {
        const lastChild = body.children[body.children.length - 1];
        if (lastChild.type === "element" && lastChild.tag === "style") {
          excerpt.children.push(lastChild);
        }
      }
    }
    body.children = (body.children || []).filter((child) => child.type !== "text");
    return {
      body,
      excerpt
    };
  };
}

let moduleOptions;
let generatedMdcConfigs;
const createMarkdownParser = async (inlineOptions = {}) => {
  if (!moduleOptions) {
    moduleOptions = await import(
      './build/mdc-imports.mjs'
      /* @vite-ignore */
    ).catch(() => ({}));
  }
  if (!generatedMdcConfigs) {
    generatedMdcConfigs = await Promise.resolve().then(function () { return mdcConfigs; }).then((r) => r.getMdcConfigs()).catch(() => []);
  }
  const mdcConfigs$1 = [
    ...generatedMdcConfigs || [],
    ...inlineOptions.configs || []
  ];
  if (inlineOptions.highlight != null && inlineOptions.highlight != false && inlineOptions.highlight.highlighter !== void 0 && typeof inlineOptions.highlight.highlighter !== "function") {
    inlineOptions = {
      ...inlineOptions,
      highlight: {
        ...inlineOptions.highlight
      }
    };
    delete inlineOptions.highlight.highlighter;
  }
  const options = defu$1(inlineOptions, {
    remark: { plugins: moduleOptions?.remarkPlugins },
    rehype: { plugins: moduleOptions?.rehypePlugins },
    highlight: moduleOptions?.highlight
  }, defaults);
  if (options.rehype?.plugins?.highlight) {
    options.rehype.plugins.highlight.options = {
      ...options.rehype.plugins.highlight.options || {},
      ...options.highlight || {}
    };
  }
  let processor = unified();
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.pre?.(processor) || processor;
  }
  processor.use(remarkParse);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.remark?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.remark?.plugins);
  processor.use(remark2rehype, options.rehype?.options);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.rehype?.(processor) || processor;
  }
  await useProcessorPlugins(processor, options.rehype?.plugins);
  processor.use(compileHast, options);
  for (const config of mdcConfigs$1) {
    processor = await config.unified?.post?.(processor) || processor;
  }
  return async (md) => {
    const { content, data: frontmatter } = await parseFrontMatter(md);
    const processedFile = await processor.process({ value: content, data: frontmatter });
    const result = processedFile.result;
    const data = Object.assign(
      contentHeading(result.body),
      frontmatter,
      processedFile?.data || {}
    );
    let toc;
    if (data.toc !== false) {
      const tocOption = defu$1(data.toc || {}, options.toc);
      toc = generateToc(result.body, tocOption);
    }
    return {
      data,
      body: result.body,
      excerpt: result.excerpt,
      toc
    };
  };
};
const parseMarkdown = async (md, inlineOptions = {}) => {
  const parser = await createMarkdownParser(inlineOptions);
  return parser(md);
};
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type === "element" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const defuReplaceArray = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) || Array.isArray(value)) {
    obj[key] = value;
    return true;
  }
});

const PRERENDER_NO_SSR_ROUTES = /* @__PURE__ */ new Set(["/index.html", "/200.html", "/404.html"]);
const _MS6HX040HJ = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", async (ctx, { event }) => {
    const routeOptions = getRouteRules(event);
    const isIsland = process.env.NUXT_COMPONENT_ISLANDS && event.path.startsWith("/__nuxt_island");
    const url = event.path;
    const noSSR = event.context.nuxt?.noSSR || routeOptions.ssr === false && !isIsland || (PRERENDER_NO_SSR_ROUTES.has(url) );
    if (noSSR) {
      const siteConfig = Object.fromEntries(
        Object.entries(useSiteConfig(event)).map(([k, v]) => [k, toValue(v)])
      );
      ctx.body.push(`<script>window.__NUXT_SITE_CONFIG__=${devalue(siteConfig)}<\/script>`);
    }
  });
});

const merger = createDefu((obj, key, value) => {
  if (Array.isArray(obj[key]) && Array.isArray(value))
    obj[key] = Array.from(/* @__PURE__ */ new Set([...obj[key], ...value]));
  return obj[key];
});
function mergeOnKey(arr, key) {
  const res = {};
  arr.forEach((item) => {
    const k = item[key];
    res[k] = merger(item, res[k] || {});
  });
  return Object.values(res);
}
function splitForLocales(path, locales) {
  const prefix = withLeadingSlash(path).split("/")[1];
  if (locales.includes(prefix))
    return [prefix, path.replace(`/${prefix}`, "")];
  return [null, path];
}
const StringifiedRegExpPattern = /\/(.*?)\/([gimsuy]*)$/;
function normalizeRuntimeFilters(input) {
  return (input || []).map((rule) => {
    if (rule instanceof RegExp || typeof rule === "string")
      return rule;
    const match = rule.regex.match(StringifiedRegExpPattern);
    if (match)
      return new RegExp(match[1], match[2]);
    return false;
  }).filter(Boolean);
}
function createPathFilter(options = {}) {
  const urlFilter = createFilter(options);
  return (loc) => {
    let path = loc;
    try {
      path = parseURL(loc).pathname;
    } catch {
      return false;
    }
    return urlFilter(path);
  };
}
function createFilter(options = {}) {
  const include = options.include || [];
  const exclude = options.exclude || [];
  if (include.length === 0 && exclude.length === 0)
    return () => true;
  return function(path) {
    for (const v of [{ rules: exclude, result: false }, { rules: include, result: true }]) {
      const regexRules = v.rules.filter((r) => r instanceof RegExp);
      if (regexRules.some((r) => r.test(path)))
        return v.result;
      const stringRules = v.rules.filter((r) => typeof r === "string");
      if (stringRules.length > 0) {
        const routes = {};
        for (const r of stringRules) {
          if (r === path)
            return v.result;
          routes[r] = true;
        }
        const routeRulesMatcher = toRouteMatcher(createRouter({ routes, strictTrailingSlash: false }));
        if (routeRulesMatcher.matchAll(path).length > 0)
          return Boolean(v.result);
      }
    }
    return include.length === 0;
  };
}

function useSimpleSitemapRuntimeConfig(e) {
  const clone = JSON.parse(JSON.stringify(useRuntimeConfig(e).sitemap));
  for (const k in clone.sitemaps) {
    const sitemap = clone.sitemaps[k];
    sitemap.include = normalizeRuntimeFilters(sitemap.include);
    sitemap.exclude = normalizeRuntimeFilters(sitemap.exclude);
    clone.sitemaps[k] = sitemap;
  }
  return Object.freeze(clone);
}

const _kZiGs2xmn4 = defineNitroPlugin((nitroApp) => {
  const { discoverImages, isNuxtContentDocumentDriven } = useSimpleSitemapRuntimeConfig();
  nitroApp.hooks.hook("content:file:afterParse", async (content) => {
    const validExtensions = ["md", "mdx"];
    if (content.sitemap === false || content._draft || !validExtensions.includes(content._extension) || content._partial || content.indexable === false || content.index === false)
      return;
    let images = [];
    if (discoverImages) {
      images = content.body?.children?.filter(
        (c) => c.tag && c.props?.src && ["image", "img", "nuxtimg", "nuxt-img"].includes(c.tag.toLowerCase())
      ).map((i) => ({ loc: i.props.src })) || [];
    }
    const sitemapConfig = typeof content.sitemap === "object" ? content.sitemap : {};
    const lastmod = content.modifiedAt || content.updatedAt;
    const defaults = {};
    if (isNuxtContentDocumentDriven)
      defaults.loc = content._path;
    if (content.path)
      defaults.loc = content.path;
    if (images.length > 0)
      defaults.images = images;
    if (lastmod)
      defaults.lastmod = lastmod;
    const definition = defu$1(sitemapConfig, defaults);
    if (!definition.loc) {
      if (content.path && content.path && content.path.startsWith("/"))
        definition.loc = content.path;
      if (Object.keys(sitemapConfig).length > 0 && false)
        console.warn(`[@nuxtjs/content] The @nuxt/content file \`${content._path}\` is missing a sitemap \`loc\`.`);
    }
    content.sitemap = definition;
    if (!definition.loc)
      delete content.sitemap;
    return content;
  });
});

const nitroAppSecurityOptions = {};
function getAppSecurityOptions() {
  return nitroAppSecurityOptions;
}
function resolveSecurityRules(event) {
  if (!event.context.security) {
    event.context.security = {};
  }
  if (!event.context.security.rules) {
    const router = createRouter({ routes: structuredClone(nitroAppSecurityOptions) });
    const matcher = toRouteMatcher(router);
    const matches = matcher.matchAll(event.path.split("?")[0]);
    const rules = defuReplaceArray({}, ...matches.reverse());
    event.context.security.rules = rules;
  }
  return event.context.security.rules;
}

const KEYS_TO_NAMES = {
  contentSecurityPolicy: "Content-Security-Policy",
  crossOriginEmbedderPolicy: "Cross-Origin-Embedder-Policy",
  crossOriginOpenerPolicy: "Cross-Origin-Opener-Policy",
  crossOriginResourcePolicy: "Cross-Origin-Resource-Policy",
  originAgentCluster: "Origin-Agent-Cluster",
  referrerPolicy: "Referrer-Policy",
  strictTransportSecurity: "Strict-Transport-Security",
  xContentTypeOptions: "X-Content-Type-Options",
  xDNSPrefetchControl: "X-DNS-Prefetch-Control",
  xDownloadOptions: "X-Download-Options",
  xFrameOptions: "X-Frame-Options",
  xPermittedCrossDomainPolicies: "X-Permitted-Cross-Domain-Policies",
  xXSSProtection: "X-XSS-Protection",
  permissionsPolicy: "Permissions-Policy"
};
const NAMES_TO_KEYS = Object.fromEntries(Object.entries(KEYS_TO_NAMES).map(([key, name]) => [name, key]));
function getNameFromKey(key) {
  return KEYS_TO_NAMES[key];
}
function getKeyFromName(headerName) {
  const [, key] = Object.entries(NAMES_TO_KEYS).find(([name]) => name.toLowerCase() === headerName.toLowerCase()) || [];
  return key;
}
function headerStringFromObject(optionKey, optionValue) {
  if (optionValue === false) {
    return "";
  }
  if (optionKey === "contentSecurityPolicy") {
    const policies = optionValue;
    return Object.entries(policies).filter(([, value]) => value !== false).map(([directive, sources]) => {
      if (directive === "upgrade-insecure-requests") {
        return "upgrade-insecure-requests;";
      } else {
        const stringifiedSources = typeof sources === "string" ? sources : sources.map((source) => source.trim()).join(" ");
        return `${directive} ${stringifiedSources};`;
      }
    }).join(" ");
  } else if (optionKey === "strictTransportSecurity") {
    const policies = optionValue;
    return [
      `max-age=${policies.maxAge};`,
      policies.includeSubdomains && "includeSubDomains;",
      policies.preload && "preload;"
    ].filter(Boolean).join(" ");
  } else if (optionKey === "permissionsPolicy") {
    const policies = optionValue;
    return Object.entries(policies).filter(([, value]) => value !== false).map(([directive, sources]) => {
      if (typeof sources === "string") {
        return `${directive}=${sources}`;
      } else {
        return `${directive}=(${sources.join(" ")})`;
      }
    }).join(", ");
  } else {
    return optionValue;
  }
}
function headerObjectFromString(optionKey, headerValue) {
  if (!headerValue) {
    return false;
  }
  if (optionKey === "contentSecurityPolicy") {
    const directives = headerValue.split(";").map((directive) => directive.trim()).filter((directive) => directive);
    const objectForm = {};
    for (const directive of directives) {
      const [type, ...sources] = directive.split(" ").map((token) => token.trim());
      if (type === "upgrade-insecure-requests") {
        objectForm[type] = true;
      } else {
        objectForm[type] = sources.join(" ");
      }
    }
    return objectForm;
  } else if (optionKey === "strictTransportSecurity") {
    const directives = headerValue.split(";").map((directive) => directive.trim()).filter((directive) => directive);
    const objectForm = {};
    for (const directive of directives) {
      const [type, value] = directive.split("=").map((token) => token.trim());
      if (type === "max-age") {
        objectForm.maxAge = Number(value);
      } else if (type === "includeSubdomains" || type === "preload") {
        objectForm[type] = true;
      }
    }
    return objectForm;
  } else if (optionKey === "permissionsPolicy") {
    const directives = headerValue.split(",").map((directive) => directive.trim()).filter((directive) => directive);
    const objectForm = {};
    for (const directive of directives) {
      const [type, value] = directive.split("=").map((token) => token.trim());
      objectForm[type] = value;
    }
    return objectForm;
  } else {
    return headerValue;
  }
}
function standardToSecurity(standardHeaders) {
  if (!standardHeaders) {
    return void 0;
  }
  const standardHeadersAsObject = {};
  Object.entries(standardHeaders).forEach(([headerName, headerValue]) => {
    const optionKey = getKeyFromName(headerName);
    if (optionKey) {
      if (typeof headerValue === "string") {
        const objectValue = headerObjectFromString(optionKey, headerValue);
        standardHeadersAsObject[optionKey] = objectValue;
      } else {
        standardHeadersAsObject[optionKey] = headerValue;
      }
    }
  });
  if (Object.keys(standardHeadersAsObject).length === 0) {
    return void 0;
  }
  return standardHeadersAsObject;
}
function backwardsCompatibleSecurity(securityHeaders) {
  if (!securityHeaders) {
    return void 0;
  }
  const securityHeadersAsObject = {};
  Object.entries(securityHeaders).forEach(([key, value]) => {
    const optionKey = key;
    if ((optionKey === "contentSecurityPolicy" || optionKey === "permissionsPolicy" || optionKey === "strictTransportSecurity") && typeof value === "string") {
      const objectValue = headerObjectFromString(optionKey, value);
      securityHeadersAsObject[optionKey] = objectValue;
    } else if (value === "") {
      securityHeadersAsObject[optionKey] = false;
    } else {
      securityHeadersAsObject[optionKey] = value;
    }
  });
  return securityHeadersAsObject;
}

const _FVfcD9MagC = defineNitroPlugin(async (nitroApp) => {
  const appSecurityOptions = getAppSecurityOptions();
  const runtimeConfig = useRuntimeConfig();
  for (const route in runtimeConfig.nitro.routeRules) {
    const rule = runtimeConfig.nitro.routeRules[route];
    const { headers: headers2 } = rule;
    const securityHeaders2 = standardToSecurity(headers2);
    if (securityHeaders2) {
      appSecurityOptions[route] = { headers: securityHeaders2 };
    }
  }
  const securityOptions = runtimeConfig.security;
  const { headers } = securityOptions;
  const securityHeaders = backwardsCompatibleSecurity(headers);
  appSecurityOptions["/**"] = defuReplaceArray(
    { headers: securityHeaders },
    securityOptions,
    appSecurityOptions["/**"]
  );
  for (const route in runtimeConfig.nitro.routeRules) {
    const rule = runtimeConfig.nitro.routeRules[route];
    const { security } = rule;
    if (security) {
      const { headers: headers2 } = security;
      const securityHeaders2 = backwardsCompatibleSecurity(headers2);
      appSecurityOptions[route] = defuReplaceArray(
        { headers: securityHeaders2 },
        security,
        appSecurityOptions[route]
      );
    }
  }
  nitroApp.hooks.hook("nuxt-security:headers", ({ route, headers: headers2 }) => {
    appSecurityOptions[route] = defuReplaceArray(
      { headers: headers2 },
      appSecurityOptions[route]
    );
  });
  nitroApp.hooks.hook("nuxt-security:ready", async () => {
    await nitroApp.hooks.callHook("nuxt-security:routeRules", appSecurityOptions);
  });
  await nitroApp.hooks.callHook("nuxt-security:ready");
});

const sriHashes = {"/_nuxt/-w6y4aVx.js":"sha384-eqbr9UqpmCTjwVZUi5T8Z7PK5HAZBTXQhGLUu1sXryEt3wL88/cxfpdBbvSNGiLC","/_nuxt/4Rg2CTPg.js":"sha384-U5MY9wE9D/FkX9kEPaWFLwi56dKPRg5NgzAkgE8PDVPzgIQ57+T5wJAUiUvaRmBX","/_nuxt/BAfVjaZG.js":"sha384-KBq7RA8yObQf8co1mYt11gvKn+cqXW2RXiLMpq/3drSqMO89RK36Z9GMvup9w+iD","/_nuxt/BBBgYkrw.js":"sha384-y7+X40xPBqBuOur/IYhZH1LmjBW63g9ZzzhmOguH3TTzQ5mgY1UjMEBbgGeiSap2","/_nuxt/BBMHsO2c.js":"sha384-ch+LcyQdN/PVuFQ3VNa1t0lsXdGO+JbBSW2C0Q81neA6ksXaTfPRskE8Wu1ATZpF","/_nuxt/BDkhQF9B.js":"sha384-x3JotQsj1KULgFolD2j0t6fg3h1kq4rXI0KQ13n8qH0iLpyxWPvBTJjQ0PoxptQV","/_nuxt/Bduj-REM.js":"sha384-M3iJKnV4BSzh4Xc63MKCC7U8re0YHHfaUH1m3pKHEYYoqgRZTId/RvjM8wb158aD","/_nuxt/Begowt0y.js":"sha384-XQN9SVIGxru7Th5SK4pVRwIzgqyrtGEi37cfwWp+XKHoC6IWwwpF2adFw2FMweWZ","/_nuxt/BEsOJ7ZN.js":"sha384-OjsHU8KDxc7RcWZwReZM/dZtOq/rloutA2uWn61Nei4dQGAWBO0hTZtuz25X5ucQ","/_nuxt/Bf8jmyll.js":"sha384-u+TIihHadWIFcj5dVFgJX9LCvMis2cjc5vwu8YUh77TQ82zrvaWA0OlUg6bpdl15","/_nuxt/BHI0rUr9.js":"sha384-oQHG2Uan6chzAc2vuhTOjywtBZ9aqLvkh8H8jz6zRgh1ZLINTHTC2Q+0c+d3AHWJ","/_nuxt/Bin-cmP6.js":"sha384-rHHXJNjEpLV4JznB3JM6sOBzW141AhzM/4/ox/UKD8xPnrrbopH6HPpPlYDN64nH","/_nuxt/bJ48vHeH.js":"sha384-q1Zu/8pbN6ivHoxYVVOi6mhqcJLj1qmySs6wKfBQkKRhbF4uc7pS/dOjCLlzU2C9","/_nuxt/BkEGP8J_.js":"sha384-TuJVcv3JVrRSrppky0k2UMgRI0lq79vBAwzBU3G+WnMZIp6nx4zJH92a+scfZLY7","/_nuxt/BMJAfQC9.js":"sha384-V11Ol7Z/yrfiblOQdDY3G8o6XIwo29IwDVxnr00TDDDmBv1nBMFurUkm4c0I1SgS","/_nuxt/BmPwGg53.js":"sha384-ujP5kUZCSYb/NMfD0uBtp5OVvfpe8sZ3pqe5KUvyRVeHolZwiuHSM7QAqALcaX/P","/_nuxt/BpBaKqRD.js":"sha384-0MG41+nT2tExakITk1LbLkogQ1C1MqLF0P4DmsCFmUSG7j+/Dmumh+EECwh0kIEl","/_nuxt/BuPUy77B.js":"sha384-Qm1oL+58Bt72j557a9tdyfzG4ymY5vPv6qjN3ywFCGL1iUg8Us6fznchjKQGu9fu","/_nuxt/Bwtq-gdE.js":"sha384-DNkT+dxVBLvhl6pRTWWQuUjfBKu1xYXQyK5V///Ad9CJHSUsv4DAShH+PYqLIbmq","/_nuxt/BzhtmYME.js":"sha384-9Ot06c1jqhzmm7at8dyH4gnCh/+pjA7ITBq2/ebVfGpJUVFxoWIyLLLT3qj0Hh59","/_nuxt/C-v3KzvZ.js":"sha384-PAD1L4OWoiJFJoa63H39X7DtW8xEUuJameKEZ26MHBsO+vNWDA7OM8PW16s7ZTts","/_nuxt/C1iAx25E.js":"sha384-88eTHOt8Xz68+ycwsjHsZN0GLFi5fFkjv2b+KDjyFJFSCifc3JenegWJxJTZ4bPD","/_nuxt/C2HxQ-MP.js":"sha384-X4KGvChhsFm58ClZAgNLeiyI4AjyYnsHViJi2PacMlqaQYedOevj2E8FmIVoAZvc","/_nuxt/C2iUUbQm.js":"sha384-1GWUWzaW178fpAsYV/rHAg2FFnepRx9szVX7j45lxp2fdCrv9scIrHPD+6D4bIoL","/_nuxt/C4cWJw2Y.js":"sha384-QuQv35OupVaB7fxYY3kNJsLQpPZwlK2t2WjJ45CQvm3+oo+y0WrBlmyuKfl16Yy7","/_nuxt/C5TbZLpj.js":"sha384-VfSuXPViKqRuHcCWy4JOu0Fb7i4Evo+OFY9dgqp953fekkeaOSveq+Z/pjUCi56y","/_nuxt/C65PvuB6.js":"sha384-s2B+jUoEKH7LjFA7YdJzWAR7nH7nGCMgCqAEnIU4jZtUvjzbeb3IARqOX3s87xal","/_nuxt/C9tAIJzw.js":"sha384-RgmMeedx/hcNkB6iF35w/Jdsw2XgVeLmiF2h4dmNgm/SJVzCQh1wJxi/2bfyAEbb","/_nuxt/CAjLe1D5.js":"sha384-1gH4Gtn2k6t4K6Xf/aEaGw4PQ6RNnOTbQcGwDvmgEIEcPd7+hGwfhnMkyq41St39","/_nuxt/CAnLQnBY.js":"sha384-Wfg8z79AsUza3u8X3alGqnz5qvPNZgY/YWjo3h67dNF9HEgVVenbv5phX5QYc9qL","/_nuxt/CbV9ILjt.js":"sha384-JPNQLGUDK6tusgPnmDH8qJNKUuNgQlQbcEPQRe6PrW4ahghzt//xGgG5k+5FQX4O","/_nuxt/CcXuM8wZ.js":"sha384-eoXdeFOVwTTA5bRl/yvi9eQPIqwDd9v2L+o/F4XFH/0PatA/gFvypTQTjJysIZOR","/_nuxt/CEowMqk_.js":"sha384-Dx1GaG1enwb/pF/Xtt+Rvchjfi/lPo7mN8aaTf7VXB03P9qRIqMeFaSofsNTgEAS","/_nuxt/CjXe1Dri.js":"sha384-gahvPDO0W0rqKBIQhJ0JgFR2zw5fUhpixpP3vf2b+lVq+V7P2hdGkxPUUY82Q82S","/_nuxt/CK84kVnt.js":"sha384-15b3n1vrQSXDla/KNEZ0HNw4k6qgcG03taOGTJV/a6RUkt56P6rFwy+LabvLIMSD","/_nuxt/CkPtBu2M.js":"sha384-hwNDHMnuzv4Gwu2SrgFNP3qS9AnNXXoYvsUtBAdUoRMj8irvxT6zs94QeNL/R7hZ","/_nuxt/CMRCIOq1.js":"sha384-xm+SRhHOWDILvdVjwAl4qMXZNAKttlLXb5I/iWTwbTUBa5b/AkEhd5QAtZjA0qYU","/_nuxt/Cp2o3w4L.js":"sha384-ZIWSxyVPcES439P3CnNpFwyaVmioB6cm7d08JW559Klmcv3clfrB7RyiOX1tDm/R","/_nuxt/CPDp_ESU.js":"sha384-4OuLQYjovC+bYSqV1QK5R93BPy91ANQFhPY84PgcVjp23tx2DByRDRvKLIAEBKSr","/_nuxt/CqBVj5ZN.js":"sha384-7rQY8WuyRIKR9dQBG37MSR+LqsOoRXH0DigWnHxDj0FI3e6p7mJVpd4camoLac6K","/_nuxt/CqN1X7sQ.js":"sha384-VK5vWHbJsuygQEcI07utgQRfYen/dGqxpZAdXJCW8ja2ZyHDQSSuRcuRSUPB5LsJ","/_nuxt/cropped-gary-deshayes-logo.BFIM319A.png":"sha384-GnAC41GbANyNmrtmI60QOcL8o0uZp72ZxEo5BrjwmoQQX16e4yVhv49GMPvAkNPW","/_nuxt/CT6ZsjDQ.js":"sha384-iLq2Qxb980LO/4RfCZ9T4nRuvVusN/ru3oiGqvVna8kLkjxr2VAGioDLmsKXP7og","/_nuxt/Cv6Z59O4.js":"sha384-ejQwuDFlcWq15+xbFjn8AsS1uzr/X+o2l5doyZDpHxKrDLJyN43+SEBqHsAMtiNg","/_nuxt/CvbJ-D0d.js":"sha384-Y/IapGL4pgUK+yzAnxNjQKAvLBnBl5ogmHQ0+KZnkhUcYLBnCIGYIPJ0zNFF3AyH","/_nuxt/D-fxo5r8.js":"sha384-DHnpq91n+HxaP7FhWiFzFLL540CHfRzBeaDqv8u/ZkYuNSqADF/U6ChvLJlMBllg","/_nuxt/D-JTBwVA.js":"sha384-K+rx/dTiudsfGWDT8UhgZGa2Wger975Snm2x7IpOWjk7KJs7e+hvQIZkk7UI/BYd","/_nuxt/D0Y2jSx4.js":"sha384-4t4ui7EIhaUdQxAMj64qI6IqAxw5yXSk0ecIDRNFFV28S0Ewx0mNbP4SmwF2zGt7","/_nuxt/D45JfO5_.js":"sha384-osXGkcdnhv6Z2fHYv50PQsosc54ZpHw5wKS1wP+vmvEJcOMU3zbY/fGDNU3NKwU2","/_nuxt/Db8Hei9n.js":"sha384-9bybOFVlhGGXAmC9yNRCpq8QbNlwpH+gHmblItTcEt20LaElhDhh2DhgODWqovD3","/_nuxt/DBLghQ_T.js":"sha384-jj6CdaV3rNH5YI986KZTTWIBMQN1iWvSRSqlKZLK7YSVZy7hMPexdOVdEIXleFIY","/_nuxt/DbsOUsvQ.js":"sha384-Ob7E2WBdIbTThQS5eVrR+VKf/9ozWjdzmGm2nHEUp23OkzM0WgeinnIa8g0prq1t","/_nuxt/Dee5elOB.js":"sha384-3Haw11GJOItNlKXXUIk3V2kp9MMrDaHbNi9bSsJSsiGKbgnhQJh5DjsR9+qWLCLz","/_nuxt/default.x7RN3w7q.css":"sha384-cTFQs5dmEwvzMmQQIMZUYGbhxHp8uwZTCd4flOVdOqXPqVV8JKR7uSP/nppxKpYV","/_nuxt/DFFBzda4.js":"sha384-nsxByD0WdS3Pe5qcoOsNCg517ygWo9yRSQlVe1HD4li0cHYjaKkPKMK1ttWL4nrv","/_nuxt/DFtSAvQj.js":"sha384-W1ijdS1JgxYtxzAnl+xGPQ/jby8DxyTZR7I2SOGXvEOZi8vORmsvmJhaNuIj2KK4","/_nuxt/DiQINCR8.js":"sha384-6xUxYt7z575/he+yCgYxsDMrBMf0/BcGgMTJNjTwD64wCCRBDDXPK5W79SLfGSaK","/_nuxt/Dnd51l0P.js":"sha384-4l4pcKDJm9JBF69jmlR9DW4SozHPSgrvj+lm/4PUPGpkwfH1tpiXWpyyDkWM7rps","/_nuxt/Do6O81EL.js":"sha384-iWUaJartkOZa5pTCUje7rcE3iEYfsgbCEQB2qGBhR3WzS+SCwiQenyyihBnlauiY","/_nuxt/DqkvJwjS.js":"sha384-JZ52fNRhv51wIDECNWgiQSJnuHMry2eiC3p+f2pyLkLWoYVovSocpVC5YIdUiydZ","/_nuxt/DrF6nXTf.js":"sha384-4CxkSxJCZ/kNa+epRUI8b+QJ2f3EFr4IYtPZpc5TliVhC3AEjkMJUPvVEGJqZwCi","/_nuxt/DTbwmSSO.js":"sha384-6klHjkjaRMDvKbXhYEVXcxU6UucUG7azx7fPPsUbCWOCLgW6FKnb0stPC79mmSwu","/_nuxt/DvDH6DOc.js":"sha384-ic+DFKPaDPQ6Mj62bhCUGWCTDVp3KlNQp1PacqmoMY6coA66WX7j4JenAjJ9SWPa","/_nuxt/Dy56afDR.js":"sha384-BR48yB9WmJ9OvvLg9jua+ULt7qvXGc77kgy0P7RKpKwOZeblxYAFQDSO+ffDOLpq","/_nuxt/eND6zYIY.js":"sha384-5caTeyjh4WuIHeO7D0XWe7+vULte0gjqG0SFNg2nK2cth0PXEhEC961vEEVqsx+o","/_nuxt/error-404.CjGVuf6H.css":"sha384-3Hc9D7ThzZvbI5AE6fLtNYD5DW0wR8BlSfPMRQB8uvmySMxpNk1tmzYrJY3GnJoJ","/_nuxt/error-500.DFBAsgKS.css":"sha384-ignpEfbygC/NWy4PZ9VVupQPabTqmSAv6K7OvtcSbJSflBkS+wD9R2dgYCrhxOhy","/_nuxt/hatbNJli.js":"sha384-oipVpVy4yn2LY8O2JuMqPZw+gJbq7kZ8CleyEFilxtFX4GxgqphmAUQ6IngieEvU","/_nuxt/HsyoOIVp.js":"sha384-Zq3mMPizjXbpacENc98juZaUF+kEIdDIk1bkucESBNmgoVDe8xxXczHTN1Hy5Fu5","/_nuxt/NUVWeF7a.js":"sha384-ECtYIVfzZrdSLEqn9u2gfgptF1cllFVkVdp8PlBvlJTvKexLe78n20SJ3eV4Ml4M","/_nuxt/nuxt-icon.MfBulapQ.css":"sha384-4xuXuv6K+Nto24z4dY8u1pbXY2Po7clB6Hk8qND2hdgk0hjf5y8T3kE+F7d8JDpB","/_nuxt/O1kki7ek.js":"sha384-Sl3pziXnkYUf5k5ed+UARYDkhUs8D/ZS2gI+0exhGuV5uw/2WlHwIQTFhKB+AVZO","/_nuxt/OMRLmIxL.js":"sha384-e/ipJZYIDz+omqm7TAPkdkPHl7ilUTq2b45ZDCeKk6bkzKwBvxLUa4bVQCuybQK8","/_nuxt/ProseCode.CchFRBtv.css":"sha384-rHEgzVT5Yu0HQec6jGprDTGS78cLhhiooR9a+jQYNygriaQCpvqS4341EP1J1rHE","/_nuxt/rqmrlM42.js":"sha384-LeAGNRCiYcioiXXBRMDs5Lp83YF4VEB5aIwRK0BI73rgDiea0v0VUeOWVEZujaHc","/_nuxt/RxAu6W_g.js":"sha384-J0ycr/RtMc2nQPUQzLBZqP1lSCEFlIp79aQRRGuLn9bvIYlJR+K7h4tiJoE5FkNi","/_nuxt/twvqdne3.js":"sha384-KFPjPE94bbn6ArVnkNzlZHzLa5srQcbkrwH1/p1Dvwl3TgkZVXVNrdbeHR7FUNdm","/_nuxt/vCDy5Tjl.js":"sha384-bnzaIXK76OX5ZF09H7hjomSJVNJ4F8YL3VL3j6vJugAuGRpS1VzL8ATSIhnokDVy","/_nuxt/Xo7vNTcL.js":"sha384-bIQp7O+qaU3w8stFc1VVcx70mH4yWx/JEYyDOub9aKAKS5boGHDhkpmIYNF1OMNP","/author.png":"sha384-ohmR7zxhhJyq/jfi+bLij6Ut6j8rAMrpnV4fFbzrx6nY0Z65JlcX+8uSLvql7kpp","/favicon.ico":"sha384-udbcbVSoJ0jynxYo+FKdhmcYDst1ze6s6rkgFExSYfpX6tAuGn5whsHNjmcRr4eU","/Gary Deshayes Développeur web FullStack dans l'Oise.webp":"sha384-yW/Gvfdu6q7ilwAH+cck5Shk4avogFKbqMry9pj46hUJ0GG9XREiRFn8ehjva9Dc"};

const SCRIPT_RE$1 = /<script((?=[^>]+\bsrc="([^"]+)")(?![^>]+\bintegrity="[^"]+")[^>]+)(?:\/>|><\/script>)/g;
const LINK_RE$1 = /<link((?=[^>]+\brel="(?:stylesheet|preload|modulepreload)")(?=[^>]+\bhref="([^"]+)")(?![^>]+\bintegrity="[\w\-+/=]+")[^>]+)>/g;
const _fuM48voyw4 = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    const rules = resolveSecurityRules(event);
    if (!rules.enabled || !rules.sri) {
      return;
    }
    const sections = ["body", "bodyAppend", "bodyPrepend", "head"];
    for (const section of sections) {
      html[section] = html[section].map((element) => {
        element = element.replace(SCRIPT_RE$1, (match, rest, src) => {
          const hash = sriHashes[src];
          if (hash) {
            const integrityScript = `<script integrity="${hash}"${rest}><\/script>`;
            return integrityScript;
          } else {
            return match;
          }
        });
        element = element.replace(LINK_RE$1, (match, rest, href) => {
          const hash = sriHashes[href];
          if (hash) {
            const integrityLink = `<link integrity="${hash}"${rest}>`;
            return integrityLink;
          } else {
            return match;
          }
        });
        return element;
      });
    }
  });
});

function generateHash(content, hashAlgorithm) {
  const hash = createHash(hashAlgorithm);
  hash.update(content);
  return `${hashAlgorithm}-${hash.digest("base64")}`;
}

const INLINE_SCRIPT_RE = /<script(?![^>]*?\bsrc="[\w:.\-\\/]+")[^>]*>([\s\S]*?)<\/script>/gi;
const STYLE_RE = /<style[^>]*>([\s\S]*?)<\/style>/gi;
const SCRIPT_RE = /<script(?=[^>]+\bsrc="[^"]+")(?=[^>]+\bintegrity="([\w\-+/=]+)")[^>]+(?:\/>|><\/script[^>]*?>)/gi;
const LINK_RE = /<link(?=[^>]+\brel="(stylesheet|preload|modulepreload)")(?=[^>]+\bintegrity="([\w\-+/=]+)")(?=(?:[^>]+\bas="(\w+)")?)[^>]+>/gi;
const _drqnUix3OC = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    const rules = resolveSecurityRules(event);
    if (!rules.enabled || !rules.headers || !rules.headers.contentSecurityPolicy) {
      return;
    }
    event.context.security.hashes = {
      script: /* @__PURE__ */ new Set(),
      style: /* @__PURE__ */ new Set()
    };
    const scriptHashes = event.context.security.hashes.script;
    const styleHashes = event.context.security.hashes.style;
    const hashAlgorithm = "sha256";
    if (rules.ssg) {
      const { hashScripts, hashStyles } = rules.ssg;
      const sections = ["body", "bodyAppend", "bodyPrepend", "head"];
      for (const section of sections) {
        html[section].forEach((element) => {
          if (hashScripts) {
            const inlineScriptMatches = element.matchAll(INLINE_SCRIPT_RE);
            for (const [, scriptText] of inlineScriptMatches) {
              scriptHashes.add(`'${generateHash(scriptText, hashAlgorithm)}'`);
            }
            const externalScriptMatches = element.matchAll(SCRIPT_RE);
            for (const [, integrity] of externalScriptMatches) {
              scriptHashes.add(`'${integrity}'`);
            }
          }
          if (hashStyles) {
            const styleMatches = element.matchAll(STYLE_RE);
            for (const [, styleText] of styleMatches) {
              styleHashes.add(`'${generateHash(styleText, hashAlgorithm)}'`);
            }
          }
          const linkMatches = element.matchAll(LINK_RE);
          for (const [, rel, integrity, as] of linkMatches) {
            if (integrity) {
              if (rel === "stylesheet" && hashStyles) {
                styleHashes.add(`'${integrity}'`);
              } else if (rel === "preload" && hashScripts) {
                switch (as) {
                  case "script":
                  case "audioworklet":
                  case "paintworklet":
                  case "xlst":
                    scriptHashes.add(`'${integrity}'`);
                    break;
                }
              } else if (rel === "modulepreload" && hashScripts) {
                scriptHashes.add(`'${integrity}'`);
              }
            }
          }
        });
      }
    }
  });
});

const _mK40mKqX2v = defineNitroPlugin((nitroApp) => {
  {
    return;
  }
});

const _BtQ2PtvG5F = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (response, { event }) => {
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.headers) {
      const headers = rules.headers;
      if (headers.contentSecurityPolicy) {
        const csp = headers.contentSecurityPolicy;
        const nonce = event.context.security?.nonce;
        const scriptHashes = event.context.security?.hashes?.script;
        const styleHashes = event.context.security?.hashes?.style;
        headers.contentSecurityPolicy = updateCspVariables(csp, nonce, scriptHashes, styleHashes);
      }
    }
  });
});
function updateCspVariables(csp, nonce, scriptHashes, styleHashes) {
  const generatedCsp = Object.fromEntries(Object.entries(csp).map(([directive, value]) => {
    if (typeof value === "boolean") {
      return [directive, value];
    }
    const sources = typeof value === "string" ? value.split(" ").map((token) => token.trim()).filter((token) => token) : value;
    const modifiedSources = sources.filter((source) => !source.startsWith("'nonce-") || source === "'nonce-{{nonce}}'").map((source) => {
      if (source === "'nonce-{{nonce}}'") {
        return nonce ? `'nonce-${nonce}'` : "";
      } else {
        return source;
      }
    }).filter((source) => source);
    if (directive === "script-src" && scriptHashes) {
      modifiedSources.push(...scriptHashes);
    }
    if (directive === "style-src" && styleHashes) {
      modifiedSources.push(...styleHashes);
    }
    return [directive, modifiedSources];
  }));
  return generatedCsp;
}

const _4wYfYAzlFH = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    const rules = resolveSecurityRules(event);
    if (!rules.enabled) {
      return;
    }
    if (rules.ssg && rules.ssg.meta && rules.headers && rules.headers.contentSecurityPolicy) {
      const csp = structuredClone(rules.headers.contentSecurityPolicy);
      csp["frame-ancestors"] = false;
      const headerValue = headerStringFromObject("contentSecurityPolicy", csp);
      let insertIndex = 0;
      const metaCharsetMatch = html.head[0].match(/^<meta charset="(.*?)">/mdi);
      if (metaCharsetMatch && metaCharsetMatch.indices) {
        insertIndex = metaCharsetMatch.indices[0][1];
      }
      html.head[0] = html.head[0].slice(0, insertIndex) + `<meta http-equiv="Content-Security-Policy" content="${headerValue}">` + html.head[0].slice(insertIndex);
    }
  });
});

const _TqQ7nLNiJQ = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:response", (response, { event }) => {
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.headers) {
      const headers = rules.headers;
      Object.entries(headers).forEach(([header, value]) => {
        const headerName = getNameFromKey(header);
        if (value === false) {
          const { headers: standardHeaders } = getRouteRules(event);
          const standardHeaderValue = standardHeaders?.[headerName];
          const currentHeaderValue = getResponseHeader(event, headerName);
          if (standardHeaderValue === currentHeaderValue) {
            removeResponseHeader(event, headerName);
          }
        } else {
          const headerValue = headerStringFromObject(header, value);
          setResponseHeader(event, headerName, headerValue);
        }
      });
    }
  });
});

const _XoE2Kp5wm3 = defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("beforeResponse", (event) => {
    const rules = resolveSecurityRules(event);
    if (rules.enabled && rules.hidePoweredBy && !event.node.res.headersSent) {
      removeResponseHeader(event, "x-powered-by");
    }
  });
});

const _uG8DuTEbxU = defineNitroPlugin(async (nitroApp) => {
  {
    const prerenderedHeaders = {};
    nitroApp.hooks.hook("render:html", (_, { event }) => {
      const rules = resolveSecurityRules(event);
      if (rules.enabled && rules.ssg && rules.ssg.nitroHeaders) {
        const headers = getResponseHeaders(event);
        const path = event.path.split("?")[0];
        prerenderedHeaders[path] = headers;
      }
    });
    nitroApp.hooks.hook("close", async () => {
      const headers = Object.fromEntries(
        Object.entries(prerenderedHeaders).map(([path, headers2]) => {
          const headersEntries = Object.entries(headers2).filter(([header]) => header !== "x-nitro-prerender").map(([header, value]) => {
            if (Array.isArray(value)) {
              return [header, value.join(";")];
            } else {
              return [header, value];
            }
          });
          return [path, Object.fromEntries(headersEntries)];
        })
      );
      await useStorage("build:nuxt-security").setItem("headers.json", headers);
    });
  }
});

const plugins = [
  _MS6HX040HJ,
_kZiGs2xmn4,
_FVfcD9MagC,
_fuM48voyw4,
_drqnUix3OC,
_mK40mKqX2v,
_BtQ2PtvG5F,
_4wYfYAzlFH,
_TqQ7nLNiJQ,
_XoE2Kp5wm3,
_uG8DuTEbxU
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('./_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/api/_content/cache.1728243177748.json": {
    "type": "application/json",
    "etag": "\"8ad1-j4BkEbbkYvUDZQWsidxJjpksiZ8\"",
    "mtime": "2024-10-06T19:33:17.311Z",
    "size": 35537,
    "path": "../../.output/public/api/_content/cache.1728243177748.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve$1(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

let configs;
function getMdcConfigs () {
if (!configs) {
  configs = Promise.all([
  ]);
}
return configs
}

const mdcConfigs = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getMdcConfigs: getMdcConfigs
});

function createShikiHighlighter({
  langs = [],
  themes = [],
  bundledLangs = {},
  bundledThemes = {},
  getMdcConfigs,
  options: shikiOptions
} = {}) {
  let shiki;
  let configs;
  async function _getShiki() {
    const shiki2 = await createHighlighterCore({
      langs,
      themes,
      loadWasm: () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/wasm.mjs')
    });
    for await (const config of await getConfigs()) {
      await config.shiki?.setup?.(shiki2);
    }
    return shiki2;
  }
  async function getShiki() {
    if (!shiki) {
      shiki = _getShiki();
    }
    return shiki;
  }
  async function getConfigs() {
    if (!configs) {
      configs = Promise.resolve(getMdcConfigs?.() || []);
    }
    return configs;
  }
  const baseTransformers = [
    transformerNotationDiff(),
    transformerNotationFocus(),
    transformerNotationHighlight(),
    transformerNotationErrorLevel()
  ];
  const highlighter = async (code, lang, theme, options = {}) => {
    const shiki2 = await getShiki();
    const codeToHastOptions = {
      defaultColor: false,
      meta: {
        __raw: options.meta
      }
    };
    if (lang === "ts-type" || lang === "typescript-type") {
      lang = "typescript";
      codeToHastOptions.grammarContextCode = "let a:";
    } else if (lang === "vue-html" || lang === "vue-template") {
      lang = "vue";
      codeToHastOptions.grammarContextCode = "<template>";
    }
    const themesObject = typeof theme === "string" ? { default: theme } : theme || {};
    const loadedThemes = shiki2.getLoadedThemes();
    const loadedLanguages = shiki2.getLoadedLanguages();
    if (typeof lang === "string" && !loadedLanguages.includes(lang) && !isSpecialLang(lang)) {
      if (bundledLangs[lang]) {
        await shiki2.loadLanguage(bundledLangs[lang]);
      } else {
        lang = "text";
      }
    }
    for (const [color, theme2] of Object.entries(themesObject)) {
      if (typeof theme2 === "string" && !loadedThemes.includes(theme2) && !isSpecialTheme(theme2)) {
        if (bundledThemes[theme2]) {
          await shiki2.loadTheme(bundledThemes[theme2]);
        } else {
          themesObject[color] = "none";
        }
      }
    }
    const transformers = [
      ...baseTransformers
    ];
    for (const config of await getConfigs()) {
      const newTransformers = typeof config.shiki?.transformers === "function" ? await config.shiki?.transformers(code, lang, theme, options) : config.shiki?.transformers || [];
      transformers.push(...newTransformers);
    }
    const root = shiki2.codeToHast(code.trimEnd(), {
      lang,
      ...codeToHastOptions,
      themes: themesObject,
      transformers: [
        ...transformers,
        {
          name: "mdc:highlight",
          line(node, line) {
            if (options.highlights?.includes(line))
              addClassToHast(node, "highlight");
            node.properties.line = line;
          }
        },
        {
          name: "mdc:newline",
          line(node) {
            if (code?.includes("\n")) {
              if (node.children.length === 0 || node.children.length === 1 && node.children[0].type === "element" && node.children[0].children.length === 1 && node.children[0].children[0].type === "text" && node.children[0].children[0].value === "") {
                node.children = [{
                  type: "element",
                  tagName: "span",
                  properties: {
                    emptyLinePlaceholder: true
                  },
                  children: [{ type: "text", value: "\n" }]
                }];
                return;
              }
              const last = node.children.at(-1);
              if (last?.type === "element" && last.tagName === "span") {
                const text = last.children.at(-1);
                if (text?.type === "text")
                  text.value += "\n";
              }
            }
          }
        }
      ]
    });
    const preEl = root.children[0];
    const codeEl = preEl.children[0];
    const wrapperStyle = shikiOptions?.wrapperStyle;
    preEl.properties.style = wrapperStyle ? typeof wrapperStyle === "string" ? wrapperStyle : preEl.properties.style : "";
    const styles = [];
    Object.keys(themesObject).forEach((color) => {
      const colorScheme = color !== "default" ? `.${color}` : "";
      styles.push(
        wrapperStyle ? `${colorScheme} .shiki,` : "",
        `html .${color} .shiki span {`,
        `color: var(--shiki-${color});`,
        `background: var(--shiki-${color}-bg);`,
        `font-style: var(--shiki-${color}-font-style);`,
        `font-weight: var(--shiki-${color}-font-weight);`,
        `text-decoration: var(--shiki-${color}-text-decoration);`,
        "}"
      );
      styles.push(
        `html${colorScheme} .shiki span {`,
        `color: var(--shiki-${color});`,
        `background: var(--shiki-${color}-bg);`,
        `font-style: var(--shiki-${color}-font-style);`,
        `font-weight: var(--shiki-${color}-font-weight);`,
        `text-decoration: var(--shiki-${color}-text-decoration);`,
        "}"
      );
    });
    return {
      tree: codeEl.children,
      className: Array.isArray(preEl.properties.class) ? preEl.properties.class.join(" ") : preEl.properties.class,
      inlineStyle: preEl.properties.style,
      style: styles.join("")
    };
  };
  return highlighter;
}

const bundledLangs = {
"json": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/json.mjs'),
"javascript": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/javascript.mjs'),
"js": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/javascript.mjs'),
"typescript": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/typescript.mjs'),
"ts": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/typescript.mjs'),
"html": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/html.mjs'),
"css": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/css.mjs'),
"vue": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/vue.mjs'),
"shellscript": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/shellscript.mjs'),
"bash": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/shellscript.mjs'),
"sh": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/shellscript.mjs'),
"shell": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/shellscript.mjs'),
"zsh": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/shellscript.mjs'),
"mdc": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/mdc.mjs'),
"markdown": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/markdown.mjs'),
"md": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/markdown.mjs'),
"yaml": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/yaml.mjs'),
"yml": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/yaml.mjs'),
"c": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/c.mjs'),
"cpp": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/cpp.mjs'),
"c++": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/cpp.mjs'),
"java": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/langs/java.mjs'),
};
const bundledThemes = {
"github-dark": () => import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/themes/github-dark.mjs').then(r => r.default),
};
const options = {"theme":"github-dark"};
const highlighter = createShikiHighlighter({ bundledLangs, bundledThemes, options, getMdcConfigs });

const mdcHighlighter = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createShikiHighlighter: createShikiHighlighter,
  default: highlighter
});

const _rBsYnV = eventHandler(async (event) => {
  const { code, lang, theme: themeString, options: optionsStr } = getQuery$1(event);
  const theme = JSON.parse(themeString);
  const options = optionsStr ? JSON.parse(optionsStr) : {};
  return await highlighter(code, lang, theme, options);
});

const _8fMqLE = defineEventHandler(async (e) => {
  if (e.context.siteConfig)
    return;
  const runtimeConfig = useRuntimeConfig(e);
  const config = runtimeConfig["nuxt-site-config"];
  const nitroApp = useNitroApp();
  const siteConfig = createSiteConfigStack({
    debug: config.debug
  });
  const appConfig = useAppConfig(e);
  const nitroOrigin = useNitroOrigin(e);
  e.context.siteConfigNitroOrigin = nitroOrigin;
  siteConfig.push({
    _context: "runtimeEnv",
    _priority: 0,
    ...runtimeConfig.site || {},
    ...runtimeConfig.public.site || {},
    // @ts-expect-error untyped
    ...envSiteConfig(globalThis._importMeta_.env)
    // just in-case, shouldn't be needed
  });
  const buildStack = config.stack || [];
  buildStack.forEach((c) => siteConfig.push(c));
  if (appConfig.site) {
    siteConfig.push({
      _priority: -2,
      _context: "app:config",
      ...appConfig.site
    });
  }
  if (e.context._nitro.routeRules.site) {
    siteConfig.push({
      _context: "route-rules",
      ...e.context._nitro.routeRules.site
    });
  }
  const ctx = { siteConfig, event: e };
  await nitroApp.hooks.callHook("site-config:init", ctx);
  e.context.siteConfig = ctx.siteConfig;
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const omit = (keys) => (obj) => keys && keys.length ? _pick(obj, (key) => !keys.includes(key)) : obj;
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => {
  return Array.isArray(value) ? value : [void 0, null].includes(value) ? [] : [value];
};

const arrayParams = ["sort", "where", "only", "without"];
function createQuery(fetcher, opts = {}) {
  const queryParams = {};
  for (const key of Object.keys(opts.initialParams || {})) {
    queryParams[key] = arrayParams.includes(key) ? ensureArray(opts.initialParams[key]) : opts.initialParams[key];
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const resolveResult = (result) => {
    if (opts.legacy) {
      if (result?.surround) {
        return result.surround;
      }
      if (!result) {
        return result;
      }
      if (result?.dirConfig) {
        result.result = {
          _path: result.dirConfig?._path,
          ...result.result,
          _dir: result.dirConfig
        };
      }
      return result?._path || Array.isArray(result) || !Object.prototype.hasOwnProperty.call(result, "result") ? result : result?.result;
    }
    return result;
  };
  const query = {
    params: () => ({
      ...queryParams,
      ...queryParams.where ? { where: [...ensureArray(queryParams.where)] } : {},
      ...queryParams.sort ? { sort: [...ensureArray(queryParams.sort)] } : {}
    }),
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), ...ensureArray(q)]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query).then(resolveResult),
    findOne: () => fetcher($set("first")(true)).then(resolveResult),
    count: () => fetcher($set("count")(true)).then(resolveResult),
    // locale
    locale: (_locale) => query.where({ _locale }),
    withSurround: $set("surround", (surroundQuery, options) => ({ query: surroundQuery, ...options })),
    withDirConfig: () => $set("dirConfig")(true)
  };
  if (opts.legacy) {
    query.findSurround = (surroundQuery, options) => {
      return query.withSurround(surroundQuery, options).find().then(resolveResult);
    };
    return query;
  }
  return query;
}

const defineTransformer = (transformer) => {
  return transformer;
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab) continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument });
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler()(
    postprocess(
      parse(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString$1(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (id) => {
  const [_source, ...parts] = id.split(":");
  const [, basename, _extension] = parts[parts.length - 1]?.match(/(.*)\.([^.]+)$/) || [];
  if (basename) {
    parts[parts.length - 1] = basename;
  }
  const _path = (parts || []).join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path,
    _basename: basename || ""
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en", respectPathCase = false } = options;
    const { _source, _file, _path, _extension, _basename } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"), { respectPathCase });
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: content._draft ?? isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(_basename)),
      _source,
      _file,
      _stem: _path,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true, respectPathCase = false } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: !respectPathCase })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const highlightOptions = options.highlight ? {
      ...options.highlight,
      // Pass only when it's an function. String values are handled by `@nuxtjs/mdc`
      highlighter: typeof options.highlight?.highlighter === "function" ? options.highlight.highlighter : void 0
    } : void 0;
    const parsed = await parseMarkdown(content, {
      ...config,
      highlight: highlightOptions,
      remark: {
        plugins: config.remarkPlugins
      },
      rehype: {
        options: {
          handlers: {
            link
          }
        },
        plugins: config.rehypePlugins
      },
      toc: config.toc
    });
    return {
      ...parsed.data,
      excerpt: parsed.excerpt,
      body: {
        ...parsed.body,
        toc: parsed.toc
      },
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        options: plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}
function link(state, node) {
  const properties = {
    ...node.attributes || {},
    href: normalizeUri(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    properties.title = node.title;
  }
  const result = {
    type: "element",
    tagName: "a",
    properties,
    children: state.all(node)
  };
  state.patch(node, result);
  return state.applyData(node, result);
}
function normalizeLink(link2) {
  const match = link2.match(/#.+$/);
  const hash = match ? match[0] : "";
  if (link2.replace(/#.+$/, "").endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(".md" + hash, ""), { forceLeadingSlash: false }) + hash;
  } else {
    return link2;
  }
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: (_id, content) => {
    const { data } = parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/json5/lib/index.js').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr$1(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

function makeIgnored(ignores) {
  const rxAll = ["/\\.", "/-", ...ignores.filter((p) => p)].map((p) => new RegExp(p));
  return function isIgnored(key) {
    const path = "/" + key.replace(/:/g, "/");
    return rxAll.some((rx) => rx.test(path));
  };
}

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or match every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched?.[1] ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before ?? 1;
    after = after ?? 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const matchingPipelines = [
    // Conditions
    (state, params) => {
      const filtered = state.result.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery)));
      return {
        ...state,
        result: filtered,
        total: filtered.length
      };
    },
    // Sort data
    (state, params) => ensureArray(params.sort).forEach((options) => sortList(state.result, options)),
    function fetchSurround(state, params, db) {
      if (params.surround) {
        let _surround = surround(state.result?.length === 1 ? db : state.result, params.surround);
        _surround = apply(withoutKeys(params.without))(_surround);
        _surround = apply(withKeys(params.only))(_surround);
        state.surround = _surround;
      }
      return state;
    }
  ];
  const transformingPiples = [
    // Skip first items
    (state, params) => {
      if (params.skip) {
        return {
          ...state,
          result: state.result.slice(params.skip),
          skip: params.skip
        };
      }
    },
    // Pick first items
    (state, params) => {
      if (params.limit) {
        return {
          ...state,
          result: state.result.slice(0, params.limit),
          limit: params.limit
        };
      }
    },
    function fetchDirConfig(state, params, db) {
      if (params.dirConfig) {
        const path = state.result[0]?._path || params.where?.find((w) => w._path)?._path;
        if (typeof path === "string") {
          const dirConfig = db.find((item) => item._path === joinURL(path, "_dir"));
          if (dirConfig) {
            state.dirConfig = { _path: dirConfig._path, ...withoutKeys(["_"])(dirConfig) };
          }
        }
      }
      return state;
    },
    // Remove unwanted fields
    (state, params) => ({
      ...state,
      result: apply(withoutKeys(params.without))(state.result)
    }),
    // Select only wanted fields
    (state, params) => ({
      ...state,
      result: apply(withKeys(params.only))(state.result)
    })
  ];
  return async (query) => {
    const db = await getContentsList();
    const params = query.params();
    const result1 = {
      result: db,
      limit: 0,
      skip: 0,
      total: db.length
    };
    const matchedData = matchingPipelines.reduce(($data, pipe) => pipe($data, params, db) || $data, result1);
    if (params.count) {
      return {
        result: matchedData.result.length
      };
    }
    const result = transformingPiples.reduce(($data, pipe) => pipe($data, params, db) || $data, matchedData);
    if (params.first) {
      return {
        ...omit(["skip", "limit", "total"])(result),
        result: result.result[0]
      };
    }
    return result;
  };
}

const isPreview = (event) => {
  const previewToken = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery$1(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage().getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage().setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && !params.surround && !params.dirConfig && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for await (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

let _sourceStorage;
let _cacheStorage;
let _cacheParsedStorage;
const sourceStorage = () => {
  if (!_sourceStorage) {
    _sourceStorage = prefixStorage(useStorage(), "content:source");
  }
  return _sourceStorage;
};
const cacheStorage = () => {
  if (!_cacheStorage) {
    _cacheStorage = prefixStorage(useStorage(), "cache:content");
  }
  return _cacheStorage;
};
const cacheParsedStorage = () => {
  if (!_cacheParsedStorage) {
    _cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
  }
  return _cacheParsedStorage;
};
const contentConfig = () => useRuntimeConfig().content;
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  const isIgnored = makeIgnored(contentConfig().ignores);
  if (key.startsWith("preview:") || isIgnored(key)) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  const source = sourceStorage();
  if (keys.length === 0) {
    keys = await source.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await source.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await source.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
function* chunksFromArray(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
let cachedContents = [];
const getContentsList = /* @__PURE__ */ (() => {
  let pendingContentsListPromise = null;
  const _getContentsList = async (event, prefix) => {
    const keys = await getContentsIds(event, prefix);
    const keyChunks = [...chunksFromArray(keys, 10)];
    const contents = [];
    for (const chunk of keyChunks) {
      const result = await Promise.all(chunk.map((key) => getContent(event, key)));
      contents.push(...result);
    }
    return contents.filter((c) => c && c._path);
  };
  return (event, prefix) => {
    if (event.context.__contentList) {
      return event.context.__contentList;
    }
    if (cachedContents.length) {
      return cachedContents;
    }
    if (!pendingContentsListPromise) {
      pendingContentsListPromise = _getContentsList(event, prefix);
      pendingContentsListPromise.then((result) => {
        {
          cachedContents = result;
        }
        event.context.__contentList = result;
        pendingContentsListPromise = null;
      });
    }
    return pendingContentsListPromise;
  };
})();
const pendingPromises = {};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  const source = sourceStorage();
  const cache = cacheParsedStorage();
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await source.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cache.getItem(id);
  const config = contentConfig();
  const meta = await source.getMeta(id);
  const mtime = meta.mtime;
  const size = meta.size || 0;
  const hash$1 = hash({
    // Last modified time
    mtime,
    // File size
    size,
    // Add Content version to the hash, to revalidate the cache on content update
    version: config.cacheVersion,
    integrity: config.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  if (!pendingPromises[id + hash$1]) {
    pendingPromises[id + hash$1] = new Promise(async (resolve) => {
      const body = await source.getItem(id);
      if (body === null) {
        return resolve({ _id: contentId, body: null });
      }
      const parsed = await parseContent(contentId, body);
      await cache.setItem(id, { parsed, hash: hash$1 }).catch(() => {
      });
      resolve(parsed);
      delete pendingPromises[id + hash$1];
    });
  }
  return pendingPromises[id + hash$1];
};
const parseContent = async (id, content, opts = {}) => {
  const nitroApp = useNitroApp();
  const config = contentConfig();
  const options = defu(
    opts,
    {
      markdown: {
        ...config.markdown,
        highlight: config.highlight
      },
      csv: config.csv,
      yaml: config.yaml,
      transformers: transformers,
      pathMeta: {
        defaultLocale: config.defaultLocale,
        locales: config.locales,
        respectPathCase: config.respectPathCase
      }
    }
  );
  const file = { _id: id, body: typeof content === "string" ? content.replace(/\r\n|\r/g, "\n") : content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
};
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent$1(event, query, ...pathParts) {
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  const config = contentConfig();
  const queryBuilder = advanceQuery ? createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: false }) : createQuery(createServerQueryFetch(event), { initialParams: typeof query !== "string" ? query || {} : {}, legacy: true });
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _stem: 1, $numeric: true }];
    }
    {
      params.where = params.where || [];
      if (!params.where.find((item) => typeof item._draft !== "undefined")) {
        params.where.push({ _draft: { $ne: true } });
      }
    }
    if (config.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: config.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

const serverQueryContent = serverQueryContent$1;

const _XurHtN = defineEventHandler(async (e) => {
  const contentList = await serverQueryContent(e).find();
  return contentList.map((c) => c.sitemap).filter(Boolean);
});

const _0iacqe = defineEventHandler(async (e) => {
  const fixPath = createSitePathResolver(e, { absolute: false, withBase: true });
  const { sitemapName: fallbackSitemapName, cacheMaxAgeSeconds, version, xslColumns, xslTips } = useSimpleSitemapRuntimeConfig();
  setHeader(e, "Content-Type", "application/xslt+xml");
  if (cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  const { name: siteName, url: siteUrl } = useSiteConfig(e);
  const referrer = getHeader(e, "Referer") || "/";
  const isNotIndexButHasIndex = referrer !== fixPath("/sitemap.xml") && parseURL(referrer).pathname.endsWith("-sitemap.xml");
  const sitemapName = parseURL(referrer).pathname.split("/").pop()?.split("-sitemap")[0] || fallbackSitemapName;
  const title = `${siteName}${sitemapName !== "sitemap.xml" ? ` - ${sitemapName === "sitemap_index.xml" ? "index" : sitemapName}` : ""}`.replace(/&/g, "&amp;");
  const canonicalQuery = getQuery(referrer).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const conditionalTips = [
    'You are looking at a <a href="https://developer.mozilla.org/en-US/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview" style="color: #398465" target="_blank">XML stylesheet</a>. Read the <a href="https://nuxtseo.com/sitemap/guides/customising-ui" style="color: #398465" target="_blank">docs</a> to learn how to customize it. View the page source to see the raw XML.',
    `URLs missing? Check Nuxt Devtools Sitemap tab (or the <a href="${withQuery("/__sitemap__/debug.json", { sitemap: sitemapName })}" style="color: #398465" target="_blank">debug endpoint</a>).`
  ];
  if (!isShowingCanonical) {
    const canonicalPreviewUrl = withQuery(referrer, { canonical: "" });
    conditionalTips.push(`Your canonical site URL is <strong>${siteUrl}</strong>.`);
    conditionalTips.push(`You can preview your canonical sitemap by visiting <a href="${canonicalPreviewUrl}" style="color: #398465; white-space: nowrap;">${fixPath(canonicalPreviewUrl)}?canonical</a>`);
  } else {
    conditionalTips.push(`You are viewing the canonical sitemap. You can switch to using the request origin: <a href="${fixPath(referrer)}" style="color: #398465; white-space: nowrap ">${fixPath(referrer)}</a>`);
  }
  let columns = [...xslColumns];
  if (!columns.length) {
    columns = [
      { label: "URL", width: "50%" },
      { label: "Images", width: "25%", select: "count(image:image)" },
      { label: "Last Updated", width: "25%", select: "concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))" }
    ];
  }
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <style type="text/css">
          body {
            font-family: Inter, Helvetica, Arial, sans-serif;
            font-size: 14px;
            color: #333;
          }

          table {
            border: none;
            border-collapse: collapse;
          }

          .bg-yellow-200 {
            background-color: #fef9c3;
          }

          .p-5 {
            padding: 1.25rem;
          }

          .rounded {
            border-radius: 4px;
            }

          .shadow {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }

          #sitemap tr:nth-child(odd) td {
            background-color: #f8f8f8 !important;
          }

          #sitemap tbody tr:hover td {
            background-color: #fff;
          }

          #sitemap tbody tr:hover td, #sitemap tbody tr:hover td a {
            color: #000;
          }

          .expl a {
            color: #398465
            font-weight: 600;
          }

          .expl a:visited {
            color: #398465
          }

          a {
            color: #000;
            text-decoration: none;
          }

          a:visited {
            color: #777;
          }

          a:hover {
            text-decoration: underline;
          }

          td {
            font-size: 12px;
          }

          .text-2xl {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.25;
          }

          th {
            text-align: left;
            padding-right: 30px;
            font-size: 12px;
          }

          thead th {
            border-bottom: 1px solid #000;
          }
          .fixed { position: fixed; }
          .right-2 { right: 2rem; }
          .top-2 { top: 2rem; }
          .w-30 { width: 30rem; }
          p { margin: 0; }
          li { padding-bottom: 0.5rem; line-height: 1.5; }
          h1 { margin: 0; }
          .mb-5 { margin-bottom: 1.25rem; }
          .mb-3 { margin-bottom: 0.75rem; }
        </style>
      </head>
      <body>
        <div style="grid-template-columns: 1fr 1fr; display: grid; margin: 3rem;">
            <div>
             <div id="content">
          <h1 class="text-2xl mb-3">XML Sitemap</h1>
          <h2>${title}</h2>
          ${isNotIndexButHasIndex ? `<p style="font-size: 12px; margin-bottom: 1rem;"><a href="${fixPath("/sitemap_index.xml")}">${fixPath("/sitemap_index.xml")}</a></p>` : ""}
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap Index file contains
              <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sitemaps.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  <th width="75%">Sitemap</th>
                  <th width="25%">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <xsl:variable name="sitemapURL">
                    <xsl:value-of select="sitemap:loc"/>
                  </xsl:variable>
                  <tr>
                    <td>
                      <a href="{$sitemapURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:value-of
                        select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)),concat(' ', substring(sitemap:lastmod,20,6)))"/>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
            <p class="expl" style="margin-bottom: 1rem;">
              This XML Sitemap contains
              <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.
            </p>
            <table id="sitemap" cellpadding="3">
              <thead>
                <tr>
                  ${columns.map((c) => `<th width="${c.width}">${c.label}</th>`).join("\n")}
                </tr>
              </thead>
              <tbody>
                <xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
                <xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    ${columns.filter((c) => c.label !== "URL").map((c) => `<td>
<xsl:value-of select="${c.select}"/>
</td>`).join("\n")}
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
        </div>
                    ${""}
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;
});

function resolve(s, resolvers) {
  if (typeof s === "undefined")
    return s;
  s = typeof s === "string" ? s : s.toString();
  if (hasProtocol(s, { acceptRelative: true, strict: false }))
    return resolvers.fixSlashes(s);
  return resolvers.canonicalUrlResolver(s);
}
function normaliseSitemapUrls(data, resolvers) {
  const entries = data.map((e) => typeof e === "string" ? { loc: e } : e).map((e) => {
    e = { ...e };
    if (e.url) {
      e.loc = e.url;
      delete e.url;
    }
    e.loc = fixSlashes(false, e.loc);
    return e;
  }).filter(Boolean);
  function normaliseEntry(e) {
    if (e.lastmod) {
      const date = normaliseDate(e.lastmod);
      if (date)
        e.lastmod = date;
      else
        delete e.lastmod;
    }
    if (!e.lastmod)
      delete e.lastmod;
    e.loc = resolve(e.loc, resolvers);
    if (e.alternatives) {
      e.alternatives = mergeOnKey(e.alternatives.map((e2) => {
        const a = { ...e2 };
        if (typeof a.href === "string")
          a.href = resolve(a.href, resolvers);
        else if (typeof a.href === "object" && a.href)
          a.href = resolve(a.href.href, resolvers);
        return a;
      }), "hreflang");
    }
    if (e.images) {
      e.images = mergeOnKey(e.images.map((i) => {
        i = { ...i };
        i.loc = resolve(i.loc, resolvers);
        return i;
      }), "loc");
    }
    if (e.videos) {
      e.videos = e.videos.map((v) => {
        v = { ...v };
        if (v.content_loc)
          v.content_loc = resolve(v.content_loc, resolvers);
        return v;
      });
    }
    return e;
  }
  return mergeOnKey(
    entries.map(normaliseEntry).map((e) => ({ ...e, _key: `${e._sitemap || ""}${e.loc}` })),
    "_key"
  );
}
const IS_VALID_W3C_DATE = [
  /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,
  /^\d{4}-[01]\d-[0-3]\d$/,
  /^\d{4}-[01]\d$/,
  /^\d{4}$/
];
function isValidW3CDate(d) {
  return IS_VALID_W3C_DATE.some((r) => r.test(d));
}
function normaliseDate(d) {
  if (typeof d === "string") {
    if (d.includes("T")) {
      const t = d.split("T")[1];
      if (!t.includes("+") && !t.includes("-") && !t.includes("Z")) {
        d += "Z";
      }
    }
    if (!isValidW3CDate(d))
      return false;
    d = new Date(d);
    d.setMilliseconds(0);
    if (Number.isNaN(d.getTime()))
      return false;
  }
  const z = (n) => `0${n}`.slice(-2);
  const date = `${d.getUTCFullYear()}-${z(d.getUTCMonth() + 1)}-${z(d.getUTCDate())}`;
  if (d.getUTCHours() > 0 || d.getUTCMinutes() > 0 || d.getUTCSeconds() > 0) {
    return `${date}T${z(d.getUTCHours())}:${z(d.getUTCMinutes())}:${z(d.getUTCSeconds())}Z`;
  }
  return date;
}

async function fetchDataSource(input, event) {
  const context = typeof input.context === "string" ? { name: input.context } : input.context || { name: "fetch" };
  context.tips = context.tips || [];
  const url = typeof input.fetch === "string" ? input.fetch : input.fetch[0];
  const options = typeof input.fetch === "string" ? {} : input.fetch[1];
  const start = Date.now();
  const timeout = options.timeout || 5e3;
  const timeoutController = new AbortController();
  const abortRequestTimeout = setTimeout(() => timeoutController.abort(), timeout);
  let isHtmlResponse = false;
  try {
    const urls = await globalThis.$fetch(url, {
      ...options,
      responseType: "json",
      signal: timeoutController.signal,
      headers: defu$1(options?.headers, {
        Accept: "application/json"
      }, event ? { Host: getRequestHost(event, { xForwardedHost: true }) } : {}),
      // @ts-expect-error untyped
      onResponse({ response }) {
        if (typeof response._data === "string" && response._data.startsWith("<!DOCTYPE html>"))
          isHtmlResponse = true;
      }
    });
    const timeTakenMs = Date.now() - start;
    if (isHtmlResponse) {
      context.tips.push("This is usually because the URL isn't correct or is throwing an error. Please check the URL");
      return {
        ...input,
        context,
        urls: [],
        timeTakenMs,
        error: "Received HTML response instead of JSON"
      };
    }
    return {
      ...input,
      context,
      timeTakenMs,
      urls
    };
  } catch (_err) {
    const error = _err;
    if (error.message.includes("This operation was aborted"))
      context.tips.push("The request has taken too long. Make sure app sources respond within 5 seconds or adjust the timeout fetch option.");
    else
      context.tips.push(`Response returned a status of ${error.response?.status || "unknown"}.`);
    console.error("[@nuxtjs/sitemap] Failed to fetch source.", { url, error });
    return {
      ...input,
      context,
      urls: [],
      error: error.message
    };
  } finally {
    abortRequestTimeout && clearTimeout(abortRequestTimeout);
  }
}
function globalSitemapSources() {
  return import('./virtual/global-sources.mjs').then((m) => m.sources);
}
function childSitemapSources(definition) {
  return definition?._hasSourceChunk ? import('./virtual/child-sources.mjs').then((m) => m.sources[definition.sitemapName] || []) : Promise.resolve([]);
}
async function resolveSitemapSources(sources, event) {
  return (await Promise.all(
    sources.map((source) => {
      if (typeof source === "object" && "urls" in source) {
        return {
          timeTakenMs: 0,
          ...source,
          urls: source.urls
        };
      }
      if (source.fetch)
        return fetchDataSource(source, event);
      return {
        ...source,
        error: "Invalid source"
      };
    })
  )).flat();
}

function filterSitemapUrls(_urls, options) {
  const urlFilter = createFilter({
    include: options.include,
    exclude: options.exclude
  });
  return _urls.filter((e) => {
    let path = e.loc;
    try {
      path = parseURL(e.loc).pathname;
    } catch {
      return false;
    }
    if (!urlFilter(path))
      return false;
    if (options.isMultiSitemap && e._sitemap && options.sitemapName)
      return e._sitemap === options.sitemapName;
    return true;
  });
}

function normaliseI18nSources(sources, { autoI18n, isI18nMapped, include, exclude }) {
  const filterPath = createPathFilter({
    include,
    exclude
  });
  if (autoI18n && isI18nMapped) {
    return sources.map((s) => {
      const urls = (s.urls || []).map((_url) => {
        const url = typeof _url === "string" ? { loc: _url } : _url;
        url.loc = url.loc || url.url;
        if (!hasProtocol(url.loc, { acceptRelative: true }))
          url.loc = withLeadingSlash(url.loc);
        return url;
      });
      s.urls = urls.map((url) => {
        if (url._sitemap || url._i18nTransform)
          return url;
        if (url.loc && !hasProtocol(url.loc, { acceptRelative: true })) {
          const match = splitForLocales(url.loc, autoI18n.locales.map((l) => l.code));
          const localeCode = match[0] || autoI18n.defaultLocale;
          const pathWithoutPrefix = match[1];
          const locale = autoI18n.locales.find((e) => e.code === localeCode);
          if (locale) {
            if (!url.alternatives) {
              const alternatives = urls.map((u) => {
                if (u._sitemap || u._i18nTransform)
                  return false;
                if (u?.loc) {
                  if (!filterPath(u.loc))
                    return false;
                  const [_localeCode, _pathWithoutPrefix] = splitForLocales(u.loc, autoI18n.locales.map((l) => l.code));
                  if (pathWithoutPrefix === _pathWithoutPrefix) {
                    const entries = [];
                    if (_localeCode === autoI18n.defaultLocale) {
                      entries.push({
                        href: u.loc,
                        hreflang: "x-default"
                      });
                    }
                    entries.push({
                      href: u.loc,
                      hreflang: _localeCode || autoI18n.defaultLocale
                    });
                    return entries;
                  }
                }
                return false;
              }).flat().filter(Boolean);
              if (alternatives.length)
                url.alternatives = alternatives;
            }
            return {
              _sitemap: locale.iso || locale.code,
              ...url
            };
          }
        }
        return url;
      });
      return s;
    });
  }
  return sources;
}
function applyI18nEnhancements(_urls, options) {
  const { autoI18n, include, exclude } = options;
  const filterPath = createPathFilter({
    include,
    exclude
  });
  return _urls.map((e) => {
    if (!e._i18nTransform)
      return e;
    delete e._i18nTransform;
    const parsedURL = parseURL(e.loc);
    const path = withLeadingSlash(parsedURL.pathname + parsedURL.search + parsedURL.hash);
    const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
    let pathWithoutLocale = path;
    let locale;
    if (match[0]) {
      pathWithoutLocale = match[1] || "/";
      locale = match[0];
    }
    if (locale && false) {
      console.warn("You're providing a locale in the url, but the url is marked as inheritI18n. This will cause issues with the sitemap. Please remove the locale from the url.");
      return e;
    }
    if (autoI18n.differentDomains) {
      return {
        // will force it to pass filter
        _sitemap: options.sitemapName,
        ...e,
        alternatives: [
          {
            // apply default locale domain
            ...autoI18n.locales.find((l) => [l.code, l.iso].includes(autoI18n.defaultLocale)),
            code: "x-default"
          },
          ...autoI18n.locales.filter((l) => !!l.domain)
        ].map((locale2) => {
          return {
            hreflang: locale2.iso || locale2.code,
            href: joinURL(withHttps(locale2.domain), pathWithoutLocale)
          };
        })
      };
    }
    return autoI18n.locales.map((l) => {
      let loc = joinURL(`/${l.code}`, pathWithoutLocale);
      if (autoI18n.differentDomains || ["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy) && l.code === autoI18n.defaultLocale)
        loc = pathWithoutLocale;
      return {
        _sitemap: options.isI18nMapped ? l.iso || l.code : void 0,
        ...e,
        loc,
        alternatives: [{ code: "x-default" }, ...autoI18n.locales].map((locale2) => {
          const code = locale2.code === "x-default" ? autoI18n.defaultLocale : locale2.code;
          const isDefault = locale2.code === "x-default" || locale2.code === autoI18n.defaultLocale;
          let href = "";
          if (autoI18n.strategy === "prefix") {
            href = joinURL("/", code, pathWithoutLocale);
          } else if (["prefix_and_default", "prefix_except_default"].includes(autoI18n.strategy)) {
            if (isDefault) {
              href = pathWithoutLocale;
            } else {
              href = joinURL("/", code, pathWithoutLocale);
            }
          }
          const hreflang = locale2.iso || locale2.code;
          if (!filterPath(href))
            return false;
          return {
            hreflang,
            href
          };
        }).filter(Boolean)
      };
    });
  }).flat();
}

function sortSitemapUrls(urls) {
  return urls.sort(
    (a, b) => {
      const aLoc = typeof a === "string" ? a : a.loc;
      const bLoc = typeof b === "string" ? b : b.loc;
      return aLoc.localeCompare(bLoc, void 0, { numeric: true });
    }
  ).sort((a, b) => {
    const aLoc = (typeof a === "string" ? a : a.loc) || "";
    const bLoc = (typeof b === "string" ? b : b.loc) || "";
    const aSegments = aLoc.split("/").length;
    const bSegments = bLoc.split("/").length;
    if (aSegments > bSegments)
      return 1;
    if (aSegments < bSegments)
      return -1;
    return 0;
  });
}

function withoutQuery(path) {
  return path.split("?")[0];
}
function createNitroRouteRuleMatcher() {
  const { nitro, app } = useRuntimeConfig();
  const _routeRulesMatcher = toRouteMatcher(
    createRouter({
      routes: Object.fromEntries(
        Object.entries(nitro?.routeRules || {}).map(([path, rules]) => [withoutTrailingSlash(path), rules])
      )
    })
  );
  return (path) => {
    return defu$1({}, ..._routeRulesMatcher.matchAll(
      // radix3 does not support trailing slashes
      withoutBase(withoutTrailingSlash(withoutQuery(path)), app.baseURL)
    ).reverse());
  };
}

function resolveKey(k) {
  switch (k) {
    case "images":
      return "image";
    case "videos":
      return "video";
    case "news":
      return "news";
    default:
      return k;
  }
}
function handleObject(key, obj) {
  return [
    `        <${key}:${key}>`,
    ...Object.entries(obj).map(([sk, sv]) => {
      if (key === "video" && Array.isArray(sv)) {
        return sv.map((v) => {
          if (typeof v === "string") {
            return [
              `            `,
              `<${key}:${sk}>`,
              escapeValueForXml(v),
              `</${key}:${sk}>`
            ].join("");
          }
          const attributes = Object.entries(v).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            v[sk],
            `</${key}:${sk}>`
          ].join("");
        }).join("\n");
      }
      if (typeof sv === "object") {
        if (key === "video") {
          const attributes = Object.entries(sv).filter(([ssk]) => ssk !== sk).map(([ssk, ssv]) => `${ssk}="${escapeValueForXml(ssv)}"`).join(" ");
          return [
            `            <${key}:${sk} ${attributes}>`,
            // value is the same sk
            sv[sk],
            `</${key}:${sk}>`
          ].join("");
        }
        return [
          `            <${key}:${sk}>`,
          ...Object.entries(sv).map(([ssk, ssv]) => `                <${key}:${ssk}>${escapeValueForXml(ssv)}</${key}:${ssk}>`),
          `            </${key}:${sk}>`
        ].join("\n");
      }
      return `            <${key}:${sk}>${escapeValueForXml(sv)}</${key}:${sk}>`;
    }),
    `        </${key}:${key}>`
  ].join("\n");
}
function handleArray(key, arr) {
  if (arr.length === 0)
    return false;
  key = resolveKey(key);
  if (key === "alternatives") {
    return arr.map((obj) => [
      `        <xhtml:link rel="alternate" ${Object.entries(obj).map(([sk, sv]) => `${sk}="${escapeValueForXml(sv)}"`).join(" ")} />`
    ].join("\n")).join("\n");
  }
  return arr.map((obj) => handleObject(key, obj)).join("\n");
}
function handleEntry(k, e) {
  return Array.isArray(e[k]) ? handleArray(k, e[k]) : typeof e[k] === "object" ? handleObject(k, e[k]) : `        <${k}>${escapeValueForXml(e[k])}</${k}>`;
}
function wrapSitemapXml(input, resolvers, options) {
  const xsl = options.xsl ? resolvers.relativeBaseUrlResolver(options.xsl) : false;
  const credits = options.credits;
  input.unshift(`<?xml version="1.0" encoding="UTF-8"?>${xsl ? `<?xml-stylesheet type="text/xsl" href="${xsl}"?>` : ""}`);
  if (credits)
    input.push(`<!-- XML Sitemap generated by @nuxtjs/sitemap v${options.version} at ${(/* @__PURE__ */ new Date()).toISOString()} -->`);
  return input.join("\n");
}
function escapeValueForXml(value) {
  if (value === true || value === false)
    return value ? "yes" : "no";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

async function buildSitemap(sitemap, resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoI18n,
    isI18nMapped,
    isMultiSitemap,
    // sorting
    sortEntries,
    // chunking
    defaultSitemapsChunkSize,
    // xls
    version,
    xsl,
    credits
  } = runtimeConfig;
  const isChunking = typeof sitemaps.chunks !== "undefined" && !Number.isNaN(Number(sitemap.sitemapName));
  function maybeSort(urls2) {
    return sortEntries ? sortSitemapUrls(urls2) : urls2;
  }
  function maybeSlice(urls2) {
    if (isChunking && defaultSitemapsChunkSize) {
      const chunk = Number(sitemap.sitemapName);
      return urls2.slice(chunk * defaultSitemapsChunkSize, (chunk + 1) * defaultSitemapsChunkSize);
    }
    return urls2;
  }
  if (autoI18n?.differentDomains) {
    const domain = autoI18n.locales.find((e) => [e.iso, e.code].includes(sitemap.sitemapName))?.domain;
    if (domain) {
      const _tester = resolvers.canonicalUrlResolver;
      resolvers.canonicalUrlResolver = (path) => resolveSitePath(path, {
        absolute: true,
        withBase: false,
        siteUrl: withHttps(domain),
        trailingSlash: !_tester("/test/").endsWith("/"),
        base: "/"
      });
    }
  }
  const sources = sitemap.includeAppSources ? await globalSitemapSources() : [];
  sources.push(...await childSitemapSources(sitemap));
  let resolvedSources = await resolveSitemapSources(sources, resolvers.event);
  if (autoI18n)
    resolvedSources = normaliseI18nSources(resolvedSources, { autoI18n, isI18nMapped, ...sitemap });
  const normalisedUrls = normaliseSitemapUrls(resolvedSources.map((e) => e.urls).flat(), resolvers);
  const routeRuleMatcher = createNitroRouteRuleMatcher();
  let enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults)).map((e) => {
    const path = parseURL(e.loc).pathname;
    let routeRules = routeRuleMatcher(path);
    if (autoI18n?.locales && autoI18n?.strategy !== "no_prefix") {
      const match = splitForLocales(path, autoI18n.locales.map((l) => l.code));
      const pathWithoutPrefix = match[1];
      if (pathWithoutPrefix && pathWithoutPrefix !== path)
        routeRules = defu$1(routeRules, routeRuleMatcher(pathWithoutPrefix));
    }
    if (routeRules.sitemap === false)
      return false;
    if (typeof routeRules.index !== "undefined" && !routeRules.index)
      return false;
    const hasRobotsDisabled = Object.entries(routeRules.headers || {}).some(([name, value]) => name.toLowerCase() === "x-robots-tag" && value.toLowerCase() === "noindex");
    if (routeRules.redirect || hasRobotsDisabled)
      return false;
    return routeRules.sitemap ? defu$1(e, routeRules.sitemap) : e;
  }).filter(Boolean);
  if (autoI18n?.locales)
    enhancedUrls = applyI18nEnhancements(enhancedUrls, { isI18nMapped, autoI18n, ...sitemap });
  const filteredUrls = filterSitemapUrls(enhancedUrls, { event: resolvers.event, isMultiSitemap, autoI18n, ...sitemap });
  const sortedUrls = maybeSort(filteredUrls);
  const slicedUrls = maybeSlice(sortedUrls);
  const nitro = useNitroApp();
  const ctx = {
    urls: slicedUrls,
    sitemapName: sitemap.sitemapName
  };
  await nitro.hooks.callHook("sitemap:resolved", ctx);
  const urls = maybeSort(normaliseSitemapUrls(ctx.urls, resolvers));
  const urlset = urls.map((e) => {
    const keys = Object.keys(e).filter((k) => !k.startsWith("_"));
    return [
      "    <url>",
      keys.map((k) => handleEntry(k, e)).filter(Boolean).join("\n"),
      "    </url>"
    ].join("\n");
  });
  return wrapSitemapXml([
    '<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://www.google.com/schemas/sitemap-image/1.1 http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urlset.join("\n"),
    "</urlset>"
  ], resolvers, { version, xsl, credits });
}

async function buildSitemapIndex(resolvers, runtimeConfig) {
  const {
    sitemaps,
    // enhancing
    autoLastmod,
    // chunking
    defaultSitemapsChunkSize,
    autoI18n,
    isI18nMapped,
    sortEntries,
    // xls
    version,
    xsl,
    credits
  } = runtimeConfig;
  if (!sitemaps)
    throw new Error("Attempting to build a sitemap index without required `sitemaps` configuration.");
  function maybeSort(urls) {
    return sortEntries ? sortSitemapUrls(urls) : urls;
  }
  const isChunking = typeof sitemaps.chunks !== "undefined";
  const chunks = {};
  if (isChunking) {
    const sitemap = sitemaps.chunks;
    const sources = await resolveSitemapSources(await globalSitemapSources());
    const normalisedUrls = normaliseSitemapUrls(sources.map((e) => e.urls).flat(), resolvers);
    let enhancedUrls = normalisedUrls.map((e) => defu$1(e, sitemap.defaults));
    if (autoI18n?.locales)
      enhancedUrls = applyI18nEnhancements(enhancedUrls, { isI18nMapped, autoI18n, sitemapName: sitemap.sitemapName });
    const filteredUrls = filterSitemapUrls(enhancedUrls, { ...sitemap, autoI18n, isMultiSitemap: true });
    const sortedUrls = maybeSort(filteredUrls);
    sortedUrls.forEach((url, i) => {
      const chunkIndex = Math.floor(i / defaultSitemapsChunkSize);
      chunks[chunkIndex] = chunks[chunkIndex] || { urls: [] };
      chunks[chunkIndex].urls.push(url);
    });
  } else {
    for (const sitemap in sitemaps) {
      if (sitemap !== "index") {
        chunks[sitemap] = chunks[sitemap] || { urls: [] };
      }
    }
  }
  {
    appendHeader(
      resolvers.event,
      "x-nitro-prerender",
      Object.keys(chunks).map((name) => encodeURIComponent(`/${name}-sitemap.xml`)).join(", ")
    );
  }
  const entries = [];
  for (const name in chunks) {
    const sitemap = chunks[name];
    const entry = {
      sitemap: resolvers.canonicalUrlResolver(`${name}-sitemap.xml`)
    };
    let lastmod = sitemap.urls.filter((a) => !!a?.lastmod).map((a) => typeof a.lastmod === "string" ? new Date(a.lastmod) : a.lastmod).sort((a, b) => (b?.getTime() || 0) - (a?.getTime() || 0))?.[0];
    if (!lastmod && autoLastmod)
      lastmod = /* @__PURE__ */ new Date();
    if (lastmod)
      entry.lastmod = normaliseDate(lastmod);
    entries.push(entry);
  }
  if (sitemaps.index) {
    entries.push(...sitemaps.index.sitemaps.map((entry) => {
      return typeof entry === "string" ? { sitemap: entry } : entry;
    }));
  }
  const ctx = { sitemaps: entries };
  const nitro = useNitroApp();
  await nitro.hooks.callHook("sitemap:index-resolved", ctx);
  const sitemapXml = ctx.sitemaps.map((e) => [
    "    <sitemap>",
    `        <loc>${escapeValueForXml(e.sitemap)}</loc>`,
    // lastmod is optional
    e.lastmod ? `        <lastmod>${escapeValueForXml(e.lastmod)}</lastmod>` : false,
    "    </sitemap>"
  ].filter(Boolean).join("\n")).join("\n");
  return wrapSitemapXml([
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    sitemapXml,
    "</sitemapindex>"
  ], resolvers, { version, xsl, credits });
}

function useNitroUrlResolvers(e) {
  const canonicalQuery = getQuery$1(e).canonical;
  const isShowingCanonical = typeof canonicalQuery !== "undefined" && canonicalQuery !== "false";
  const siteConfig = useSiteConfig(e);
  return {
    event: e,
    fixSlashes: (path) => fixSlashes(siteConfig.trailingSlash, path),
    // we need these as they depend on the nitro event
    canonicalUrlResolver: createSitePathResolver(e, {
      canonical: isShowingCanonical || !false,
      absolute: true,
      withBase: true
    }),
    relativeBaseUrlResolver: createSitePathResolver(e, { absolute: false, withBase: true })
  };
}
async function createSitemap(e, definition, runtimeConfig) {
  const { sitemapName } = definition;
  const nitro = useNitroApp();
  let sitemap = await (definition.sitemapName === "index" ? buildSitemapIndex(useNitroUrlResolvers(e), runtimeConfig) : buildSitemap(definition, useNitroUrlResolvers(e), runtimeConfig));
  const ctx = { sitemap, sitemapName };
  await nitro.hooks.callHook("sitemap:output", ctx);
  sitemap = ctx.sitemap;
  setHeader(e, "Content-Type", "text/xml; charset=UTF-8");
  if (runtimeConfig.cacheMaxAgeSeconds)
    setHeader(e, "Cache-Control", `public, max-age=${runtimeConfig.cacheMaxAgeSeconds}, must-revalidate`);
  else
    setHeader(e, "Cache-Control", `no-cache, no-store`);
  e.context._isSitemap = true;
  return sitemap;
}

const _TVsxhG = defineEventHandler(async (e) => {
  const runtimeConfig = useSimpleSitemapRuntimeConfig();
  const { sitemaps } = runtimeConfig;
  if ("index" in sitemaps) {
    return sendRedirect(e, withBase("/sitemap_index.xml", useRuntimeConfig().app.baseURL), 301);
  }
  return createSitemap(e, Object.values(sitemaps)[0], runtimeConfig);
});

const defaultThrowErrorValue = { throwError: true };
const defaultSecurityConfig = (serverlUrl, strict) => {
  const defaultConfig = {
    strict,
    headers: {
      crossOriginResourcePolicy: "same-origin",
      crossOriginOpenerPolicy: "same-origin",
      crossOriginEmbedderPolicy: "credentialless",
      contentSecurityPolicy: {
        "base-uri": ["'none'"],
        "font-src": ["'self'", "https:", "data:"],
        "form-action": ["'self'"],
        "frame-ancestors": ["'self'"],
        "img-src": ["'self'", "data:"],
        "object-src": ["'none'"],
        "script-src-attr": ["'none'"],
        "style-src": ["'self'", "https:", "'unsafe-inline'"],
        "script-src": ["'self'", "https:", "'unsafe-inline'", "'strict-dynamic'", "'nonce-{{nonce}}'"],
        "upgrade-insecure-requests": true
      },
      originAgentCluster: "?1",
      referrerPolicy: "no-referrer",
      strictTransportSecurity: {
        maxAge: 15552e3,
        includeSubdomains: true
      },
      xContentTypeOptions: "nosniff",
      xDNSPrefetchControl: "off",
      xDownloadOptions: "noopen",
      xFrameOptions: "SAMEORIGIN",
      xPermittedCrossDomainPolicies: "none",
      xXSSProtection: "0",
      permissionsPolicy: {
        camera: [],
        "display-capture": [],
        fullscreen: [],
        geolocation: [],
        microphone: []
      }
    },
    requestSizeLimiter: {
      maxRequestSizeInBytes: 2e6,
      maxUploadFileRequestInBytes: 8e6,
      ...defaultThrowErrorValue
    },
    rateLimiter: {
      // Twitter search rate limiting
      tokensPerInterval: 150,
      interval: 3e5,
      headers: false,
      driver: {
        name: "lruCache"
      },
      ...defaultThrowErrorValue
    },
    xssValidator: {
      methods: ["GET", "POST"],
      ...defaultThrowErrorValue
    },
    corsHandler: {
      // Options by CORS middleware for Express https://github.com/expressjs/cors#configuration-options
      origin: serverlUrl,
      methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
      preflight: {
        statusCode: 204
      }
    },
    allowedMethodsRestricter: {
      methods: "*",
      ...defaultThrowErrorValue
    },
    hidePoweredBy: true,
    basicAuth: false,
    enabled: true,
    csrf: false,
    nonce: true,
    // https://github.com/Talljack/unplugin-remove/blob/main/src/types.ts
    removeLoggers: {
      external: [],
      consoleType: ["log", "debug"],
      include: [/\.[jt]sx?$/, /\.vue\??/],
      exclude: [/node_modules/, /\.git/]
    },
    ssg: {
      meta: true,
      hashScripts: true,
      hashStyles: false,
      nitroHeaders: true,
      exportToPresets: true
    },
    sri: true
  };
  return defaultConfig;
};

const FILE_UPLOAD_HEADER = "multipart/form-data";
const defaultSizeLimiter = defaultSecurityConfig("").requestSizeLimiter;
const _NcYhVv = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.requestSizeLimiter) {
    const requestSizeLimiter = defu(
      rules.requestSizeLimiter,
      defaultSizeLimiter
    );
    if (["POST", "PUT", "DELETE"].includes(event.node.req.method)) {
      const contentLengthValue = getRequestHeader(event, "content-length");
      const contentTypeValue = getRequestHeader(event, "content-type");
      const isFileUpload = contentTypeValue?.includes(FILE_UPLOAD_HEADER);
      const requestLimit = isFileUpload ? requestSizeLimiter.maxUploadFileRequestInBytes : requestSizeLimiter.maxRequestSizeInBytes;
      if (parseInt(contentLengthValue) >= requestLimit) {
        const payloadTooLargeError = {
          statusCode: 413,
          statusMessage: "Payload Too Large"
        };
        if (requestSizeLimiter.throwError === false) {
          return payloadTooLargeError;
        }
        throw createError(payloadTooLargeError);
      }
    }
  }
});

const _G2T6E2 = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.corsHandler) {
    const { corsHandler } = rules;
    handleCors(event, corsHandler);
  }
});

const _0OoJ8X = defineEventHandler((event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.allowedMethodsRestricter) {
    const { allowedMethodsRestricter } = rules;
    const allowedMethods = allowedMethodsRestricter.methods;
    if (allowedMethods !== "*" && !allowedMethods.includes(event.node.req.method)) {
      const methodNotAllowedError = {
        statusCode: 405,
        statusMessage: "Method not allowed"
      };
      if (allowedMethodsRestricter.throwError === false) {
        return methodNotAllowedError;
      }
      throw createError(methodNotAllowedError);
    }
  }
});

useStorage("#rate-limiter-storage");
defaultSecurityConfig("").rateLimiter;
const _NztuKI = defineEventHandler(async (event) => {
  {
    return;
  }
});

const _4uTSU0 = defineEventHandler(async (event) => {
  const rules = resolveSecurityRules(event);
  if (rules.enabled && rules.xssValidator) {
    const filterOpt = {
      ...rules.xssValidator,
      escapeHtml: void 0
    };
    if (rules.xssValidator.escapeHtml === false) {
      filterOpt.escapeHtml = (value) => value;
    }
    const xssValidator = new FilterXSS(filterOpt);
    if (event.node.req.socket.readyState !== "readOnly") {
      if (rules.xssValidator.methods && rules.xssValidator.methods.includes(
        event.node.req.method
      )) {
        const valueToFilter = event.node.req.method === "GET" ? getQuery$1(event) : event.node.req.headers["content-type"]?.includes(
          "multipart/form-data"
        ) ? await readMultipartFormData(event) : await readBody(event);
        if (valueToFilter && Object.keys(valueToFilter).length) {
          if (valueToFilter.statusMessage && valueToFilter.statusMessage !== "Bad Request") {
            return;
          }
          const stringifiedValue = JSON.stringify(valueToFilter);
          const processedValue = xssValidator.process(
            JSON.stringify(valueToFilter)
          );
          if (processedValue !== stringifiedValue) {
            const badRequestError = {
              statusCode: 400,
              statusMessage: "Bad Request"
            };
            if (rules.xssValidator.throwError === false) {
              return badRequestError;
            }
            throw createError(badRequestError);
          }
        }
      }
    }
  }
});

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2]?.match(/\/(.*)\/([dgimsuy]*)$/);
    return regex?.[1] ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params?.qid?.replace(/.json$/, "");
  const query = getQuery$1(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid]?.where && !Array.isArray(memory[qid]?.where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (qid && memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, Number.parseInt(order || "0", 10)];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _ETuRyF = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  const { advanceQuery } = useRuntimeConfig().public.content.experimental;
  if (query.first) {
    let contentQuery = serverQueryContent$1(event, query);
    if (!advanceQuery) {
      contentQuery = contentQuery.withDirConfig();
    }
    const content = await contentQuery.findOne();
    const _result = advanceQuery ? content?.result : content;
    const missing = !_result && !content?.dirConfig?.navigation?.redirect && !content?._dir?.navigation?.redirect;
    if (missing) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  if (query.count) {
    return serverQueryContent$1(event, query).count();
  }
  return serverQueryContent$1(event, query).find();
});

const _vls4T8 = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent$1(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage().setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents: content.experimental.cacheContents ? contents : [],
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().public.content;
  if (navigation === false) {
    return [];
  }
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1]?.match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      if (dirConfig) {
        Object.assign(
          navItem,
          pickNavigationFields(dirConfig)
        );
      }
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...conf && pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  nav.forEach((item) => {
    item._file = item._file.split(".").slice(0, -1).join(".");
  });
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children?.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _vp80lw = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage().getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent$1(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent$1(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = (dirConfigs?.result || dirConfigs).reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents?.result || contents, configs);
});

const _Q0lryz = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_3WcKnb = () => import('./routes/api/towns.mjs');
const _lazy_sFb7lV = () => import('./_/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/towns', handler: _lazy_3WcKnb, lazy: true, middleware: false, method: undefined },
  { route: '/api/_mdc/highlight', handler: _rBsYnV, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _8fMqLE, lazy: false, middleware: true, method: undefined },
  { route: '/__sitemap__/nuxt-content-urls.json', handler: _XurHtN, lazy: false, middleware: false, method: undefined },
  { route: '/__sitemap__/style.xsl', handler: _0iacqe, lazy: false, middleware: false, method: undefined },
  { route: '/sitemap.xml', handler: _TVsxhG, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _NcYhVv, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _G2T6E2, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _0OoJ8X, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _NztuKI, lazy: false, middleware: false, method: undefined },
  { route: '', handler: _4uTSU0, lazy: false, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _ETuRyF, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _ETuRyF, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _ETuRyF, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1728243177748.json', handler: _vls4T8, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _vp80lw, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _vp80lw, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _vp80lw, lazy: false, middleware: false, method: "get" },
  { route: '/_ipx/**', handler: _Q0lryz, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_sFb7lV, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, closePrerenderer as c, getRouteRules as g, localFetch as l, mdcHighlighter as m, useNitroApp as u };
//# sourceMappingURL=runtime.mjs.map
