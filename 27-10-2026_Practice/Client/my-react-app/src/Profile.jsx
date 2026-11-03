import { useContext } from "react";

import UserContext from "./Context";

function Profile() {

    const {
        userDetails,
        updateUser
    } = useContext(UserContext);

    function changeName() {

        updateUser({
            name: "Nikhil Kumar"
        });

    }

    function changeRole() {

        updateUser({
            role: "React Developer"
        });

    }

    return (

        <div className="card">

            <h2>User Profile</h2>

            <p>Name: {userDetails.name}</p>

            <p>Email: {userDetails.email}</p>

            <p>Role: {userDetails.role}</p>

            <p>
                Department: {userDetails.department}
            </p>

            <button onClick={changeName}>
                Update Name
            </button>

            <button onClick={changeRole}>
                Update Role
            </button>

        </div>

    );

}

export default Profile;