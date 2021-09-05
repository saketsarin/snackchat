import React from "react";
import "./css/Chat.css";
import { Avatar } from "@material-ui/core";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import ReactTimeago from "react-timeago";
import { selectImage } from "./features/appSlice";
import { useDispatch } from "react-redux";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";

function Chat({ id, profilePic, username, timestamp, imageUrl, read }) {
  const dispatch = useDispatch();

  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );

      history.push("/chats/view");
    }
  };
  return (
    <div onClick={open} className="chat">
      <Avatar className="chatAvatar" src={profilePic} />
      <div className="chatInfo">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to view -"}{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>

      {!read && <StopRoundedIcon className="chatReadIcon" />}
    </div>
  );
}

export default Chat;
