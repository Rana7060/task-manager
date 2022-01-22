'use strict';

const tasksOpen = {
  task: 'do the laundry',
  details: 'wake up and do them in the morning',
};
const tasksTodo = {
  task: 'jdjfk',
  details: 'ddjjskkdckkkd',
};
const tasksPending = {
  task: 'jdjfk',
  details: 'ddjjskkdckkkd',
};

const tasks = [tasksOpen, tasksTodo, tasksPending];

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const add = document.querySelectorAll('.plus');
const input = document.querySelector('.inp');
const close = document.querySelector('.close-modal');
const openTask = document.querySelector('.open-task');
const deleteTask = document.querySelector('.delete-task');

add.forEach(plus => {
  plus.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    if (input.value === '') return;
  });
});
//BUG
close.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
// input.value = 'hello';
const info = input.value;

/////////////////////////////////////////////////////////////////////////////////////////////////
const displayTasks = function (task) {
  openTask.innerHTML = '';
  task.forEach(function (mov) {
    const html = `<div class="task">
    <div class="task-list-title">
      <h4>${mov.task}</h4>
      <span class="delete-task">✖</span>
    </div>
    <p>${mov.details}</p>
  </div>`;

    openTask.insertAdjacentHTML('afterbegin', html);
  });
};
displayTasks(tasks);
// console.log(deleteTask);
// deleteTask.forEach(function (task) {
//   task.addEventListener('click', function (e) {
//     console.log('u are here', e);
//   });
// });
console.log(deleteTask);
deleteTask.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e);
});
