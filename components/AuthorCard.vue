<template>
  <div class="md:fixed">
    <div class="md:block flex justify-center items-center">
      <nuxt-img
        :src="author.author_image"
        loading="lazy"
        alt="me"
        class="shadow-xl sm:h-60 sm:w-60 h-32 w-32 rounded-full"
      />
      <div class="mb-2 md:mx-7 mt-4 mx-4 justify-center items-center">
        <h1
          class="md:text-3xl text-lg text-gray-800 font-bold dark:text-blue-100"
        >
          {{ author.name }}
        </h1>
        <div class="md:text-lg text-sm text-gray-600 dark:text-blue-100">
          {{ author.position }}
        </div>
        <a
          :href="`mailto:${author.email}`"
          class="text-gray-600 text-sm md:hidden mt-1 dark:text-blue-100"
        >
          {{ author.email }}
        </a>
      </div>
    </div>

    <div class="mx-7 hidden md:block">
      <div class="my-2 text-gray-600 flex dark:text-blue-100">
        <Mail />
        <a class="ml-2" :href="`mailto:${author.email}`"> {{ author.email }}</a>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-100">
        <Glob />
        <p class="ml-2">{{ author.location }}</p>
      </div>
      <div class="my-2 text-gray-600 flex dark:text-blue-200">
        <Github />
        <a class="ml-2" :href="`https://github.com/${author.github}`"> {{ author.github }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import author from "@/data/author.js";
import Mail from "assets/icons/mail.svg?skipsvgo";
import Glob from "assets/icons/glob.svg?skipsvgo";
import Github from "assets/icons/github_new.svg?skipsvgo";
</script>
