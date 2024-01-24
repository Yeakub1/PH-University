import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPath } from "./admin.routes";
import { routeGenarator } from "../utils/routeGenarator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenarator(facultyPaths)
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenarator(adminPath)
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenarator(studentPaths)
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
