import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Success from "./components/successPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

export default router;
