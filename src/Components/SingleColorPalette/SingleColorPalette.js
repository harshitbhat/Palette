import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: 'hex',
    };
  }
  gatherShades(palette, color) {
    const shades = [];
    for (const shade in palette.colors) {
      shades.push(
        ...palette.colors[shade].filter((colorShade) => colorShade.id === color)
      );
    }
    return shades.slice(1);
  }
  changeColorFormat = (format) => {
    this.setState({ format: format });
  };
  render() {
    const { format } = this.state;
    const { id, paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showLink={false}
      />
    ));
    console.log(colorBoxes);
    console.log(this._shades);
    return (
      <div className="Palette">
        <Navbar handleChange={this.changeColorFormat} showLevels={false} />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
