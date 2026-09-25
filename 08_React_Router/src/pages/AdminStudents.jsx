function AdminStudents() {
    const students = [
        { id: 101, name: "Saiyam", course: "CSE" },
        { id: 102, name: "Stuti", course: "ECE" },
        { id: 103, name: "Priya", course: "CSE" }
    ];

    return (
        <div>
            <h2>Manage Students</h2>

            {students.map((student) => (
                <div key={student.id}>
                    <p>
                        {student.id} - {student.name} - {student.course}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default AdminStudents;