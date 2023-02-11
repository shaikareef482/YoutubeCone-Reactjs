
import React from 'react'
import './App.css';
import Root from './page/Root';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import SearchRoot from './page/SearchRoot';
import HomeRoot from './page/HomeRoot';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children:[
      {
        path: '/search/:searchTream',
        element:<SearchRoot></SearchRoot>
      },
      {
        path:'/',
        element: <HomeRoot></HomeRoot>
      }
    ]
  }
])

function App() {
  return (<RouterProvider router={router}></RouterProvider>);
}

export default App;
//