import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Route.jsx'
import './assets/css/animation.css';
import './assets/css/custom.css';



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
