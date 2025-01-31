import React from "react";

function Todolist() {
    return (
        <>
            <h1>My Todo App</h1>
            <form action="post">
                <input type="text" id="todo-input" name="todo" placeholder="Type a new todo" />
                <br />
                <button type="submit">Add Todo</button>
            </form>
            <h2>Todos</h2>
            <input type="checkbox" /><label for="learn"> Learn React!</label><br />
            <input type="checkbox" /><label for="awesome"> Be awesome!</label><br />
            <input type="checkbox" /><label for="fun"> Have fun les pioupious 🐤!</label>
        </>
    )
}

export default Todolist