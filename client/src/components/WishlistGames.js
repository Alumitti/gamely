import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function WishlistGames() {
    const [wishlistGames, setWishlistGames] = useState([])

    
    useEffect (() => {
        return fetch("mywishlists")
        .then(response => response.json())
        .then(json => setWishlistGames(json))
        .catch(err => {
            console.error(err);
        });
    }, [])
    
    console.log(wishlistGames)
    let wishlistGameFactory = () => {
        return wishlistGames.map(game => {
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
            {wishlistGameFactory()}

        </div>
    )
    
}

export default WishlistGames