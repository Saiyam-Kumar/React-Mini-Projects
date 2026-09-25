import { Link, Outlet } from "react-router-dom";

function Admin() {
    return (
        <div>
            <h2>Admin Panel</h2>

            <nav>
                <Link to="/admin/dashboard" style={{ marginRight: "15px" }}>
                    Dashboard
                </Link>

                <Link to="/admin/students">
                    Manage Students
                </Link>
            </nav>

            <hr />

            <Outlet />
        </div>
    );
}

export default Admin;