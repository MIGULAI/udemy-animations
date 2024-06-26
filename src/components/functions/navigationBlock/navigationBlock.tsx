import useThemeContext from "../../../context/themeContext";
import LinkBlock from "../linkBlock/linkBlock";
import classes from './navigationBlock.module.css';
import cx from 'classnames';

export default function NavigationBlock() {
  const theme = useThemeContext()
  return (
    <div className={cx(classes.navigationBlock, classes[theme])}>
        <h3 className={classes.header}>Navigation</h3>
        <span className={cx(classes.line, classes[theme])} />
        <LinkBlock />
    </div>
  )
}