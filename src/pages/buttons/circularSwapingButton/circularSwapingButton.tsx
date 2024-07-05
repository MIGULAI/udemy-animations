import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import ElementWrapper from "../../../components/ui/elementWrapper/elementWrapper";
import useThemeContext from "../../../context/themeContext";
import { memo } from "react";

import classes from "./circularSwapingButton.module.css";
import cssText from "./circularSwapingButton.module.css?raw";

function CircularSwapingButton() {
  const theme = useThemeContext();

  return (
    <div>
      <h1 id="right">
      Circular Swaping Button
      </h1>
      <ElementWrapper>
        <button className={classes.button}>
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
    </div>
  );
}

const NamedCircularSwapingButton = memo(CircularSwapingButton);

export default NamedCircularSwapingButton;