import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Home/home.jsx";
import Shop from "../shop/Shop.jsx";
import About from "../components/About.jsx";
import Blog from "../components/Blog.jsx";
import SingleBook from "../shop/SingleBook.jsx";
import DashboardOutlet from "../dashboard/DashboardOutlet.jsx";
import Upload from "../dashboard/Upload.jsx";
import Manage from "../dashboard/Manage.jsx";
import Edit from "../dashboard/Edit.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import SignUp from "../components/SignUp.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../privateroute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardOutlet />,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/upload",
        element: <Upload />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <Manage />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <Edit />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/book/${params.id}`),
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
  },
]);

export default router;
