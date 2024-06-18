import { RouteObject } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";

type AppRoute = RouteObject & {
  title: string;
}

type Router = {
  [key: string]: AppRoute[];
} 

export const routes: Router = {
  'Основний блок': [
    {
      path: '/',
      element: <MainPage />,
      title: 'Main Page'
    },
    {
      path: '/about',
      element: <div>About Page</div>,
      title: 'About Page'
    }
  ] as AppRoute[]
}


/**
 *  browser router initialization
 */
const router = Object.values(routes).flat();

export default router;