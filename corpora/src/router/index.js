import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../pages/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
