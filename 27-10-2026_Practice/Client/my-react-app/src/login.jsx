import { useState, useContext } from "react";

import AuthContext from "./Context";

function Login() {

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        const success = login(email, password);

        if (success) {

            setError("");

        } else {

            setError("Invalid Email or Password");

        }

    }

    return (

        <div className="login-container">

            <h2>User Login</h2>

            <form onSubmit={handleSubmit}>

                <input

                    type="email"

                    placeholder="Enter Email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }

                    required

                />

                <input

                    type="password"

                    placeholder="Enter Password"

                    value={password}

                    onChange={(e) =>
                        setPassword(e.target.value)
                    }

                    required

                />

                <button type="submit">
                    Login
                </button>

            </form>

            {error && (

                <p className="error">
                    {error}
                </p>

            )}

            <div className="credentials">

                <p><b>Demo Credentials</b></p>

                <p>Email: admin@gmail.com</p>

                <p>Password: 12345</p>

            </div>

        </div>

    );

}

export default Login;