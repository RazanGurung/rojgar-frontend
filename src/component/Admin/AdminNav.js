import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import "./admin.css";
import {Link} from "react-router-dom";

function AdminNav() {
    const logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('usertype')
        localStorage.removeItem('userid')
        window.location.href = '/'
    }
    return (
        <div className="admin-nav-container">
            <div className="admin-logo">
                <Link to="/"><img className="admin-logo-img" src="https://res.cloudinary.com/rojgar-com/image/upload/v1627727288/dashlogo_tgej8z.png" className="dashboard__logo" /></Link>
            </div>
            <div className="admin-search">
                <input placeholder="search" type="text"/>
                <SearchIcon className="admin-search-icon" style={{height:"28px",width:"28px", color:"purple"}}/>
            </div>
            <Link to="/account" style={{ textDecoration: 'none' }}>
                <div className="dashboard__right">
                    <PowerSettingsNewIcon style={{height:"30px",width:"30px", color:"white"}} onClick={logout}/> 
                </div>
            </Link>
        </div>
    )
}

export default AdminNav
