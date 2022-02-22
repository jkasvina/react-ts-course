import React, {useEffect, useState} from 'react';
import List from "./List";
import {ITodo} from "../types/types";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodosPage = () => {
    // <ITodo[]> называется generic,
    // теперь другой тим массива мы сюда поместить не сможем
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>(
                "https://jsonplaceholder.typicode.com/todos?_limit=10"
            );
            setTodos(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} />}
        />
    );
};

export default TodosPage;