import React from 'react'

function SidebarStyle({Icon,title, selected }) {
    return (
        <div className={`sidebarrow ${selected && "selected"}`}>
            <Icon style={{height:"30px",width:"30px"}} className="sidebarrow__icon"/>
            <h3 className="sidebarrow__title">{title}</h3>
        </div>
    )
}

export default SidebarStyle
