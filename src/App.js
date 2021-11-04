import logo from './logo.svg';
import './App.css';

import Counter3 from './Counter-3';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Counter3 initValue={50} />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ula wałkuje Reacta :)
        </p>

      </header>

    </div>
  );
}

export default App;
