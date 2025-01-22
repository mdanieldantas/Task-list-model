
const express = require('express');
const taskLisListController = require('./controllers/taskListController');

const router = express.Router();

//rota principal da aplicação home
router.get("/",(req,res)=>{res.render("index");});

// rota da lista de tarefas
router.get("/app", taskLisListController.index);
// rota para criar uma nova lista de tarefas
router.get("/app/nova-lista", taskLisListController.create);
// rota para salvar uma nova lista de tarefas
router.post("/app/nova-lista", taskLisListController.save);

// rota para selecionar uma lista de tarefas pelo id
router.get("/app/:id", taskLisListController.show);






module.exports = router;