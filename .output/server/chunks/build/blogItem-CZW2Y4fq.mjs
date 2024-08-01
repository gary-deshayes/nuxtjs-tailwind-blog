import { _ as __nuxt_component_0 } from './nuxt-link-Z6x4lVho.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-img-rMGAjS92.mjs';
import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "blogItem",
  __ssrInlineRender: true,
  props: ["title", "image", "description", "date", "slug", "tags"],
  setup(__props) {
    const formatDate = (date) => {
      console.log(date);
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><article class="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem] bg-sky-500 mx-4 p-4 rounded-lg"><h2 class="mb-4 text-4xl text-white tracking-tight font-bold dark:text-slate-200">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/blog/${__props.slug}`
      }, null, _parent));
      _push(`</h2><div class="mb-6 prose prose-slate dark:prose-dark"><p class="text-white">${(_a = __props.description) != null ? _a : ""}</p></div><div class="mt-auto flex flex-col lg:flex-row-reverse items-start lg:items-center lg:justify-end">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        class: "hidden lg:block lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:h-48 md:h-36 object-cover object-center rounded-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500",
        width: "300",
        src: __props.image
      }, null, _parent));
      _push(`<div class="lg:absolute lg:top-0 lg:right-full mr-2 mt-2"><dl><dt class="sr-only">Date</dt><dd class="text-sm leading-6 dark:text-slate-400 lg:mr-8 lg:whitespace-nowrap font-bold"><div class="bg-indigo-500 text-white py-1 px-2 rounded-md"><time datetime="2022-02-24T12:00:00.000Z">${ssrInterpolate(formatDate(__props.date))}</time></div></dd></dl></div></div><br></article></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blogItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=blogItem-CZW2Y4fq.mjs.map
