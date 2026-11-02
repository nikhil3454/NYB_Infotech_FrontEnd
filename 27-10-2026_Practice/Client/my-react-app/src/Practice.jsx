import React, { createContext, useContext, useState } from "react";

/*
==================================================
1. Creating Context
==================================================
*/
const UserContext = createContext();

function Practice() {
  /*
  ==================================================
  2. Global State
  ==================================================
  */
  const [user, setUser] = useState("Nikhil");

  return (
    /*
    ==================================================
    3. Provider
    ==================================================
    */
    <UserContext.Provider value={{ user, setUser }}>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Context API Demo</h1>

        <p>
          Global User State in App: <b>{user}</b>
        </p>

        {/*
          Passing user as props to Parent
          (Props Example)
        */}
        <Parent user={user} />
      </div>
    </UserContext.Provider>
  );
}

/*
==================================================
Props Example
==================================================
*/
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

      <p>Received via Props: {user}</p>

      {/*
        Passing props further down
        (Prop Drilling Starts)
      */}
      <Child user={user} />
    </div>
  );
}

/*
==================================================
Prop Drilling Example
==================================================
*/
function Child({ user }) {
  return (
    <div
      style={{
        border: "2px solid green",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h3>Child Component</h3>

      <p>
        Child doesn't need user, but still passes it
        to GrandChild.
      </p>

      {/*
        Prop Drilling
      */}
      <GrandChild user={user} />
    </div>
  );
}

/*
==================================================
Consumer using useContext
==================================================
*/
function GrandChild({ user }) {
  const { setUser } = useContext(UserContext);

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "15px",
        marginTop: "10px",
      }}
    >
      <h4>GrandChild Component</h4>

      {/* Value received through Prop Drilling */}
      <p>
        User via Props: <b>{user}</b>
      </p>

      {/* Value received directly from Context */}
      <ContextConsumer />

      <button onClick={() => setUser("John")}>
        Change User to John
      </button>
    </div>
  );
}

/*
==================================================
Context Consumer Component
==================================================
*/
function ContextConsumer() {
  const { user } = useContext(UserContext);

  return (
    <div
      style={{
        background: "#f3f3f3",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <p>
        User via Context API: <b>{user}</b>
      </p>
    </div>
  );
}

export default Practice;

/*
==================================================
CONCEPTS COVERED
==================================================

✅ Props
   App -> Parent

✅ Prop Drilling
   Parent -> Child -> GrandChild

✅ Creating Context
   const UserContext = createContext();

✅ Provider
   <UserContext.Provider>

✅ Consumer
   useContext(UserContext)

✅ Global State
   const [user, setUser] = useState("Nikhil")

✅ Context vs Props

   Props:
   App -> Parent -> Child -> GrandChild

   Context:
   Any component can directly access user:
   const { user } = useContext(UserContext)

==================================================
*/