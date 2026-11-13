
import { useState,useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
    addStudent,
    updateStudent,
    deleteStudent,
} from "./Student_Slice.jsx";

function StudentForm({onReady}) {

    const dispatch = useDispatch();
    useEffect(() => {

    onReady?.(handleEdit);

}, [onReady]);

    // Access students from Redux Store
    const students = useSelector(
        (state) => state.students.students
    );

    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [email, setEmail] = useState("");

    const [editId, setEditId] = useState(null);

    // Handle form submission
    const handleSubmit = (e) => {

        e.preventDefault();

        if (!name.trim() || !course.trim() || !email.trim()) {
            alert("Please fill all fields");
            return;
        }

        if (editId !== null) {

            // Update existing student
            dispatch(updateStudent({
                id: editId,
                name,
                course,
                email
            }));

            setEditId(null);

        } else {

            // Add new student
            const newStudent = {

                id: Date.now(),

                name,

                course,

                email

            };

            dispatch(addStudent(newStudent));

        }

        // Clear input fields
        setName("");
        setCourse("");
        setEmail("");

    };

    // Load student details into form
    const handleEdit = (id) => {

        const student = students.find(
            (student) => student.id === id
        );

        if (student) {

            setName(student.name);
            setCourse(student.course);
            setEmail(student.email);

            setEditId(id);

        }

    };

    return (

        <div className="form-container">

            <h2>
                {editId !== null
                    ? "Update Student"
                    : "Add Student"}
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit">
                    {editId !== null
                        ? "Update Student"
                        : "Add Student"}
                </button>

                {editId !== null && (

                    <button
                        type="button"
                        onClick={() => {

                            setEditId(null);
                            setName("");
                            setCourse("");
                            setEmail("");

                        }}
                    >
                        Cancel Edit
                    </button>

                )}

            </form>

        </div>

    );

}
function StudentList({ onEdit }) {

    const dispatch = useDispatch();

    // Read student data from Redux
    const students = useSelector(
        (state) => state.students.students
    );

    const handleDelete = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (confirmDelete) {

            dispatch(deleteStudent(id));

        }

    };

    return (

        <div className="list-container">

            <h2>Student List</h2>

            {students.length === 0 ? (

                <p>No students available</p>

            ) : (

                <table>

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>

                    </thead>

                    <tbody>

                        {students.map((student) => (

                            <tr key={student.id}>

                                <td>{student.id}</td>

                                <td>{student.name}</td>

                                <td>{student.course}</td>

                                <td>{student.email}</td>

                                <td>

                                    <button
                                        onClick={() => onEdit(student.id)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => handleDelete(student.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );

}
function StudentStats() {

    const totalStudents = useSelector(
        (state) => state.students.totalStudents
    );

    const students = useSelector(
        (state) => state.students.students
    );

    return (

        <div className="stats-container">

            <h2>Student Statistics</h2>

            <h3>
                Total Students: {totalStudents}
            </h3>

            <h3>
                Available Courses: {
                    new Set(
                        students.map((student) => student.course)
                    ).size
                }
            </h3>

        </div>

    );

}


export  {StudentForm, StudentList, StudentStats};
