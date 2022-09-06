import "./App.css";
import { Ticket } from "./components/Ticket";

function App() {
  return (
    <div className="App">
      <h1>Hi Universe!</h1>
      <Ticket
        subject="App keeps crashing"
        inquiry="I need help"
        status="Active"
      />
      <Ticket
        subject="Need to update my Email"
        inquiry="I need help"
        status=""
      />
      <Ticket
        subject="I need a new certificate"
        inquiry="I need help"
        status="Active"
      />
      <Ticket subject="Need help with login" inquiry="I need help" status="" />
      <Ticket subject="Need GDPR advice" inquiry="I need help" status="" />
      <Ticket subject="Help App Breaking" inquiry="I need help" status="" />
    </div>
  );
}

export default App;
