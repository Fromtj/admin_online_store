import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Login, Dashboard, Layout, Layoutl,Products } from "./routes/routes"

export default function App() {
  let router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path:'/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Layoutl />,
          children: [
            {
              index: true,
              element: <Dashboard />
            },
            {
              path: '/products',
              element: <Products />,
            }
          ]
        }
      ]
    }
  ])
  return(<>
  <RouterProvider router={router} />
  </>)
}