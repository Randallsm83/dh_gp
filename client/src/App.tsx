import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from "./routes/root";

const apiUrl = 'http://localhost:8080'

const fetchCharacter = async (id: number) => {
  const res = await fetch(`${apiUrl}/character/${id}`)
  console.log(res)
  const data = await res.json()
  console.log(data)
}

function App() {

  fetchCharacter(40671808)

  return (
    <Router>
      <Root />
    </Router>
  );
}

export default App;
