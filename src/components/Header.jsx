
function Header( {input, setInput, handleAdd} ) {
  return (
    <header>
      <h1>My To-Do List</h1>
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
    </header>
  );
}
export default Header;