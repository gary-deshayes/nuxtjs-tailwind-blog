<template>
  <div class="mb-6">
    <h2
      class="mt-6 text-4xl text-gray-700 font-bold capitalize dark:text-blue-200"
    >
      {{ intro.title }}
    </h2>
    <div>
      <p class="py-2">En tant que développeur je rencontre souvent des problèmes, plutôt que de me réjouir et de passer à autre chose je vous mets à disposition les solutions à travers des tutoriels de développement web qui je l’espère vous évitera de perdre autant de temps que moi.
      </p>
      <p class="py-2">Développeur web fullstack dans l'Oise 60
      </p>
      <p class="py-2">Je m’appelle Gary DESHAYES et je suis développeur web dans l’Oise depuis maintenant plus de 6 ans.
      </p>
      <p class="py-2">Je suis développeur web Fullstack et je réalise mes sites web via Vue.js et Symfony/Node.js principalement mais j’apprends souvent de nouvelles technologies pour ne pas perdre la main sur toutes ces évolutions.
      </p>
      <p class="py-2">Je suis également disponible pour vos projets en tant que Développeur web Fullstack freelance sur Malt, contactez moi via le bouton ci-dessous ! </p>
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



