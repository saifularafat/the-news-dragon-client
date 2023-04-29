import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../Error/Error";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/News/News/News";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Home/Share/Login/Login/Login";
import Register from "../pages/Home/Share/Login/Register/Register";
import PrivateRouter from "./PrivateRouter";
import Terms from "../pages/Home/Share/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'terms',
                element: <Terms />
            }
        ]
    },
    {
        path: 'category',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-saifularafat.vercel.app/categories/${params.id}`)
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'career',
                element: <Career />
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRouter><News /></PrivateRouter>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-saifularafat.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;