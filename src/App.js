/* import "./App.css"; */
import User from "./components/User";

/* const user = { name: "Amine", city: "Bursa", age: 27 }; */

function App() {
  return (
    <div>
      <User
        title="KİŞİLER"
        data={{ name: "Amine", city: "Bursa", age: 27 }}
        friends={["fazile", "mihriban", "zeynep"]}
      />
    </div>
  );
}

export default App;
