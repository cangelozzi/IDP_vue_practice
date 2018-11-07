const vm = new Vue({

  el: '#app',

  data: {
    welcomeMessage: 'Our first Vue App.',
    goodFruits: [
      {name: 'apple', flavour: 'tasty!'},
      {name: 'mango', flavour: 'fantastic!'},
      {name: 'apricot', flavour: 'gnammy!'}
    ]
  },

  methods: {
    logFruits(e) { console.log(e.currentTarget); }
  }

});