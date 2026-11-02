import { useState, Component} from 'react'

import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router';
import {Home,About,Products} from "./pages" 
function Button({ children, onClick, className = "" }) {
  return (
    <button
      type="button"
      className={`custom-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
class Welcome extends Component {
  render() {
    return <h1>Welcome to React!</h1>;
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [message,setMessage]=useState("Welcome")
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [messages, setMessages] = useState("Move your mouse over the box");
  const [keyMessage, setKeyMessage] = useState("Press a key");
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Keyboard" }
  ]);
  // event based state changes
 function changeMessage() {
    setMessage("Hello, React!");
  }
   // onClick: Counter
  function increaseCount() {
    setCount(previous => previous + 1);
  }

  function decreaseCount() {
    setCount(previous => previous - 1);
  }

  function resetCount() {
    setCount(0);
  }

  // onChange: Input handling
  function handleNameChange(event) {
    setName(event.target.value);
    console.log("Input value:", event.target.value);
  }

  // onSubmit: Form handling
  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    setSubmittedName(name.trim());
    setName("");
  }

  // Mouse events
  function handleMouseEnter() {
    setMessage("Mouse entered the box!");
  }

  function handleMouseLeave() {
    setMessage("Mouse left the box!");
  }

  function handleMouseMove(event) {
    console.log(
      "Mouse position:",
      event.clientX,
      event.clientY
    );
  }

  // Keyboard events
  function handleKeyDown(event) {
    setKeyMessage(`You pressed: ${event.key}`);

    if (event.key === "Escape") {
      setKeyMessage("Escape pressed!");
    }

    if (event.key === "Enter") {
      console.log("Enter key pressed");
    }
  }

  function handleKeyUp(event) {
    console.log("Key released:", event.key);
  }

  // Event object
  function handleInspectClick(event) {
    console.log("Event type:", event.type);
    console.log("Target:", event.target);
    console.log("Current target:", event.currentTarget);
  }

  // Passing arguments to event handlers
  function showProduct(productId, event) {
    console.log("Product ID:", productId);
    console.log("Event type:", event.type);
  }

  function deleteProduct(productId) {
    setProducts(previous =>
      previous.filter(product => product.id !== productId)
    );
  }


  return (
    <>
    <BrowserRouter>
      <div className="app">
        <Header />
        <h1 id="message">Hello World React</h1>
        <Content />
        <div>
          <h2>{message}</h2>
          <button onClick={changeMessage}>
            Change Message
          </button>
        </div>
        <div>
          <Profile
            name="Nikhil"
            age={22}
            isStudent={true}
            skills={["React", "JavaScript", "SQL"]} />
        </div>

        {/* Counter Section */}
        <section>
          <h2>Counter Application</h2>

          <h3>Count: {count}</h3>

          <Button className='Increment' onClick={() => setCount(count + 1)}>
            Increase
          </Button>

          <Button className='decrement' onClick={() => setCount(count - 1)}>
            Decrease
          </Button>

          <Button onClick={() => setCount(0)}>
            Reset
          </Button>
        </section>

        {/* Welcome Section */}
        <section>
          <h2>My First React App</h2>

          <p>I am learning React step by step.</p>

          <Button onClick={() => alert("Welcome!")}>
            Click Me
          </Button>
          <Button onClick={sayHello}> Click me to get the alert</Button>
        </section>

        {/* Navigation Section */}
        <nav>
          <Link to="/">Home</Link>{" | "}
          <Link to="/about">About</Link>{" | "}
          <Link to="/products">Products</Link>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <div>
          <h2>I am the parent component.</h2>
          <Child name='nikhil' />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    <section>
    <h1>React Event Handling Practice</h1>

      {/* 1. onClick */}
      <section>
        <h2>1. onClick - Counter</h2>

        <p>Count: {count}</p>

        <button onClick={increaseCount}>
          Increase
        </button>

        <button onClick={decreaseCount}>
          Decrease
        </button>

        <button onClick={resetCount}>
          Reset
        </button>
      </section>

      {/* 2. onChange */}
      <section>
        <h2>2. onChange - Input</h2>

        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />

        <p>Current input: {name}</p>
      </section>

      {/* 3. onSubmit */}
      <section>
        <h2>3. onSubmit - Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name and submit"
            required
          />

          <button type="submit">
            Submit
          </button>
        </form>

        {submittedName && (
          <p>Submitted name: {submittedName}</p>
        )}
      </section>

      {/* 4. Mouse events */}
      <section>
        <h2>4. Mouse Events</h2>

        <div
          className="mouse-box"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onDoubleClick={() => alert("Double-click detected!")}
        >
          {message}
          <p>Move your mouse or double-click here.</p>
        </div>
      </section>

      {/* 5. Keyboard events */}
      <section>
        <h2>5. Keyboard Events</h2>

        <input
          type="text"
          placeholder="Press Enter or Escape"
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        />

        <p>{keyMessage}</p>
      </section>

      {/* 6. Event object */}
      <section>
        <h2>6. Event Object</h2>

        <button onClick={handleInspectClick}>
          Inspect Event in Console
        </button>

        <a
          href="https://example.com"
          onClick={event => {
            event.preventDefault();
            console.log("Default navigation prevented");
          }}
        >
          Test preventDefault
        </a>
      </section>

      {/* 7. Passing arguments */}
      <section>
        <h2>7. Passing Arguments</h2>

        {products.map(product => (
          <div key={product.id} className="product">
            <span>
              {product.id}. {product.name}
            </span>

            <button
              onClick={event => showProduct(product.id, event)}
            >
              Select
            </button>

            <button
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        ))}

        {products.length === 0 && <p>No products remaining.</p>}
      </section>
  </section>
    </>
  );
}
function Child({name}) {
  return <p>I am the child component and my name is {name}.</p>;
}
function Header() {
  return <h1>My Website</h1>;
}

function Content() {
  return <p>Learn React step by step.</p>;
}

function Footer() {
  return <footer>Copyright 2026</footer>;
}
function Profile({ name, age, isStudent, skills }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
      <p>Skills: {skills.join(", ")}</p>
    </div>
  );
}
function Counter() {
  let count = 0;

  const increment = () => {
    count++;
    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </>
  );
}
// event based state changes
 function changeMessage() {
    setMessage("Hello, React!");
  }
function sayHello() {
    alert("Hello!");
  }

export default App
