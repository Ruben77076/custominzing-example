import logo from './logo.svg';
import './App.css';
import './components/Heading';
import Heading from './components/Heading';

function App() {
  const handleClick = () =>{
    let randomNum = Math.floor(Math.random()*3)+1;
    console.log(randomNum);

    let userInput = prompt('type a number here ||');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }
  return (
    <div className="App-header App">
        <img src={logo} className="App-logo" alt="logo" />
      
      <Heading 
        firstName="Bob"
        firstname="Another random name"
      />
      <button onClick={handleClick}>
        Guess the number between 1 and 3.
      </button>
    </div>
  );
}

export default App;
