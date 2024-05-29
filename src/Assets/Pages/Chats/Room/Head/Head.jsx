import React from "react";
import "./Head.css";

import { Link, useParams } from "react-router-dom";
import Users from "../../../../Dummy_Users";
import { IoMdMore, IoMdArrowRoundBack } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function Head({ SetShown }) {
  const Params = useParams();

  return (
    <div className="head-chat">
      <div className="user">
        <Link to="/">
          <IoMdArrowRoundBack />
        </Link>
        <div className="info">
          <h1>{Users[Params.id - 1].Name}</h1>
          <p>23 members , 10 online</p>
        </div>
      </div>
      <div className="actions">
        <button>
          <CiSearch />
        </button>
        <button>
          <IoCallOutline />
        </button>
        <button onClick={() => SetShown((prev) => !prev)}>
          <IoMdMore />
        </button>
      </div>
    </div>
  );
}
export default Head;
