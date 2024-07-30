<template>
    <div>
      <h1>Développeur web fullstack sur {{ ville }}</h1>
      <!-- Ton contenu ici -->
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ params }) {
      const ville = params.ville
      return { ville }
    }
  }
  </script>
  