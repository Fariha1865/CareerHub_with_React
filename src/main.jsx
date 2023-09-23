import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import Statistics from './components/Statistics/Statistics';
import Applied from './components/AppliedJobs/Applied';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [

      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/Applied",
        loader:()=>  fetch('/jobs.json'),
        element: <Applied></Applied>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path: "/JobDetails/:jobId",
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('/jobs.json')
        
      }



    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
