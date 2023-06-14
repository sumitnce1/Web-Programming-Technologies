import {useState} from "react"
import FruitList from "./FruitList"
import FruitListDisplay from "./FruitListDisplay";

function FruitMain() {
    const [fruit, setFruit] = useState([]);
  
    const saveFruits = function(data){
		setFruit([...fruit, data])
	}

	return <div>
		<fruits saveFruits={saveFruits}/>
		<FruitList fruit={fruit}/>
	</div>;
  }
  export default FruitMain;