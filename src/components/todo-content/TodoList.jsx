import Todo from './Todo';

function TodoList(props) {
    const { todoList } = props;
    // console.log(todoList);
    return (
        <ul className="list-group shadow mt-4">
            {todoList.map((element) => (
                <Todo key={element.id} title={element.title} completed={element.completed} />
            ))}
            {/* <Todo title="Homework" completed={true} />
            <Todo title="Personal project figma" completed={false} />
            <Todo title="Midterm Exam" completed={false} />
            <Todo title="Lab" completed={true} /> */}
        </ul>
    );
}

export default TodoList;
