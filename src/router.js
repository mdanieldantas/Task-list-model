
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










module.exports = router;