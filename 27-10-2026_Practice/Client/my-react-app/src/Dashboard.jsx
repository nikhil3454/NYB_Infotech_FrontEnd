import { useContext } from "react";

import AuthContext from "./Context";

import UserContext from "./Context";

function Dashboard() {

    const { user } = useContext(AuthContext);

    const { userDetails } = useContext(UserContext);

    return (

        <div className="dashboard">

            <h1>Dashboard</h1>

            <h2>
                Welcome {user.name}
            </h2>

            <p>
                Login Email: {user.email}
            </p>

            <hr />

            <h3>Application User Information</h3>

            <p>
                Name: {userDetails.name}
            </p>

            <p>
                Role: {userDetails.role}
            </p>

            <p>
                Department: {userDetails.department}
            </p>

        </div>

    );

}

export default Dashboard;