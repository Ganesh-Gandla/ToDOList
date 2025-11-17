import TodoItem from "./TodoItem";

function TodoList(Props) {
    return (
        <>
            <ul className="todo-list">
                {Props.Items.map((todo, index) => (
                    <li key={index} className="todo-list-item">
                        <TodoItem item={todo} />
                    </li>
                ))}
            </ul>
        </>

    )
}
export default TodoList;