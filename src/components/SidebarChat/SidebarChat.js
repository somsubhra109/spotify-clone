import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@mui/material";
import db from "../../firbase";
import { Link } from "react-router-dom";

const SidebarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter a room name for a new chat");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link
      to={`/rooms/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/male/${seed}.svg`} />
        <div className="sidebarChatInfo">
          <h2>{name}</h2>
          <p>Last Message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
