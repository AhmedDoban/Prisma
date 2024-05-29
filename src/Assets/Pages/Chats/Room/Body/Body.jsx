import React from "react";
import "./Body.css";
import { FaRegEye } from "react-icons/fa";

function Body({ Chat, ScrollRef }) {
  return (
    <div className="Chat-Body" ref={ScrollRef}>
      {Chat.map((messageBody, index) => (
        <div
          className={messageBody.id === 9 ? "card Right" : "card Left"}
          key={index}
        >
          <div className="img-box">
            <img
              src={
                messageBody.Avatar
                  ? messageBody.Avatar
                  : require("../../../../Images/Users/User9.jpg")
              }
              alt="Avatar"
            />
          </div>
          <div className="message">
            {messageBody.id !== 9 && <h1>{messageBody.Name}</h1>}

            <p>{messageBody.Message}</p>
            <div className="time">
              <p>
                10 <FaRegEye />
              </p>
              <p>09:24</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Body;
