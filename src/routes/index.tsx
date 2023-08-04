import { RouteObject } from "react-router-dom"
import HomePage from "../pages/HomePage";
import TodoPage from "../pages/TodoPage";
import UsersPage from "../pages/UsersPage";
const routes : RouteObject[] = [
    {
        element: <HomePage />,
        path: '/'
    },
    {
        element: <TodoPage />,
        path: '/todo'
    },
    {
        element: <UsersPage />,
        path: '/users'
    }
]

export default routes;
