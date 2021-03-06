import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import styles from '../../Styles/NewPaletteFormNavStyle';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';

import SavePaletteForm from '../SavePaletteForm/SavePaletteForm';

class NewPaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: '',
      formShowing: false,
    };
  }
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  showSaveForm = () => {
    this.setState({ formShowing: true });
  };
  hideSaveForm = () => {
    this.setState({ formShowing: false });
  };
  render() {
    const { classes, open, handleDrawerOpen, palettes, handleSubmit } =
      this.props;
    return (
      <div classNames={classes.root}>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <AddToPhotosIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.navName}
            >
              Create your Palette
            </Typography>
          </Toolbar>
          <div className={classes.navButtons}>
            {/*  */}

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              <Link to="/">Go Back</Link>
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.showSaveForm}
              className={classes.button}
            >
              Save Palette
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <SavePaletteForm
            palettes={palettes}
            handleSubmit={handleSubmit}
            hideSaveForm={this.hideSaveForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNav);
