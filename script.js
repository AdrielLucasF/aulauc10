document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('task-list');
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
  
   
    function addTask(text) {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
        <button class="delete-btn">Excluir</button>
      `;
      taskList.appendChild(taskItem);
    }
  
   
    taskList.addEventListener('change', function(event) {
      if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const taskItem = event.target.closest('li');
        taskItem.classList.toggle('completed');
      }
    });
  
    
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    });
  

    taskList.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        const taskItem = event.target.closest('li');
        taskList.removeChild(taskItem);
      }
    });
  });
  