import './App.css';
import Palette from './Components/Palette/Palette';
import seedPalettes from './seedPalettes';
import { generatePalettes } from './ColorHelper';

function App() {
  console.log(generatePalettes(seedPalettes[7]));
  return (
    <div>
      <Palette {...seedPalettes[7]} />
    </div>
  );
}

export default App;
