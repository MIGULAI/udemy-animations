import { RouteObject } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import { BasicButton } from "../pages/buttons/basicButton/basicButton";
import AnimationsDifferences from "../pages/animationsDifferences/animationsDifferences";
import RotationButton from "../pages/buttons/rotationButton/rotationButton";
import SwipeButton from "../pages/buttons/swipeButton/swipeButton";
import NamedFractalButton from "../pages/buttons/fractalButton/fractalButton";
import NamedBoldButton from "../pages/buttons/boldButton/boldButton";
import NamedVerticalSwipeButton from "../pages/buttons/verticalSwipeButton/verticalSwipeButton";
import NamedGlowingButton from "../pages/buttons/glowingButton/glowingButton";
import NamedSwapButton from "../pages/buttons/swapButton/swapButton";
import WavyLoader from "../pages/loaders/wavyLoader/wavyLoader";
import { NamedScalingButton } from "../pages/buttons/scalingButton/scalingButton";
import NamedCircularSwapingButton from "../pages/buttons/circularSwapingButton/circularSwapingButton";
import NamedThreeLayearsButton from "../pages/buttons/threeLayearsButton/threeLayearsButton";
import NamedTextTransiotionButton from "../pages/buttons/textTransitionButton/textTransitionButton";

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
  'Buttons': [
    {
      path: '/buttons/basic',
      element: <BasicButton />,
      title: 'Basic Button'
    },
    {
      path: '/animations/difererences',
      element: <AnimationsDifferences />,
      title: 'Animations Differences'
    },
    {
      path: '/buttons/rotation',
      element: <RotationButton />,
      title: 'Rotation Button'
    },
    {
      path: '/buttons/swipe',
      element: <SwipeButton />,
      title: 'Swipe Button'
    },
    {
      path: '/buttons/fractal',
      element: <NamedFractalButton />,
      title: 'Fractal Button'
    },
    {
      path: '/buttons/bold',
      element: <NamedBoldButton />,
      title: 'Bold Button'
    },
    {
      path: '/buttons/verticalswipe',
      element: <NamedVerticalSwipeButton />,
      title: 'Vertical Swipe Button'
    },
    {
      path: '/buttons/glowing',
      element: <NamedGlowingButton />,
      title: 'Glowing Button'
    },
    {
      path: '/buttons/swap',
      element: <NamedSwapButton />,
      title: 'Swap Button'
    },
    {
      path: '/buttons/scale',
      element: <NamedScalingButton />,
      title: 'Scale Button'
    },
    {
      path: '/buttons/circularswaping',
      element: <NamedCircularSwapingButton />,
      title: 'Circular Swaping Button'
    },
    {
      path: '/buttons/threelayers',
      element: <NamedThreeLayearsButton />,
      title: 'Three Layers Button'
    },
    {
      path: '/buttons/testtransition',
      element: <NamedTextTransiotionButton />,
      title: 'Test Transition'
    }
  ],
  'Loaders': [
    {
      path: '/loaders/wavy',
      element: <WavyLoader />,
      title: 'Wavy loader'
    }
  ]
}


/**
 *  browser router initialization
 */
const router = Object.values(routes).flat();

export default router;