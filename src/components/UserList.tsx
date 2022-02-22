import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

// Вопрос: Здесь можно указать как IUser[], так и IUser{} ??
// массив объектов IUser
interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
{/*      {users.map((user) => (
        <UserItem onClick={хуй} key={user.id} user={user} />
      ))}*/}
    </div>
  );
};

export default UserList;
