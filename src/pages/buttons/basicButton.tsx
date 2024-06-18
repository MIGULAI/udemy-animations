
import { CopyBlock, atomOneDark, atomOneLight } from 'react-code-blocks';
import ElementWrapper from '../../components/ui/elementWrapper/elementWrapper';
import buttonClasses from './basicButton.module.css';
import cssText from './basicButton.module.css?raw';
import oneLineTrasnsion from './basicButtonOneLineTransitions.module.css';
import oneLineTrasnsionText from './basicButtonOneLineTransitions.module.css?raw';

import useThemeContext from '../../context/themeContext';

export const BasicButton = () => {
  const theme = useThemeContext();
  return (
    <div>
      <h1>
        Basic Button
      </h1>
      <ElementWrapper>
        <button className={buttonClasses.button}>
          Button
        </button>
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
        <h2>One Line Transitions</h2>
      </div>
      <ElementWrapper>
        <button className={oneLineTrasnsion.button}>
          Button
        </button>
      </ElementWrapper>
      <div>
        <h2>
          CSS
        </h2>
      </div>
      <CopyBlock
        text={oneLineTrasnsionText}
        language="css"
        showLineNumbers={true}
        theme={theme === 'light' ? atomOneLight : atomOneDark}
        wrapLongLines
      />
    </div>

  )

};