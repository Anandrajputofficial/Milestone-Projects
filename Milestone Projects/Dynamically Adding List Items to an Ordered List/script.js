const list = document.getElementById('list');
const btn = document.getElementById('addBtn');
const msg = document.getElementById('msg');

const items = ['JavaScript Arrays', 'JavaScript Loops', 'JavaScript DOM Manipulation', 'JavaScript AJAX'];

let index = 0;

btn.addEventListener('click', function() {
  if (index < items.length) {
    const li = document.createElement('li');
    li.textContent = items[index];
    list.appendChild(li);
    index++;
  }
  if (index === items.length) {
    msg.textContent = 'All items have been added';
  }
});
