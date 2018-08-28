import React, { Component } from 'react';
import { Title } from './components/Title';
import { PlayersForm } from './components/PlayersForm';
import { MemoryGame } from './components/MemoryGame';
import { ScorePlayers } from './components/ScorePlayers';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  state = { results: [], playerForm: true, memoryGame: true, results2: [] };
  // pathImages = [
  //   {
  //     Nameid: 'Ballena',
  //     Url: '../assets/images/ballena.jpg'
  //     // 'url(' + imgUrl + ')'
  //   },
  //   {
  //     Nameid: 'Cangrejo',
  //     Url: '../assets/images/cangrejo.jpg'
  //   },
  //   {
  //     Nameid: 'Caracol',
  //     Url: '../assets/images/caracol.jpg'
  //   },
  //   {
  //     Nameid: 'Gorila',
  //     Url: '../assets/images/gorila.jpg'
  //   },
  //   {
  //     Nameid: 'Medusa',
  //     Url: '../assets/images/medusa.jpg'
  //   },
  //   {
  //     Nameid: 'Pato',
  //     Url: '../assets/images/pato.jpg'
  //   },
  //   {
  //     Nameid: 'Pulpo',
  //     Url: '../assets/images/pulpo.jpg'
  //   },
  //   {
  //     Nameid: 'Reno',
  //     Url: '../assets/images/reno.jpg'
  //   }
  // ];

  _handleResults = (results) => {
    // console.log(results);
    this.setState({ results });
  }

  _handleResultsTwo  = (results2) => {
    // console.log(results);
    this.setState({ results2 });
  }


  render() {
    return (
      <div className="App">
        <Title>Memorama de </Title>
        <div className='PlayersForm-wrapper'>
          {
            this.state.results.playerForm === false
            ? ''
            : <PlayersForm onResults={this._handleResults} />
          }
        </div>
        <div>
          {
            this.state.memoryGame === false
            ? ''
            : <MemoryGame images={this.state.results.pathImages} images2={this.state.results.pathImages2} onResultsTwo={this._handleResultsTwo} images3={this.state.results2.pathImages} images4={this.state.results2.pathImages2} bandera={this.state.results2.bandera} />
          }
        </div>
        <footer>
        {
          this.state.results.length === 0
          ? ''
          : <ScorePlayers players={this.state.results} score={this.state.results2}/>
        }
        </footer>
      </div>
    );
  }
}

export default App;
