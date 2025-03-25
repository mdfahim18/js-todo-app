const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
    alert('You have to write something');
  } else {
    let li = document.createElement('li');
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = '';
  saveTask();
}

listContainer.addEventListener('click', function (e) {
  console.log(e.target.tagName);

  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveTask();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveTask();
  }
});

function saveTask() {
  localStorage.setItem('todo-data', listContainer.innerHTML);
}

function getTask() {
  listContainer.innerHTML = localStorage.getItem('todo-data');
}

getTask();
