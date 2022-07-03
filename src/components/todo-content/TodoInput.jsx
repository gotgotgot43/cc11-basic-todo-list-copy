import Button from '../UI/Button';
// Fragment React.Fragment
function TodoInput() {
    return (
        <>
            <div className="input-group shadow ">
                <input
                    type="text"
                    className="form-control is-invalid"
                    placeholder="Enter newTodo"
                    aria-label="Recipient's username with two button addons"
                />
                <Button color="success">
                    <i className="fa-solid fa-plus"></i>
                </Button>
                <Button color="outline-secondary">
                    <i className="fa-solid fa-xmark"></i>
                </Button>
            </div>
            {/* <small className="text-danger">Title is required</small> */}
        </>
    );
}

export default TodoInput;
