import React from "react";
import PropTypes from "prop-types";

function Home(props){
    var homeStyles = {
        // display: 'flex',
        // flexDirection: 'column',
        backgroundColor: 'magenta',
        // justifyContent: 'flex-start'
    }
    return (
        <div style={homeStyles}>
            <img src={props.image}/>
            <h2>{props.username}</h2>
            <ul>
                <li>{props.tweets}</li>
                <li>{props.following}</li>
                <li>{props.followers}</li>
            </ul>
            <hr/>
            <p>{props.tweet}</p>
        </div>
    );
}

Home.propTypes = {
    image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tweets: PropTypes.string.isRequired,
    following: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    tweet: PropTypes.string.isRequired
};

export default Home;