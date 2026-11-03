import { useContext } from "react";

import AuthContext from "./Context";
import ThemeContext from "./Context";

function Navbar() {

    const {
        user,
        isAuthenticated,
        logout
    } = useContext(AuthContext);

    const {
        theme,
        toggleTheme
    } = useContext(ThemeContext);

    return (

        <nav className="navbar">

            <h2>Context Dashboard</h2>

            <div className="nav-actions">

                <button onClick={toggleTheme}>
                    {theme === "light"
                        ? "Dark Mode"
                        : "Light Mode"}
                </button>

                {isAuthenticated && (

                    <>

                        <span>
                            Welcome, {user.name}
                        </span>

                        <button onClick={logout}>
                            Logout
                        </button>

                    </>

                )}

            </div>

        </nav>

    );
}

export default Navbar;