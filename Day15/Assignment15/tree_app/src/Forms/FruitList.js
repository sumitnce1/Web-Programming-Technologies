import { useState } from "react";
import FruitListDisplay from "./FruitListDisplay";

function FruitList() {
  const [fruit, setFruit] = useState([]);

  const handleSubmit = function (event) {
    event.preventDefault();
    var fname = event.target.fname.value;
    setFruit([...fruit, fname]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20vh" }}>
      <form onSubmit={handleSubmit}>
        Enter Fruit name: <input type="text" name="fname" />
        <button>Add to list</button>
      </form>
      <FruitListDisplay fruit={fruit} />
    </div>
  );
}
export default FruitList;
