import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Place from "./components/NFTs";
import Connect from "./components/Connect";

function App() {
  return ( <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Place-To-Stay" element={<Place />} />
      <Route path="Connect" element={<Connect />} />
    </Routes>
  </Router>
  );
}

export default App;
