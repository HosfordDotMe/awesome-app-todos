const TodoApp = {
  rootElement: '#app',
  todos: [],
  start: function() {
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function() {
    this.root = document.querySelector(this.rootElement);
    //this.addButton = this.root.querySelector('.add-button');
    this.createForm = this.root.querySelector('.create-form');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
  },
  bindEvents: function() {
    //this.addButton.addEventListener('click', () => this.addTodo());
    this.createForm.addEventListener('submit', (event) => this.addTodo(event));
  },
  addTodo: function(event) {
    event.preventDefault();
    const taskValue = this.taskInput.value;
    if (!taskValue){
      return;
    }
    const todo = {
      task: taskValue,
      isComplete: false
    };
    this.todos.push(todo);
    this.render();
    this.taskInput.value = '';
  },
  render: function() {
    const lis = this.todos
                    .map(todo => `<li>${todo.task}</li>`)
                    .join('');
    this.todoList.innerHTML = lis;
  }
};
TodoApp.start();
