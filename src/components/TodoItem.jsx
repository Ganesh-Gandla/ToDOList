import { useState } from "react";

function TodoItem({ item, onStatusChange, onEdit, onDelete }) {

    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(item.item);

    return (
        <div className="todo-item">
            <div className="todo-content">
                {isEditing ? (
                    <input
                        type="text" value={updatedText} onChange={(e) => setUpdatedText(e.target.value)}></input>) : (<p className="todo-text">{item.item}</p>)}

                <button onClick={() => onStatusChange(item.id)} className={item.completed ? "status completed" : "status pending"}>
                    {item.completed ? "Completed" : "Pending"}
                </button>
            </div>

            <div className="todo-actions">
                {isEditing ? (
                    <button onClick={() => {
                        setIsEditing(false);
                        onEdit(item.id, updatedText);
                    }} className="save-btn">Save</button>
                ) : (
                    <button onClick={() => { setIsEditing(true) }} className="edit-btn">Edit</button>
                )}
                <button onClick={() => onDelete(item.id)} className="delete-btn">Delete</button>
            </div>
        </div>

    )
}
export default TodoItem;