import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "./routes/root"
import ThemeContextProvider from './Context/ThemeContext';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CountriesPage from './routes/countries-page';
import CountryPage from './routes/country-page';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: 1,
        element: <CountriesPage />
      },
      {
        path: "country/:countryName",
        element: <CountryPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeContextProvider>
      <RouterProvider router={routes}>
        <Root />
      </RouterProvider>
    </ThemeContextProvider>
);

