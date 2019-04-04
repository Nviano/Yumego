import React, { Component } from 'react';
import Travel1 from '../images/amsterdam.jpg';
import Travel2 from '../images/cuba.jpg';
import Travel3 from '../images/paris.jpeg';
import Travel4 from '../images/tailandia.jpg';
import Travel5 from '../images/china.jpg';
import Travel6 from '../images/noruega.jpg';
import Travel7 from '../images/london.jpg';
import Travel8 from '../images/egipto.jpg';
import redCross from '../images/red-cross.png';

const styleContainer = {
  display: 'grid',
  gridTemplateRows: '50% 50%',
  height: '600px',
  width: 'calc(100% - 50px)',
  backgroundColor: '#bbb',
  borderRadius: '50px 50px',
  margin: '0 auto'
}
const img = {
  width: '250px',
  height: '250px',
  borderRadius: '50%',

}
const redcross = {
  width: '30px',
}



export default class Carrousel extends Component {

  constructor() {
    super();

    this.state = {
      red: true
    }
  }
  changeColor() {
    this.setState({ red: !this.state.red })
    console.log('red');
  }

  render() {

    return (
      <div style={styleContainer}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '25% 25% 25% 25%',
          gridRowStart: 1,
        }}>
          <div style={{
            gridRowStart: 1,
            gridColumnStart: 1,
            alignSelf: 'center',
            margin: '0 auto',
          }}>
            <img src={Travel1} style={img} />
            <img src={redCross} style={redcross} />
          </div>
          <div style={{
            gridRowStart: 1,
            gridColumnStart: 2,
            alignSelf: 'center',
            margin: '0 auto',
          }}>
            <img src={Travel2} style={img} />
          </div>
          <div style={{
            gridRowStart: 1,
            gridColumnStart: 3,
            alignSelf: 'center',
            margin: '0 auto',
          }}>
            <img src={Travel3} style={img} />
          </div>
          <div style={{
            gridRowStart: 1,
            gridColumnStart: 4,
            alignSelf: 'center',
            margin: '0 auto',
          }}>
            <img src={Travel4} style={img} />
          </div>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '25% 25% 25% 25%',
          gridRowStart: 2,
        }}>
          <div style={{
            gridRowStart: 2,
            gridColumnStart: 1,
            alignSelf: 'center',
            margin: '0 auto',
          }}>
            <img src={Travel5} style={img} />
          </div>
          <div style={{
            gridRowStart: 2,
            gridColumnStart: 2,
            alignSelf: 'center',
            margin: '0 auto',
          }}>
            <img src={Travel6} style={img} />
          </div>
          <div style={{
            gridRowStart: 2,
            gridColumnStart: 3,
            alignSelf: 'center',
            margin: '0 auto',
          }}>
            <img src={Travel7} style={img} />
          </div>
          <div style={{
            gridRowStart: 2,
            gridColumnStart: 4,
            alignSelf: 'center',
            margin: '0 auto',
          }}>
            <img src={Travel8} style={img} />
          </div>
        </div>



      </div>

    )
  }
}
