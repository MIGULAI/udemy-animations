import { memo } from 'react';
import { CopyBlock, atomOneDark, atomOneLight } from 'react-code-blocks';
import useThemeContext from '../../../context/themeContext';
import ElementWrapper from '../../../components/ui/elementWrapper/elementWrapper';
import cssText from './fractalButton.module.css?raw';
import classes from './fractalButton.module.css';
import "@fontsource/roboto";

function FractalButton() {
  const theme = useThemeContext();
  return (
    <div>
      <h1 id="fractal">
        Fractal Button
      </h1>
      <ElementWrapper>
        <a href='#fractal' className={classes.button}>
          Hover me
        </a>
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

    </div>
  );
}

const NamedFractalButton = memo(FractalButton);

export default NamedFractalButton;