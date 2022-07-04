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

// All => null
// COMPLETED => true
// PENDING => false
function App() {
    const [todoList, setTodoList] = useState(initialTodoList);
    const [searchStatus, setSearchStatus] = useState(null);

    const createTodo = (title) => {
        const newTodo = { title, completed: false, id: uuidv4() };
        // const cloneTodoList = [...todoList];
        // cloneTodoList.unshift(newTodo);

        const newTodoList = [newTodo, ...todoList];
        setTodoList(newTodoList);
    };

    const removeTodo = (id) => {
        const index = todoList.findIndex((element) => {
            return element.id === id;
        });
        if (index !== -1) {
            const cloneTodoList = [...todoList];
            cloneTodoList.splice(index, 1);
            setTodoList(cloneTodoList);
        }
    };

    //newValue: {title:,completed}
    //updateTodo({title:'Meeting'},"w2djigji32")
    const updateTodo = (newValue, id) => {
        const index = todoList.findIndex((ele) => ele.id === id);
        if (index !== -1) {
            const cloneTodoList = [...todoList];
            cloneTodoList[index] = { ...cloneTodoList[index], ...newValue }; //{title,id}
            //{title:'Entertain', completed:true, id:uuidv4()} merge {title:'Meeting}
            //{title:'Meeting', completed:true, id:uuidv4()}
            setTodoList(cloneTodoList);
        }
    };

    const changeSearchStatus = (value) => {
        setSearchStatus(value);
    };

    // let filterdTodoList = [];
    // switch (searchStatus) {
    //     case 'COMPLETED': {
    //         filterdTodoList = todoList.filter((ele) => ele.completed);
    //         break;
    //     }
    //     case 'PENDING': {
    //         filterdTodoList = todoList.filter((ele) => !ele.completed);
    //         break;
    //     }
    //     default:
    //         filterdTodoList = [...todoList];
    // }

    //To filter only all ,completed or pending
    const filterdTodoList = todoList.filter(
        (ele) => searchStatus === null || ele.completed === searchStatus
    );

    //To filter only including letter
    // const filterdTodoList = todoList.filter((ele) => ele.title.includes('i'));

    return (
        <div className="container max-w-xs pt-5">
            <TodoInput createTodo={createTodo} />
            <Filter changeSearchStatus={changeSearchStatus} searchStatus={searchStatus} />
            <PageLimit />
            <TodoList todoList={filterdTodoList} removeTodo={removeTodo} updateTodo={updateTodo} />
            <Pagination />
        </div>
    );
}

export default App;
