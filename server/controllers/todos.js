const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error))
  },
  listTodo(req, res) {
    return Todo
      .all()
      .then(todos => res.status(200).send({
        data: todos,
        message: 'List of todos'
      }))
      .catch(err => {
        res.send(err)
      })
  },
  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todos => {
        console.log("lalala >>> ", todos);
        res.status(200).send(todos)
      })
      .catch(error => {
        res.send(error)
      });
  }
};
