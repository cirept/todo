import express from 'express';

import todoController from '../todosControllers/todos.js';

const router = express.Router();

//
// GET
//
router.get('/api/v1/todos', todoController.getAllTodos);
router.get('/api/v1/todos/:id', todoController.getTodo);

//
// POST
//
router.post('/api/v1/todos', todoController.createTodo);

//
// DELETE
//
router.delete('/api/v1/todos/:id', todoController.deleteTodo);

//
// UPDATE
//
router.put('/api/v1/todos/:id', todoController.updateTodo);

export default router;