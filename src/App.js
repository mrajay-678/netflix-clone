import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
