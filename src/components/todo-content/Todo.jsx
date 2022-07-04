import { useState } from 'react';
import Button from '../UI/Button';
import TodoInput from './TodoInput';

function Todo(props) {
    const { title, completed, id, removeTodo, updateTodo } = props;
    const [isEditing, setIsEditing] = useState(false);

    const closeEditing = () => {
        setIsEditing(false);
    };

    return (
        <li
            className={`list-group-item d-flex ${
                isEditing ? 'flex-column' : 'align-items-center '
            } p-3 bd-callout ${completed ? 'bd-callout-success' : 'bd-callout-warning'}`}
        >
            {isEditing ? (
                <TodoInput
                    id={id}
                    title={title}
                    closeEditing={closeEditing}
                    updateTodo={updateTodo}
                />
            ) : (
                <>
                    <span onClick={() => setIsEditing(true)} className="flex-grow-1" role="button">
                        {title}
                    </span>
                    <div className="btn-group ms-3 shadow">
                        <Button
                            color="outline-info"
                            onClick={() => updateTodo({ completed: !completed }, id)}
                        >
                            <i className={`fa-solid fa-toggle-${completed ? 'on' : 'off'}`}></i>
                        </Button>
                        <Button color="danger" onClick={() => removeTodo(id)}>
                            <i className="fa-regular fa-trash-can"></i>
                        </Button>
                    </div>
                </>
            )}
        </li>
    );
}

export default Todo;
