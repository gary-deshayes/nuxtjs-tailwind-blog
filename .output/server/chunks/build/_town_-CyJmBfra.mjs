import { u as useRoute } from './server.mjs';
import { u as useHead } from './index-DIUDACRG.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'lru-cache';
import 'fs';
import 'path';
import 'node:crypto';
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
import 'xss';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "[town]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const town = route.params.town.charAt(0).toUpperCase() + route.params.town.slice(1);
    useHead({
      title: `D\xE9veloppeur web sur ${town}`,
      meta: [{
        name: "description",
        content: `Trouvez un d\xE9veloppeur autour de ${town}`
      }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "dark:bg-gray-900 mt-6"
      }, _attrs))}><div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900"><div class="p-2 flex flex-col"><header class="bg-blue-500 p-4 text-white rounded text-center"><h1>D\xE9veloppeur Web Freelance \xE0 ${ssrInterpolate(town)}</h1><p class="mt-4">Bienvenue ! Vous recherchez un d\xE9veloppeur web freelance \xE0 ${ssrInterpolate(town)} ? Vous \xEAtes au bon endroit.</p></header><section class="mt-8 mb-8"><h2 class="text-center font-black mb-4">Services de D\xE9veloppement Web \xE0 ${ssrInterpolate(town)}</h2><p>En tant que d\xE9veloppeur web freelance \xE0 ${ssrInterpolate(town)}, j&#39;offre une gamme compl\xE8te de services pour r\xE9pondre \xE0 tous vos besoins en d\xE9veloppement web. Que vous ayez besoin d&#39;un site vitrine, d&#39;une boutique en ligne, ou d&#39;une application web sur mesure, je suis l\xE0 pour vous aider.</p></section><section class="mt-8 mb-8"><h3 class="text-center font-black mb-4">Mes Services Incluent :</h3><ul><li><strong>Cr\xE9ation de Sites Web sur Mesure</strong> - Sites web responsives et optimis\xE9s pour tous les appareils.</li><li><strong>D\xE9veloppement E-commerce</strong> - Solutions compl\xE8tes pour boutiques en ligne avec des plateformes telles que WooCommerce, Shopify, etc.</li><li><strong>Applications Web</strong> - D\xE9veloppement d&#39;applications web interactives et s\xE9curis\xE9es.</li><li><strong>Maintenance et Support</strong> - Maintenance continue et mise \xE0 jour de votre site web pour assurer sa performance et sa s\xE9curit\xE9.</li></ul></section><section class="mt-8 mb-8"><h3 class="text-center font-black mb-4">Pourquoi Choisir un D\xE9veloppeur Web Freelance \xE0 ${ssrInterpolate(town)} ?</h3><ul><li class="bg-lime-500 rounded p-2 mb-4 text-white"><strong>Proximit\xE9 et Accessibilit\xE9</strong> - Bas\xE9 \xE0 ${ssrInterpolate(town)}, je comprends les besoins locaux et suis facilement joignable pour des rencontres et des consultations.</li><li class="bg-lime-500 rounded p-2 mb-4 text-white"><strong>Expertise et Exp\xE9rience</strong> - Plusieurs ann\xE9es d&#39;exp\xE9rience dans le d\xE9veloppement web avec une ma\xEEtrise des derni\xE8res technologies et tendances.</li><li class="bg-lime-500 rounded p-2 mb-4 text-white"><strong>Approche Personnalis\xE9e</strong> - Chaque projet est unique, et j&#39;offre une approche sur mesure pour chaque client afin de garantir la satisfaction totale.</li><li class="bg-lime-500 rounded p-2 mb-4 text-white"><strong>Support D\xE9di\xE9</strong> - Disponibilit\xE9 pour des interventions rapides et un support continu. </li></ul></section><section class="mt-8 mb-8"><h3 class="text-center font-black mb-4">T\xE9moignages de Clients \xE0 ${ssrInterpolate(town)}</h3><blockquote class="bg-lime-500 rounded p-2 mb-4 text-white"> &quot;Gr\xE2ce \xE0 Gary, notre site web \xE0 ${ssrInterpolate(town)} est non seulement magnifique, mais aussi tr\xE8s fonctionnel. Je recommande vivement ses services.&quot; - Frank </blockquote><blockquote class="bg-lime-500 rounded p-2 text-white"> &quot;Tr\xE8s professionnel et r\xE9actif. Notre boutique en ligne fonctionne parfaitement gr\xE2ce \xE0 son expertise.&quot; - Romain </blockquote></section><section class="mt-8 mb-8"><h3 class="text-center font-black">Contactez-moi</h3><p>Vous avez un projet en t\xEAte ? Discutons-en ! Contactez-moi pour une consultation gratuite et d\xE9couvrons ensemble comment je peux aider \xE0 r\xE9aliser vos objectifs.</p><p class="text-center"><strong>Email</strong> : <a href="mailto:deshayesgary@hotmail.fr">deshayesgary@hotmail.fr</a><br><strong>LinkedIn</strong> : <a href="https://www.linkedin.com/in/gary-deshayes-368279145">Votre Profil LinkedIn</a><br><a class="bg-orange-500 pt-4 rounded" href="https://www.malt.fr/profile/garydeshayes">Contactez moi sur Malt.fr</a></p></section></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/developpeur-web-fullstack/[town].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_town_-CyJmBfra.mjs.map
