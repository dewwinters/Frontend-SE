import React, {Component} from 'react';
import "./NavBar.css"
import amazon_logo from "../../Assets/amazon_logo.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div className="navbar__component">
               
               {/* NavBar trên */}
               <div className="navbar__up">
                    {/* bên trái */}
                    <div className="navbar__up__left">
                        {/* logo */}
                        <div className="navbar__logo">
                            <img className='amazon__logo' src={amazon_logo} alt='amazon_logo'/>
                        </div>
                        
                        {/* vị trí */}
                        <div className="navbar__location">
                            <div className="location__img">
                                <LocationOnOutlinedIcon className="location__icon" sx={{fontSize: "22px"}}/>
                            </div>

                            <div className="navbar__location__place">
                                <div className="place__top">
                                    Deliver to
                                </div>
                                <div className="place__bottom">
                                    Vietnam
                                </div>
                            </div>
                        </div>

                        







                    </div>

                    {/* ở giữa */}
                    <div>

                    </div>

                    {/* bên phải */}
                    <div>

                    </div>
               </div>

                {/* NavBar dưới */}
                <div className="navbar__down">

                </div>
            </div>
        );  
    }
}

export default NavBar;