import { useParams } from "react-router-dom";

function StudentDetails() {

    const { id } = useParams();

    return (
        <div>
            <h2>Student Details</h2>

            <p>Student ID: {id}</p>

            <p>
                Details of student with ID {id}
            </p>
        </div>
    );
}

export default StudentDetails;