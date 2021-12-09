function GameContainer({filterGamesList, currentUser}) {

    const games = filterGamesList

    const favoriteGame = (e) => {
        e.preventDefault()
        let gameid = e.target.id
        fetch("favourite_games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                game_id: gameid
                    })  
          })
          .then(response => response.json())
          .then(data => console.log(data))
    }

    const wishlistGame = (e) => {
        e.preventDefault()
        let gameid = e.target.id
        fetch("wishlist_games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                game_id: gameid
                    })  
          })
          .then(response => response.json())
          .then(data => console.log(data))
    }



    let gameFactory = () => {
        return games.map(game => {
            return(
                <div>
                    <h1>{game.name}</h1>
                    <img src={game.image} alt={game.name} className="images"/>
                    <h3>Genre: {game.genre}</h3>
                    {!!currentUser ? <button onClick={favoriteGame} id={game.id}>Favorite</button> : null}
                    {!!currentUser ?  <button onClick={wishlistGame} id={game.id}>Wishlist</button> : null}
                </div>
            )
        })
    }

    return(gameFactory())
}

export default GameContainer