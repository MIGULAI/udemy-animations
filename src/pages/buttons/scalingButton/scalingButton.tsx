import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import ElementWrapper from "../../../components/ui/elementWrapper/elementWrapper";
import useThemeContext from "../../../context/themeContext";
import cssText from "./scalingButton.module.css?raw";
import classes from "./scalingButton.module.css";
import { memo } from "react";

export default function ScalingButton() {
  const theme = useThemeContext();
  return (
    <div>
      <h1 id="right">
      Scale Button
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
    </div>
  );

}

const NamedScalingButton = memo(ScalingButton);

export { NamedScalingButton };