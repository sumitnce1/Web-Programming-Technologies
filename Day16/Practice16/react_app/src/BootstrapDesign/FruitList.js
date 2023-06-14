function FruitList(props) {
  
  const handleSubmit = function (event) {
    event.preventDefault();
    var fname = event.target.fname.value;
    props.saveFriends(fname);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20vh" }}>
      <form onSubmit={handleSubmit}>
        Enter Fruit name: <input type="text" name="fname" />
        <button>Add to list</button>
      </form>
    </div>
  );
}
export default FruitList;
