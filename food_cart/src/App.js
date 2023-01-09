import './App.css';

import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Category from "./components/Category";
import Food from "./components/Food";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <HomeCards/>
       <Category/>
       <Food/>
    </div>
      
    
  );
}

export default App;
