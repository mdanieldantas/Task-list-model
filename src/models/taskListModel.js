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
  
    createTaskList: (title) => {
      const newList = {
        id: Math.floor(Math.random() * 999999999).toString(),
        title: title,
      };
      return newList;
    },
    saveList: (taskList) => {
      if (taskList.title === "") throw new Error("O titulo nao pode ser vazio");
      taskLists.push(taskList);
    },
  };