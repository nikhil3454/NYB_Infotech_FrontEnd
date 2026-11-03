import { useContext } from "react";

import ThemeContext from "./Context";

function Settings() {

    const {
        theme,
        toggleTheme
    } = useContext(ThemeContext);

    return (

        <div className="card">

            <h2>Settings</h2>

            <p>
                Current Theme: {theme}
            </p>

            <button onClick={toggleTheme}>

                Switch to {theme === "light"
                    ? "Dark"
                    : "Light"} Mode

            </button>

        </div>

    );

}

export default Settings;