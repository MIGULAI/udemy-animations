import ElementWrapper from "../../../components/ui/elementWrapper/elementWrapper";
import useThemeContext from "../../../context/themeContext";
import cssText from "./wavyLoader.module.css?raw";
import classes from "./wavyLoader.module.css";
import { CopyBlock, atomOneDark, atomOneLight } from "react-code-blocks";
import "@fontsource/poppins/800.css";

export default function WavyLoader() {
  const theme = useThemeContext();

  return (
    <div>
      <h1 id="wavy">
        Wavy Loader
      </h1>
      <ElementWrapper
      backgroundColor="#111"
      >
        <div className={classes.loader}>
          <span style={{ "--i": 1 } as React.CSSProperties}>L</span>
          <span style={{ "--i": 2 } as React.CSSProperties}>o</span>
          <span style={{ "--i": 3 } as React.CSSProperties}>a</span>
          <span style={{ "--i": 4 } as React.CSSProperties}>d</span>
          <span style={{ "--i": 5 } as React.CSSProperties}>i</span>
          <span style={{ "--i": 6 } as React.CSSProperties}>n</span>
          <span style={{ "--i": 7 } as React.CSSProperties}>g</span>
          <span style={{ "--i": 8 } as React.CSSProperties}>.</span>
          <span style={{ "--i": 9 } as React.CSSProperties}>.</span>
          <span style={{ "--i": 10 } as React.CSSProperties}>.</span>
        </div>
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
  )
}