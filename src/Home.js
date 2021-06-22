import logo from './logo.png';
import './Home.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";


function Home() {
  function handleClick(e){
    window.location.replace("/MainPage")
  }
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          여름 생활 백서
        </p>
        <Router>
          <Link to="./MainPage">
            <button className="button1" onClick={handleClick}> 살아남자! </button>
          </Link>
        </Router>
      </header>

    </div>
  );
}

export default Home;
