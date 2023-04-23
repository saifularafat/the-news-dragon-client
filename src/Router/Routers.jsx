import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Error/Error";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                
            }
        ]
    }
])

export default router;