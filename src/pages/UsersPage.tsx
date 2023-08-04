import React, { useEffect, useState } from "react";
import { IUser } from "../interfaces/user.interface";
import { Link } from "react-router-dom";


const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data:IUser[]) => setUsers(data))
    }, [])

    return (
        <div>
            <Link to="/">Home Page</Link> <span> </span>
            <Link to="/todo">Todo Page</Link>

            {users.map(({id, email, name, phone, address:{city, street}}) =>
                <div key={id} style={{border: "1px solid red"}}>
                    <h4>{email}</h4>
                    <h4>{name}</h4>
                    <h4>{phone}</h4>
                    <h3>{city}</h3>
                    <h3>{street}</h3>
                </div>
                )} 
            {/* it gave exclamation mark (?) automatically as above within useState() we have nothing within parenthesis */}
        </div>
    )
}

export default UsersPage;
