import { useState } from "react";
import { useContext } from "react";

import AuthContext from "./Context";
import ThemeContext from "./Context";

import Navbar from "./Navbar";
import Login from "./login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

import UserDetails from "./UserDetails";
import ConsumerExample from "./Consumer";


function ContextAPI() {
  const [count, setCount] = useState(0);
  const user = {
    name: "Nikhil",
    role: "Associate Software Engineer",
  };
  const { isAuthenticated } =
        useContext(AuthContext);

    const { theme } =
        useContext(ThemeContext);

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Props Drilling Example</h1>
        <Parent user={user} />
      </div>
      <div className={`app ${theme}`}>

            <Navbar />

            {!isAuthenticated ? (

                <Login />

            ) : (

                <>

                    <Dashboard />

                    <div className="container">

                        <Profile />

                        <Settings />

                        <UserDetails />

                        <ConsumerExample />

                    </div>

                </>

            )}


        </div>
    </>
  );
}

function Parent({ user }) {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h2>Parent Component</h2>
      <Child user={user} />
    </div>
  );
}

function Child({ user }) {
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h2>Child Component</h2>
      <GrandChild user={user} />
    </div>
  );
}

function GrandChild({ user }) {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h2>GrandChild Component</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Role:</strong> {user.role}
      </p>
    </div>
  );
}

export default ContextAPI;