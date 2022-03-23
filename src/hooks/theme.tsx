import { createContext, useContext, useState } from 'react'
import dark from 'styles/themes/dark'
import light from 'styles/themes/light'

interface ThemeContextProps {
  toggleTheme(): void
  theme: ThemeProps
}

interface ThemeProps {
  title: string
  colors: {
    primary: string
    secondary: string
    tertiary: string

    white: string
    black: string
    gray: string

    success: string
    warning: string
    danger: string
    eventual: string
    recurrent: string
  }
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeProps>(dark)

  const toggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light)
    } else {
      setTheme(dark)
    }
  }
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme(): ThemeContextProps {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useTheme }
