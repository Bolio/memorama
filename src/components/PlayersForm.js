import React, { Component } from 'react';

export class PlayersForm extends Component {

  _handleChange = (e) => {
    // console.log(e);
    this.setState({[e.target.name]: e.target.value});
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    // alert(this.state.inputPlayerOne +' VS '+this.state.inputPlayerTwo);
    var namePlayerOne = '';
    var namePlayerTwo = '';
    if (this.state) {
      if (this.state.inputPlayerOne) {
        namePlayerOne = this.state.inputPlayerOne;
      }
      if (this.state.inputPlayerTwo) {
        namePlayerTwo = this.state.inputPlayerTwo;
      }
    }
    this.props.onResults(
      {
        playerForm: false,
        namePlayerOne,
        puntajeUno: 0,
        namePlayerTwo,
        puntajeDos: 0,
        pathImages : [
          {
            Id: 1,
            Name: 'Ballena',
            Default: '#7B6FEE'
          },
          {
            Id: 2,
            Name: 'Cangrejo',
            Default: '#7B6FEE'
          },
          {
            Id: 3,
            Name: 'Caracol',
            Default: '#7B6FEE'
          },
          {
            Id: 4,
            Name: 'Gorila',
            Default: '#7B6FEE'
          },
          {
            Id: 5,
            Name: 'Medusa',
            Default: '#7B6FEE'
          },
          {
            Id: 6,
            Name: 'Pato',
            Default: '#7B6FEE'
          },
          {
            Id: 7,
            Name: 'Pulpo',
            Default: '#7B6FEE'
          },
          {
            Id: 8,
            Name: 'Reno',
            Default: '#7B6FEE'
          }
        ],
        pathImages2: [
          {
            Id: 9,
            Name: 'Caracol',
            Default: '#7B6FEE'
          },
          {
            Id: 10,
            Name: 'Reno',
            Default: '#7B6FEE'
          },
          {
            Id: 11,
            Name: 'Pato',
            Default: '#7B6FEE'
          },
          {
            Id: 12,
            Name: 'Pulpo',
            Default: '#7B6FEE'
          },
          {
            Id: 13,
            Name: 'Gorila',
            Default: '#7B6FEE'
          },
          {
            Id: 14,
            Name: 'Medusa',
            Default: '#7B6FEE'
          },
          {
            Id: 15,
            Name: 'Ballena',
            Default: '#7B6FEE'
          },
          {
            Id: 16,
            Name: 'Cangrejo',
            Default: '#7B6FEE'
          }
        ]
      }
    );
  }

  render(){
    return(
      <form onSubmit={this._handleSubmit}>

        <div className="panel panel-primary">
          <div className="panel-heading">Jugadores</div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-5">
                <input type="text" className="form-control" placeholder="Jugador #1" name="inputPlayerOne" onChange={(e)=>this._handleChange(e)} />
              </div>
              <div className="col-md-2">
                <p id='vs'>VS</p>
              </div>
              <div className="col-md-5">
                <input type="text" className="form-control" placeholder="Jugador #2" name="inputPlayerTwo" onChange={(e)=>this._handleChange(e)} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary btn-lg" aria-label="Left Align">
                  <span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span> A Jugar!!!!
                </button>
              </div>
            </div>
          </div>
        </div>

      </form>
    );
  }
}
