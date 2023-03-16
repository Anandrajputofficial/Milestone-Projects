// Get DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Define an array to hold todo items
let todos = [];

// Add event listener to the form to handle new todo items
todoForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  // Get todo item text and clear input
  const todoText = todoInput.value.trim();
  todoInput.value = '';

  // If todo item is not empty, add it to the array and update the list
  if (todoText) {
    todos.push(todoText);
    updateTodoList();
  }
});

// Function to update the todo list
function updateTodoList() {
  // Clear existing items
  todoList.innerHTML = '';

  // Add new items to the list
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = todo;

    // Create a button to remove the item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      todos.splice(i, 1);
      updateTodoList();
    });

    // Add the button to the list item
    li.appendChild(removeButton);

    // Add the list item to the list
    todoList.appendChild(li);
  }
}
