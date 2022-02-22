import React, { FC } from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

// FC<TodoItemProps> - функциональный компонент
// со списком пропсов типа TodoItemProps
const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div>
            <input type='checkbox' checked={todo.completed}/>
            {`${todo.id}. ${todo.title}`}
        </div>
    );
};

export default TodoItem;