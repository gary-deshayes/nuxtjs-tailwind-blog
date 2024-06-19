<template>
  <!-- Section 1 -->
  <section class="w-fullpb-12 antialiased bg-white">
    <div class="max-w-8xl">
      <div class="flex justify-center hidden md:flex">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="assets/cropped-gary-deshayes-logo.png" class="h-12" alt="Flowbite Logo" />
        </a>
      </div>
      <TheHeader />
      <NuxtLoadingIndicator />
      <NuxtPage />
      <TheFooter />
    </div>
  </section>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  component: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style></style>
