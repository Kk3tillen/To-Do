import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }
    return(
        <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="Quais os objetivos de hoje?"
            onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">+</button>
        </form>
    )   
}