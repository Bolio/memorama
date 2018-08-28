import React, { Component } from 'react';


export class ScorePlayers extends Component {
  // #27AF38
  render(){
    const { players, score } = this.props;
    // console.log(score);

    return(
      <div className="panel panel-info" id="panelScore">
        <div className="panel-heading">Puntuación</div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-5">
                {
                  players.namePlayerOne === ''
                  ? <label>Jugador #1: <span className="badge">{!score.scorePlayerOne ? 0 : score.scorePlayerOne}</span></label>
                  : <label>{players.namePlayerOne}: <span className="badge">{!score.scorePlayerOne ? 0 : score.scorePlayerOne}</span></label>
                }
              </div>
              <div className="col-md-2">
                <p id='vs'>VS</p>
              </div>
              <div className="col-md-5">
                {
                  players.namePlayerTwo === ''
                  ? <label>Jugador #2: <span className="badge">{!score.scorePlayerTwo ? 0 : score.scorePlayerTwo}</span></label>
                  : <label>{players.namePlayerTwo}: <span className="badge">{!score.scorePlayerTwo ? 0 : score.scorePlayerTwo}</span></label>
                }
              </div>
            </div>
        </div>
      </div>

    );
  }
}
