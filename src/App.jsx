import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import MediaCentrePage from "./pages/mediaCentre/MediaCentrePage";
import ContactPage from "./pages/contact/ContactPage";
import AboutPage from "./pages/about/AboutPage";
import ProductPage from "./pages/product/ProductPage";
import ActivityPage from "./pages/activity/ActivityPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <ProductPage />,
          },
        ],
      },
      {
        path: "media-centre",
        children: [
          {
            index: true,
            element: <MediaCentrePage />,
          },
        ],
      },
      {
        path: "activity",
        children: [
          {
            index: true,
            element: <ActivityPage />,
          },
        ],
      },
      {
        path: "about",
        children: [
          {
            index: true,
            element: <AboutPage />,
          },
        ],
      },
      {
        path: "contact",
        children: [
          {
            index: true,
            element: <ContactPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
