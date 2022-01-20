import logo from "./logo.svg";
import blackPanter from "./img/blackPanter.png";
import "./App.css";
import { Button, Card } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Card style={{ width: "18rem" }}>
          <Card.Img src={blackPanter} />
          <Card.Body>
            <Card.Title>Black Panter</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
