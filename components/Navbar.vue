<template>

      <nav class="navbar justify-content-start">
         <nuxt-link exact active-class="active" class="nav-link" to="/">
            <a class="navbar-brand" href="#">LOGO</a>
         </nuxt-link>

         <ul class="nav nav-tabs">

            <li class="nav-item">
               <nuxt-link exact active-class="active" class="nav-link" to="/">
                  Home
               </nuxt-link>
            </li>

            <li class="nav-item">
               <nuxt-link active-class="active" class="nav-link" to="/about">
                  About
               </nuxt-link>
            </li>

            <li class="nav-item">
               <nuxt-link active-class="active" class="nav-link" to="/users">
                  Users
               </nuxt-link>
            </li>

            <li class="nav-item">
               <nuxt-link active-class="active" class="nav-link" to="/profile">
                  Profile
               </nuxt-link>
            </li>

            <li class="nav-item" v-if="!hasToken">
               <nuxt-link active-class="active" class="nav-link" to="/login">
                  Login
               </nuxt-link>
            </li>

            <li class="nav-item" v-if="hasToken">
               <a class="nav-link" href="#" @click.prevent="logOut">
                  Logout
               </a>
            </li>
         </ul>

      </nav>

</template>

<script>
export default {
   name: "Navbar",
   computed: {
      hasToken() {
         return this.$store.getters.hasToken;
      }
   },
   methods: {
      logOut() {
         this.$store.dispatch('logout');
         this.$router.push('/login');
      }
   }
}
</script>

<style scoped>

</style>
