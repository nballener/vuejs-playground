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
      ispawned: '',
    },
    methods: {
      getPawnedStatus: function () {
        this.ispawned = 'Fake true'
        return
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
        })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
        })
      }
    }
  })


})
