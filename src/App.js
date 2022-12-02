import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TaskIntro from "./components/TaskIntro";
import TaskGame from "./components/TaskGame";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task" element={<TaskIntro />} />
            <Route path="/task/game" element={<TaskGame />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
