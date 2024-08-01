import { _ as __nuxt_component_0 } from './nuxt-img-rMGAjS92.mjs';
import _sfc_main$1 from './ContentRenderer-CYeRZrUk.mjs';
import { u as useRoute } from './server.mjs';
import { u as useAsyncData } from './asyncData-DIgr6s-U.mjs';
import { q as queryContent } from './query-DUprJH0g.mjs';
import { u as useSeoMeta } from './index-DIUDACRG.mjs';
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { a as author } from './author-BEZy7EpK.mjs';
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
import './ContentRendererMarkdown-CErN5l8c.mjs';
import 'property-information';
import './node-04k6j4dz.mjs';
import './preview-B-M8xQ4k.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a2;
    var _a, _b;
    let __temp, __restore;
    const route = useRoute();
    const { data: article } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "home",
      () => queryContent("/articles").where({
        slug: route.params.slug
      }).findOne()
    )), __temp = await __temp, __restore(), __temp);
    const formatDate = (date) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    };
    useSeoMeta({
      title: (_a2 = (_a = article == null ? void 0 : article.value) == null ? void 0 : _a.title) != null ? _a2 : "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: (_b = article == null ? void 0 : article.value) == null ? void 0 : _b.description
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a22, _b2, _c;
      const _component_nuxt_img = __nuxt_component_0;
      const _component_ContentRenderer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0 mt-10" }, _attrs))}><p class="text-center font-bold my-5 text-indigo-500">${ssrInterpolate(formatDate((_a22 = unref(article)) == null ? void 0 : _a22.date))}</p><h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">${ssrInterpolate((_b2 = unref(article)) == null ? void 0 : _b2.title)}</h1><div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: unref(author).author_image,
        loading: "lazy",
        alt: "",
        class: "mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
      }, null, _parent));
      _push(`<div><div class="text-slate-900 dark:text-slate-200">${ssrInterpolate(unref(author).name)}</div><a target="_blank"${ssrRenderAttr("href", `https://twitter.com/${unref(author).socials.twitter}`)} class="text-sky-500 hover:text-sky-600 dark:text-sky-400"> @${ssrInterpolate(unref(author).socials.twitter)}</a></div></div><img class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm"${ssrRenderAttr("src", (_c = unref(article)) == null ? void 0 : _c.image)}>`);
      _push(ssrRenderComponent(_component_ContentRenderer, {
        class: "prose min-w-full p-10 mx-auto",
        value: unref(article)
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>No content found.</p>`);
          } else {
            return [
              createVNode("p", null, "No content found.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-UJ8Aei0O.mjs.map
