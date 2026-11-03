import { useState } from "react";
import AuthContext from "./Context";
import ThemeContext from "./Context";
import UserContext from "./Context";


function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [isAuthenticated, setIsAuthenticated] =
        useState(false);

    // Login Function
    function login(email, password) {

        // Demo authentication
        if (
            email === "admin@gmail.com" &&
            password === "12345"
        ) {

            setUser({
                name: "Nikhil",
                email: email
            });

            setIsAuthenticated(true);

            return true;
        }

        return false;
    }
    

    // Logout Function
    function logout() {

        setUser(null);

        setIsAuthenticated(false);
    }

    return (

        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                login,
                logout
            }}
        >

            {children}

        </AuthContext.Provider>

    );
}

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("light");

    // Toggle Theme
    function toggleTheme() {

        setTheme((previousTheme) => {

            return previousTheme === "light"
                ? "dark"
                : "light";

        });

    }

    return (

        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme
            }}
        >

            {children}

        </ThemeContext.Provider>

    );
}
function UserProvider({ children }) {

    const [userDetails, setUserDetails] = useState({

        name: "Nikhil",
        email: "nikhil@gmail.com",
        role: "Developer",
        department: "IT"

    });

    // Update User Details
    function updateUser(newDetails) {

        setUserDetails((previousDetails) => ({

            ...previousDetails,

            ...newDetails

        }));

    }

    return (

        <UserContext.Provider
            value={{
                userDetails,
                updateUser
            }}
        >

            {children}

        </UserContext.Provider>

    );
}
export  {AuthProvider, ThemeProvider, UserProvider};