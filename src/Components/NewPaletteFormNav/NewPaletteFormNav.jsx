import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import SavePaletteForm from '../SavePaletteForm/SavePaletteForm';

const drawerWidth = 300;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '64px',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  navButtons: {
    marginRight: '1rem',
  },
  button: {
    margin: '0 0.5rem',
    '& a': {
      textDecoration: 'none',
      color: '#fff',
    },
  },
});

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
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
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
