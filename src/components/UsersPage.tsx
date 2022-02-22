import React, { FC, useEffect, useState } from "react";
import { ITodo, IUser } from "../types/types";
import axios from "axios";
import List from "./List";
import UserItem from "./UserItem";
import { useNavigate } from "react-router-dom";

const UsersPage: FC = () => {
  // <IUser[]> называется generic,
  // теперь другой тим массива мы сюда поместить не сможем
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  const clickHandler =(user: IUser)=>{
      console.log(user.id);
      navigate(`/users/${user.id}`);
  }
  return (
    <>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            onClick={(user) => {
                clickHandler(user)
            }}
            user={user}
            key={user.id}
          />
        )}
      />
    </>
  );
};

export default UsersPage;
