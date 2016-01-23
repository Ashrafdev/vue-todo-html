Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
});

var vm = new Vue({
  el: '#app',
  data: {
    todos: [],
  },
  computed: {
  	total: function() {
  		return this.todos.length
  	},
    done: function() {
      return this.todos.filter(function(todo) {
        return todo.done;
      }).length;
    },
    empty: function() {
      return this.todos.length == 0;
    }
  },
  ready: function() {
    todos = localStorage.getItem('todos');

    if(todos.length > 0) {
      todos = JSON.parse(todos);
      this.todos = todos;
    } else {
      localStorage.setItem('todos', JSON.parse(this.todos));
    }
  },
  methods: {
    addNew: function() {
      if(this.newTodo.length > 0) {
        this.todos.push({text: this.newTodo, done: false});
        this.newTodo = '';
        this.sync();
      }
    },
    markAsDone: function(todo) {
      todo.done = true;
      this.sync();
    },
    sync: function() {
      todos_text = JSON.stringify(this.todos);
      localStorage.setItem('todos', todos_text);
    }
  }
});
