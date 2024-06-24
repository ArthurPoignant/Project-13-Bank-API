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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/home",
        element: <Home />,
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