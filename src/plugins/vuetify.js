import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#273E68',
          secondary: '#b0bec5',
          accent: '#FFCC00',
          error: '#b71c1c',
        },
      },
    },
  })

Vue.use(Vuetify);

export default new Vuetify({
});
