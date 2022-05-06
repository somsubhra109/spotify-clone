import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import { Avatar, IconButton } from "@mui/material";
import db from "../../firbase";
import { Link } from "react-router-dom";

const SidebarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, []);

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
          <p>{messages[0]?.message}</p>
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
