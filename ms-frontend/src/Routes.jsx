import Home from "./views/Home";
import Movies from "./views/Movies";
import Series from "./views/Series";
import MyList from "./views/MyList"
import SignUp from "./views/SignUp";
import LogIn from "./views/LogIn";
import NavBar from "./layout/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <NavBar />,
  // },
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/series",
        element: <Series />,
      },
      {
        path: "/mylist",
        element: <MyList />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <LogIn />,
      },
      
    ],
  },
 
]);

export default router;
