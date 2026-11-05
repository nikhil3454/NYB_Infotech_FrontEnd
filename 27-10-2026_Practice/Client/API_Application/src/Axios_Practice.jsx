import axios  from "axios";
import { useEffect, useState } from "react";
// get data from API using axios and display it in a list   
function Axios_Practice_get() {
    const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchUsers = async () => {

      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users ", { timeout: 5000 }
        );

    
        setUsers(response.data);

      } catch (err){

        setError("Failed to fetch users");

      } finally {

        setLoading(false);

      }
    };

    fetchUsers();

  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (users.length === 0) {
    return <h2>No users found</h2>;
  }

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

// Post request using axios and display the response in the console
function AddUser() {
  const [newUser, setNewUser] = useState(null);
  const [error, setError] = useState(null);

  const addUser = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          name: "Nikhil",
          email: "nikhil@gmail.com",
          username: "nikhil123",

        }
      );

      setNewUser(response.data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Could not register user.");
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <button onClick={addUser}>Register User</button>

      {error && <p>{error}</p>}

      {newUser && (
        <div>
          <h3>User Registered</h3>
          <p>ID: {newUser.id}</p>
          <p>Name: {newUser.name}</p>
          <p>Username: {newUser.username}</p>
          <p>Email: {newUser.email}</p>
        </div>
      )}
    </div>
  );
}
const updateUser = async (userId, updatedData) => {
  try {
    const response = await axios.put("https://jsonplaceholder.typicode.com/users/" + userId, updatedData);
    console.log("User updated:", response.data);
  } catch (error) {
    console.error("Error updating user:", error);
  }
};
updateUser(1, { name: "Updated Name", email: "updated@gmail.com" });
const updateEmail = async () => {

  try {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/users/1",
      {
        email: "updated@gmail.com"
      }
    );

    console.log(response.data);

  } catch (error) {
    console.log(error);
  }
};
updateEmail();
const deleteUser = async () => {

  try {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    console.log("User deleted successfully");

  } catch (error) {
    console.log(error);
  }
};
deleteUser();
// axios using then and catch
    axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });  
// Axios instanace 
const api = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});
// using the Axios api instance to make a GET request to the /getsalesbymonth endpoint
async function getSales() {

  try {

    const response = await api.get("/getsalesbymonth");

    console.log(response.data);

  } catch (error) {

    console.log(error);

  }
}

// export the component
export  {Axios_Practice_get,AddUser,updateUser,updateEmail,deleteUser};
