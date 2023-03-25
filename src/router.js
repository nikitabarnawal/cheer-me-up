import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
