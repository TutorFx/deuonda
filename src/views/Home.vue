<template>
  <div class="home pt-10">
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
                  <v-col><h2 v-resize-text="{ratio:1.2}" style="font-weight: 300;">@deuondadigital</h2></v-col>
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
      </v-container>
      <footer class="">
        <div>
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
          </svg>
          <div class="primary--text text-center footer-text"><small>© DEU ONDA DIGITAL. ALL RIGHTS RESERVED.</small></div>
        </div>
      </footer>
  </div>
</template>
<style lang="scss">
  .home{
    background-color: #273e68;
    min-height: calc(100vh - 125px);
  }
  .arte{
    display: flex;
    justify-content: left;
    align-items: center;
  }
  // waves-
  .parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
  .waves {
    height:200px;
    min-height:200px;
    width: 100%;
    transform: translateY(10px);
  }
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
    width: 100%;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}
.footer-text{
  background-color: white;
}
</style>
<script>
// @ is an alias to /src
export default {
  mounted() {
    
  },
}
</script>
