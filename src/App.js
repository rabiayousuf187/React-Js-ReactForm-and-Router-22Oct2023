// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  let handleSubmit = (e) => {

    e.preventDefault();
    alert(`The name you entered was:  ${name}`)

  };
  return (
    <div className="App">
      <h1>This is React App</h1>
      <div>
        <h2 style={{ textAlign: "left" }}>Form:</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Enter your name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
