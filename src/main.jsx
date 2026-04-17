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
 import { ToastContainer, toast } from 'react-toastify';
 import Stats from './component/stats/Stats';
// import TimeLineType from './component/timeline/TimeLineType.jsx';
import Page404 from './component/404page/Page404.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // {index:true,loader: () => fetch('./data.json'), Component:Home},
      // {index:true, loader: () => fetch('/data.json').then(res => res.json()), Component:Home},
      {index:true,Component:Home},
      {path:"/friend/:friendId", Component:CardDetails},
      {path:"/timeline", Component:TimeLine,children:[
        // {index:true, Component:Stats},
        // {path:":timelineType/", Component:TimeLineType},
      ]},
      {path:"/stats", Component:Stats},
      
    ]
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimeLineProvider>
    <RouterProvider router={router} />
    </TimeLineProvider>
    <ToastContainer />
  </StrictMode>,
)
