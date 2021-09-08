import React, {useState, useEffect} from 'react';
import "../../css/header.css";
import {NavLink, Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Dropdown} from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [searchPlaceholder,setSearchPlaceholder]=useState(""); 
    const [search,setSearch]=useState(""); 

    const searchHere=()=>{
        if(searchPlaceholder === "Work" ){
            window.location.href="/search-work/"+search;
        }else{
            window.location.href="/search-worker/"+search;
        }
    }

    return (
        <div className="header-container">
            <div className={click ? "onclick-nav-container" : "navbar-container"}>
                <div className="navbar-logo">
                    <Link to="/">
                        <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1627727288/logo_y5ujmc.png" className="navbar-logo-img"/>
                    </Link>
                    <div className='web-menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <div className={click ? "onclick-nav-menu" : "navbar-menu"}>
                    <NavLink onClick={closeMobileMenu} className= {click ? "onclick-navbar-menu-item":"navbar-menu-item"} exact activeClassName="navbar-menu-item-active"  to="/find-work">Find Work</NavLink>
                    <NavLink onClick={closeMobileMenu} className={click ? "onclick-navbar-menu-item":"navbar-menu-item"} exact activeClassName="navbar-menu-item-active" to="/find-worker">Find Worker</NavLink>
                    <NavLink onClick={closeMobileMenu} className={click ? "onclick-navbar-menu-item":"navbar-menu-item"} exact activeClassName="navbar-menu-item-active" to="/about/us">Why RojGar.com</NavLink>
                </div>
                <div className="navbar-search">
                    <Dropdown>
                        <Dropdown.Toggle  className="search-dropdown">
                            <ArrowDropDownIcon className="searchexpand" style={{ height: '25px', width: '25px' }}/> <input type="text" placeholder={"Search " + searchPlaceholder} className="navbar-searchbox" value={search} onChange={(e)=>setSearch(e.target.value)} required=""/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="search-dropdown-menu">
                            <Dropdown.Item onClick={()=>setSearchPlaceholder("Professional")}  className="search-dropdown-menu-items"><AccountCircleIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/><div className="search-dropdown-menu-items-options"><h3>Worker</h3><p>Hire Professional</p></div></Dropdown.Item>
                            <Dropdown.Item onClick={()=>setSearchPlaceholder("Work")} className="search-dropdown-menu-items"><WorkIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/><div className="search-dropdown-menu-items-options"><h3>Jobs</h3><p>Search Jobs</p></div></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                    <SearchIcon onClick={searchHere} className="navbar-searchIcon"/>
                </div>
                <div className={click ? "onclick-navbar-menu-item-button":"navbar-menu-item-button"}>
                    <Link onClick={closeMobileMenu}  to="/login"><button className={click ? "onclick-navbar-menu-item-button-login":"navbar-menu-item-button-login"}>Log In</button></Link>
                    <Link onClick={closeMobileMenu}  to="/signup"><button className={click ? "onclick-navbar-menu-item-button-signup":"navbar-menu-item-button-signup"}>Sign Up</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
