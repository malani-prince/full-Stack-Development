import { createContext, useContext } from "react";

// * Theme context direct export.

// * Create context have may contain the default value, 
export const ThemeContext = createContext({
    // default value : is light
    themeMode: "light",

    // convert the mode into Dark
    darkTheme: () => {},

    // Convert theme into Light
    lightTheme: () => {},
})


// * Theme provider specifies in the same file 
// this is the another approach of the declare, Provider.
export const ThemeProvider = ThemeContext.Provider


// * custom Hook <This working as a Custom hook and contain the access of the ThemeContext>
export default function useTheme(){
    return useContext(ThemeContext)
}

