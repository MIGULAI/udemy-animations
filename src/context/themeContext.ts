import { createContext, useContext } from 'react';

export type Theme = 'light' | 'dark';

const initialTheme: Theme = 'light';

export const ThemeContext = createContext<Theme>(initialTheme);

const useThemeContext = () => useContext<Theme>(ThemeContext);

export default useThemeContext;