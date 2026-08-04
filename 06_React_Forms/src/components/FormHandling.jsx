import React from "react";

const FormHandling = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with values:", {
      name,
      email,
      message,
    });

    // Clear the form after submit
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <label>Message:</label>
        <br />
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <br />
        <br />

        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormHandling;