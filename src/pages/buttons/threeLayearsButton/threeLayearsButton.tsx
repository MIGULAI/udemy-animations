import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import ElementWrapper from "../../../components/ui/elementWrapper/elementWrapper";
import useThemeContext from "../../../context/themeContext";
import { memo } from "react";
import classes from "./threeLayearsButton.module.css";
import cssText from "./threeLayearsButton.module.css?raw";


function ThreeLayearsButton() {
  const theme = useThemeContext();
  return (
    <div>
      <h1 id="three">
        Three Layers Button
      </h1>
      <ElementWrapper
        backgroundColor="#212121"
      >
        <a href='#three' className={classes.button}>
          button
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

const NamedThreeLayearsButton = memo(ThreeLayearsButton);

export default NamedThreeLayearsButton;