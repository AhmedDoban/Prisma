import React from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { IoChatbox } from "react-icons/io5";
import { FaFolder, FaUser } from "react-icons/fa";
import { RiArchiveStackFill, RiLogoutBoxLine } from "react-icons/ri";
import { LuSettings2 } from "react-icons/lu";

function Sidebar({ active }) {
  return (
    <React.Fragment>
      <div className={`Sidebar ${active}`}>
        <div className="avatar">
          <img src={require("../../Images/Logo.png")} alt="avatar" />
        </div>
        <ul className="navigators">
          <div className="box">
            <li>
              <NavLink to="/">
                <IoChatbox />
                <div className="counter">43</div>
                <span>All Chats </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="Work">
                <FaFolder />
                <div className="counter">4</div>
                <span>Work</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="Friends">
                <FaFolder />
                <span>Friends</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="News">
                <FaFolder />
                <span>News</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="ArchiveChats">
                <RiArchiveStackFill />
                <span>Archive Chats</span>
              </NavLink>
            </li>
          </div>
          <div className="box">
            <li>
              <NavLink to="Profile">
                <FaUser />
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="Setting">
                <LuSettings2 />
                <span>Edit</span>
              </NavLink>
            </li>
          </div>
        </ul>
        <div className="setting">
          <Link to="/">
            <RiLogoutBoxLine />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Sidebar;
