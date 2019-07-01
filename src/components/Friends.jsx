import React from "react";
import PropTypes from "prop-types";

function Friends(props){
    var friendsStyles = {
        backgroundColor: '	#8A2BE2'
    }
    return (
        <div style={friendsStyles}>
            <h2>Friend Requests</h2>
            <h3>{props.name}</h3>
            <button>Button</button>
        </div>
    );
}

Friends.propTypes = {
    name: PropTypes.string.isRequired
};

export default Friends;