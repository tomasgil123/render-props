import { Todo } from 'src/types/todos'

export const getTodos = async (query: string): Promise<Todo[]> => {
  let result
  try {
    const response = await fetch(`/api/todos/?title=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    result = await response.json()
  } catch (err) {
    result = { error: err }
  }
  return result
}
