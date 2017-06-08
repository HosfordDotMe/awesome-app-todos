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
    this.addButton = this.root.querySelector('.add-button');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
  },
  addTodo: function() {
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
  bindEvents: function() {
    this.addButton.addEventListener('click', () => this.addTodo());
  },
  render: function() {
    const lis = this.todos
                    .map(todo => `<li>${todo.task}</li>`)
                    .join('');
    this.todoList.innerHTML = lis;
  }
};
TodoApp.start();
