<template>
  <div>
    <header class="pt-16 pb-9 sm:pb-16 sm:text-center">
      <h1 class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200">
        {{ categorie.name }}
      </h1>
      <p class="text-lg text-slate-700 dark:text-slate-400">
        All the latest Tailwind CSS news, straight from the&nbsp;team.
      </p>
    </header>
    <div class="space-y-16 mx-auto max-w-7xl">
      <blog-item v-for="article in posts" :key="article.id" :title="article.title.rendered"
        :description="article.excerpt.rendered" :slug="article.slug" :date="article.date"></blog-item>
    </div>
  </div>
</template>

<script setup>
import siteMetaInfo from "~/data/sitemetainfo.js";

const route = useRoute();
const { data: categories }  = await useFetch('https://gary-deshayes.com/wp-json/wp/v2/categories', {
  query: {
    slug: route.params.slug
  }
});
let categorie = categories.value[0];

const { data: posts } = await useFetch('https://gary-deshayes.com/wp-json/wp/v2/posts', {
  query: {
    categories: [categorie.id]
  }
});

useSeoMeta({
  title: `${siteMetaInfo.title} | ${categorie.name}`,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: "Its Solaiman's Pen and Paper to write ",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
});

</script>



<style></style>
