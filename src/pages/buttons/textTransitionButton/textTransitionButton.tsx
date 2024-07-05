import { memo } from "react";
import ElementWrapper from "../../../components/ui/elementWrapper/elementWrapper";
import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import useThemeContext from "../../../context/themeContext";
import classes from "./classes.module.css";
import cssText from "./textTransitionButton.module.css?raw";
import TextTransitionSubButton from "./button";
import rawButton from "./button?raw";


function TextTransiotionButton() {
  const theme = useThemeContext();
  return (
    <div>
      <h1 id="text">
        Text Transition Button
      </h1>
      <ElementWrapper
        backgroundColor="#333"
      >
        <div className={classes.wrapper}>
          <TextTransitionSubButton label="Hover me" />
          <TextTransitionSubButton label="Click me" />
          <TextTransitionSubButton label="Awesome" />
        </div>
      </ElementWrapper>
      <div>
        <h2>
          JSX
        </h2>
      </div>
      <CopyBlock
        text={rawButton}
        language="tsx"
        showLineNumbers={true}
        theme={theme === 'light' ? atomOneLight : atomOneDark}
        wrapLongLines
      />
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

const NamedTextTransiotionButton = memo(TextTransiotionButton);

export default NamedTextTransiotionButton;