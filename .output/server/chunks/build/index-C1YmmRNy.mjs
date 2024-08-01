import { _ as _sfc_main$1 } from './blogItem-CZW2Y4fq.mjs';
import { u as useFetch } from './fetch-Ds0XLY_4.mjs';
import { u as useAsyncData } from './asyncData-DIgr6s-U.mjs';
import { q as queryContent } from './query-DUprJH0g.mjs';
import { u as useSeoMeta } from './index-DIUDACRG.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { s as siteMetaInfo } from './sitemetainfo-CC_IiOKk.mjs';
import './nuxt-link-Z6x4lVho.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'ipx';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './nuxt-img-rMGAjS92.mjs';
import './preview-B-M8xQ4k.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://gary-deshayes.com/wp-json/wp/v2/posts?_embed", {
      query: {
        page: 10
      }
    }, "$ansXcfZp0C")), __temp = await __temp, __restore(), __temp);
    console.log(posts);
    [__temp, __restore] = withAsyncContext(() => useAsyncData(
      "home",
      () => queryContent("/articles").only([
        "title",
        "description",
        "image",
        "img",
        "slug",
        "tags",
        "author",
        "date",
        "draft"
      ]).sort({ date: 1 }).find()
    )), __temp = await __temp, __restore();
    useSeoMeta({
      title: `${siteMetaInfo.title} | Blogs`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Its Solaiman's Pen and Paper to write "
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_blog_item = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><header class="pt-16 pb-9 sm:pb-16 sm:text-center"><h1 class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200"> Blog </h1><p class="text-lg text-slate-700 dark:text-slate-400"> All the latest Tailwind CSS news, straight from the\xA0team. </p></header><div class="space-y-16 mx-auto max-w-7xl"><!--[-->`);
      ssrRenderList(unref(posts), (article) => {
        _push(ssrRenderComponent(_component_blog_item, {
          key: article.id,
          title: article.title.rendered,
          description: article.excerpt.rendered,
          slug: article.slug,
          date: article.date
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C1YmmRNy.mjs.map
