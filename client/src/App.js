import React, { useState } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Search from "./components/Search";
import FavoriteGames from "./components/FavoriteGames";
import WishlistGames from "./components/WishlistGames";



function App() {
  const [currentUser, setCurrentUser] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SignUp" element={<SignUp />}>
                      
          </Route>
          <Route path="/LogIn" element={<LogIn setCurrentUser={setCurrentUser} currentUser={currentUser}/>}>
                      
          </Route>

          {/* <Route path="/" element={<Home currentUser={currentUser} setCurrentUser={setCurrentUser}/>}>

          </Route> */}

        <Route path="/" element={<Search currentUser={currentUser} setCurrentUser={setCurrentUser} />}>

        </Route>

        <Route path="/WishlistGames" element={<WishlistGames />}>

        </Route>

        <Route path="/FavoriteGames" element={<FavoriteGames />}>

        </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
