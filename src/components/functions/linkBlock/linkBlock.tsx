
import { Link } from 'react-router-dom';
import useThemeContext from '../../../context/themeContext';
import { routes } from '../../../router';
import classes from './linkBlock.module.css';
import cx from 'classnames';

export default function LinkBlock() {
  const theme = useThemeContext()
  const keys = Object.keys(routes)
  return (
    <ul className={classes.list}>
      {
        keys.map((key, index) => {
          return <li key={index} className={cx(classes.listItem, classes[theme])}>
            <span>{key}</span>
            {
              routes[key].map((route, index) => {
                return <li key={index} className={cx(classes.listItem, classes[theme])}>
                  <Link to={route.path!}>{route.title}</Link>
                </li>
              })
            }
          </li>
        })
      }
    </ul>
  )
}