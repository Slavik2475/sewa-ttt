import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import YearSelection from './components/YearSelection';
import Timetable from './components/Timetable';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/years" element={<YearSelection />} />
        <Route path="/timetable/:year" element={<Timetable />} />
      </Routes>
    </Router>
  );
}

export default App;