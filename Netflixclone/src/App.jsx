import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Banner from "./components/Banner";

import Trending from "./components/Trending";

import Reasons from "./components/Reasons";

import FAQ from "./components/FAQ";

import SignIn from "./components/SignIn";

import "./App.css";



function HomePage() {

  return (

    <>

      <div className="hero">

        <img src="/netflix-logo.png" alt="Netflix" className="logo-img" />

        <Navbar />

        <Banner />

      </div>



      <div className="content">

        <Trending />

        <Reasons />

        <FAQ />

      </div>

    </>

  );

}



function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/signin" element={<SignIn />} />

    </Routes>

  );

}



export default App;