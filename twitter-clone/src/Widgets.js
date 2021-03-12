import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";


function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        {/* <SearchIcon className="widgets__searchIcon" /> */}
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1367520948170027011"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="KingJames"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twitter.com/KingJames"}
          options={{ text: "#Lebron is awesome", via: "cleverqazi" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
