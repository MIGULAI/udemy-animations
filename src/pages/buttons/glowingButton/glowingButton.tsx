
import { memo } from 'react';
import { CopyBlock, atomOneDark, atomOneLight } from 'react-code-blocks';
import useThemeContext from '../../../context/themeContext';
import ElementWrapper from '../../../components/ui/elementWrapper/elementWrapper';
import cssText from './glowingButton.module.css?raw';
import classes from './glowingButton.module.css';

function GlowingButton() {
  const theme = useThemeContext();
  return (
    <div>
      <h1 id='glowing'>
        Glowing Button
      </h1>
      <ElementWrapper
        backgroundColor='#222'
      >
        <a href='#glowing' className={classes.button}>
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

const NamedGlowingButton = memo(GlowingButton);

export default NamedGlowingButton;