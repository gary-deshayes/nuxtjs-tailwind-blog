<template>
  <div>
    <header class="pt-16 pb-9 sm:pb-16 sm:text-center">
      <h1 class="mb-4 text-8xl sm:text-4xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200">
        Blog
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

const { data: posts } = await useFetch('https://gary-deshayes.com/wp-json/wp/v2/posts?_embed', {
  query: {
    page: 10
  }
});
console.log(posts);

const { data: articles } = await useAsyncData('home', () => queryContent("/articles")
  .only([
    "title",
    "description",
    "image",
    "img",
    "slug",
    "tags",
    "author",
    "date",
    "draft",
  ])
  .sort({ date: 1 })
  .find()
);

useSeoMeta({
  title: `${siteMetaInfo.title} | Blogs`,
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
