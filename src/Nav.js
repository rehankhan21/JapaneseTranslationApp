import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav className="nav_bar">
                <ul>
                    {/* <Link to="/Contact"><li>Contact</li></Link> */}
                    {/* <Link to="/"><li>Home</li></Link> */}
                    <Link to="/"><li>Translate</li></Link>
                    <Link to="/AnimeList"><li>Anime Search</li></Link>
                    <Link to="/TopAnime"><li>Top Anime List</li></Link>
                </ul>
            </nav>
        </div>

    )
}

export default Nav
