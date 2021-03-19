<template>
  <div>
    <v-app-bar app color="#273E68" flat height="125px" elevate-on-scroll :class="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? '' : 'line-bottom'">
      <v-container class="fill-height">
        <v-row class="fill-height"
          ><v-col xs="12" md="2" align-self="center">
              <v-img
              max-height="60px"
              max-width="160px"
              contain
              :src="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs ? require('@/assets/logo.svg') : require('@/assets/logovert.svg')"
          /></v-col>
          <v-col xs="12" lg="10" align-self="center">
            <v-tabs
              dark
              background-color="#273e68"
              right
              :show-arrows="true"
            >
              <v-tab to="/">
                <b>Home</b>
              </v-tab>
              <v-tab to="/sobre">
                <b>Quem Somos</b>
              </v-tab>
              <v-tab to="/portfolio">
                <b>Portfólio</b>
              </v-tab>
              <v-tab to="/download">
                <b>Download</b>
              </v-tab>
              <v-tab to="/contato">
                <b>Contato</b>
              </v-tab>
            </v-tabs></v-col
          ></v-row
        >
      </v-container>
      
    </v-app-bar>
    
    <v-main>
        <slot />
    </v-main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.line-bottom{
    border-bottom: 1px solid #436094!important;
}
</style>
