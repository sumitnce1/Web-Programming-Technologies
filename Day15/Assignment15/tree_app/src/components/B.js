import A from "./A"
import C from "./C"
function B(){
	return <div>
				<h3>This is B Components</h3>
                <C/>
                <A/>
			</div>
}
export default B;