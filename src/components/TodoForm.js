import React, {useState} from "react";

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [vazio, setVazio] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (value.trim() === "") {
            setVazio(true);
            return;
        }
        addTodo(value);
        setValue("");
        setVazio(false);
    };
    return(
        <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text" className={`todo-input ${vazio ? "input-vazio" : ""}`} value={value} placeholder="Quais os objetivos de hoje?"
            onChange={(e) => {setValue(e.target.value); setVazio(false);}}/>
            <button type="submit" className="todo-btn">+</button>
        </form>
    )   
}