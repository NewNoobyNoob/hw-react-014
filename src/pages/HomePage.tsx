import React from "react";
import { Link } from "react-router-dom";


const HomePage : React.FC<{}> = () => {
    
    return (
        <div>

        <Link to="/todo">Todo Page</Link> <span> </span>
        <Link to="/users">Users Page</Link>

        <p>Home Page</p>

        </div>
    )

}

export default HomePage;