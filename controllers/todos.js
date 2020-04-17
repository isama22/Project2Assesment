//its convention to name all models with a capital letter first

const Todo = require('../models/todo');
/* GET users listing. */
// router.get('/', 

const index = (req, res, next) => {
  res.render('todos/index', {
     todos: Todo.getAll(),
     time: req.time
    });
}
const create = (req, res) => {
  console.log(req.body);
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/todos');
}
const deleteTodo = (req, res) => {
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}

module.exports = {
    index,
    create,
    deleteTodo
}