import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Main from "../layout/Main";
import ChefRecipesLayout from "../layout/ChefRecipesLayout";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        // element: <Register></Register>,
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
