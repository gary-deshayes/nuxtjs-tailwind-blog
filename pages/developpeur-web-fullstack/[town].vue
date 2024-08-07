<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900">
      <div class="p-2 flex flex-col">
        <header class="bg-blue-500 p-4 text-white rounded text-center">
          <h1>Développeur Web Freelance à {{ town }}</h1>
          <p class="mt-4">Bienvenue ! Vous recherchez un développeur web freelance à {{ town }} ? Vous êtes au bon endroit.</p>
        </header>

        <section class="mt-8 mb-8">
          <h2 class="text-center font-black mb-4">Services de Développement Web à {{ town }}</h2>
          <p>En tant que développeur web freelance  à {{ town }}, j'offre une gamme complète de services pour
            répondre à tous vos besoins en développement web. Que vous ayez besoin d'un site vitrine, d'une boutique en
            ligne, ou d'une application web sur mesure, je suis là pour vous aider.</p>
        </section>

        <section class="mt-8 mb-8">
          <h3 class="text-center font-black mb-4">Mes Services Incluent :</h3>
          <ul>
            <li><strong>Création de Sites Web sur Mesure</strong> - Sites web responsives et optimisés pour tous les
              appareils.</li>
            <li><strong>Développement E-commerce</strong> - Solutions complètes pour boutiques en ligne avec des
              plateformes telles que WooCommerce, Shopify, etc.</li>
            <li><strong>Applications Web</strong> - Développement d'applications web interactives et sécurisées.</li>
            <li><strong>Maintenance et Support</strong> - Maintenance continue et mise à jour de votre site web pour
              assurer sa performance et sa sécurité.</li>
          </ul>
        </section>

        <section class="mt-8 mb-8">
          <h3 class="text-center font-black mb-4">Pourquoi Choisir un Développeur Web Freelance à {{ town }} ?</h3>
          <ul>
            <li class="bg-lime-500 rounded p-2 mb-4 text-white"><strong>Proximité et Accessibilité</strong> - Basé à {{ town }}, je comprends les besoins locaux et suis
              facilement joignable pour des rencontres et des consultations.</li>
            <li class="bg-lime-500 rounded p-2 mb-4 text-white"><strong>Expertise et Expérience</strong> - Plusieurs années d'expérience dans le développement web avec
              une maîtrise des dernières technologies et tendances.</li>
            <li class="bg-lime-500 rounded p-2 mb-4 text-white"><strong>Approche Personnalisée</strong> - Chaque projet est unique, et j'offre une approche sur mesure
              pour chaque client afin de garantir la satisfaction totale.</li>
            <li class="bg-lime-500 rounded p-2 mb-4 text-white"><strong>Support Dédié</strong> - Disponibilité pour des interventions rapides et un support continu.
            </li>
          </ul>
        </section>

        <section class="mt-8 mb-8">
          <h3 class="text-center font-black mb-4">Témoignages de Clients à {{ town }}</h3>
          <blockquote class="bg-lime-500 rounded p-2 mb-4 text-white">
            "Grâce à Gary, notre site web à {{ town }} est non seulement magnifique, mais aussi très fonctionnel. Je
            recommande vivement ses services." - Frank
          </blockquote>
          <blockquote class="bg-lime-500 rounded p-2 text-white">
            "Très professionnel et réactif. Notre boutique en ligne fonctionne parfaitement grâce à son expertise." -
            Romain
          </blockquote>
        </section>

        <section class="mt-8 mb-8">
          <h3 class="text-center font-black">Contactez-moi</h3>
          <p>Vous avez un projet en tête ? Discutons-en ! Contactez-moi pour une consultation gratuite et découvrons
            ensemble comment je peux aider à réaliser vos objectifs.</p>
          <p  class="text-center">
          <strong>Email</strong> : <a href="mailto:deshayesgary@hotmail.fr">deshayesgary@hotmail.fr</a><br>
          <strong>LinkedIn</strong> : <a href="https://www.linkedin.com/in/gary-deshayes-368279145">Votre Profil
            LinkedIn</a><br>
          <a class="bg-orange-500 pt-4 rounded" href="https://www.malt.fr/profile/garydeshayes">Contactez moi sur Malt.fr</a>
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const town = route.params.town.charAt(0).toUpperCase() + route.params.town.slice(1)

useHead({
  title: `Développeur web sur ${town}`,
  meta: [
    { name: 'description', content: `Trouvez un développeur autour de ${town}` }
  ],
})

</script>