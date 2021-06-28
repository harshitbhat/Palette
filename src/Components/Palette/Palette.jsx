import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/PaletteStyle.js';

import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

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
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        id={color.id}
        paletteId={id}
        showingFullPalette={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeColorFormat}
          showLevels={true}
        />
        <div className={classes.PaletteColors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
