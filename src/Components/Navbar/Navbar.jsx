import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext.jsx";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    return (
        <>
            <div className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="logo" />
                    <h2>E-SHOP</h2>
                </div>
                <ul className="nav-menu">
                    <li onClick={() => { setMenu("shop") }}><Link to="/" style={{ textDecoration: "none", color: "black" }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("men") }}><Link to="/men" style={{ textDecoration: "none", color: "black" }}>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("women") }}><Link to="/women" style={{ textDecoration: "none", color: "black" }}>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}><Link to="/kids" style={{ textDecoration: "none", color: "black" }}>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
                </ul>
                <div className="nav-login-cart">
                    <Link to="/login" style={{ textDecoration: "none" }}><button>Login</button></Link>
                    <Link to="/profile" style={{ textDecoration: "none" }}><button>Profile</button></Link>
                    <Link to="/signup" style={{ textDecoration: "none", display: "none" }}><button>Signup</button></Link>
                    <Link to="/cart" style={{ textDecoration: "none" }}> <img src={cart_icon} alt="icon" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </>
    );
};

export default Navbar;