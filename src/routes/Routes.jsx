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
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import ChefsContainer from "../pages/Homepage/ChefsContainer/ChefsContainer";
import ChefRecipesContainer from "../pages/ChefRecipes/ChefRecipesContainer/ChefRecipesContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () =>
        //   fetch(
        //     "https://chef-recipe-hunter-server-topurayhan007.vercel.app/chefs"
        //   ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
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
        element: (
          <PrivateRoute>
            <ChefRecipesContainer></ChefRecipesContainer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-topurayhan007.vercel.app/chef-recipes/${params.id}`
          ),
      },
    ],
  },
  /* {
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
  }, */
]);

export default router;
