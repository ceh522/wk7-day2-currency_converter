import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      rates:[]
    },
    mounted(){
      this.getRates()
    },
    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(result => result.json())
        .then(data => this.rates = data.rates)
      },
    }
  }
});
});
