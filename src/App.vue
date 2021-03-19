<template>
  <v-app>
    <layout-main>
      <router-view />
    </layout-main>
  </v-app>
</template>

<script>
import layoutMain from "@/components/layout/main.vue"

export default {
  name: 'app',
  components: {
    layoutMain
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;300;500;800&display=swap');

$font-family:'Ubuntu';

  .v-application {
   font-family: 'Montserrat Alternates', sans-serif !important;
    .title { // To pin point specific classes of some components
       font-family: 'Montserrat Alternates', sans-serif !important;
    }
 }
</style>