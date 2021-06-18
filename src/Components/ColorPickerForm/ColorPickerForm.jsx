import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: '#abc',
      newColorName: '',
    };
  }

  componentDidMount() {
    // Unique Name
    ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
      let isNotThere = true;
      for (const color of this.props.colors) {
        if (color.name.toLowerCase() === value.toLowerCase()) {
          isNotThere = false;
          break;
        }
      }
      return isNotThere;
    });
    // Unique color
    ValidatorForm.addValidationRule('isColorUnique', () => {
      let isNotThere = true;
      for (const color of this.props.colors) {
        if (color.color === this.state.currentColor) {
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

  handleSubmit = () => {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: '' });
  };

  updateCurrentColor = (color) => {
    this.setState({ currentColor: color.hex });
  };

  render() {
    const { isPaletteFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'Enter a color name.',
              'Choose different name.',
              'Color already used.',
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={isPaletteFull}
            style={{
              backgroundColor: isPaletteFull ? 'grey' : currentColor,
            }}
          >
            {isPaletteFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
