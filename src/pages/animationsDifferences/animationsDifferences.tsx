import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import ElementWrapper from "../../components/ui/elementWrapper/elementWrapper";
import classes from './animationsDifferences.module.css';
import useThemeContext from "../../context/themeContext";
import cssText from './animationsDifferences.module.css?raw';

export default function AnimationsDifferences() {
  const theme = useThemeContext();
  return (
    <div>
      <h1>Animations Differences</h1>

      <ElementWrapper >
        <div className={classes.container}>
          <div id="ease" className={classes.move}>Ease</div>
          <div id="linear" className={classes.move}>Linear</div>
          <div id="ease-in" className={classes.move}>Ease In</div>
          <div id="ease-out" className={classes.move}>Ease Out</div>
          <div id="ease-in-out" className={classes.move}>Ease In Out</div>
        </div>
      </ElementWrapper>
      <div>
        <h2>
          CSS
        </h2>
      </div>
      <CopyBlock
          text={cssText}
          language="css"
          showLineNumbers={true}
          theme={theme === 'light' ? atomOneLight : atomOneDark}
          wrapLongLines
        />
        <div>
          <h2>Notation</h2>
        </div>
        <ul>
          <li>ease - slow start, fast middle, slow end</li>
          <li>linear - constant speed</li>
          <li>ease-in - slow start</li>
          <li>ease-out - slow end</li>
          <li>ease-in-out - slow start and end</li>
        </ul>
    </div>
  )
}