import { useState } from "react";
import { Theme, ThemeContext } from "./themeContext";
import ThemeButton from "../components/functions/themeButton/themeButton";

type Props = {
  children: React.ReactNode;
};


export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = (theme: Theme) => {
    setTheme(theme);
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div >
        <ThemeButton onClick={toggleTheme} />
      </div>
      {children}
    </ThemeContext.Provider >
  )
}