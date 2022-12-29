import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import {
  createHashRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar"
import Leftbar from "./Components/leftbar/Leftbar"
import Rightbar from "./Components/Rightbar/Rightbar"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import "./style.scss"
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkmodeContext";
import { AuthContext } from "./Context/authContext";


function App() {

  const { darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);



  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children;
  }

  const router = createHashRouter([
    {
      path: "/",
      element: <ProtectedRoute> <Layout /> </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Profile/:id",
          element: <Profile />,
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/Register",
      element: <Register />,
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
