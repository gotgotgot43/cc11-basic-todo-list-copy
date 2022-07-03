import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Filter from './components/filter/Filter';
import PageLimit from './components/pagelimit/PageLimit';
import Pagination from './components/pagination/Pagination';
import TodoList from './components/todo-content/TodoList';
import TodoInput from './components/todo-content/TodoInput';

// const todo = {
//     title: 'Homework',
//     completed: true,
// };

const initialTodoList = [
    { title: 'Sport', completed: true, id: uuidv4() },
    { title: 'Gaming', completed: false, id: uuidv4() },
    { title: 'Entertain', completed: true, id: uuidv4() },
];

// console.log(initialTodoList);

function App() {
    const [todoList, setTodoList] = useState(initialTodoList);

    const createTodo = (title) => {
        const newTodo = { title, completed: false, id: uuidv4() };
        // const cloneTodoList = [...todoList];
        // cloneTodoList.unshift(newTodo);

        const newTodoList = [newTodo, ...todoList];
        setTodoList(newTodoList);
    };

    return (
        <div className="container max-w-xs pt-5">
            <TodoInput createTodo={createTodo} />
            <Filter />
            <PageLimit />
            <TodoList todoList={todoList} />
            <Pagination />
        </div>
    );
}

export default App;
