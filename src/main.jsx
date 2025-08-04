import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import NotFound from "./pages/NotFound.jsx";
import CountryInfo from "./pages/CountryInfo/CountryInfo.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/CountryInformation/:id",
    element: <CountryInfo />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
