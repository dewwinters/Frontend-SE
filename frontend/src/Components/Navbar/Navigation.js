import React, { useState } from 'react';
import "./NavBar.css";
import amazon_logo from "../../Assets/amazon_logo.png";
import vietnam from '../../Assets/vietnam.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const NavBar = () => {
    const [showAll, setShowAll] = useState(false);
    const allItems = [
        {_id:"100", title:"All Departments"},
        {_id:"101", title:"Arts & Crafts"},
        {_id:"102", title:"Automotive"},
        {_id:"103", title:"Baby"},
        {_id:"104", title:"Beauty & Personal Care"},
        {_id:"105", title:"Books"},
        {_id:"106", title:"Boys' Fashion"},
        {_id:"107", title:"Computers"},
        {_id:"108", title:"Deals"},
        {_id:"109", title:"Digital Musics"},
        {_id:"110", title:"Electronics"},
        {_id:"111", title:"Girls' Fashion"},
        {_id:"112", title:"Health & Households"},
        {_id:"113", title:"Home & Kitchen"},
        {_id:"114", title:"Industrial & Scientific"},
        {_id:"115", title:"Kindle Store"},
        {_id:"116", title:"Luggage"},
        {_id:"117", title:"Men's Fashion"},
        {_id:"118", title:"Movies & TVs"},
        {_id:"119", title:"Music, CDs & Vinyl"},
        {_id:"120", title:"Pet Supplies"},
        {_id:"121", title:"Prime Video"},
        {_id:"122", title:"Software"},
        {_id:"123", title:"Sports & Outdoors"},
        {_id:"124", title:"Tools & Home Improvements"},
        {_id:"125", title:"Toys & Games"},
        {_id:"126", title:"Video Games"},
        {_id:"127", title:"Women's Fashion"}
    ];

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
                            <div className="searchbox__all" onClick={() => setShowAll(!showAll)}>
                                <div className="searchbox__all__text">
                                    All
                                </div>
                                <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }}/>
                            </div>

                            {showAll && (
                                <div>
                                    <ul className="searchbox__all__textbox">
                                        {allItems.map(item => (
                                            <li className="textbox__text" key={item._id}>{item.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <input type='text' className="searchbox__input" placeholder='Search Amazon'/>
                            <div className="searchbox__icon">
                                <SearchOutlinedIcon sx={{ fontSize: "26px" }} />
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
                            EN <ArrowDropDownOutlinedIcon sx={{ fontSize: 16, marginLeft: -0.4 }} className="vietnam__dropdown"/>
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
                            <ArrowDropDownOutlinedIcon sx={{ fontSize: 16 }} className="account__dropdown"/>
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
                <div className="navbar__down__left">
                    <div className="option">
                        <MenuOutlinedIcon sx={{ fontSize: "24px" }}/>
                        <div className="option__text">
                            All
                        </div>
                    </div>

                    <div className="type">
                        <div className="type__text">
                            Today's Deals
                        </div>
                    </div>

                    <div className="type">
                        <div className="type__text">
                            Customer Service
                        </div>
                    </div>

                    <div className="type">
                        <div className="type__text">
                            Registry
                        </div>
                    </div>

                    <div className="type">
                        <div className="type__text">
                            Gift Cards
                        </div>
                    </div>

                    <div className="type">
                        <div className="type__text">
                            Sell
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;