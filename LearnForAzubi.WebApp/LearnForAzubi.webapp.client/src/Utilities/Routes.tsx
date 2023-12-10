import { createBrowserRouter } from "react-router-dom";
import Site from "./Site";
import Homepage from "../Sites/Homepage";
import Login from "../Sites/Login";
import Learning from "../Sites/Learning";
import App from "../App";


const sites: Site[] = [
    {
        siteName: "Home",
        path: "/"
    },
    {
        siteName: "Learning",
        path: "/Learning"
    },
    {
        siteName: "Login",
        path: "/Login"
    }
]

const routes = [
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/Login",
                element: <Login />,
            },
            {
                path: "/Learning",
                element: <Learning />,
            }
        ]
    },
]



const router = createBrowserRouter(routes);

export {
    sites,
    router
};