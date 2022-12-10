import { createBrowserRouter } from "react-router-dom";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
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
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "additem",
        element: <AddPage />,
      },
    ],
  },
]);

export default router;
