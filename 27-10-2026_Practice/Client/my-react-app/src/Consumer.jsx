import UserContext from "./Context";

function ConsumerExample() {

    return (

        <UserContext.Consumer>

            {(contextValue) => (

                <div className="card">

                    <h2>Consumer Pattern</h2>

                    <p>
                        Name: {contextValue.userDetails.name}
                    </p>

                    <p>
                        Email: {contextValue.userDetails.email}
                    </p>

                </div>

            )}

        </UserContext.Consumer>

    );

}

export default ConsumerExample;