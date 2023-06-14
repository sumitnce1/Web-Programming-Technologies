function FruitListDisplay({ fruit }) {
    return (
      <ol>
        {fruit.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }
  
  export default FruitListDisplay;  