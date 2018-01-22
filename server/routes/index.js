const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.status(200).send({
      message: 'Welcome to Todos API'
    });
  })

  app.get('/api/todos', todosController.listTodo);

  app.post('/api/todos', todosController.create);

  app.post('/api/todos/:todoId/items', todoItemsController.create);

  app.put('/api/todos/:todoId', todosController.update);
}
