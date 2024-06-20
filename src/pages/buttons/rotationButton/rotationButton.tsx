import { memo } from 'react';
import { CopyBlock, atomOneDark, atomOneLight } from 'react-code-blocks';
import useThemeContext from '../../../context/themeContext';
import ElementWrapper from '../../../components/ui/elementWrapper/elementWrapper';
import cssText from './rotationButton.module.css?raw';
import cssTextRight from './rotationButtonRight.module.css?raw';
import classesRight from './rotationButtonRight.module.css';
import classes from './rotationButton.module.css';

function RotationButton() {
  const theme = useThemeContext();
  return (
    <div>
      <h1 id="right">
        Rotation Button
      </h1>
      <ElementWrapper>
        <a href='#right' className={classes.button}>
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
      <h3 id='left'>
        Rotation Right Button
      </h3>
      <ElementWrapper>
        <a href='#left' className={classesRight.button}>
          Hover me
        </a>
      </ElementWrapper>
      <div>
        <h2>
          CSS
        </h2>
      </div>
      <CopyBlock
        text={cssTextRight}
        language="css"
        showLineNumbers={true}
        theme={theme === 'light' ? atomOneLight : atomOneDark}
        wrapLongLines
      />
    </div>
  );
}

const NamedRotationButton = memo(RotationButton);

export default NamedRotationButton;