import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/styles';
import styles from '../../Styles/NavBarStyle.js';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
      open: false,
    };
  }

  handleFormatChange = (evt) => {
    this.setState({ format: evt.target.value, open: true });
    this.props.handleChange(evt.target.value);
  };
  closeSnackbar = () => {
    this.setState({ open: false });
  };

  render() {
    const { level, changeLevel, showLevels, classes } = this.props;
    const { format } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactColorPicker</Link>
        </div>
        {showLevels && (
          <div>
            <span>Level: {level} </span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="snach-bar-id">
              Format changed to {format.toUpperCase()}
            </span>
          }
          ContentProps={{ 'aira-describedly': 'message-id' }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
