import TodoItem from "./TodoItem";

function TodoList({Items, onStatusChange, onEdit, onDelete}) {
    return (
        <>
            <ul className="todo-list">
                {Items.map((todo) => (
                    <li key={todo.id} className="todo-list-item">
                        <TodoItem item={todo} onStatusChange={onStatusChange} onEdit={onEdit} onDelete={onDelete}/>
                    </li>
                ))}
            </ul>
        </>

    )
}
export default TodoList;