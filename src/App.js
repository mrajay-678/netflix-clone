import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer";
import Counter from "./Component/Counter";

function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Counter" element={<Counter />} />
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
