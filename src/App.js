import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Palette from './Components/Palette/Palette';
import seedPalettes from './seedPalettes';
import { generatePalettes } from './ColorHelper';
import PaletteList from './Components/PaletteList/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette/SingleColorPalette';
import NewPaletteForm from './Components/NewPaletteForm/NewPaletteForm';
import Page from './Components/Page/Page';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedPalettes,
    };
  }
  findPalette = (id) => {
    return this.state.palettes.find((palette) => palette.id === id);
  };
  deletePalette = (id) => {
    this.setState(
      (state) => ({
        palettes: state.palettes.filter((palette) => palette.id !== id),
      }),
      this.syncWithLocalStorage
    );
  };
  savePalette = (newPalette) => {
    console.log(newPalette);
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncWithLocalStorage
    );
  };

  syncWithLocalStorage = () => {
    // save palettes to local storage
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  };

  render() {
    const { palettes } = this.state;
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={(routeProps) => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        palettes={this.state.palettes}
                        {...routeProps}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        palettes={palettes}
                        {...routeProps}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={(routeProps) => (
                    <Page>
                      <Palette
                        palette={generatePalettes(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </Page>
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
                <Route
                  render={(routeProps) => (
                    <Page>
                      <PaletteList
                        palettes={palettes}
                        {...routeProps}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
