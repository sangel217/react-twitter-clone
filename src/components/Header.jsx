import React from "react";

function Header(){
    var headerStyles = {
        gridColumnStart: '1',
        gridColumnEnd: '4'
    }
    return (
        <div style={headerStyles}>
            <button>Home</button>
            <button>Notifications</button>
            <button>Messages</button>
            <input type="text" placeholder="Search"/>
            <input type="text" placeholder="Tweet"/>
        </div>
    );
}

export default Header;