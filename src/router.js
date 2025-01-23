
const express = require('express');
const taskLisListController = require('./controllers/taskListController');

const router = express.Router();

//rota principal da aplicação home
router.get("/",(req,res)=>{res.render("index");});


router.get("/app", taskLisListController.index);
router.get("/app/nova-lista", taskLisListController.create);
router.post("/app/nova-lista", taskLisListController.save);

router.get("/app/:id", taskLisListController.show);
router.post("/app/:id/nova-tarefa", taskLisListController.addTask);
router.post("/app/:id/excluir", taskLisListController.delete);

router.post("/app/:listId/completar/:taskId", taskLisListController.completeTask);
router.post("/app/:listId/desfazer/:taskId", taskLisListController.undoTask);









module.exports = router;