import React from "react";
import "./Details.css";
import Users from "../../../../Dummy_Users";
import { FaXmark } from "react-icons/fa6";
import { RiArrowDropUpLine, RiArrowDropDownLine } from "react-icons/ri";
import { CiGrid42, CiVideoOn } from "react-icons/ci";
import { BsFiles } from "react-icons/bs";
import { AiOutlineAudio } from "react-icons/ai";
import { IoLinkOutline } from "react-icons/io5";
import { MdOutlineAudiotrack } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

function Details({ Shown, SetShown }) {
  return (
    <div className={Shown ? "ChatDetails active" : "ChatDetails"}>
      <div className="BackBtm" onClick={() => SetShown((prev) => !prev)}>
        <IoMdArrowRoundBack />
      </div>
      <div className="card">
        <div className="title">
          <h3>Group info </h3>
          <FaXmark />
        </div>
        <h4>Files</h4>
        <div className="box">
          <div className="box-head">
            <div className="box-left">
              <CiGrid42 />
              <span>265 Photos</span>
            </div>
            <RiArrowDropUpLine />
          </div>
          <div className="dowpdown">
            <img
              src={require("../../../../Images/Users/User1.jpg")}
              alt="User1"
            />
            <img
              src={require("../../../../Images/Users/User2.jpg")}
              alt="User2"
            />
            <img
              src={require("../../../../Images/Users/User3.jpg")}
              alt="User3"
            />
            <img
              src={require("../../../../Images/Users/User4.jpg")}
              alt="User4"
            />
            <img
              src={require("../../../../Images/Users/User5.jpg")}
              alt="User5"
            />
          </div>
        </div>
        <div className="box">
          <div className="box-head">
            <div className="box-left">
              <CiVideoOn />
              <span>13 videos</span>
            </div>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="box">
          <div className="box-head">
            <div className="box-left">
              <BsFiles />
              <span>378 files</span>
            </div>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="box">
          <div className="box-head">
            <div className="box-left">
              <MdOutlineAudiotrack />
              <span>21 audio files</span>
            </div>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="box">
          <div className="box-head">
            <div className="box-left">
              <IoLinkOutline />
              <span>45 shared links</span>
            </div>
            <RiArrowDropDownLine />
          </div>
        </div>
        <div className="box">
          <div className="box-head">
            <div className="box-left">
              <AiOutlineAudio />
              <span>2 589 voice message</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card blue">
        <div className="title">
          <h3>9 members</h3>
          <FaXmark />
        </div>
        <div className="UserMember">
          {Users.map((user) => (
            <div className="UserCard">
              <img src={user.Avatar} alt={user.Name} />
              <p>{user.Name}</p>
              <span>{user.id === 1 ? "admin" : ""}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Details;
