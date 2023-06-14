import { useState } from "react"

function Calculator() {
  const [result, setResult] = useState(0)
  const [opr, setOpr] = useState("add")

  const handleSubmit = function (event) {
    event.preventDefault()
    var num1 = event.target.num1.value
    var num2 = event.target.num2.value
    var val1 = Number(num1)
    var val2 = Number(num2)
    if (opr === "add") {
      setResult(val1 + val2)
    } else if (opr === "sub") {
      setResult(val1 - val2)
    } else if (opr === "mul") {
      setResult(val1 * val2)
    } else if (opr === "div") {
      setResult(val1 / val2)
    }
  }

  const handleChange = function (event) {
    setOpr(event.target.value)
  }


	return <div style={{ display: "flex", justifyContent: "center" }}>
				<form onSubmit={handleSubmit}>
                <h1 style={{textAlign: "center" }}>Calculator</h1>
                    Enter number 1: <input type="text" name="num1" /> <br/>
                    Enter number 2: <input type="text" name="num2" /> <br/>
                    Opration: <input type="radio" name="opr" value="add" onChange={handleChange} />Add
                    <input type="radio" name="opr" value="sub" onChange={handleChange} />Sub
                    <input type="radio" name="opr" value="mul" onChange={handleChange} />Mul
                    <input type="radio" name="opr" value="div" onChange={handleChange} />Div
                     <br/>
                  <button style={{ height: '50px', width: '100px', marginLeft: '80px' }}>Calculator</button>
                <h3 style={{textAlign: "center" }}>Result is :  {result}</h3>
				</form>
        
			</div>
}
export default Calculator;