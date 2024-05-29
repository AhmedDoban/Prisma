import React from "react";
import "./Chats.css";
import { CiSearch } from "react-icons/ci";
import Users from "../../Dummy_Users";
import { NavLink, Route, Routes } from "react-router-dom";
import Room from "./Room/Room";
import NoRoom from "./NoRoom/NoRoom";
import { TiPin } from "react-icons/ti";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

function Chats() {
  return (
    <div className="Chats">
      <div className="left">
        <div className="search-user">
          <input type="search" placeholder="Search" id="Search" />
          <label htmlFor="Search">
            <CiSearch />
          </label>
        </div>
        <div className="users">
          {Users.map((User) => (
            <NavLink to={`/ChatRoom/${User.id}`} className="UserBox">
              <div className="UserData">
                <div className="avatar">
                  <img src={User.Avatar} alt={User.Name} />
                </div>
                <div className="details">
                  <h4>{User.Name}</h4>
                  <p>{User.Message}</p>
                </div>
              </div>
              <div className="Time-action">
                <div className="delevered">
                  <p>{User.Time}</p>
                  <span
                    className={
                      User.delivered && User.UnSeen === 0 ? "active" : ""
                    }
                  >
                    {<IoCheckmarkDoneOutline />}
                  </span>
                </div>
                <div className="actions">
                  {User.UnSeen > 0 && (
                    <span className="UnReaded"> {User.UnSeen}</span>
                  )}
                  {User.pin && (
                    <span className="Pinned">
                      <TiPin />
                    </span>
                  )}
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <Routes>
        <Route path="" element={<NoRoom />} />
        <Route path="ChatRoom/:id" element={<Room />} />
      </Routes>
    </div>
  );
}
export default Chats;
