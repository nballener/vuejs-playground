window.addEventListener('load', function () {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Let\'s begin!'
    },
    methods: {
      sayHello: function() {
        this.message = new Date().toLocaleString()
      }
    }
  })

  var watchapp = new Vue({
    el: '#watchapp',
    data: {
      invalue: '',
    },
    computed: {
      outvalue: function () {
        return this.invalue + ' ' +  this.invalue
      }
    }
  })

  var apiapp = new Vue({
    el: '#apiapp',
  })


})
