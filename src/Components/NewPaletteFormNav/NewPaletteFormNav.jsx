import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/Button';
import SavePaletteForm from '../SavePaletteForm/SavePaletteForm';
import styles from '../../Styles/NewPaletteFormNavStyle';

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
    const { classes, open } = this.props;
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
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
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
              lassName={classes.button}
            >
              Save Palette
            </Button>
          </div>
        </AppBar>
        {this.state.formShowing && (
          <SavePaletteForm
            palettes={this.props.palettes}
            handleSubmit={this.props.handleSubmit}
            hideSaveForm={this.hideSaveForm}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteFormNav);
