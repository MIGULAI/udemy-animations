
import { memo } from 'react';
import { CopyBlock, atomOneDark, atomOneLight } from 'react-code-blocks';
import useThemeContext from '../../../context/themeContext';
import ElementWrapper from '../../../components/ui/elementWrapper/elementWrapper';
import cssText from './swapButton.module.css?raw';
import classes from './swapButton.module.css';

function SwapButton() {
  const theme = useThemeContext();
  return (
    <div>
      <h1 id='swap'>
        Swap Button
      </h1>
      <ElementWrapper      >
        <a href='#swap' className={classes.button}>
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

const NamedSwapButton = memo(SwapButton);

export default NamedSwapButton;