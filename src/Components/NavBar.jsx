import React from "react";
import ticket from "../Images/fa-ticket-alt.png";
import {Link} from "react-router-dom";


class NavBar extends React.Component {

    render() {
        return (
            <nav className="bd-navbar navbar has-shadow">
                    <div className="navbar-brand">
                        <span className="navbar-item fas fa-ticket-alt">
                        <Link to={"/" /*todo add path*/} className="navbar-item fas fa-ticket-alt">
                            <img src={ticket} alt="fa-ticket-alt"/>
                            </Link>Movie ListF
                        
                        </span>
                    </div>

                    <div className="navbar-end">
                        <Link to={"/" /*todo add path*/} className="button navbar-item">
                            <span>About</span>
                        </Link>
                    </div>
            </nav>
        )
    }
}

export default NavBar;