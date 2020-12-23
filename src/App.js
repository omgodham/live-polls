import './App.css';
import Result from "./Result";
import Polls from "./Polls";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/result">
        <Result />
        </Route>
        <Route path="/">
        <Polls />
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
