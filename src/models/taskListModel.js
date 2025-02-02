const { compile } = require("ejs");

let taskLists = [
  {
    id: "1",
    title: "Estudos",
    tasks: [{ id: "1", title: "Estudar Node", completed: false }],
  },
  { id: "2", title: "Tarefas de casa", tasks: [] },
  { id: "3", title: "Coisas do trabalho", tasks: [] },
];

module.exports = {
  getAllTaskLists: (req, res) => {
    return taskLists;
  },

  getTaskListById: (id) => {
    return taskLists.find((list) => list.id === id);
  },

  createTaskList: (title) => {
    const newList = {
      id: Math.floor(Math.random() * 999999999).toString(),
      title: title,
      tasks: [],
    };
    return newList;
  },
  saveList: (taskList) => {
    if (taskList.title === "") throw new Error("O titulo nao pode ser vazio");
    taskLists.push(taskList);
  },
  deleteList: (listId) => {
    const listIndex = taskLists.findIndex(list => list.id === listId)
    taskLists.splice(listIndex, 1)
  },


  addTask: (listId, taskTitle) => {
    const newTask = {
      id: Math.floor(Math.random() * 999999999).toString(),
      title: taskTitle,
      completed: false,
    };
    taskLists.find((list) => list.id === listId).tasks.push(newTask);
  },
  completeTask: (listId, taskId) => {
    const taskList = taskLists.find((list) => list.id === listId);
    const task = taskList.tasks.find((task) => task.id === taskId);
    task.completed = true;
  },
  undoTask: (listId, taskId) => {
    const taskList = taskLists.find((list) => list.id === listId);
    const task = taskList.tasks.find((task) => task.id === taskId);
    task.completed = false;
  },
};
