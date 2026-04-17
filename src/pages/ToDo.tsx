import { useState } from "react"

type ToDo = {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState<ToDo[]>([])

  const addTodo = () => {
    if (input.trim() === "") return

    const newTodo: ToDo = {
      id: Date.now(),
      text: input,
      completed: false,
    }

    setTodos([...todos, newTodo])
    setInput("")
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="container">
      <h1>ToDoリスト</h1>

      <div className="input-area">
        <input type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="やることを入力" />
        <button onClick={addTodo}>追加</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>
              {todo.text}
            </span>
            <button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "未完了にする" : "完了にする"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App