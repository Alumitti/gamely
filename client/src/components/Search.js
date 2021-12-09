import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import GameContainer from "./GameContainer";



function Search({currentUser, setCurrentUser}) {
    const [allGames, setAllGames] = useState([])
    const [searchFormData, setSearchFormData] = useState("");

    function handleChange(event) {
      setSearchFormData(event.target.value)
      
    }

    useEffect (() => {
        return fetch("http://localhost:3000/games", {
          "method": "GET",
        })
        .then(response => response.json())
        .then(json => setAllGames(json))
        .catch(err => {
          console.error(err);
        });
    }, [])

    function handleLogout() {
      fetch("/logout", {
          method: "DELETE"
      })
      .then(() => {
          setCurrentUser();
      });
  }


    let filteredGamesList = []
    const filterGamesList = allGames.filter(game => {
      if (game.name.toLowerCase().includes(searchFormData.toLowerCase())) {
        return filteredGamesList.push(game);
      }
    });

    return(

      <div>
        <NavLink to="/"> 
          <button className="button">Home</button>
        </NavLink>

        <NavLink to="SignUp">
            <button className="button">SignUp</button>
        </NavLink>

        <NavLink to="LogIn">
            <button className="button">Login</button>
        </NavLink>

        <button className="button" onClick={handleLogout}>Logout</button>

        <NavLink to="WishlistGames">
        {!!currentUser ?  <button className="button">Wishlist Games</button> : null}
        </NavLink>

        <NavLink to="FavoriteGames">
        {!!currentUser ?  <button className="button">Favorite Games</button> : null}
        </NavLink>

        <br/><br/>

        <form id="search-form" class="search-form">
          <input 
          onChange={handleChange}
          value={searchFormData}
          class="search-input"
          type="search"
          name="search"
          id="search"
          placeholder="search a game..."
          />
        </form>

        <GameContainer currentUser={currentUser} filterGamesList={filterGamesList} allGames={allGames}/>



      </div>
    )


}

export default Search