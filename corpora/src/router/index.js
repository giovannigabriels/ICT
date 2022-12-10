import { createBrowserRouter } from "react-router-dom";
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
    ],
  },
]);

export default router;
