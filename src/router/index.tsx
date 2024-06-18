import { RouteObject } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import { BasicButton } from "../pages/buttons/basicButton";
import AnimationsDifferences from "../pages/animationsDifferences/animationsDifferences";

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
  ] as AppRoute[],
  'animation': [
    {
      path: '/buttons/basic',
      element: <BasicButton />,
      title: 'Basic Button'
    },
    {
      path: '/animations/difererences',
      element: <AnimationsDifferences />,
      title: 'Animations Differences'
    }
  ]
  }


/**
 *  browser router initialization
 */
const router = Object.values(routes).flat();

export default router;