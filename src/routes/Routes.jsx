import React, { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Mainlayout from '../layouts/Mainlayout';
import Home from '../pages/Home';
import Coffees from '../pages/Coffees';
import Dashboard from '../pages/Dashboard';
import Coffeecards from '../pages/Coffeecards';
import Coffeedetails from '../pages/Coffeedetails';

const Routes =createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
    children:[
        {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('../../public/categories.json'),
            children:[
                {
                    path:'/',
                    element:<Coffeecards></Coffeecards>,
                    loader:()=>fetch('../../public/coffees.json'),
                },
                {
                    path:'/category/:category',
                    element:<Coffeecards></Coffeecards>,
                    loader:()=>fetch('../../public/coffees.json'),
                },

            ],
        },
        {
            path:'/Coffees',
            element:<Coffees></Coffees>,
            loader:()=>fetch('../../public/coffees.json'),
        },
        {
            path:'/Dashboard',
            element:<Dashboard></Dashboard>
        },
        {
            path:'/Coffee/:id',
            element:<Coffeedetails></Coffeedetails>,
            loader:()=>fetch('../../public/coffees.json'),
        },

    ]
    },
  
  ]);

export default Routes;