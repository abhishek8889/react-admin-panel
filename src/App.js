import { Button } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import  RouterComp  from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <RouterComp/>
      </Router>
    </div>
  );
}

export default App;
