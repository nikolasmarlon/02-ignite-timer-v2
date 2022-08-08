import { ThemeProvider } from 'styled-components' 
import { useState } from 'react'
import { defaultTheme } from './styles/themes/default'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Alô Mundo!</h1>
    </ThemeProvider>
  )
}


