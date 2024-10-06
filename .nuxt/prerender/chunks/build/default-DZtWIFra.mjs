import { a as buildAssetsURL } from '../_/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-k0bprLMD.mjs';
import { defineComponent, h, provide, shallowReactive, ref, inject, watch, Suspense, nextTick, Fragment, Transition, useSSRContext, mergeProps, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, computed, toValue, reactive, openBlock, createElementBlock, createElementVNode } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/vue/index.mjs';
import { hash } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/ohash/dist/index.mjs';
import { P as PageRouteSymbol, d as useNuxtApp, L as LayoutMetaSymbol, l as generateRouteKey$1, m as appPageTransition, o as appKeepalive, p as _wrapIf, w as wrapInKeepAlive, t as toArray, _ as _export_sfc, j as fetchDefaults, k as useRequestFetch } from './server.mjs';
import { u as useAsyncData } from './asyncData-BrpQo2jV.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/vue/server-renderer/index.mjs';
import { RouterView } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/vue-router/dist/vue-router.node.mjs';
import { defu } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/defu/dist/defu.mjs';
import { a as author, s as siteMetaInfo } from './sitemetainfo-Cf_GwHko.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/devalue/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/radix3/dist/index.mjs';
import 'node:crypto';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/shiki/dist/core.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/@shikijs/transformers/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unified/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/mdast-util-to-string/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unist-util-stringify-position/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark-util-character/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark-util-chunked/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark-util-resolve-all/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/micromark-util-sanitize-uri/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/slugify/slugify.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-parse/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-rehype/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-emoji/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/remark-gfm/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/rehype-raw/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/detab/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/hast-util-to-string/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/github-slugger/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/xss/lib/index.js';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/ipx/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/unctx/dist/index.mjs';

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch: watch2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch2 === false ? [] : [_fetchOptions, _request, ...watch2 || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _imports_0 = "" + buildAssetsURL("cropped-gary-deshayes-logo.BFIM319A.png");
const _sfc_main$2 = {
  __name: "TheHeader",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    function groupCategoriesByParent(categories2) {
      const groupedCategories = {};
      categories2.forEach((category) => {
        if (category.parent === 0) {
          groupedCategories[category.id] = {
            item: category,
            children: []
          };
        }
      });
      categories2.forEach((category) => {
        if (category.parent !== 0) {
          if (!groupedCategories[category.parent]) {
            groupedCategories[category.parent] = {
              item: null,
              children: []
            };
          }
          groupedCategories[category.parent].children.push(category);
        }
      });
      return groupedCategories;
    }
    const {
      data: categories
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://gary-deshayes.com/wp-json/wp/v2/categories", {
      query: {
        per_page: 100,
        exclude: [1]
      }
    }, "$ebWqjtA5wu")), __temp = await __temp, __restore(), __temp);
    const parentCategories = groupCategoriesByParent(categories.value);
    const {
      data: pages
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("https://gary-deshayes.com/wp-json/wp/v2/pages", "$9tf6HNKnbq")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "flex justify-center border-blue-200 md:bg-blue-500 dark:bg-blue-800 dark:border-blue-700 bg-white"
      }, _attrs))}><div class="max-w-screen-xl flex flex-wrap items-center justify-center"><div class="flex justify-center md:hidden lg:hidden"><a href="#" class="flex items-center space-x-3 rtl:space-x-reverse"><img${ssrRenderAttr("src", _imports_0)} class="h-12" alt="Gary DESHAYES"></a></div><button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center justify-end p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden focus:ring-gray-200 focus:text-black" aria-controls="navbar-solid-bg" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button><div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg"><ul class="flex flex-col font-medium mt-4 sm:rounded-lg bg-blue-500 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"><li><button id="dropdownNavbarLink-page" data-dropdown-toggle="dropdownNavbar-page" class="flex items-center justify-between block px-4 py-3 no-underline text-white hover:text-black font-bold text-lg md:text-sm cursor-pointer">Dossiers <svg class="w-4 h-4 ms-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button><div id="dropdownNavbar-page" class="z-10 hidden font-normal bg-blue-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"><ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton"><!--[-->`);
      ssrRenderList(unref(pages), (page) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "block md:inline-block pl-3 my-2 no-underline text-white hover:text-grey-darker font-bold text-lg md:text-sm cursor-pointer hover:text-black"
        }, null, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></li><!--[-->`);
      ssrRenderList(unref(parentCategories), (parent) => {
        _push(`<!--[-->`);
        if (parent.children.length === 0) {
          _push(`<li>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/blog/categorie/" + parent.item.slug,
            class: "block md:inline-block px-4 md:px-0 py-3 no-underline text-white hover:text-black font-bold text-lg md:text-sm cursor-pointer"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(parent.item.name)}`);
              } else {
                return [createTextVNode(toDisplayString(parent.item.name), 1)];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        } else {
          _push(`<li><button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between block px-4 py-3 no-underline text-white hover:text-black font-bold text-lg md:text-sm cursor-pointer">${ssrInterpolate(parent.item.name)} <svg class="w-4 h-4 ms-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button><div id="dropdownNavbar" class="z-10 hidden font-normal bg-blue-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"><ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton"><!--[-->`);
          ssrRenderList(parent.children, (category) => {
            _push(`<li>`);
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: "/blog/categorie/" + category.slug,
              class: "block md:inline-block pl-3 my-2 no-underline text-white hover:text-grey-darker font-bold text-lg md:text-sm cursor-pointer hover:text-black"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(category.name)}`);
                } else {
                  return [createTextVNode(toDisplayString(category.name), 1)];
                }
              }),
              _: 2
            }, _parent));
            _push(`</li>`);
          });
          _push(`<!--]--></ul></div></li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error = ref(false);
  const start = () => {
    error.value = false;
    set(0);
  };
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_1 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_2 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!((_b = (_a = props.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = (_d = (_c = props.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  class: "i-451872637__mr-1",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, [..._hoisted_3$2]);
}
const MailIcon = { render: render$2 };
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor",
  class: "i1074942217__mr-1",
  viewBox: "0 0 24 24"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_3$1]);
}
const LinkedingIcon = { render: render$1 };
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "i-702761200__mr-1",
  style: { "fill": "#000" },
  viewBox: "0 0 50 50"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M17.791 46.836A2 2 0 0 0 19 45v-5.4q.002-.297.041-.61L19 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a22 22 0 0 1-.151-.987c1.797-.296 4.843-.647 8.345-.714a8 8 0 0 1-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a10 10 0 0 1-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8 8 0 0 1-.325.98c3.546.046 6.665.389 8.548.689q-.064.498-.151.987c-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, [..._hoisted_3]);
}
const GithubNewIcon = { render };
const _sfc_main$1 = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="flex flex-col items-center mt-16"><div class="flex mb-3 space-x-4"><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", unref(author).socials.github)}><span class="sr-only">github</span>`);
      _push(ssrRenderComponent(unref(GithubNewIcon), {
        class: "w-8 h-8 text-black"
      }, null, _parent));
      _push(`</a><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", unref(author).socials.linkedin)}><span class="sr-only">Linkedin</span>`);
      _push(ssrRenderComponent(unref(LinkedingIcon), {
        class: "w-8 h-8 text-black"
      }, null, _parent));
      _push(`</a><a class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer"${ssrRenderAttr("href", `mailto:${unref(author).email}`)}><span class="sr-only">mail</span>`);
      _push(ssrRenderComponent(unref(MailIcon), {
        class: "w-8 h-8 text-black"
      }, null, _parent));
      _push(`</a></div><div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400"><div>Copyright \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())}</div><div>\u2022</div><a href="/">${ssrInterpolate(unref(author).name)}&#39;s blog - ${ssrInterpolate(unref(siteMetaInfo).slogan)}</a></div><div class="mb-8 text-sm text-gray-500 dark:text-gray-400 bg-green-500 rounded"><a class="text-white m-4" target="_blank" rel="noopener noreferrer" href="https://github.com/mdrathik/nuxtjs-tailwind-blog">Site inspir\xE9 de ce template</a></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  component: {
    TheHeader: _sfc_main$2,
    TheFooter: _sfc_main$1
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheHeader = _sfc_main$2;
  const _component_NuxtLoadingIndicator = __nuxt_component_1;
  const _component_NuxtPage = __nuxt_component_2;
  const _component_TheFooter = _sfc_main$1;
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "w-fullpb-12 antialiased bg-white"
  }, _attrs))}><div class="max-w-8xl"><div class="flex justify-center hidden md:flex"><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse"><img${ssrRenderAttr("src", _imports_0)} class="h-12" alt="Flowbite Logo"></a></div>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtLoadingIndicator, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-DZtWIFra.mjs.map
