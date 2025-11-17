function TodoItem(props) {
    return (
        <div className="todo-item">
            <div className="todo-content">
                <p className="todo-text">{props.item.item}</p>

                <button onClick={()=>{alert("status changed")}} className={props.item.completed ? "status completed" : "status pending"}>
                    {props.item.completed ? "Completed" : "Pending"}
                </button>
            </div>

            <div className="todo-actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
            </div>
        </div>

    )
}
export default TodoItem;