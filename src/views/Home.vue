<template>
  <div class="home py-10">
      <v-container>
        <v-row class="pa-0 mb-10" align-itens="center">
          <v-col class="white--text arte" cols="12" xs="12" sm="12" md="6" xl="8">
            <v-img max-width="100%" contain left class="pr-10" src="@/assets/&text.svg" />
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="6" xl="4" class="">
            <h2 class="white--text text-center mb-5" v-resize-text="{ratio:1.27}">FAÇA PARTE DA ONDA!</h2>
            <v-form class="mb-10">
              <v-text-field
                dark
                label="NOME:"
                outlined
                border-color="#fff"
              ></v-text-field>
              <v-text-field
                dark
                label="E-MAIL:"
                outlined
                border-color="#fff"
              ></v-text-field>
              <v-text-field
                dark
                label="TELEFONE:"
                outlined
                border-color="#fff"
              ></v-text-field>
              <v-btn block x-large depressed class="primary--text" v-ripple="{ class: `white--text` }" color="#FFCC00"><B>ENVIAR</B></v-btn>
            </v-form>
            <v-row class="white--text">
              <v-col>
                <div class="mb-3"><em>Siga o nosso instagram:</em></div>
                <v-row align="center">
                  <v-col cols="2"><v-img width="40px" height="40px" contain src="@/assets/logotipo-do-instagram.svg" /></v-col>
                  <v-col><h2 v-resize-text="{ratio:0.8}" style="font-weight: 300;">@deuonda</h2></v-col>
                </v-row>
              </v-col>
              <v-col>
                <div class="mb-3"><em>Siga o nosso WhatsApp:</em></div>
                <v-row align="center">
                  <v-col cols="2"><v-img width="40px" height="40px" contain src="@/assets/logotipo-do-whatsapp.svg" /></v-col>
                  <v-col><h2 v-resize-text="{ratio:1}" style="font-weight: 300;">+55 62 993 519 901</h2></v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <div class="white--text text-center"><small>© DEU ONDA DIGITAL. ALL RIGHTS RESERVED.</small></div>
      </v-container>
  </div>
</template>
<style lang="scss">
  .teste{

  }
  .home{
    background-color: #273e68;
    min-height: calc(100vh - 125px);
  }
  .onda-cta{

  }
  .arte{
    display: flex;
    justify-content: left;
    align-items: center;
  }
</style>
<script>
// @ is an alias to /src
export default {
  mounted() {
    
  },
}
</script>
