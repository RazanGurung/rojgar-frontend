import React, {useState,useEffect} from 'react';
import '../../css/dashnav.css';
import SearchIcon from "@material-ui/icons/Search";
import Avatar from '@material-ui/core/Avatar';
import {Link, NavLink} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

function Dashnav() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const profile = localStorage.getItem("profile");
    const usertype = localStorage.getItem("usertype");

    const [search,setSearch]=useState(""); 

    const logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('userid')
        window.location.href = '/'
    }
    if(localStorage.getItem("token") && usertype == "user"){
        var menu= <>
            <div className={click ? "onclick-dashnav-main":"dashnav__main"}>
                <div className="dashnav__logo">
                    <Link to="/"><img src="https://res.cloudinary.com/rojgar-com/image/upload/v1627727288/dashlogo_tgej8z.png"/></Link>
                    <div className='dashnav-web-menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <div className="dashnav-menu">
                    <NavLink className={click ?"onclick-dashnav-menu-item":"dashnav-menu-item"} to="/find-professional"><span>Find Professional</span></NavLink>
                    <NavLink className={click ?"onclick-dashnav-menu-item":"dashnav-menu-item"} to="/job-post">My Job</NavLink>
                    <NavLink className={click ?"onclick-dashnav-menu-item":"dashnav-menu-item"} exact activeClassName="active" to="/user/progress"><span>Progress</span></NavLink>
                </div>
                <div className="dashnav-search">
                    <input placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <Link to={"/search-professional/"+search}><SearchIcon className="dashnav-search-icon" style={{height:"25px", width:"25px"}}/></Link>
                </div>
                <div className="dashnav-account">
                    <Link to="/user/notification" className="dashnav-account-item"><NotificationsNoneIcon  style={{height:"30px", width:"30px",paddingTop:"3px"}}/></Link>
                    <Dropdown>
                        <Dropdown.Toggle  className="dashnav-account-dropdown">
                            <Avatar className="dashnav-account-item" src={profile}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dashnav-account-dropdown-item">
                            <Dropdown.Item href="/user-account"  className="dashnav-account-dropdown-btn"><AccountCircleIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>My Account</Dropdown.Item>
                            <Dropdown.Item  className="dashnav-account-dropdown-btn"><SettingsIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>Settings</Dropdown.Item>
                            <Dropdown.Item onClick={logout}  className="dashnav-account-dropdown-btn"><PowerSettingsNewIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </div>
            </div>
        </>
    }else if(localStorage.getItem("token") && usertype == "professional"){
        var menu = <>
            <div className={click ? "onclick-dashnav-main":"dashnav__main"}>
                <div className="dashnav__logo">
                    <Link to="/"><img src="https://res.cloudinary.com/rojgar-com/image/upload/v1627727288/dashlogo_tgej8z.png"/></Link>
                    <div className='dashnav-web-menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <div className={click ? "onclick-dashnav-menu":"dashnav-menu"}>
                    <NavLink className={click ?"onclick-dashnav-menu-item":"dashnav-menu-item"} exact activeClassName="active"  to="/find-job">Find Work</NavLink>
                    <NavLink className={click ?"onclick-dashnav-menu-item":"dashnav-menu-item"} exact activeClassName="active"  to="/view/invites">Job Invites</NavLink>
                    <NavLink className={click ?"onclick-dashnav-menu-item":"dashnav-menu-item"} exact activeClassName="active"  to="/professional/progress">Progress</NavLink>
                </div>
                <div className="dashnav-search">
                    <input placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <Link to={"/search-job/"+search}><SearchIcon className="dashnav-search-icon" style={{height:"25px", width:"25px"}}/></Link>
                </div>
                <div className={click ? "onclick-dashnav-account":"dashnav-account"}>
                    <div className="dashnav-account-link">
                        <Link to="/bookmark" className="dashnav-account-item"><BookmarkBorderIcon   style={{height:"30px", width:"30px",paddingTop:"3px" ,color:"white"}}/></Link>
                        <Link to="/user/notification" className="dashnav-account-item"><NotificationsNoneIcon  style={{height:"30px", width:"30px",paddingTop:"3px",color:"white"}}/></Link>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle  className="dashnav-account-dropdown">
                            <Avatar className="dashnav-account-item" src={profile}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dashnav-account-dropdown-item">
                            <Dropdown.Item href="/account"  className="dashnav-account-dropdown-btn"><AccountCircleIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>My Account</Dropdown.Item>
                            <Dropdown.Item  className="dashnav-account-dropdown-btn"><SettingsIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>Settings</Dropdown.Item>
                            <Dropdown.Item onClick={logout}  className="dashnav-account-dropdown-btn"><PowerSettingsNewIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </div>
            </div>
        </>
    }
    return (
        <div className="dashnav">
            {menu}
        </div>
    )
}

export default Dashnav
