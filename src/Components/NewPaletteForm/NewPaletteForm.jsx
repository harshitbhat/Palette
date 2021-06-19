import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DragableColorList from '../DragableColorList/DragableColorList';
import { arrayMove } from 'react-sortable-hoc';
import NewPaletteFormNav from '../NewPaletteFormNav/NewPaletteFormNav';
import ColorPickerForm from '../ColorPickerForm/ColorPickerForm';
import styles from '../../Styles/NewPaletteFormStyle';

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: true,

      colors: this.props.palettes[0].colors,
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewColor = (newColor) => {
    this.setState({
      colors: [...this.state.colors, newColor],
    });
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = (palette) => {
    const newPalette = {
      paletteName: palette.name,
      id: palette.name.toLowerCase().replace(/ /g, '-'),
      emoji: palette.emoji,
      colors: this.state.colors,
    };
    this.props.savePalette(newPalette);
    this.props.history.push('/');
  };

  handleDeleteColor = (colorName) => {
    const newColors = this.state.colors.filter(
      (color) => color.name !== colorName
    );
    this.setState({ colors: newColors });
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  clearPalette = () => {
    this.setState({ colors: [] });
  };

  addRandomColor = () => {
    // Pick random color from all the palettes
    const allColors = this.props.palettes
      .map((palette) => palette.colors)
      .flat();
    let randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    const checkIfSame = (randomColor) =>
      this.state.colors.some((color) => color.name === randomColor.name);
    while (checkIfSame(randomColor)) {
      randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  };

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const isPaletteFull = colors.length >= maxColors;

    return (
      <div className={classes.root}>
        <NewPaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerContainer}>
            <Typography variant="h5" gutterBottom>
              Design your Palette
            </Typography>
            <div className={classes.drawerButtons}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.clearPalette}
                className={classes.button}
              >
                Clear Palette
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={this.addRandomColor}
                disabled={isPaletteFull}
                className={classes.button}
              >
                Random Color
              </Button>
            </div>
            <div className={classes.colorPickerComponent}>
              <ColorPickerForm
                isPaletteFull={isPaletteFull}
                addNewColor={this.addNewColor}
                colors={this.state.colors}
              />
            </div>
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DragableColorList
            colors={colors}
            removeColor={this.handleDeleteColor}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
