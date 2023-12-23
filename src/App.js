

import Home from "./components/Dashboard/Home";
import Navbar from "./components/Dashboard/Navbar";
import Sidebar from "./components/Dashboard/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmsPage from "./pages/FilmsPage";
import PeoplePage from "./pages/PeoplePage";
import PlanetsPage from "./pages/PlanetsPage";
import SpeciesPage from "./pages/SpeciesPage";
import StarshipsPage from "./pages/StarshipsPage";
import VehiclesPage from "./pages/VehiclesPage";
import img from './components/Dashboard/icon.png';
import './App.css';
import { useState } from "react";
import { MyContext } from "./MyContext";
function App() {
  const [isGrid,setGrid] = useState(true);

  return (
    <MyContext.Provider value={{isGrid ,setGrid}}>
    <div className="App">
     
      <div className='navbar'>
              
              <img src={img} alt="banner image" />

              <div></div>
      </div>
    <Sidebar>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/films" element={<FilmsPage/>} />
      <Route path="/people" element={<PeoplePage/>} />
      <Route path="/planets" element={<PlanetsPage/>} />
      <Route path="/species" element={<SpeciesPage/>} />

      <Route path="/starships" element={<StarshipsPage/>} />
      <Route path="/vehicles" element={<VehiclesPage/>} />


      




     </Routes>
     </Sidebar>
    </div>
    </MyContext.Provider>
  );
}

export default App;
