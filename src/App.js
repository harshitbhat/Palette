import './App.css';
import Palette from './Components/Palette/Palette';
import seedPalettes from './seedPalettes';
import { generatePalettes } from './ColorHelper';

function App() {
  return (
    <div>
      <Palette palette={generatePalettes(seedPalettes[7])} />
    </div>
  );
}

export default App;
