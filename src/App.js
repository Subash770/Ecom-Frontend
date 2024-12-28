import logo from './logo.svg';
import './App.css';
import './Components/Top.css';
import './Components/Middle.css';
import './Components/Bottom.css';
import Top from './Components/Top';
import Middle from './Components/Middle';
import Bottom from './Components/Bottom';

function App() {
  return (
    <div className="App">
        <Top/>
        <Middle/>
        <Bottom/>
    </div>
  );
}

export default App;
