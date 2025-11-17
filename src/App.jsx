import './App.css'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {

  // variables

  const notify = () => toast("Please enter a valid todo item");

  const [input, setInput] = useState("")
  const [List, setList] = useState([])

  const newTodo = {
    item: input,
    completed: false,
    id: crypto.randomUUID()
  };

  // functions

  function handleAdd() {
    if(input.trim() === ""){
      notify();
      return;
    } 
    setList([...List, newTodo]);
    setInput("");
    console.log(List);
  }

  function handleStatusChange(id) {
    setList(
      List.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  } 

  function handleEdit(id, updatedText) {
    // Logic to edit a todo item
    setList(
      List.map((todo) => {
        if (todo.id === id) {
          return { ...todo, item: updatedText };
        }
        return todo;
      })
    );
  }

  function handleDelete(id) {
    setList(List.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <Header />
      <ToastContainer />
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
      <TodoList Items={List} onStatusChange={handleStatusChange} onEdit={handleEdit} onDelete={handleDelete}/>
    </>
  )
}

export default App
