import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import NFTs from "./components/NFTs";

function App() {
  return ( <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="NFTs" element={<NFTs />} />
    </Routes>
  </Router>
  );
}

export default App;
