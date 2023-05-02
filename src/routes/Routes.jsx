import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import ChefRecipesLayout from "../layout/ChefRecipesLayout";
import Login from "../pages/Logins/Login/Login";
import Blog from "../pages/Blog/Blog";
import Register from "../pages/Logins/Register/Register";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Homepage/Home/Home";
import RegisterLayout from "../layout/RegisterLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterLayout></RegisterLayout>,
    children: [
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "chef-recipes",
    element: <ChefRecipesLayout></ChefRecipesLayout>,
    children: [
      {
        path: ":id",
        // element: <Recipes></Recipes>, // protected
        loader: ({ params }) => fetch(`${params.id}`),
      },
    ],
  },
]);

export default router;
