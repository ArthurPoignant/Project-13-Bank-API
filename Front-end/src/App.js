import './App.css';
//import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import logo from '../src/img/argentBankLogo.png';
import SignIn from './pages/SignIn';
import User from './pages/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/profile",
        element: <User />,
      },
      {
        path: "*",
        element: <>
          <h1>Error 404</h1>
          <p>not found</p></>,
      },
    ]
  }
]);

function Root() {
  return <>
    <Navbar image={logo}/>
    <Outlet />
    <Footer />
  </>
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;