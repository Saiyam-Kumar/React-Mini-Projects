import Home from "./home";

const Child = () => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Still no props.</p>
      <Home />
    </div>
  );
};

export default Child;