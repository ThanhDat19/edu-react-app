import { Navigate, createBrowserRouter } from "react-router-dom";
import NotFound from "../views/NotFound/NotFound.component";
import GuestLayout from "../views/Guest/guest.component";
import Login from "../views/Login/login.component";
import DefaultLayout from "../views/Default/default.component";
import SignUp from "../views/Signup/signup.component";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
    //   {
    //     path: "/",
    //     element: <Navigate to="/users" />,
    //   },
    //   {
    //     path: "/dashboard",
    //     element: <Dashboard />,
    //   },
    //   {
    //     path: "/users",
    //     element: <Users />,
    //   },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
