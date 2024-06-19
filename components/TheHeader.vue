<template>
  <nav class="flex justify-center border-blue-200 md:bg-blue-500 dark:bg-blue-800 dark:border-blue-700 bg-white">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-center">
      <div class="flex justify-center md:hidden lg:hidden">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="assets/cropped-gary-deshayes-logo.png" class="h-12" alt="Gary DESHAYES" />
        </a>
      </div>
      <button data-collapse-toggle="navbar-solid-bg" type="button"
        class="inline-flex items-center justify-end p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden focus:ring-gray-200 focus:text-black"
        aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
        <ul
          class="flex flex-col font-medium mt-4 sm:rounded-lg bg-blue-500 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
              <button id="dropdownNavbarLink-page" data-dropdown-toggle="dropdownNavbar-page" class="flex items-center justify-between block px-4 py-3 no-underline text-white hover:text-black font-bold text-lg md:text-sm cursor-pointer">Dossiers
                <svg class="w-4 h-4 ms-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar-page" class="z-10 hidden font-normal bg-blue-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li v-for="page in pages" :key="page.id">
                      <NuxtLink
                  class="block md:inline-block pl-3 my-2 no-underline text-white hover:text-grey-darker font-bold text-lg md:text-sm cursor-pointer hover:text-black" v-html="page.title.rendered">
                  </NuxtLink>
                    </li>
                  </ul>
              </div>
            </li>
          <template v-for="parent in parentCategories" :key="parent.item.id">
            <li v-if="parent.children.length === 0">
              <NuxtLink
                :to="'/blog/categorie/' + parent.item.slug"
                class="block md:inline-block px-4 md:px-0 py-3 no-underline text-white hover:text-black font-bold text-lg md:text-sm cursor-pointer">
                {{ parent.item.name }}</NuxtLink>
            </li>
            <li v-else>
              <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between block px-4 py-3 no-underline text-white hover:text-black font-bold text-lg md:text-sm cursor-pointer">{{ parent.item.name }} 
                <svg class="w-4 h-4 ms-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div id="dropdownNavbar" class="z-10 hidden font-normal bg-blue-700 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li v-for="category in parent.children" :key="category.id">
                      <NuxtLink
                      :to="'/blog/categorie/' + category.slug"
                  class="block md:inline-block pl-3 my-2 no-underline text-white hover:text-grey-darker font-bold text-lg md:text-sm cursor-pointer hover:text-black">
                  {{ category.name }}</NuxtLink>
                    </li>
                  </ul>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
function groupCategoriesByParent(categories) {
    const groupedCategories = {};

    // Initialiser l'objet avec les parents
    categories.forEach(category => {
        if (category.parent === 0) {
            groupedCategories[category.id] = {
                item: category,
                children: []
            };
        }
    });

    // Ajouter les catégories enfants à leurs parents
    categories.forEach(category => {
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
const { data: categories }  = await useFetch('https://gary-deshayes.com/wp-json/wp/v2/categories', {
  query: {
    per_page: 100,
    exclude: [1]
  }
});
const parentCategories = groupCategoriesByParent(categories.value)

const { data: pages }  = await useFetch('https://gary-deshayes.com/wp-json/wp/v2/pages');
console.log(pages);
onMounted(() => {
  initFlowbite();
})
</script>

<style>
.nuxt-link-exact-active {
  @apply text-indigo-600;
}
</style>
