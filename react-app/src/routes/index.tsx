import { useRoutes } from "react-router-dom";
import CreateUser from "../components/CreateUser";
import ListUsers from "../components/ListUsers";
import UpdateUser from "../components/UpdateUser";

export function Router (){
    return useRoutes([
        {path:'/create', element :<CreateUser/> },
        {path:'/', element :<ListUsers/> },
{ path:"/update/:id", element:< UpdateUser />},
        {path:'*', element : <h1>NOT FOUND</h1>}


    ])
}