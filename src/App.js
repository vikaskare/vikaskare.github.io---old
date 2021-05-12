import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import "./styles/Index.css";
import Announcement from "./components/Announcement";
import RockPaperScissors from "./components/rock-paper-scissors/RockPaperScissors";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import SnakeGame from "./components/snake-game/SnakeGame";
function App() {
  return (
    <div>
      <Router>
        {/* <Announcement show={true} variant="warning" /> */}

        <div className="body">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/rock-paper-scissors" component={RockPaperScissors} />
            <Route path="/tic-tac-toe" component={TicTacToe} />
            <Route path="/snake-game" component={SnakeGame} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
