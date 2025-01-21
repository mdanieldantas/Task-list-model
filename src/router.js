
const express = require('express');
const taskLisListController = require('./controllers/taskListController');

const router = express.Router();

//rota principal da aplicação home
router.get("/",(req,res)=>{res.render("index");});
// rota da lista de tarefas
router.get("/app", taskLisListController.index);
// rota para criar uma nova lista de tarefas
router.get("/app/nova-lista", taskLisListController.create);


module.exports = router;