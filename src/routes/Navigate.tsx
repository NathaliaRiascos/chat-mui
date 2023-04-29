import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login } from "../pages";
import App from "../App";
import { ProtectedRoute } from "./ProtectedRoute";
import { SpecialRoute } from "./SpecialRoute";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: 
    <SpecialRoute>
      <Login />
    </SpecialRoute>,
  },
]);

export default router;
