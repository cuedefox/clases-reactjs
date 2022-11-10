import { createContext } from "react";

const Theme = createContext({});

const ThemeProvider = ({children}) => {
    <Theme.Provider value={{}}>
        {children}
    </Theme.Provider>
}

export default ThemeProvider;