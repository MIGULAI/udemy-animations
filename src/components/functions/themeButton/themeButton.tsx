import useThemeContext, { Theme } from "../../../context/themeContext";

type Props = {
  onClick: (data: Theme) => void;
}

export default function ThemeButton({ onClick }: Props) {
  const theme = useThemeContext()
  
  const clickHandler = () => {
    if (theme === 'light') {
      onClick('dark');
    } else {
      onClick('light');
    }
  }
  
  return (
    <button onClick={clickHandler}>Change theme</button>
  )
}