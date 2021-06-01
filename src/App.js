import './App.css';
import Palette from './Components/Palette/Palette';
import seedPalettes from './seedPalettes';

function App() {
  return (
    <div>
      <Palette {...seedPalettes[7]} />
    </div>
  );
}

export default App;
