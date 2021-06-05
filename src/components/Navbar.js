import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <div className="left-div"></div>
                <div className="right-div">
                    <div className="nav-links">
                        <ul>
                            <li><Link to="/project"></Link>Project</li>
                            <li><Link to="/about"></Link>About</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
