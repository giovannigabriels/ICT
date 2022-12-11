import { createBrowserRouter } from "react-router-dom";
import AddPage from "../pages/AddPage";
import BarChart from "../pages/BarChart";
import DetailPage from "../pages/DetailPage";
import EditPage from "../pages/EditPage";
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
        path: "bar",
        element: <BarChart />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "additem",
        element: <AddPage />,
      },
      {
        path: "edit/:id",
        element: <EditPage />,
      },
    ],
  },
]);

export default router;
