function FruitListDisplay(props) {
    return (
      <ol>
        {props.fruits.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }
  
  export default FruitListDisplay;  