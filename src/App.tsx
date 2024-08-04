import Home from "./pages/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PillBox from "./pages/PillBox";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import PillBoxApp from "./pages/PillBoxApp";



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
    }
  ])
  return (
    <div className="bg-backgroundColor h-full px-8">
      <RouterProvider router={router} />
    </div>
  )
}

