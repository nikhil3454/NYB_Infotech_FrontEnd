
import React, { useState, useEffect } from "react";

function Revision() {

    // 1. STATE MANAGEMENT

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [search, setSearch] = useState("");

    const [selectedUser, setSelectedUser] = useState(null);


    // 2. API INTEGRATION USING useEffect()

    useEffect(() => {

        const controller = new AbortController();

        async function fetchUsers() {

            try {

                setLoading(true);
                setError("");

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users",
                    { signal: controller.signal }
                );

                // Check API response

                if (!response.ok) {
                    throw new Error("Unable to fetch users");
                }

                // Convert response into JSON

                const data = await response.json();

                // Store API response in state

                setUsers(data);

            }

            catch (err) {

                if (err.name !== "AbortError") {
                    setError(err.message);
                }

            }

            finally {

                if (!controller.signal.aborted) {
                    setLoading(false);
                }

            }

        }

        fetchUsers();

        // Cleanup function

        return () => {
            controller.abort();
        };

    }, []);


    // 3. SEARCH FUNCTIONALITY

    const filteredUsers = users.filter((user) => {

        return (
            user.name.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase())
        );

    });


    // 4. CONDITIONAL RENDERING

    if (loading) {

        return (
            <div style={styles.container}>
                <h2>Loading Users...</h2>
                <p>Please wait while we fetch data from API.</p>
            </div>
        );

    }


    if (error) {

        return (
            <div style={styles.container}>
                <h2>Error Occurred!</h2>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>
                    Retry
                </button>
            </div>
        );

    }


    // 5. MAIN UI

    return (

        <div style={styles.container}>

            <h1>User Management Application</h1>

            <p>Total Users: {users.length}</p>


            {/* SEARCH INPUT */}

            <input
                type="text"
                placeholder="Search by name or email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={styles.input}
            />


            {/* CONDITIONAL RENDERING */}

            {filteredUsers.length === 0 ? (

                <h3>No Users Found!</h3>

            ) : (

                <div style={styles.grid}>

                    {/* 6. MAP METHOD */}

                    {filteredUsers.map((user) => (

                        <div key={user.id} style={styles.card}>

                            <h2>{user.name}</h2>

                            <p>
                                <b>Email:</b> {user.email}
                            </p>

                            <p>
                                <b>Phone:</b> {user.phone}
                            </p>

                            <p>
                                <b>City:</b> {user.address.city}
                            </p>


                            {/* CONDITIONAL RENDERING */}

                            {user.id % 2 === 0 ? (

                                <p style={{ color: "green" }}>
                                    Even User ID
                                </p>

                            ) : (

                                <p style={{ color: "blue" }}>
                                    Odd User ID
                                </p>

                            )}


                            {/* SELECT USER BUTTON */}

                            <button
                                onClick={() => setSelectedUser(user)}
                            >
                                View Details
                            </button>

                        </div>

                    ))}

                </div>

            )}


            {/* SELECTED USER DETAILS */}

            {selectedUser && (

                <div style={styles.details}>

                    <h2>Selected User Details</h2>

                    <p>ID: {selectedUser.id}</p>

                    <p>Name: {selectedUser.name}</p>

                    <p>Email: {selectedUser.email}</p>

                    <p>Company: {selectedUser.company.name}</p>

                    <button
                        onClick={() => setSelectedUser(null)}
                    >
                        Close Details
                    </button>

                </div>

            )}

        </div>

    );

}


// 7. INLINE CSS STYLES

const styles = {

    container: {
        padding: "30px",
        fontFamily: "Arial",
        textAlign: "center"
    },

    input: {
        padding: "12px",
        width: "300px",
        margin: "20px",
        borderRadius: "5px",
        border: "1px solid gray"
    },

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
    },

    card: {
        border: "1px solid gray",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "left",
        backgroundColor: "#f5f5f5"
    },

    details: {
        marginTop: "30px",
        padding: "20px",
        border: "2px solid green",
        borderRadius: "10px"
    }

};

export default Revision;
