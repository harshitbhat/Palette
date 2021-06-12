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
    const { colors, emoji, paletteName } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color[format]} name={color.name} key={color.id} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeColorFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Paletter-footer">
          {paletteName} <span className="emoji">{emoji}</span>{' '}
        </footer>
      </div>
    );
  }
}

export default Palette;
