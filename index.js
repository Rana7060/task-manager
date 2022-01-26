'use strict';

// const user1 = {
//   title: 'delectus aut autem',
//   details: 'lorem epsum',
//   task: 'todo',
// };

// const user2 = {
//   title: 'quis ut nam facilis et officia qui',
//   details: 'loremm opsummmmmm',
//   task: 'todo',
// };

// const user3 = {
//   title: 'fugiat veniam minus',
//   details: 'lorem opsummm',
//   task: 'todo',
// };

const usersTodo = [];
const usersPending = [];
const usersOpen = [];
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// DOM selection
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const add = document.querySelector('.plus');
const close = document.querySelector('.close-modal');
const openTask = document.querySelector('.open-task');
const pendingTask = document.querySelector('.pending-task');
const todoTask = document.querySelector('.todo-task');

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const input = document.querySelector('.inp');
const details = document.querySelector('textarea');
const btnTask = document.querySelector('.btn-add-task');
const selectTask = document.querySelector('select');

////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleting = function () {
  const deleteTask = document.querySelectorAll('.delete-task');
  deleteTask.forEach(del => {
    del.addEventListener('click', function (e) {
      e.target.closest('.task').remove();
    });
  });
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////
const displayNumber = document.querySelectorAll('.number');
const displayNumberTask = function () {
  displayNumber.forEach(function (num) {
    if (num.closest('.todo')) num.textContent = usersTodo.length;
    if (num.closest('.pending')) num.textContent = usersPending.length;
    if (num.closest('.open')) num.textContent = usersOpen.length;
  });
};

// const displayTodo = function (task) {
//   todoTask.innerHTML = '';
//   task.forEach(function (mov) {
//     const html = `<div class="task">
//     <div class="task-list-title">
//       <h4>${mov.title}</h4>
//       <span class="delete-task">✖</span>
//     </div>
//     <p>${mov.details}</p>
//   </div>`;
//     todoTask.insertAdjacentHTML('afterbegin', html);
//     deleting();
//   });
// };
// displayTodo(usersTodo);
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// display pending
const displayTask = function (taskTarget, task) {
  taskTarget.innerHTML = '';
  task.forEach(function (mov) {
    const html = `<div class="task">
    <div class="task-list-title">
      <h4>${mov.title}</h4>
      <span class="delete-task">✖</span>
    </div>
    <p>${mov.details}</p>
  </div>`;
    taskTarget.insertAdjacentHTML('afterbegin', html);
    deleting();
  });
};
const init = function () {
  displayNumberTask();
  displayTask(pendingTask, usersPending);
  displayTask(openTask, usersOpen);
  displayTask(todoTask, usersTodo);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////
// display pending
// const displayPending = function (task) {
//   pendingTask.innerHTML = '';
//   task.forEach(function (mov) {
//     const html = `<div class="task">
//     <div class="task-list-title">
//       <h4>${mov.title}</h4>
//       <span class="delete-task">✖</span>
//     </div>
//     <p>${mov.details}</p>
//   </div>`;
//     pendingTask.insertAdjacentHTML('afterbegin', html);
//     deleting();
//   });
// };
// displayPending(usersPending);
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// //open task
// const displayOpen = function (task) {
//   openTask.innerHTML = '';
//   task.forEach(function (mov) {
//     const html = `<div class="task">
//     <div class="task-list-title">
//       <h4>${mov.title}</h4>
//       <span class="delete-task">✖</span>
//     </div>
//     <p>${mov.details}</p>
//   </div>`;
//     openTask.insertAdjacentHTML('afterbegin', html);
//     deleting();
//   });
// };
// displayOpen(usersOpen);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Press button to add a task
// add.forEach(plus => {
add.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
// });
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
btnTask.addEventListener('click', function (e) {
  e.preventDefault();
  if (input.value === '' && details.value === '' && selectTask !== '') return;
  const object = {
    title: input.value,
    details: details.value,
    task: selectTask.value,
  };

  if (selectTask.value === 'todo') {
    usersTodo.push(object);
    displayTask(todoTask, usersTodo);
    displayNumberTask();
  } else if (selectTask.value === 'pending') {
    usersPending.push(object);
    displayTask(pendingTask, usersPending);
    displayNumberTask();
  } else {
    usersOpen.push(object);
    displayTask(openTask, usersOpen);
    displayNumberTask();
  }

  closeModal(e);
  input.value = details.value = '';
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
close.addEventListener('click', closeModal);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// const deleteTask = document.querySelectorAll('.delete-task');

// deleteTask.forEach(del => {
//   del.addEventListener('click', function (e) {
//     e.target.closest('.task').remove();
//   });
// });
//////////////////////////////////////////////////////////////////////////////////////////////////////////
init();
