import './App.css';
import Filter from './components/filter/Filter';
import PageLimit from './components/pagelimit/PageLimit';
import Pagination from './components/pagination/Pagination';
import TodoList from './components/todo-content/TodoList';
import TodoInput from './components/todo-content/TodoInput';

function App() {
    return (
        <div className="container max-w-xs pt-5">
            <TodoInput />
            <Filter />
            <PageLimit />
            <TodoList />
            <Pagination />
        </div>
    );
}

export default App;
