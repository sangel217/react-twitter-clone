import React from "react";
import Header from "./Header";
import HomeList from "./HomeList";
import NewsFeed from "./NewsFeed";
import FriendRequests from "./FriendRequests";

function App(){
    var appStyles = {
        display: 'grid',
    }
    return (
        <div style={appStyles}>
            <Header/>
            <HomeList/>
            <NewsFeed/>
            <FriendRequests/> 
        </div>
    );
}

export default App;