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
    data: {
      email: '',
      message: '',
    },
    methods: {
      getPawnedStatus: function () {
        var vm = this
        axios.get('https://haveibeenpwned.com/api/v2/breachedaccount/' + vm.email)
        .then(function (response) {
          vm.message = 'Sorry, pwnd!'
        })
        .catch(function (error) {
          let status_code = error.response.status
          if (status_code == 404) {
            vm.message = 'All clear!'
          }
          else {
            vm.message = 'Error getting information!'
          }
        })
      }
    }
  })


})
