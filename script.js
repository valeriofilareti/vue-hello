const {createApp} = Vue;

createApp({
  data(){
    return{
      nome: 'pinco',
      cognome: 'pallo',
      messaggio: '',
      messaggioVText: 'messaggio con v-text',
      messaggioVHtml: 'messaggio con <strong>v-html</strong>',
      colore: 'red'
    }
  }
}).mount('#app')