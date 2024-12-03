const taskList = document.getElementById('task-list')
const taskInput = document.getElementById('task')
const addTaskButton = document.getElementById('add-task')

const tasks = []

function addTask (task) {
  tasks.push({ text: task, completed: false })
  renderTaskList()
}

function renderTaskList () {
  taskList.innerHTML = ''
  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li')
    taskElement.textContent = task.text
    if (task.completed) {
      taskElement.classList.add('completed')
    }
    taskElement.addEventListener('click', () => {
      task.completed = !task.completed
      renderTaskList()
    })
    taskList.appendChild(taskElement)
  })
}

addTaskButton.addEventListener('click', () => {
  const task = taskInput.value.trim()
  if (task) {
    addTask(task)
    taskInput.value = ''
  }
})

// Render the initial task list
renderTaskList()
