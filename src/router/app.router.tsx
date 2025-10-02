import { createBrowserRouter } from "react-router";
import { lazy } from "react";

import HeroPage from "@/heroes/pages/hero/HeroPage";
import AdminPages from "@/admin/pages/AdminPages";
import {HomePage} from '../heroes/pages/home/HomePage';
import HeroesLayout from "@/heroes/layouts/HeroesLayout";
import AdminLayout from '../heroes/layouts/AdminLayout';
//import SearchPage from "@/heroes/pages/search/SearchPage";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"))


export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
        {
        path:'heroes/1',
        element: <HeroPage />
      },
        {
        path:'search',
        element: <SearchPage />
      },

    ]
  },
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPages />
    },

    ],
  },
  
])

