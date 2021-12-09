import { useEffect,useState } from "react"
import { NavLink } from "react-router-dom"

function FavoriteGames() {
    const [favouriteGames, setFavouriteGames] = useState([])

    
    useEffect (() => {
        return fetch("myfavourites")
        .then(response => response.json())
        .then(json => setFavouriteGames(json))
        .catch(err => {
            console.error(err);
        });
    }, [])
    
    console.log(favouriteGames)
    let favouriteGameFactory = () => {
        return favouriteGames.map(game => {
            return(
                <div>
                    <h1>{game.name}</h1>
                    <img src={game.image} alt={game.name} className="images"/>
                    <h3>Genre: {game.genre}</h3>
                </div>
            )
        })
    }

    return(
        <div>
            <NavLink to="/">
            <button>Home</button>
            </NavLink>
            {favouriteGameFactory()}

        </div>
    )
    
}

export default FavoriteGames