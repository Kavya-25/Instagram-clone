import React from "react";
import "./Sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "../Profile/Profile";
import Suggestions from "../Suggestions/Suggestions";
import Footer from "../Footer/Footer";
import image from "../images/kavya.jpg";

export default function Sidebar() {
  return (
      <Sticky>
        <div className="sidebar">
          <Profile
            username="i_kavya_2501"
            caption="Kavya"
            urlText="Switch"
            iconSize="big"
            image={image}
          />
          <Suggestions/>
          <Footer/>
        </div>
      </Sticky>
  );
}
