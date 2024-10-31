import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PillBox from "./pages/PillBox";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import PillBoxApp from "./pages/PillBoxApp";
import Game from "./pages/Game";



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path:'/about-us',
      element: <AboutUs/>
    },
    {
      path: '/pillbox',
      element: <PillBox/>
    },
    {
      path: '/products',
      element: <Products/>
    },
    {
      path: '/pillboxapp',
      element: <PillBoxApp/>
    },
    {
      path: '/game',
      element: <Game/>
    }
  ])
  return (
    <div className="bg-backgroundColor h-full px-8 xl:flex xl:justify-center ">
      <RouterProvider router={router} />
    </div>
  )
}

