import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import History from "./pages/history";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/history",
      element: <History />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
