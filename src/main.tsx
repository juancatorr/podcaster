import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Podcasts } from './components/Podcasts'
import { Podcast } from './components/Podcast'
import { Episode } from './components/Episode'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Podcasts/>,
  },
  {
    path:'/podcast/:podcastId',
    element:<Podcast/>,
    children:[
      {
        path:'/podcast/:podcastId/episode/:episodeId',
        element:<Episode/>
      }
    ]
  }
]
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
<RouterProvider router={router}/>
    </React.StrictMode>,
)
