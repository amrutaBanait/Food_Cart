import './App.css';

import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
       <HomeCards/>
       <Category/>
    </div>
      
    
  );
}

export default App;
