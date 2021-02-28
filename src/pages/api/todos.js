import todos from '../../mockData/mockTodos.json'

export default (req, res) => {
  const query = req.body
  const todosFiltered = todos.todos.filter((todo) => todo.title.includes(query)).slice(0, 5)
  res.statusCode = 200
  res.json({ todos: todosFiltered })
}
