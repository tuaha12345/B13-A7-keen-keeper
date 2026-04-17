import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from "react-router";
import Root from './component/root/Root';
import Home from './component/home/Home';
import CardDetails from './component/cardDetails/CardDetails.jsx';
import { TimeLineProvider } from './context/TimelineContext';
import TimeLine from './component/timeline/TimeLine';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // {index:true,loader: () => fetch('./data.json'), Component:Home},
      {index:true, loader: () => fetch('/data.json').then(res => res.json()), Component:Home},
      {path:"/friend/:friendId", Component:CardDetails},
      {path:"/timeline", Component:TimeLine},
      
    ]
  },
  {
    path: "/app",
    element: <App />,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimeLineProvider>
    <RouterProvider router={router} />,
    </TimeLineProvider>
  </StrictMode>,
)
