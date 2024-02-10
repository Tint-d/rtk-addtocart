import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Fallback from "../utils/Fallback";
import { paths } from "./path";
import Layout from "../Layout";
import Cart from "../pages/Cart";
import Detail from "../pages/Detail";

const Products = lazy(() => import("../pages/Products"));

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: paths.products,
      element: (
        <Suspense fallback={<Fallback />}>
          <Layout>
            <Products />
          </Layout>
        </Suspense>
      ),
    },
    {
      path: paths.cart,
      element: (
        <Suspense fallback={<Fallback />}>
          <Layout>
            <Cart />
          </Layout>
        </Suspense>
      ),
    },
    {
      path: paths.detail,
      element: (
        <Suspense fallback={<Fallback />}>
          <Layout>
            <Detail />
          </Layout>
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
