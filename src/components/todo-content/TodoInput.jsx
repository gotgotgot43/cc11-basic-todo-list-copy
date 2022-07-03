import { useState } from 'react';
import { validateRegister } from '../../helpers/validate';
// import Button from '../UI/Button';
// Fragment React.Fragment
function TodoInput(props) {
    const [input, setInput] = useState({
        email: '',
        username: '',
        phoneNumber: '',
    });
    const [error, setError] = useState({});

    const handleChangeInput = (event) => {
        // const newInput = event.target.name;
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();

        // const newError = {};
        // if (!input.email) {
        //     newError.email = 'email is required';
        // } else {
        //     newError.email = '';
        // }

        // if (!input.username) {
        //     newError.username = 'username is required';
        // } else {
        //     newError.username = '';
        // }

        // if (!input.phoneNumber) {
        //     newError.phoneNumber = 'phone number is required';
        // } else if (input.phoneNumber.length !== 10) {
        //     newError.phoneNumber = 'Invalid phone number format';
        // } else {
        //     newError.phoneNumber = '';
        // }

        const newError = validateRegister(input.email, input.username, input.phoneNumber);

        if (Object.keys(newError).length > 0) {
            setError(newError);
        } else {
            setError({});
        }
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
                <label htmlFor="email">Email address</label>
                <input
                    name="email"
                    type="text"
                    className="form-control"
                    id="email"
                    value={input.email}
                    onChange={handleChangeInput}
                />
                {error.email && <small className="text-danger">{error.email}</small>}
            </div>
            <div className="mb-3">
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    type="text"
                    className="form-control"
                    id="username"
                    value={input.username}
                    onChange={handleChangeInput}
                />
                {error.username && <small className="text-danger">{error.username}</small>}
            </div>
            <div className="mb-3">
                <label htmlFor="phoneNumber" className="from-label">
                    Phone Number
                </label>
                <input
                    name="phoneNumber"
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    value={input.phoneNumber}
                    onChange={handleChangeInput}
                />
                {error.phoneNumber && <small className="text-danger">{error.phoneNumber}</small>}
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            <button type="button" className="btn btn-success ms-3">
                Cancel
            </button>
        </form>
    );
}

export default TodoInput;
