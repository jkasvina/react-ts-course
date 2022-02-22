import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";
import { ITodo, IUser } from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
// npm i axios
// npm i react-router-dom @types/react-router-dom

function App() {
  return (
    // <div>
    //   <EventsExample />
    //   <br />
    //   <Card
    //     variant={CardVariant.primary}
    //     height="200px"
    //     width="200px"
    //     onClick={(num) => console.log("pushed", num)}
    //   >
    //     <button>Button</button>
    //   </Card>
    //   {/*<UserList users={users}/>*/}
    //   <br />
    //   <UsersPage />
    //   <br />
    //   <TodosPage />
    // </div>

    // {/* exact - вызов только по указанному пути */}
    //     <Route path={'/users'} exact>
    //         <UsersPage />
    //     </Route>
    // react router v6 больше не поддерживает exact.
    // старый - v5 <Route exact path="/" component={Home} />
    // новый - v6 <Route path="/" element={<Home />} />
    //
    // Как указано в их документации:
    // Вам больше не нужно использовать точную опору <Route path="/">.
    // Это потому, что все пути точно совпадают по умолчанию.
    // Если вы хотите сопоставить больше URL-адресов, потому что у вас есть дочерние
    // маршруты, используйте завершающий *, как в <Route path="users/*">.
    //
    // Вы можете обратиться к этому руководству по миграции: https://reactrouter.com/docs/en/v6/upgrading/v5 .

    <BrowserRouter>
      <div>
        <div>
          <NavLink to="/users"> Пользователи </NavLink>
          <NavLink to="/todos"> Список дел </NavLink>
          <NavLink to="/events"> Игра с квадратами </NavLink>
        </div>
        {/* exact - вызов только по указанному пути */}
        <Routes>
          <Route element={<UsersPage />} path="/users" />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/events" element={<EventsExample />} />
          <Route path="/users/:id" element={<UserItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
