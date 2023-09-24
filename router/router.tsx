import { RouterProvider, createBrowserRouter } from 'react-router-dom'

export default function RouterProviderHook() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>hello world</div>,
    },
  ])

  return <RouterProvider router={router} />
}
