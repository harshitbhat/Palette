import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';
import { Link } from 'react-router-dom';
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
        id={color.name}
        paletteId={id}
        showingFullPalette={false}
      />
    ));
    return (
      <div className="Palette SingleColorPalette">
        <Navbar handleChange={this.changeColorFormat} showLevels={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="GoBack ColorBox">
            <Link to={`/palette/${id}`} className="back-button">
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
