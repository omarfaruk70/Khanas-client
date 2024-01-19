import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Menu/Menu";
import Order from "../Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import Dashboard from "../../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <div className="flex justify-center items-center h-screen">SOrry ! There is no time for creating attractive error page</div>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element:<Menu></Menu>
        },
        {
          path: '/order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: '/dashboard/cart',
        element: <Cart></Cart>
      }
    ]
  }
]);
export default router;
