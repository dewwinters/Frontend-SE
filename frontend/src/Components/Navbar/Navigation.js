import React, {Component} from 'react';
import "./NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div className="navbar__component">
                NavBar
                <div className="navbar__logo">

                </div>
            </div>
        );  
    }
}

export default NavBar;