import { useState } from "react";
import "../../assets/css/messenger.css";
import Content from "../../components/chat/content";
import Sidebar from "../../components/chat/sidebar";

export default function Messenger() {
  const [chat, setChat] = useState(false);
  return (
    <div className="messenger">
      <Sidebar setChat={setChat} />
      <Content chat={chat} setChat={setChat} />
    </div>
  );
}