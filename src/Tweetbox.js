import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Tweetbox.css";
function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__inputImage"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button className="tweetBox__tweetbutton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;