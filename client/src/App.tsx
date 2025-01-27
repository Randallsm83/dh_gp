import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from "./routes/root";

function App() {
  return (
    <Router>
      <Root />
    </Router>
  );
}

export default App;
