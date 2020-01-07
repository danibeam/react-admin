import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init( {
      key: '1JTtwmbmQpv20DCd5KjmTNAGOFuf_dariAeBxbqE-FcY',
      simpleSheet: true }
    ).then(function(result, tabletop) {
      setData(result);
    }).catch(error => {
      console.error('there was an error retrieving the data... ', error);
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Admin</h1>
        <p>
          Powered by Google Sheets <br />
          See post followed on <a href="https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59" target="blank" rel="noopener noreferrer">Medium</a>
        </p>
      </header>
      <section>
        <h2>Here's your data!</h2>
          <table>
            <thead>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </thead>
            {
              data.map(field => {
                return (
                    <tbody key={field.Id}>
                      <td>{field.Id}</td>
                      <td>{field.Name}</td>
                      <td>{field.Email}</td>
                    </tbody>
                )
              })
            }
        </table>
      </section>
      <footer className="App-footer">
        <a href="https://dbelmonte.me" className="App-link" target="blank" rel="noopener noreferrer">
          Daniel Belmonte
        </a> | GNU General Public License v3.0 
      </footer>
    </div>
  );
}

export default App;
