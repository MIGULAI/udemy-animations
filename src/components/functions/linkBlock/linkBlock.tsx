
import { Link } from 'react-router-dom';
import useThemeContext from '../../../context/themeContext';
import { routes } from '../../../router';
import classes from './linkBlock.module.css';
import cx from 'classnames';
import { useState } from 'react';
import { SlArrowDown, SlArrowRight } from 'react-icons/sl';

type linkBlocksOpen = {
  [key: string]: boolean
}

export default function LinkBlock() {
  const [isOpen, setIsOpen] = useState<linkBlocksOpen>(Object.keys(routes).reduce((acc: linkBlocksOpen, key) => {
    acc[key] = false
    return acc
  }, {}))

  const theme = useThemeContext()
  const keys = Object.keys(routes)
  return (
    <ul className={classes.list}>
      {
        keys.map((key, index) => {
          return <li key={index} className={cx(classes.listItem, classes[theme])}>
            <span onClick={() => setIsOpen({
              ...isOpen,
              [key]: !isOpen[key]
            })}>
              {key}
              <div>
                {
                  isOpen[key]
                    ? <SlArrowDown />
                    : <SlArrowRight />
                }
              </div>
            </span>
            {
              isOpen[key] && routes[key].map((route) => {
                return <li key={route.path} className={cx(classes.listItem, classes[theme])}>
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