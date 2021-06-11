import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import './Palette.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: 'hex',
    };
  }
  changeLevel = (newLevel) => {
    this.setState({ level: newLevel });
  };
  changeColorFormat = (format) => {
    this.setState({ format: format });
  };
  render() {
    const { colors } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeColorFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        {/* Footer goes here */}
      </div>
    );
  }
}

export default Palette;
