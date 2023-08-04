import React, { useEffect, useState } from "react";
import { ITodo } from "../interfaces/todo.interface";
import { Link } from "react-router-dom";


const TodoPage : React.FC<{}> = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((data:ITodo[]) => setTodos(data))
    }, [])

    // return (
    //     <div>
    //     {todos.map((todo) => 

    //     <div key={(todo.id)}>
    //     <h3>{todo.title}</h3>
    //     <h3>{todo.userId}</h3>
    //     <h3>{todo.completed}</h3>
    //     </div>
    // )}
    // </div>
    // )
    // or we can write return as below:
    
    return (
        <div>
        <Link to="/">Home Page</Link> <span> </span>
        <Link to="/users">Users Page</Link>

        {todos.map(({completed, id, title, userId}) => 

        <div key={(id)}>
        <h3>{title}</h3>
        <h3>{userId}</h3>
        <h3>{completed}</h3>
        </div>
    )}

    </div>
    )
}

export default TodoPage;