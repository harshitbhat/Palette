import React, { Component } from 'react';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class SavePaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'form',
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

  showEmojiPicker = () => {
    this.setState({ stage: 'emoji' });
  };

  savePalette = (emojiObj) => {
    const newPalette = {
      name: this.state.newPaletteName,
      emoji: emojiObj.native,
    };
    this.props.handleSubmit(newPalette);
    this.setState({ stage: '' });
  };

  render() {
    const { stage, newPaletteName } = this.state;
    const { hideSaveForm } = this.props;
    return (
      <div>
        <Dialog open={stage === 'emoji'}>
          <DialogTitle id="form-dialog-title">Choose a emoji</DialogTitle>
          <Picker onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={stage === 'form'}
          onClose={hideSaveForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Enter a unique name for your beautiful palette.
              </DialogContentText>

              <TextValidator
                label="Palette Name"
                value={newPaletteName}
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
      </div>
    );
  }
}

export default SavePaletteForm;
