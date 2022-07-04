import React from "react";
import "./Card.scss";
import Profile from "../Profile/Profile";
import CardMenu from "../CardMenu/CardMenu";
import Comment from "../Comment/Comment";

export default function Card(props) {
  const { storyBorder, image, comments, likedByText, likedByNumber, hours } =
    props;
  return (
    <div className="card">
      <header>
        <Profile iconSize="medium" storyBorder={storyBorder} />
      </header>
      <img className="cardImage" src={image} alt="" />
      <CardMenu />
      <div className="likedBy">
        <Profile iconSize="small" hideaccountName={true} className="commentprofile"/>
        <span>
          Likey by <strong>{likedByText}</strong> and{" "}
          <strong>{likedByNumber} others</strong>
        </span>
      </div>
      <div className="comments">
        {comments.map((comments) => {
          return (
            <Comment
              key={comments.id}
              accountName={comments.user}
              comment={comments.text}
            />
          );
        })}
      </div>
      <div className="timeposted">{hours} HOURS AGO</div>
      <div className="addcomment">
        <div className="commentText">Add Comment...</div>
        <div className="post">POST</div>
      </div>
    </div>
  );
}
