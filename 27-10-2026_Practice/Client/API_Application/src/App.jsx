
import { useState } from "react";

import {StudentForm,StudentList,StudentStats} from "./Redux_and_redux_toolkit_revision.jsx";

function App() {

    const [editStudent, setEditStudent] = useState(null);

    return (

        <div className="app-container">

            <h1>Student Management Application</h1>

            <StudentStats />

            <StudentForm
                onReady={(handleEdit) => {
                    setEditStudent(() => handleEdit);
                }}
            />

            <StudentList
                onEdit={(id) => editStudent?.(id)}
            />

        </div>

    );

}

export default App;
