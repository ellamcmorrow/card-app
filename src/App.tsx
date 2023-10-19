import "./App.css";
import { Button, Wrapper, Card } from "./components";

function App() {
  return (
    <Wrapper>
      <Card>
        <Card.Heading>Header</Card.Heading>
        <Card.SubHeading>SubHeader</Card.SubHeading>
        <Card.Text>Loremipsum</Card.Text>
        <Card.Footer>
          <Button onPress={() => console.log("clicked")}>Click Me!</Button>
        </Card.Footer>
      </Card>
    </Wrapper>
  );
}

export default App;
