import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === "admin" && password === "1234") {
            localStorage.setItem("isLoggedIn", "true");

            navigate("/admin/dashboard");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>

            <form onSubmit={handleLogin}>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Login
                </button>

            </form>

            <p>Username: admin</p>
            <p>Password: 1234</p>
        </div>
    );
}

export default Login;