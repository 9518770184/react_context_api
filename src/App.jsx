import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/ThemeContext'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState('light');
  const setLightTheme = () => {
    setThemeMode('light');
  }
  const setDarkTheme = () => {
    setThemeMode('dark');
  }

  useEffect(() => {
    const elment = document.querySelector('html');
    elment.classList?.remove("light", "dark");
    elment?.classList?.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, setDarkTheme, setLightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
