
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

// * Step - 1 : Use theme provider for the parsing data.
// * Step - 2 : Value access <passes from the theme.js file the default value are called>
// * Step - 3 : useState create for the handle the mode 
// *          : [themeMode, setThemeMode] = useState("light")
// *          : default is light background
// * Step - 4 : now create the function with same name we represented into theme.js file
// *          : 1. darkTheme      2. lightTheme
// *          : this function change the state we define above.
// * Step - 5 : change in color. <how actual working is going>
// * step - 6 : useEffect hook is use and add the dependent array <themeMode>
// *          : add the class name className = "themeMode".
// *          : remove the default color from the html tag.


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">

          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
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
