import React, { useState, useRef, useEffect } from "react";
import "./Room.css";
import Head from "./Head/Head";
import Actions from "./Actions/Actions";
import Body from "./Body/Body";
import { useParams } from "react-router-dom";
import NotFounded from "./../../../Components/NotFounded/NotFounded";
import Users from "./../../../Dummy_Users";
import Details from "./Details/Details";

function Room() {
  const Params = useParams();
  const [Input, SetInput] = useState("");
  const [ChatsData, SetChatsData] = useState([]);
  const [Shown, SetShown] = useState(true);

  const ScrollRef = useChatScroll(ChatsData);

  function useChatScroll(dep) {
    const ref = useRef();
    useEffect(() => {
      if (ref.current !== undefined) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, [dep]);
    return ref;
  }

  const HandleInputEnter = (e) => {
    if (e.key === "Enter" && Input !== "") {
      const UserData = Users[Params.id];
      let ChatsCopy = [...ChatsData];
      ChatsCopy.push({
        id: 9,
        Message: Input,
        Name: "Ahmed",
      });
      ChatsCopy.push({
        id: UserData.id,
        Message: UserData.Message,
        Name: UserData.Name,
        Avatar: UserData.Avatar,
      });
      SetChatsData(ChatsCopy);
      SetInput("");
    }
  };

  const HandleSendMessage = () => {
    if (Input !== "") {
      const UserData = Users[Params.id];
      let ChatsCopy = [...ChatsData];
      ChatsCopy.push({
        id: 9,
        Message: Input,
        Name: "Ahmed",
      });
      ChatsCopy.push({
        id: UserData.id,
        Message: UserData.Message,
        Name: UserData.Name,
        Avatar: UserData.Avatar,
      });
      SetChatsData(ChatsCopy);
      SetInput("");
    }
  };

  useEffect(() => {
    SetChatsData([]);
  }, [Params.id]);

  return Params.id < 9 && Params.id > 0 ? (
    <div className="Room">
      <div className="chatBody">
        <Head SetShown={SetShown} />
        <Body Chat={ChatsData} ScrollRef={ScrollRef} />
        <Actions
          Input={Input}
          SetInput={SetInput}
          HandleInputEnter={HandleInputEnter}
          HandleSendMessage={HandleSendMessage}
        />
      </div>
      <Details Shown={Shown} SetShown={SetShown} />
    </div>
  ) : (
    <NotFounded />
  );
}
export default Room;
