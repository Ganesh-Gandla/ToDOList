import { useState } from "react";
import { toast } from "react-toastify";

function TodoItem({ item, onStatusChange, onEdit, onDelete }) {
    const notify = () => toast("Please enter a valid todo item");

    const [isEditing, setIsEditing] = useState(false);
    const [updatedText, setUpdatedText] = useState(item.item);


    function handleEdit() {
        if (updatedText.trim() === "") {
            notify();
            return;
        } else {
            onEdit(item.id, updatedText);
            setIsEditing(false);
        }
        
    }

    return (
        <div className="todo-item">
            <div className="todo-content">
                {isEditing ? (
                    <input
                        type="text" value={updatedText} onChange={(e) => setUpdatedText(e.target.value)} className="todo-input"></input>) : (<p className="todo-text">{item.item}</p>)}

                <button onClick={() => onStatusChange(item.id)} className={item.completed ? "status completed" : "status pending"}>
                    {item.completed ? "Completed" : "Pending"}
                </button>
            </div>

            <div className="todo-actions">
                {isEditing ? (
                    <button onClick={handleEdit} className="save-btn">Save</button>
                ) : (
                    <button onClick={() => { setIsEditing(true) }} className="edit-btn">Edit</button>
                )}
                <button onClick={() => onDelete(item.id)} className="delete-btn">Delete</button>
            </div>
        </div>

    )
}
export default TodoItem;