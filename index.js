'use strict';

// const tasksOpen = {
//   rana: {
//     task: 'do the laundry',
//     details: 'wake up and do them in the morning',
//   },
//   user: {
//     task: '',
//     details: '',
//   },
// };

// const tasksTodo = {
//   rana: {
//     task: 'Course',
//     details: 'wake up and do them in the morning',
//   },
//   user: {
//     task: '',
//     details: '',
//   },
// };

// const tasksPending = {
//   rana: {
//     task: 'Read',
//     details: 'wake up and do them in the morning',
//   },
//   user: {
//     task: '',
//     details: '',
//   },
// };

////////////////////////////////////////////////////////////////////////////////////////////////////////

const user1 = {
  title: 'delectus aut autem',
  details: 'lorem epsum',
};

const user2 = {
  title: 'quis ut nam facilis et officia qui',
  details: 'loremm opsummmmmm',
};

const user3 = {
  title: 'fugiat veniam minus',
  details: 'lorem opsummm',
};

////////////////////////////////////////////////////////////////////////////////////////////////////////

const users = [user1, user2, user3];

// const tasks = [tasksOpen, tasksTodo, tasksPending];

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const add = document.querySelectorAll('.plus');
const close = document.querySelector('.close-modal');
const openTask = document.querySelector('.open-task');
const todoTask = document.querySelector('.todo-task');

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const input = document.querySelector('.inp');
const details = document.querySelector('textarea');
const btnTask = document.querySelector('.btn-add-task');

////////////////////////////////////////////////////////////////////////////////////////////////////////

// btnTask.addEventListener('click', function (e) {
//   e.preventDefault();
//   if (input.value !== '' && details.value !== '') {
//     const newInput = input.value;
//     const newDetails = details.value;
//     tasksOpen.user.task = newInput;
//     tasksOpen.user.details = newDetails;
//     console.log(tasksOpen);
//   } else return;
// });
////////////////////////////////////////////////////////////////////////////////////////////////////////

const displayTasks = function (task) {
  todoTask.innerHTML = '';
  task.forEach(function (mov) {
    const html = `<div class="task">
    <div class="task-list-title">
      <h4>${mov.title}</h4>
      <span class="delete-task">✖</span>
    </div>
    <p>${mov.details}</p>
  </div>`;

    todoTask.insertAdjacentHTML('afterbegin', html);
  });
};
displayTasks(users);

///////////////////////////////////////////////////////////////
add.forEach(plus => {
  plus.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
btnTask.addEventListener('click', function (e) {
  e.preventDefault();
  if (input.value === '' && details.value === '') return;
  const object = {
    title: input.value,
    details: details.value,
  };
  users.push(object);
  displayTasks(users);
  closeModal(e);

  input.value = details.value = '';
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////
close.addEventListener('click', closeModal);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteTask = document.querySelectorAll('.delete-task');

deleteTask.forEach(del => {
  del.addEventListener('click', function (e) {
    e.target.closest('.task').remove();
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////
