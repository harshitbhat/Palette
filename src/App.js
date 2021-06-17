import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Palette from './Components/Palette/Palette';
import seedPalettes from './seedPalettes';
import { generatePalettes } from './ColorHelper';
import PaletteList from './Components/PaletteList/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette/SingleColorPalette';
import NewPaletteForm from './Components/NewPaletteForm/NewPaletteForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedPalettes,
    };
  }
  findPalette = (id) => {
    return this.state.palettes.find((palette) => palette.id === id);
  };
  savePalette = (newPalette) => {
    console.log(newPalette);
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  };
  render() {
    const { palettes } = this.state;
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => (
            <NewPaletteForm savePalette={this.savePalette} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={palettes} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalettes(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              palette={generatePalettes(
                this.findPalette(routeProps.match.params.paletteId)
              )}
              colorId={routeProps.match.params.colorId}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
