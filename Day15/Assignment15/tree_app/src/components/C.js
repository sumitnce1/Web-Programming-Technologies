import A from "./A";
import B from "./B";
function C() {
  return <div>
      <h4>This is C Components</h4>
      <p>c) Use A and B and C in App</p>
      <A />
      <B />
      <hr></hr>
      {/* d) Use A in B and C, Use B and C in App */}
      <A/>
    </div>
}
export default C;
