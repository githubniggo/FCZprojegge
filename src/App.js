import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [players, setPlayers] = useState([
      {number: 0, name: "", url: "", nationality: "",
          height: 0, date: 0, tacheles: 0, club: ""
}]);

  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [nationality, setNationality] = useState("");
  const [height, setHeight] = useState(0);
  const [date, setDate] = useState(0);
  const [tacheles, setTacheles] = useState(0);
  const [club, setClub] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/Spieler")
        .then((response) => response.json())
        .then((data) => setPlayers(data))
  },[])

  return (
      <>
          <header id='header'>
              <div className="titelbild">
                  <img className={'logo'}
                       src='https://www.fcz.ch/media/images/2021/07/FCZ_125-Anniversary_Logo_Web.png'
                       height="130"></img>
              </div>
              <div className="headerBottom">

              </div>
          </header>


          <img src='https://www.fcz.ch/media/images/2021/07/FCZ_125-Anniversary_Logo_Web.png' height="120"></img>
          {players.map(player => <div>

              <img className='fotoSpieler' src={player.url} height={200}/>
              <table>
                  <tr>
                      <td>{'Nummer'}</td>
                      <td>{player.number}</td>
                  </tr>
                  <tr>
                      <td>{'Name'}</td>
                      <td>{player.name}</td>
                  </tr>
                  <tr>
                      <td>{'Nationalität'}</td>
                      <td>{player.nationality}</td>
                  </tr>
                  <tr>
                      <td>{'Grösse'}</td>
                      <td>{player.height + 'cm'}</td>
                  </tr>
                  <tr>
                      <td>{'Geburtsdatum'}</td>
                      <td>{player.date}</td>
                  </tr>
                  <tr>
                      <td>{'Marktwert'}</td>
                      <td>{player.tacheles + 'CHF'}</td>
                  </tr>
                  <tr>
                      <td>{'Aktueller Verein'}</td>
                      <td>{player.club}</td>
                  </tr>
              </table>
          </div>)}

          <p>Neuer Spieler hinzufügen</p>
          <table>
              <tr>
                  <td>{'Nummer:'}</td>
                  <td><input type={"number"} value={number} onChange={(e) => setNumber(e.target.value)}/></td>
              </tr>
              <tr>
                  <td>{'Name:'}</td>
                  <td><input type={"text"} value={name} onChange={(e) => setName(e.target.value)}/></td>
              </tr>
              <tr>
                  <td>{'Nationalität:'}</td>
                  <td><input type={"text"} value={nationality} onChange={(e) => setNationality(e.target.value)}/></td>
              </tr>
              <tr>
                  <td>{'Grösse:'}</td>
                  <td><input type={"number"} value={height} onChange={(e) => setHeight(e.target.value)}/></td>
              </tr>
              <tr>
                  <td>{'Geburtsdatum:'}</td>
                  <td><input type={"date"} value={date} onChange={(e) => setDate(e.target.value)}/></td>
              </tr>
              <tr>
                  <td>{'Marktwert:'}</td>
                  <td><input type={"number"} value={tacheles} onChange={(e) => setTacheles(e.target.value)}/></td>
              </tr>
              <tr>
                  <td>{'Aktueller Verein:'}</td>
                  <td><input type={"text"} value={club} onChange={(e) => setClub(e.target.value)}/></td>
              </tr>
              <tr>
                  <td>{'Bild url:'}</td>
                  <td><input type={"text"} value={url} onChange={(e) => setUrl(e.target.value)}/></td>
              </tr>
          </table>
          <div>
              <button onClick={() =>
                  setPlayers({number, name, nationality, height, date, tacheles, club, url})
              }>Hinzufügen</button>
          </div>
          <img className='logoBottom'
               src='https://www.fcz.ch/media/images/2021/07/FCZ_125-Anniversary_Logo_Web.png'
               height="200"></img>

          <footer>
              <div className='hellblau'>
                  <p>Stadtclub. Seit 1896.</p>
              </div>
          </footer>
          ©2022 - all rights reserved
      </>
  );
}

export default App;
