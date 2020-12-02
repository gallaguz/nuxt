<template>
   <section>
      <h1>{{ user.name }}</h1>
      <p>
         Email: {{ user.email }}
      </p>
      <p>
         Phone: {{ user.phone }}
      </p>
      <p>
         Website: {{ user.website }}
      </p>
   </section>
</template>

<script>
export default {
   name: "id",
   async asyncData({ $axios, params }) {
      const user = await $axios.$get('https://jsonplaceholder.typicode.com/users/' + params.id);
      return {
         user
      };
   },
   validate({params}) {
      return /^\d+$/.test(params.id);
   }
}
</script>

<style scoped>

</style>
