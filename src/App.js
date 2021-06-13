import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import Palette from './Components/Palette/Palette';
import seedPalettes from './seedPalettes';
import { generatePalettes } from './ColorHelper';

class App extends Component {
  findPalette(id) {
    return seedPalettes.find((palette) => palette.id === id);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <h1>Palette List goes here.</h1>} />
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
