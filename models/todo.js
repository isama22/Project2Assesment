const todos = [
  { todo: String, done: false }
];
  const getAll = () => {
    return todos;
  }
  const getOne = (id) => {
    return todos[id];
  }

  const create = (todo) => {
    todos.push(todo);
  }
//add methods here to update / delete data here
const deleteOne = (id) => {
  todos.splice(id, 1);
}


  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };