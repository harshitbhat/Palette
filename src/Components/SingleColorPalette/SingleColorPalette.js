import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
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
  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        background={color.hex}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={this.props.palette.id}
        showLink={false}
      />
    ));
    console.log(colorBoxes);
    console.log(this._shades);
    return (
      <div className="Palette">
        <h1>Single Color Component</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
