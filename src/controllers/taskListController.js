const taskListModel = require("../models/taskListModel");

module.exports = {
// GET /app -------que vai ser a rota principal da nossa aplicação
index: (req, res) => {
    const taskLists = taskListModel.getAllTaskLists();
    res.render("app", {taskLists});
},


// GET /app/nova-lista   -----que vai ser a rota para exibir o formulário de criação de uma nova lista
create: (req, res) => {
    res.render("create.ejs");
},

// POST /app/nova-lista  -----que vai salvar a nova lista no banco de dados
save: (req, res) => {
    // pegar dados do formulario
    const {title} = req.body;
    const newList = taskListModel.createTaskList(title);
    taskListModel.saveList(newList);
    res.redirect("/app");
    
},

// GET /app/:id --------que vai ser a rota para selecionar uma lista especifica
show: (req, res) => {
    const {id} = req.params;
    if(!id) throw new Error("Lista de tarefas não encontrada");
    const taskList = taskListModel.getTaskListById(id);
    res.render("show", {taskList});
 
},

// POST /app/:id/excluir -----que vai excluir uma lista especifica


// POST /app/:id/nova-tarefa -----que vai adicionar uma nova tarefa a uma lista especifica
addTask: (req, res) => {
    const {id} = req.params;
    const {title} = req.body;
    
    taskListModel.addTask(id, title);

    res.redirect(`/app/${id}`);

},

// POST /app/:listId/completar/:taskId -----que vai marcar uma tarefa como completa

};

/*


```javascript
module.exports = {
    / GET /app -------que vai ser a rota principal da nossa aplicação

    index: (req, res) => {
        const taskLists = taskListModel.getAllTaskLists();
        res.render("app", {taskLists});
    }
}
```

### Análise do Código

1. **Exportação do Módulo**:
   ```javascript
   module.exports = {
   ```
   - **`module.exports`**: Permite que o objeto ou função seja exportado de um arquivo para ser utilizado em outro arquivo.

2. **Comentário sobre a Rota**:
   ```javascript
   // GET /app -------que vai ser a rota principal da nossa aplicação
   ```
   - **Comentário**: Indica que a rota principal da aplicação será acessada via `GET /app`.

3. **Definição da Função `index`**:
   ```javascript
   index: (req, res) => {
   ```
   - **`index`**: Nome da função.
   - **`(req, res)`**: Parâmetros da função, onde `req` representa o objeto de requisição e `res` representa o objeto de resposta.

4. **Obtendo Listas de Tarefas**:
   ```javascript
   const taskLists = taskListModel.getAllTaskLists();
   ```
   - **`const taskLists`**: Declaração de uma constante chamada `taskLists`.
   - **`taskListModel.getAllTaskLists()`**: Chamada de um método `getAllTaskLists` no objeto `taskListModel`, que provavelmente retorna todas as listas de tarefas.

5. **Renderizando a Resposta**:
   ```javascript
   res.render("app", {taskLists});
   ```
   - **`res.render`**: Método usado para renderizar uma visualização.
   - **`"app"`**: Nome da visualização a ser renderizada.
   - **`{taskLists}`**: Objeto passado para a visualização, que contém as listas de tarefas necessárias para renderizar a página.

### Resumo
Este trecho de código define um módulo que exporta uma função `index`. Quando a rota principal da aplicação (`GET /app`) é acessada, a função `index` é chamada. Ela obtém todas as listas de tarefas usando o método `getAllTaskLists` do modelo `taskListModel` e renderiza uma visualização chamada `"app"`, passando as listas de tarefas para a visualização.


*/