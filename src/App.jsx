import './App.css'
import { useState } from 'react'

import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {

  // variables

  const [input, setInput] = useState("")
  const [List, setList] = useState([
    {
      item: "Sample Todo 1",
      completed: false
    },
    {
      item: "Sample Todo 2",
      completed: true
    }
  ])

  const newTodo = { item: input, completed: false };




  // functions

  function handleAdd() {
    // Logic to add a new todo item
    setList([...List, newTodo]);
    setInput("");
  }

  return (
    <>
      <Header />
      <div className="todo-input-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Add a new todo"
          className="todo-input"
        />

        <button onClick={handleAdd} className="add-btn">Add</button>
      </div>
      <TodoList Items={List} />
    </>
  )
}

export default App
