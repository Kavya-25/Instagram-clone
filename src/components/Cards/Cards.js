import React from "react";
import Stories from "../Stories/Stories";
import "./Cards.scss";
import Card from "../Card/Card";

export default function Cards() {
  const commentOne = [
    {
      id: 1,
      user: "yajatchaudhary",
      text: "Wow,awesome dude",
    },
    {
      id: 2,
      user: "devanshiraman",
      text: "Beauty...",
    },
    {
      id: 3,
      user: "banitarana",
      text: "Lit",
    },
    {
      id: 4,
      user: "Disha Gupta",
      text: "Wow,awesome dude!!",
    },
  ];
  const commentTwo = [
    {
      id: 5,
      user: "goelpranjal",
      text: "worth remebering",
    },
    {
      id: 6,
      user: "prosty",
      text: "Cool AF",
    },
    {
      id: 7,
      user: "edetrash",
      text: "Voilaaa",
    },
  ];
  const commentThree = [
    {
      id: 8,
      user: "Gogitikago",
      text: "Chaa gye",
    },
  ];
  return (
    <div className="cards">
      <Stories />
      <Card
        storyBorder={true}
        accountName="yajatchaudhary"
        image="https://picsum.photos/800/900"
        comments={commentOne}
        likedByText="gogitika"
        likedByNumber={57}
        hours={1}
      />
      <Card
        storyBorder={true}
        accountName="yajatchaudhary"
        image="https://picsum.photos/800"
        comments={commentTwo}
        likedByText="yajatchaudhary"
        likedByNumber={100}
        hours={3}
      />
      <Card
        storyBorder={true}
        accountName="yajatchaudhary"
        image="https://picsum.photos/800/1000"
        comments={commentThree}
        likedByText="devanshiraman"
        likedByNumber={159}
        hours={4}
      />
      <Card
        storyBorder={true}
        accountName="yajatchaudhary"
        image="https://picsum.photos/800/1000"
        comments={commentThree}
        likedByText="devanshiraman"
        likedByNumber={159}
        hours={4}
      />
      <Card
        storyBorder={true}
        accountName="yajatchaudhary"
        image="https://picsum.photos/800/1000"
        comments={commentThree}
        likedByText="devanshiraman"
        likedByNumber={159}
        hours={4}
      />
    </div>
  );
}
