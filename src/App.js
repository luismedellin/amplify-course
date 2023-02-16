import logo from './logo.svg';
import './App.css';

function App() {

  const message = process.env.REACT_APP_NOT_SECRET_CODE;
  console.log(message);
  
  console.log(process.env);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React is great 2
        </a>
        <p>{ message }</p>
        <p>{ process.env.REACT_APP_NOT_SECRET_CODE }</p>
      </header>
    </div>
  );
}

export default App;
