const vm = new Vue({

  el: '#app',

  data: {
    welcomeMessage: 'Our first Vue App.',
    goodFruits: [
      {name: 'apple', flavour: 'tasty!'},
      {name: 'mango', flavour: 'fantastic!'},
      {name: 'apricot', flavour: 'gnammy!'}
    ],
    targetURL: 'https://vuejs.org/v2/guide/',
    anchorOff: true,
    hazVue: true,
    anotherMessage: 'This is another message using conditionals.'
  },

  methods: {
    logFruits(e) { console.log(e.currentTarget); },
    hideMsg() { this.anotherMessage = 'Hey, how re you!';}
  }

});