
import { memo } from 'react';
import { CopyBlock, atomOneDark, atomOneLight } from 'react-code-blocks';
import useThemeContext from '../../../context/themeContext';
import ElementWrapper from '../../../components/ui/elementWrapper/elementWrapper';
import cssText from './verticalSwipeButton.module.css?raw';
import classes from './verticalSwipeButton.module.css';

function VerticalSwipeButton() {
  const theme = useThemeContext();
  return (
    <div>
      <h1 id='swipe'>
        Vertical Swipe Button
      </h1>
      <ElementWrapper
        backgroundColor='#222'
      >
        <a href='#swipe' className={classes.button}>
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

const NamedVerticalSwipeButton = memo(VerticalSwipeButton);

export default NamedVerticalSwipeButton;