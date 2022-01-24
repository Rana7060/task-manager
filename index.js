'use strict';

const tasksOpen = {
  rana: {
    task: 'do the laundry',
    details: 'wake up and do them in the morning',
  },
  user: {
    task: '',
    details: '',
  },
};

const tasksTodo = {
  rana: {
    task: 'Course',
    details: 'wake up and do them in the morning',
  },
  user: {
    task: '',
    details: '',
  },
};

const tasksPending = {
  rana: {
    task: 'Read',
    details: 'wake up and do them in the morning',
  },
  user: {
    task: '',
    details: '',
  },
};

////////////////////////////////////////////////////////////////////////////////////////////////////////

const user1 = {
  id: 'todo',
  title: 'delectus aut autem',
  details: 'lorem epsum',
};
const user2 = {
  id: 'pending',
  title: 'quis ut nam facilis et officia qui',
  details: 'loremm opsummmmmm',
};
const user3 = {
  id: 'open',
  title: 'fugiat veniam minus',
  details: 'lorem opsummm',
};

////////////////////////////////////////////////////////////////////////////////////////////////////////

const users = [user1, user2, user3];
// tasksPending.push({ task: 'new task' });
// console.log(tasksPending);
const tasks = [tasksOpen, tasksTodo, tasksPending];

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const add = document.querySelectorAll('.plus');
const close = document.querySelector('.close-modal');
const openTask = document.querySelector('.open-task');

/////////////////////////////////////////////////////////////////////////////////////////////////////////

const input = document.querySelector('.inp');
const details = document.querySelector('textarea');
const btnTask = document.querySelector('.btn-add-task');

////////////////////////////////////////////////////////////////////////////////////////////////////////

btnTask.addEventListener('click', function (e) {
  e.preventDefault();
  if (input.value !== '' && details.value !== '') {
    const newInput = input.value;
    const newDetails = details.value;
    tasksOpen.user.task = newInput;
    tasksOpen.user.details = newDetails;
    console.log(tasksOpen);
  } else return;
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

add.forEach(plus => {
  plus.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    if (input.value === '') return;
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

close.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

const displayTasks = function (task) {
  openTask.innerHTML = '';
  task.forEach(function (mov) {
    const html = `<div class="task">
    <div class="task-list-title">
      <h4>${mov.rana.task}</h4>
      <span class="delete-task">✖</span>
    </div>
    <p>${mov.rana.details}</p>
  </div>`;

    openTask.insertAdjacentHTML('afterbegin', html);
  });
};

displayTasks(tasks);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteTask = document.querySelectorAll('.delete-task');
deleteTask.forEach(del => {
  del.addEventListener('click', function (e) {
    e.preventDefault();
    e.target.closest('.task').remove();
  });
});

console.log(tasksOpen);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
