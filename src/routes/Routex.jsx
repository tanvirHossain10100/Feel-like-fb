import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { LoginPage } from "../pages/LoginPage/LoginPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
]);

export default routes;
