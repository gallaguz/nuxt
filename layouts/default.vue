<template>
   <div>
      <Navbar/>

      <main>
         <div class="container">
            <Nuxt/>
         </div>
      </main>

   </div>
</template>

<script>
import Navbar from "~/components/Navbar";

export default {
   components: {
      Navbar
   },
   mounted() {
      this.$nextTick(() => {
         this.$nuxt.$loading.start()

         setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
   }
}
</script>

<style>

</style>
