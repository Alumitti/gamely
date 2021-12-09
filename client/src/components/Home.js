import { NavLink } from "react-router-dom"


function Home({currentUser, setCurrentUser}) {
    
    
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => {
            setCurrentUser();
        });
    }

    return(
    <div>

        <NavLink to="SignUp">
            <button>SignUp</button>
        </NavLink>

        <NavLink to="LogIn">
            <button>Login</button>
        </NavLink>

        <button onClick={handleLogout}>Logout</button>

        <NavLink to="Search">
            <button>Search</button>
        </NavLink>

        <NavLink to="BookmarkGames">
            <button>Wishlist Games</button>
        </NavLink>

        <NavLink to="FavoriteGames">
            <button>Favorite Games</button>
        </NavLink>
    </div>
    )
}

export default Home