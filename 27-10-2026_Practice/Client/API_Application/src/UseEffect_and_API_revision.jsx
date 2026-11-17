import { useState, useEffect } from "react";
import axios from "axios"; // run: npm install axios

function UseEffect_and_API_Revision() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(30);
  const [method, setMethod] = useState("fetch"); // "fetch" or "axios"
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 1. useEffect WITHOUT a dependency array
  // Runs after the first render AND after every re-render.
  // (Never set state in here, or you'll get an infinite loop.)
  useEffect(() => {
    console.log("[no deps] runs after every render");
  });

  // 2. useEffect with an EMPTY dependency array
  // Runs only once, right after the component mounts.
  // The returned function is the cleanup: it runs when the component unmounts.
  useEffect(() => {
    console.log("[empty deps] component mounted");

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("[empty deps] cleanup: component unmounted");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 3. useEffect WITH dependencies
  // Runs on mount, and again whenever `count` or `method` changes.
  // The cleanup runs before the next run, so we use it to cancel the old request.
  useEffect(() => {
    const controller = new AbortController();

    async function fetchGithubUsers() {
      setLoading(true);
      setError(null);

      try {
        let data;

        if (method === "fetch") {
          // Using Fetch
          const response = await fetch(
            `https://api.github.com/users?per_page=${count}`,
            { signal: controller.signal }
          );
          // fetch does NOT throw on 404/403/500, so we check manually
          if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
          }
          data = await response.json();
        } else {
          // Using Axios (throws automatically on non-2xx, data is in response.data)
          const response = await axios.get("https://api.github.com/users", {
            params: { per_page: count },
            signal: controller.signal,
          });
          data = response.data;
        }

        console.log(data);
        setUsers(data);
        console.log("hello");
      } catch (err) {
        // Ignore errors caused by our own cleanup cancelling the request
        if (err.name === "AbortError" || axios.isCancel(err)) return;
        setError(err.message || "Something went wrong");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchGithubUsers();

    // Cleanup: cancel the in-flight request if count/method changes or unmounts
    return () => {
      console.log("[with deps] cleanup: cancelling previous request");
      controller.abort();
    };
  }, [count, method]);

  return (
    <>
      <h1>UseEffect and API Revision</h1>
      <h2>GitHub Users Profile</h2>

      <p>Window width: {windowWidth}px (updated by a listener that is cleaned up on unmount)</p>

      <div style={{ marginBottom: "10px" }}>
        <label>
          API method:{" "}
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="fetch">Fetch</option>
            <option value="axios">Axios</option>
          </select>
        </label>
      </div>

      <input
        type="number"
        value={count}
        min={1}
        placeholder="Set User Count"
        style={{ padding: "10px", width: "300px", marginBottom: "20px" }}
        onChange={(e) => setCount(parseInt(e.target.value, 10) || 1)}
      />

      {/* Loading state */}
      {loading && <p>Loading users...</p>}

      {/* Error state */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <div
        className="users-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Display API data dynamically using map() */}
        {users.map((user) => (
          <div
            key={user.id}
            className="user-card"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <h3>{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default UseEffect_and_API_Revision;