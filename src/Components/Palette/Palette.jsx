import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';
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
    const { colors, emoji, paletteName, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showLink={true}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeColorFormat}
          showLevels={true}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
