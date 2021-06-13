import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalette/MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map((palette) => (
          <div>
            {/* <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link> */}
            <MiniPalette {...palette} />
          </div>
        ))}
      </div>
    );
  }
}

export default PaletteList;