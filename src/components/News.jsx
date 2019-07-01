import React from "react";
import PropTypes from "prop-types";

function News(props){
    var newsStyles = {
        backgroundColor: '#00FFFF',
        // display: 'flex',
        // flexDirection: 'column',
    }
    return (
        <div style={newsStyles}>
            <input type="text" placeholder="What's Happening?"/>
            <ul>
                <li>
                    <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiq4Mz42pTjAhUqJTQIHaZKAh0QjRx6BAgBEAU&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Favatar%2F&psig=AOvVaw13vz9c3MWo3nFCoI0L91dp&ust=1562104516357270"/>
                    <h3>{props.title}</h3>
                    <p>{props.message}</p>
                </li>
                <hr/>
            </ul>
        </div>
    );
}

News.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default News;