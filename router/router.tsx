import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DefaultPage from '../pages/default-page'
import Home from '../pages/main/main'
import IssuesPage from '../pages/issue/issue-page'

export enum RouterPaths {
  home = `/`,
  issue = `issue/:id`,
}

export default function RouterProviderHook() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultPage />,
      children: [
        {
          path: RouterPaths.home,
          element: <Home />,
        },
        {
          path: RouterPaths.issue,
          element: <IssuesPage />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
