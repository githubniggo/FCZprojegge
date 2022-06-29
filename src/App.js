import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [players, setPlayers] = useState([])
  useEffect(() => {
    fetch("http://localhost:8080/Spieler")
        .then((response) => response.json())
        .then((data) => setPlayers(data))
  },[])
  return (
      <>
        <div>Schweizermeister FCZ</div>

      </>
  );
}

export default App;
