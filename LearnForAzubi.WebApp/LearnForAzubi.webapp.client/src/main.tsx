import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import Login from './Sites/Login.tsx';
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

    },
    {
        path: "/Login",
        element: <Login />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
