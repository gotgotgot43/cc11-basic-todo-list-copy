import { useState } from 'react';
import Button from '../UI/Button';
// Fragment React.Fragment
function TodoInput(props) {
    const [todoinput, setTodoInput] = useState(props.title || '');
    const [todoError, setTodoError] = useState('');

    const handleClick = () => {
        if (!todoinput) {
            setTodoError('Title is required');
        } else {
            props.createTodo(todoinput);
            setTodoError('');
            setTodoInput('');
        }
    };

    const handleClickUpdateBtn = () => {
        if (!todoinput) {
            setTodoError('Title is required');
        } else {
            props.updateTodo({ title: todoinput }, props.id);
            props.closeEditing();
        }
    };

    return (
        <>
            <div className="input-group shadow ">
                <input
                    type="text"
                    className={`form-control ${todoError ? 'is-invalid' : ''}`}
                    placeholder="Enter newTodo"
                    aria-label="Recipient's username with two button addons"
                    value={todoinput}
                    onChange={(event) => setTodoInput(event.target.value)}
                />
                {props.id ? (
                    <Button color="primary" onClick={handleClickUpdateBtn}>
                        <i className="fa-solid fa-check"></i>
                    </Button>
                ) : (
                    <Button color="success" onClick={handleClick}>
                        <i className="fa-solid fa-plus"></i>
                    </Button>
                )}

                <Button
                    color="outline-secondary"
                    onClick={() => {
                        if (props.id) {
                            props.closeEditing();
                        } else {
                            setTodoInput('');
                        }
                    }}
                >
                    <i className="fa-solid fa-xmark"></i>
                </Button>
            </div>
            {todoError && <small className="text-danger">{todoError}</small>}
        </>
    );
}

export default TodoInput;
