import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

// interface UserItemPageParams {
//     id: string;
// }


const UserItemPage: FC = () => {
    // <IUser[]> называется generic,
    // теперь другой тим массива мы сюда поместить не сможем
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<string>();
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(
                "https://jsonplaceholder.typicode.com/users/" + params.id
            );
            setUser(response.data);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>Page of {user?.name}</h1>
            <div>{user?.email} </div>
        </div>
    );
};

export default UserItemPage;