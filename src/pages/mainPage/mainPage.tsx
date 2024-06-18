import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks"
import classes from "./mainPage.module.css";
import useThemeContext from "../../context/themeContext";

export default function MainPage() {
  const theme = useThemeContext();
  const text = `import { RouteObject } from "react-router-dom";
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

export default router;`;

  return (
    <div>
      <h1>Main Page</h1>
      <div className={classes.codeEditor}>
        <CopyBlock
          text={text}
          language="typescript"
          showLineNumbers={true}
          theme={theme === 'light' ? atomOneLight : atomOneDark}
          wrapLongLines
        />
      </div>

      <code>
        {

        }

      </code>
    </div>
  )
}