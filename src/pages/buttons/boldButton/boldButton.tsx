import { CopyBlock,  atomOneDark, atomOneLight } from "react-code-blocks";
import ElementWrapper from "../../../components/ui/elementWrapper/elementWrapper";
import useThemeContext from "../../../context/themeContext";
import { memo } from "react";
import cssText from "./boldButton.module.css?raw";
import classes from "./boldButton.module.css";

function BoldButton() {
  const theme = useThemeContext();
  return (
    <div>
      <h1 id="bold">
        Bold Button
      </h1>
      <ElementWrapper>
        <a href='#bold' className={classes.button}>
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

const NamedBoldButton = memo(BoldButton);

export default NamedBoldButton;