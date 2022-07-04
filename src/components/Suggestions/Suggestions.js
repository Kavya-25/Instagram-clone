import React from "react";
import Profile from "../Profile/Profile";
import "./Suggestions.scss";
import "../../data/user";

export default function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Suggestions For You</div>
        <a href="/" className="seeall">See All</a>
      </div>
      <Profile
        caption="Followed by yajatchaudhary + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by yajatchaudhary + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by yajatchaudhary + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by yajatchaudhary + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Followed by yajatchaudhary + 3 more"
        urlText="Follow"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
}
