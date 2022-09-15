axios.defaults.baseURL = "http://localhost:3000";

// GET lista de tarefas
function getTasks(callback) {
  axios
    .get("/tasks")
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log("error:", error);
    });
}

// GET de uma task específica
function getTask(taskId, callback) {
  axios
    .get(`/tasks/${taskId}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log("error:", error);
    });
}

// POST para criar uma nova tarefa
function createTask(title, project, date, callback) {
  console.log(`${title}, ${project}, ${date}`);
  const taskData = {
    title: title,
    project: project,
    dueTo: date,
  };
  axios
    .post(`/tasks`, taskData)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log("erro:", error);
    });
}

// PUT para atutalizar todos dados da tarefa
function updateTask(taskId, title, project, date, callback) {
  const taskData = {
    title: title,
    project: project,
    dueTo: date,
  };
  axios
    .put(`/tasks/${taskId}`, taskData)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log("erro:", error);
    });
}

// PATCH para atualizar um dado da tarefa
function updateTaskDate(taskId, date) {
  const taskData = {
    dueTo: date,
  };
  axios
    .patch(`/tasks/${taskId}`, taskData)
    .then((response) => {
      console.log("Tarefa salva", response.data);
    })
    .catch((error) => {
      console.log("erro:", error);
    });
}

// DELETE para apagar uma tarefa
function deleteTask(taskId, callback) {
  axios
    .delete(`/tasks/${taskId}`)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      console.log("erro:", error);
    });
}
