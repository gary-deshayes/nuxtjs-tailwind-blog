<template>
  <div>
    <article
      class="relative flex flex-col max-w-3xl lg:ml-auto xl:max-w-none xl:w-[50rem] bg-sky-500 mx-4 p-4 rounded-lg"
    >
      <h2
        class="mb-4 text-4xl text-white tracking-tight font-bold dark:text-slate-200 "
      >
        <NuxtLink :to="`/blog/${slug}`" v-html="title"></NuxtLink>
      </h2>

      <div class="mb-6 prose prose-slate dark:prose-dark">
        <p v-html="description" class="text-white">
        </p>
      </div>
      <div class="mt-auto flex flex-col lg:flex-row-reverse items-start lg:items-center lg:justify-end">
        <NuxtImg
            class="hidden lg:block lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:h-48 md:h-36 object-cover object-center rounded-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
            width="300"
            :src="image"
        />
        <div class="lg:absolute lg:top-0 lg:right-full mr-2 mt-2">
          <dl>
            <dt class="sr-only">Date</dt>
            <dd class="text-sm leading-6 dark:text-slate-400 lg:mr-8 lg:whitespace-nowrap font-bold">
              <div class="bg-indigo-500 text-white py-1 px-2 rounded-md">
                <time datetime="2022-02-24T12:00:00.000Z">
                  {{ formatDate(date) }}
                </time>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <br />
    </article>
  </div>
</template>

<script lang="ts" setup>
import TagIcon from "@/assets/icons/tag.svg?component";

defineProps(["title", "image", "description", "date", "slug", "tags"]);

const formatDate = (date) => {
  console.log(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en", options);
};
</script>

<style></style>
