import React, { useEffect, useState } from "react";

import "./SideNavbar.css";
import ChatImg from "../../Assets/Images/chat.png";
import ChatHoverImg from "../../Assets/Images/chat-hover.png";
import TeamsImg from "../../Assets/Images/teams.png";
import TeamsHoverImg from "../../Assets/Images/teams-hover.png";
import FilesImg from "../../Assets/Images/files.png";
import FilesHoverImg from "../../Assets/Images/files-hover.png";

const SideNavbar = (props: any) => {
  const [active, setActive] = useState();
  
  return (
    <div
      className={
        window.innerHeight < window.innerWidth ? "sideNavbar" : "bottomNavbar"
      }
    >
      <div className="sideNavItems">
        <div
          className={"sideNavlink"}
          onClick={(e) => {
          }}
        >
          <div>
            <img src={active === "Chat" ? ChatHoverImg : ChatImg} alt="chat" />
          </div>
          <div>Chat</div>
        </div>
        <div
          className="sideNavlink"
          onClick={(e) => {
          }}
        >
          <div className={"activeLink"}>
            <img
              className="currentSideBarIcon"
              src={active === "Teams" ? TeamsHoverImg : TeamsImg}
              alt="teams"
            />
          </div>
          <div className={"activeSideNavLink"}>Teams</div>
        </div>
        <div
          className="sideNavlink"
          onClick={(e) => {
          }}
        >
          <div>
            <img
              alt="contacts"
              className="currentSideBarIcon"
              src={active === "Contacts" ? FilesHoverImg : FilesImg}
            />
          </div>
          <div>
            Contacts
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SideNavbar;