import React, {Component} from 'react';
import "./NavBar.css"
import amazon_logo from "../../Assets/amazon_logo.png"
import vietnam from '../../Assets/vietnam.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
                    <div className="searchbox__middle">
                        {/* ô tìm kiếm */}
                        <div className="navbar__searchbox">
                            {/* all */}
                            <div className="searchbox__box">
                                <div className="searchbox__all">
                                    <div className="searchbox__all__text">
                                        All
                                    </div>
                                    <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }}/>
                                </div>

                                <input type='text' className="searchbox__input" placeholder='Search Amazon'/>

                                <div className="searchbox__icon">
                                    <SearchOutlinedIcon sx={{fontSize: "26px"}} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* bên phải */}
                    <div className="navbar__up__right">
                        {/* ngôn ngữ */}
                        <div className="vietnam__logo">
                            <img src={vietnam} className="vietnam__flag" alt="vietnam_logo"/>
                            <div className="vietnam__text">
                                EN <ArrowDropDownOutlinedIcon sx={{fontSize: 16, marginLeft: -0.4}} className="vietnam__dropdown"/>
                            </div>
                        </div>

                        {/* tài khoản */}
                        <div className="account">
                            <div className="account__left">
                                <div className="account__up">
                                    Hello, User
                                </div>
                                <div className="account__down">
                                    Accounts & Lists
                                </div>
                            </div>
                            <div className="account__right">
                                <ArrowDropDownOutlinedIcon sx={{fontSize: 16}} className="account__dropdown"/>
                            </div>
                        </div>

                        {/* hoàn trả */}
                        <div className="return">
                            <div className="return__up">
                                Returns
                            </div>
                            <div className="return__down">
                                & Orders
                            </div>
                        </div>

                        {/* giỏ hàng */}
                        <div className="cart">
                            <span className="cart__up">0</span>
                            <div className="cart__down">
                                <ShoppingCartOutlinedIcon className="cart__icon"/>
                            </div>
                            <div className="cart__title">
                                    Cart
                            </div>
                        </div>

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