import { Link } from "react-router-dom";

function Students() {

    const students = [
        {
            id: 101,
            name: "Saiyam",
            course: "CSE"
        },
        {
            id: 102,
            name: "Stuti",
            course: "ECE"
        },
        {
            id: 103,
            name: "Priya",
            course: "CSE"
        }
    ];

    return (
        <div>
            <h2>Student Directory</h2>

            {students.map((student) => (
                <div key={student.id}>

                    <h3>{student.name}</h3>

                    <p>Course: {student.course}</p>

                    <Link to={`/students/${student.id}`}>
                        View Details
                    </Link>

                    <hr />

                </div>
            ))}
        </div>
    );
}

export default Students;