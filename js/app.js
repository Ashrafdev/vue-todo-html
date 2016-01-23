Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
});

var todos = [
    { text: 'Learn JavaScript', done: false },
    { text: 'Learn Vue.js', done: false },
    { text: 'Build Something Awesome', done: false }
];

var vm = new Vue({
  el: '#app',
  data: {
    todos: todos
  },
  computed: {
  	total: function() {
  		return this.todos.length
  	}
  },
  ready: function() {
  },
  methods: {
  }
});
