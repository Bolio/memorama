import React, { Component } from 'react';
import '../App.css';

export class MemoryGame extends Component {

  constructor(props){
    super(props)
    this.turnOne = true; this.turnTwo = false;
    this.cardOne = ''; this.cardTwo = '';
    this.idOne = ''; this.idTwo = '';
    this.firstCard = true; /*Primer carta seleccionada*/
    this.scorePlayerOne = 0; this.scorePlayerTwo = 0;
    this.bandera = false; /*Una vez, primeras imágenes*/
    this.flip = false; this.doubleClick = false;
  }

  pathImages = [
    {
      Id: 1,
      Name: 'Ballena',
      Url: 'green',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 2,
      Name: 'Cangrejo',
      Url: 'red',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 3,
      Name: 'Caracol',
      Url: 'blue',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 4,
      Name: 'Gorila',
      Url: 'yellow',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 5,
      Name: 'Medusa',
      Url: 'cyan',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 6,
      Name: 'Pato',
      Url: 'orange',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 7,
      Name: 'Pulpo',
      Url: 'purple',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 8,
      Name: 'Reno',
      Url: 'pink',
      Default: '#7B6FEE',
      Selecc: ''
    }
  ];
  pathImages2 = [
    {
      Id: 9,
      Name: 'Caracol',
      Url: 'blue',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 10,
      Name: 'Reno',
      Url: 'pink',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 11,
      Name: 'Pato',
      Url: 'orange',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 12,
      Name: 'Pulpo',
      Url: 'purple',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 13,
      Name: 'Gorila',
      Url: 'yellow',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 14,
      Name: 'Medusa',
      Url: 'cyan',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 15,
      Name: 'Ballena',
      Url: 'green',
      Default: '#7B6FEE',
      Selecc: ''
    },
    {
      Id: 16,
      Name: 'Cangrejo',
      Url: 'red',
      Default: '#7B6FEE',
      Selecc: ''
    }
  ];

/*Hasta Aquíiiiiiiiiiiiiiiiiiiiiiisssiiiiiiiiiiiissssssssssss*/

_handleClick = (e) => {

    if (this.flip) {
      for (var g = 0; g < this.pathImages.length; g++) {
        if (this.pathImages[g]['Selecc'] !== '') {
          this.pathImages[g]['Selecc'] = '';
          this.pathImages[g]['Default'] = '#7A6FF1';
        }
      }
      for (var h = 0; h < this.pathImages2.length; h++) {
        if (this.pathImages2[h]['Selecc'] !== '') {
          this.pathImages2[h]['Selecc'] = '';
          this.pathImages2[h]['Default'] = '#7A6FF1';
        }
      }
      this.flip = false;
      this.props.onResultsTwo ({
        pathImages: this.pathImages,
        pathImages2: this.pathImages2,
        scorePlayerOne: this.scorePlayerOne,
        scorePlayerTwo: this.scorePlayerTwo,
        bandera: this.bandera
      });
    }

    if (this.firstCard) { /*Primer clic*/
      this.cardOne = e.target.alt;
      this.idOne = e.target.id;
      if (this.idOne >= 1 && this.idOne <= 8) {
        for (var i = 0; i < this.pathImages.length; i++) {
          if (this.cardOne === this.pathImages[i]['Name']) {
            this.pathImages[i]['Default'] = this.pathImages[i]['Url'];
            this.pathImages[i]['Selecc'] = '.';
          }
        }
      }
      else if (this.idOne >= 9 && this.idOne <= 16) {
        for (var x = 0; x < this.pathImages2.length; x++) {
          if (this.cardOne === this.pathImages2[x]['Name']) {
            this.pathImages2[x]['Default'] = this.pathImages2[x]['Url'];
            this.pathImages2[x]['Selecc'] = '.';
          }
        }
      }

      this.firstCard = false;
      this.bandera = true;
      this.props.onResultsTwo ({
        pathImages: this.pathImages,
        pathImages2: this.pathImages2,
        scorePlayerOne: this.scorePlayerOne,
        scorePlayerTwo: this.scorePlayerTwo,
        bandera: this.bandera
      });
    } else {
      this.cardTwo = e.target.alt; /*Guarda segunda card*/
      this.idTwo = e.target.id;
      if (this.idTwo >= 1 && this.idTwo <= 8) {
        for (var a = 0; a < this.pathImages.length; a++) {
          if (this.cardTwo === this.pathImages[a]['Name']) {
            this.pathImages[a]['Default'] = this.pathImages[a]['Url'];
          }
          if (this.pathImages[a]['Selecc'] === '.') {
            this.doubleClick = true
          }
        }
      }
      else if (this.idTwo >= 9 && this.idTwo <= 16) {
        for (var b = 0; b < this.pathImages2.length; b++) {
          if (this.cardTwo === this.pathImages2[b]['Name']) {
            this.pathImages2[b]['Default'] = this.pathImages2[b]['Url'];
          }
          if (this.pathImages2[b]['Selecc'] === '.') {
            this.doubleClick = true
          }
        }
      }

      for (var p = 0; p < this.pathImages.length; p++) {
        this.pathImages[p]['Selecc'] = '';
        this.pathImages2[p]['Selecc'] = '';
      }

      this.firstCard = true; /*Regresa bandera para saber que se empezará a seleccionar de nuevo la primer card*/

      this.props.onResultsTwo ({
        pathImages: this.pathImages,
        pathImages2: this.pathImages2,
        scorePlayerOne: this.scorePlayerOne,
        scorePlayerTwo: this.scorePlayerTwo,
        bandera: this.bandera
      });

      if ((this.cardOne === this.cardTwo) && (!this.doubleClick)) { /*Para sumar los puntos de cada uno de los jugadores*/
        if (this.turnOne) {
          this.scorePlayerOne++;
        } else {
          this.scorePlayerTwo++;
        }
        this.props.onResultsTwo ({
          pathImages: this.pathImages,
          pathImages2: this.pathImages2,
          scorePlayerOne: this.scorePlayerOne,
          scorePlayerTwo: this.scorePlayerTwo,
          bandera: this.bandera
        });
      }

      else{ /*Cambios de turno si no consiguen par*/
        if (this.turnOne) { /*Si era el turno del jugador #1...*/
            this.turnOne = false;
            this.turnTwo = true;
          } else if (this.turnTwo){ /*Si era el turno del jugador #2...*/
            this.turnOne = true;
            this.turnTwo = false;
          }
          this.flip = true;
          this.doubleClick = false;
          if ((this.idOne >= 1 && this.idOne <= 8) || (this.idTwo >= 1 && this.idTwo <= 8)) {
            for (var j = 0; j < this.pathImages.length; j++) {
              if ((this.cardOne === this.pathImages[j]['Name']) || (this.cardTwo === this.pathImages[j]['Name'])) {
                this.pathImages[j]['Selecc'] = '_';
              }
            }
          }
          if ((this.idOne >= 9 && this.idOne <= 16) || (this.idTwo >= 9 && this.idTwo <= 16)) {
            for (var k = 0; k < this.pathImages2.length; k++) {
              if ((this.cardOne === this.pathImages2[k]['Name']) || (this.cardTwo === this.pathImages2[k]['Name'])) {
                this.pathImages2[k]['Selecc'] = '_';
              }
            }
          }
      }
      this.cardOne = ''; this.cardTwo = '';
      this.idOne = ''; this.idTwo = '';
    }
    // console.log('Turno Jug#1: '+this.turnOne+' Turno Jug#2: '+this.turnTwo);
    // console.log('Puntaje Jug#1: '+this.scorePlayerOne+' Puntaje Jug#2: '+this.scorePlayerTwo);
}

  render(){
    const { images, images2, images3, images4, bandera } = this.props;
    // console.log(images3);

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">Memorama</div>
          <div className="panel-body">
            <div className="row" id="memorama">
              {
                !bandera
                ? !images
                ? ''
                : images.map(imag => {
                  return (
                    <div key={imag.Id} className="col-xs-6 col-md-3">
                      <a className="thumbnail">
                        <img style={{backgroundColor: imag.Default}} id={imag.Id} alt={imag.Name} onClick={this._handleClick} src="https://runahr.com/wp-content/themes/runa-new/dist/img/runa-logo.png"/>
                      </a>
                    </div>
                  );
                })
                : !images3
                ? 'casa'
                : images3.map(imag3 => {
                  return (
                    <div key={imag3.Id} className="col-xs-6 col-md-3">
                      <a className="thumbnail">
                        <img style={{backgroundColor: imag3.Default}} id={imag3.Id} alt={imag3.Name} onClick={this._handleClick} src="https://runahr.com/wp-content/themes/runa-new/dist/img/runa-logo.png"/>
                      </a>
                    </div>
                  );
                })
              }
              {
                !bandera
                ? !images2
                ? ''
                : images2.map(imag2 => {
                  return (
                    <div key={imag2.Id} className="col-xs-6 col-md-3">
                      <a className="thumbnail">
                        <img style={{backgroundColor: imag2.Default}} id={imag2.Id} alt={imag2.Name} onClick={this._handleClick} src="https://runahr.com/wp-content/themes/runa-new/dist/img/runa-logo.png"/>
                      </a>
                    </div>
                  );
                })
                : images4.map(imag4 => {
                  return (
                    <div key={imag4.Id} className="col-xs-6 col-md-3">
                      <a className="thumbnail">
                        <img style={{backgroundColor: imag4.Default}} id={imag4.Id} alt={imag4.Name} onClick={this._handleClick} src="https://runahr.com/wp-content/themes/runa-new/dist/img/runa-logo.png"/>
                      </a>
                    </div>
                  );
                })
              }
          </div>
        </div>
      </div>
    );
  }
}
