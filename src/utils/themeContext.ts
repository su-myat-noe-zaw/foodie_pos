import { createContext } from 'react';
import { Theme } from '@mui/material/styles';

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: {} as Theme,
  toggleTheme: () => {},
} as const);
