import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "15px", background: "#ddd" }}>

            <Link to="/" style={{ marginRight: "15px" }}>
                Home
            </Link>

            <Link to="/about" style={{ marginRight: "15px" }}>
                About
            </Link>

            <Link to="/contact" style={{ marginRight: "15px" }}>
                Contact
            </Link>

            <Link to="/students" style={{ marginRight: "15px" }}>
                Students
            </Link>

            <Link to="/register" style={{ marginRight: "15px" }}>
                Register
            </Link>

            <Link to="/login">
                Admin Login
            </Link>

        </nav>
    );
}

export default Navbar;