import "./App.css";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (<Login/>),
    },
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/detail",
      element: <Detail/>
    },
  ]);

  return (
    <>
      <Header/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
