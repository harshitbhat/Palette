import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class SavePaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      newPaletteName: '',
    };
  }

  componentDidMount() {
    // Unique palette Name
    ValidatorForm.addValidationRule('isPaletteNameUnique', () => {
      let isNotThere = true;
      for (const palette of this.props.palettes) {
        if (
          palette.paletteName.toLowerCase() ===
          this.state.newPaletteName.toLowerCase()
        ) {
          isNotThere = false;
          break;
        }
      }
      return isNotThere;
    });
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Dialog
        open={this.state.open}
        onClose={this.props.hideSaveForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
        <ValidatorForm
          onSubmit={() => this.props.handleSubmit(this.state.newPaletteName)}
        >
          <DialogContent>
            <DialogContentText>
              Enter name for your palette. Choose unique name.
            </DialogContentText>
            <Picker />
            <TextValidator
              label="Palette Name"
              value={this.state.newPaletteName}
              name="newPaletteName"
              fullWidth
              margin="normal"
              onChange={this.handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Palette name cannot be empty.',
                'Name already used.',
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.hideSaveForm} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

export default SavePaletteForm;
