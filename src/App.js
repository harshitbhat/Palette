import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Palette from './Components/Palette/Palette';
import seedPalettes from './seedPalettes';
import { generatePalettes } from './ColorHelper';
import PaletteList from './Components/PaletteList/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette/SingleColorPalette';
import NewPaletteForm from './Components/NewPaletteForm/NewPaletteForm';

class App extends Component {
  findPalette(id) {
    return seedPalettes.find((palette) => palette.id === id);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/palette/new" render={() => <NewPaletteForm />} />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={seedPalettes} {...routeProps} />
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

/*

<div>
  <Palette palette={generatePalettes(seedPalettes[7])} />
</div> 

*/
