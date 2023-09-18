import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {UserDetailsPage, UserPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'users'}/>
            },
            {
                path: 'users',
                element: <UserPage/>,
                children: [
                    {
                        path: ':id',
                        element: <UserDetailsPage/>
                    }
                ]
            }
        ]
    }
]);

export {router}