import { useContext } from "react";

import UserContext from "./Context";

function UserDetails() {

    const {
        userDetails,
        updateUser
    } = useContext(UserContext);

    return (

        <div className="card">

            <h2>Shared User Details</h2>

            <p>Name: {userDetails.name}</p>

            <p>Email: {userDetails.email}</p>

            <p>Role: {userDetails.role}</p>

            <button
                onClick={() =>
                    updateUser({
                        department: "Software Development"
                    })
                }
            >
                Update Department

            </button>

        </div>

    );

}

export default UserDetails;