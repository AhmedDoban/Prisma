import React from "react";
import "./Actions.css";
import { RiAttachmentLine } from "react-icons/ri";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { GrSend } from "react-icons/gr";

function Actions({ SetInput, Input, HandleInputEnter, HandleSendMessage }) {
  return (
    <div className="Chat-Actions">
      <button>
        <RiAttachmentLine />
      </button>
      <input
        type="text"
        placeholder="Your message"
        value={Input}
        onChange={(e) => SetInput(e.target.value)}
        onKeyPress={(e) => HandleInputEnter(e)}
      />
      <button>
        <MdOutlineKeyboardVoice />
      </button>
      <button onClick={() => HandleSendMessage()}>
        <GrSend />
      </button>
    </div>
  );
}
export default Actions;
