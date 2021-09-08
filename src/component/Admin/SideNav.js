import React, {useState} from 'react';
import "./admin.css";
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import SidebarRow from "./SidebarStyle";
import GroupIcon from '@material-ui/icons/Group';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { NavLink } from 'react-router-dom'

function SideNav() {
    const [staus, setStatus] = useState("dashboard")
    return (
        <div className="sidebar">
            <NavLink to="/admin/dashboard" onClick={()=>setStatus("dashboard")} style={{ textDecoration: 'none' }}><SidebarRow Icon={DashboardIcon} title="Dashboard" selected={staus == "dashboard" ? true : false}/></NavLink>
            <NavLink to="/admin/view/user" onClick={()=>setStatus("user")} style={{ textDecoration: 'none' }}><SidebarRow Icon={GroupIcon} title="View Normal Users" selected={staus == "user" ? true : false}/></NavLink>
            <NavLink to="/admin/view/professional" onClick={()=>setStatus("professional")} style={{ textDecoration: 'none' }}><SidebarRow Icon={GroupIcon} title="View Professional Users" selected={staus == "professional" ? true : false}/></NavLink>
            <NavLink to="/admin/view/post" onClick={()=>setStatus("post")} style={{ textDecoration: 'none' }}><SidebarRow Icon={WorkIcon} title="View Post" selected={staus == "post" ? true : false}/></NavLink>
            <NavLink to="/admin/view/contact" onClick={()=>setStatus("contact")} style={{ textDecoration: 'none' }}><SidebarRow Icon={ContactPhoneIcon} title="View Contact" selected={staus == "contact" ? true : false}/></NavLink>
            <hr />
        </div>
    )
}

export default SideNav
