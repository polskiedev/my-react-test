import React, { useEffect, useState } from 'react'
import ListUsersSkeleton from "../Skeleton/ListUsersSkeleton";

const url = "https://jsonplaceholder.typicode.com/users";

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    // Add other properties of the user object here
}

const ListUsers = () => {

    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((users) => {
                setUsers(users);
                setIsLoading(false);
            });
    }, []);

  return (
  <>
    <h1 style={{marginBottom: "1.5rem"}}>Users</h1>
    <div className="user-container grid grid-cols-2 gap-4">
        {isLoading && <ListUsersSkeleton count={8}></ListUsersSkeleton>}
        {users.map((user) => (
            <div key={user.id} className="flex rounded-md p-2 border border-solid border-gray-500 text-sm bg-gray-600">
                <div className="left-col w-[75px]">
                    <img className="w-[50px] h-[50px] rounded-full bg-white border border-solid border-gray-500" />
                </div>
                <div className="right-col w-full text-white">
                    <p className="p-1 text-green-400 text-lg font-bold">{user.name}</p>
                    <p className="p-1">Username: <span className="username">{user.username}</span></p>
                    <p className="p-1">Email: <span className="email">{user.email}</span></p>
                    <p className="p-1">Phone: <span className="email">{user.phone}</span></p>
                </div>
            </div>
        ))}
    </div>
  </>)
}

export default ListUsers