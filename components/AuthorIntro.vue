<template>
  <div class="mb-6">
    <h2
      class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200"
    >
      {{ intro.title }}
    </h2>
    <div>
      <p class="py-2">
        En tant que développeur je rencontre souvent des problèmes, plutôt que de me réjouir et de passer à autre chose je vous mets à disposition les solutions à travers des <b class="text-blue-500">tutoriels de développement web</b> qui je l’espère vous évitera de perdre autant de temps que moi.
      </p>
      <p class="py-2">
        Je m’appelle <b class="text-blue-500">Gary DESHAYES</b> et je suis <b class="text-blue-500">développeur web dans l’Oise</b> depuis maintenant plus de 6 ans.
      </p>
      <p class="py-2">
        Je suis <b class="text-blue-500">développeur web Full Stack</b> et je réalise mes sites web via <b class="text-blue-500">Vue.js</b> et <b class="text-blue-500">Symfony/Node.js</b> principalement mais j’apprends souvent de nouvelles technologies pour ne pas perdre la main sur toutes ces évolutions.
      </p>
      <p class="py-2">
        Je suis également disponible pour vos projets en tant que <a href="https://www.malt.fr/profile/garydeshayes"><b class="text-blue-500 underline">Développeur web Fullstack freelance sur Malt</b></a>, contactez moi via le bouton ci-dessous ! </p>
    </div>
  </div>
</template>

<script setup>
const {data: intro} = await useAsyncData('intro', () => queryContent("/author")
    .where({
      page: "intro"
    })
    .findOne()
);
</script>



