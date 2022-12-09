import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    children: [
      {
        path: "",
        element: "",
      },
    ],
  },
]);

export default router;
