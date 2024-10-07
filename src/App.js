import "./App.css";
import Welcome from "./Components/Welcome";
import RandomNumber from "./Components/RandomNumber";

const user = {
  name: "Алина",
  age: 21,
  group: "admin",
 };

function App() {
  return (
    <div className="title">
      <Welcome name={user.name} group={user.group} />
      <RandomNumber/>
    </div>
    // <div>
      
    // </div>
 );
}
export default App; 