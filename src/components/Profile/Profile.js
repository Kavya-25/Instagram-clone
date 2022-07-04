import React from "react";
import Profileicon from "../ProfileIcon/Profileicon";
import { user } from "../../data/user";
import "./Profile.scss";

export default function Profile(props) {
  const {
    username,
    caption,
    urlText,
    iconSize,
    captionSize,
    storyBorder,
    hideaccountName,
    image,
  } = props;
  let accountName = username
    ? username
    : user[Math.floor(Math.random() * user.length)].username;
  return (
    <div className="profile">
      <Profileicon
        iconSize={iconSize}
        storyBorder={storyBorder}
        image={image}
      />
      {(accountName|| caption)&&(!hideaccountName)&&(
        <div className="textContainer">
          <span className="accountName">{accountName}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a className="urlText" href="/">{urlText}</a>
    </div>
  );
}
