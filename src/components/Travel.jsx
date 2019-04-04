import React, { Component } from 'react';
import Travel1 from '../images/amsterdam.jpg';
import redCross from '../images/red-cross.png';
import greenCheck from '../images/greenCheck.png';

const img = {
  position: 'absolute',
  width: '250px',
  height: '250px',
  borderRadius: '50%',
}
const redcross = {
  width: '40px',
  position: 'absolute',
  marginTop: '200px',
  marginLeft: '190px',
}
// const imagesPath = {
//   redCross: "../images/red-cross.png",
//   greenCheck: "../images/greenCheck.png"
// }

export default class Travel extends Component {
  constructor() {
    super();
    this.toggleImage = this.toggleImage.bind(this);
    this.state = {
      iconTravel: 'red-cross.png'
    }
  }
  toggleImage() {
    if (this.state.iconTravel === 'red-cross.png')
      this.setState({ iconTravel: { redCross } })
    else
      this.setState({ iconTravel: { greenCheck } })
  }
  // toggleImage = () => {
  //   this.setState(state => ({ open: !state.open }))
  // }

  // getImageName = () => this.state.open ? 'redCross' : 'greenCheck';

  render() {
    //const imageName = this.getImageName();
    return (

      <div>
        <img src={Travel1} style={img} />
        <img src={this.state.iconTravel} onClick={this.toggleImage} style={redcross} />
      </div>
    )
  }
}
