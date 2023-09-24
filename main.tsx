import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterProviderHook from './router/router'
import { DefaultProvider } from './components/providers/default-provider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DefaultProvider>
      <RouterProviderHook />
    </DefaultProvider>
  </React.StrictMode>,
)
