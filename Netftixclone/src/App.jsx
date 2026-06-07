import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import './App.css';

function App() {
  return (
    <div className="home">
      <img src="/netflix-logo.png" alt="Netflix" className="logo-img" />
      <Navbar />
      <Banner />

    </div>
  );
}

export default App;
