import {useState} from "react"

function Calculator(){
	//var result = 0
	const [result, setResult] = useState(0)
	const handleSubmit = function(event){
		event.preventDefault() // stop form's default behaviour
		var num1 = event.target.num1.value
		var num2 = event.target.num2.value
		setResult(Number(num1) + Number(num2))
	}

	return <div>
				<form onSubmit={handleSubmit}>
					Enter number 1: <input type="text" name="num1" />
					Enter number 2: <input type="text" name="num2" />
					<button>Add</button>
				</form>
				<span>Result is :  {result}</span>
			</div>
}
export default Calculator;