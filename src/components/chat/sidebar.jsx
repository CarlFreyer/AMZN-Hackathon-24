import { useState } from "react";
import "../../assets/css/sidebar.css";
import Avatar from "./avatar";
import ChatItem from "./chatItem";
import ContactItem from "./contactItem";
import Profile from "./profile";
import { chats } from "../../data/chatItems";
import clutchbot from '../../assets/image/clutchbot.png';

export default function Sidebar({ setChat }) {
  const [newChat, setNewChat] = useState(false);
  const [chatGroup, setChatGroup] = useState([
    { 
      id: "ai-clutchbot", 
      username: "AI Clutchbot", 
      lastMessage: "How can I assist you today?", 
      timeline: "now", 
      avatar: clutchbot, 
      pinned: true 
    },
    ...chats
  ]);
  const [onProfile, setOnProfile] = useState(false);
  const [activeChatId, setActiveChatId] = useState(null); 

  const handleSetActiveChat = (id) => {
    setActiveChatId(id); 
  };

  const togglePinChat = (id) => {
    setChatGroup((prevChats) =>
      prevChats.map((chat) =>
        chat.id === id && chat.id !== "ai-clutchbot" 
          ? { ...chat, pinned: !chat.pinned } 
          : chat
      )
    );
  };

  const sortedChatGroup = [...chatGroup].sort((a, b) => {
    if (a.id === "ai-clutchbot") return -1; // keep AI Clutchbot at the top
    if (b.id === "ai-clutchbot") return 1;
    return b.pinned - a.pinned;
  });

  return (
    <div className="sidebar">
      <Profile open={onProfile} setOpen={setOnProfile} />
      <div className="wrapper">
        <div className="top">
          <div style={{cursor: "pointer"}} onClick={() => setOnProfile(true)}>
            {/* <Avatar src="" height={45} width={45} /> */}
          </div>
          {newChat && <span className="heading">Add Conversation</span>}
          <div
            className={newChat ? "app-icon active" : "app-icon"}
            onClick={() => setNewChat((prev) => !prev)}
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="center">
          <div className="search-wrapper">
            <div className="input-wrapper">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder={
                  newChat ? "Search a contact" : "Search a conversation"
                }
              />
            </div>
          </div>
          <div className="center-wrapper">
            {newChat ? (
              <div className="items-wrapper">
                {[...Array(50)].map((contact, index) => (
                  <ContactItem key={index} />
                ))}
              </div>
            ) : (
              <div className="items-wrapper">
                {sortedChatGroup.map((chat) => (
                  <ChatItem
                    key={chat.id}
                    setChat={setChat}
                    isActive={activeChatId === chat.id} // Check if this chat is active
                    onClick={() => handleSetActiveChat(chat.id)} // Set as active on click
                    username={chat.username}
                    lastMessage={chat.lastMessage}
                    timeline={chat.timeline}
                    avatar={chat.avatar}
                    pinned={chat.pinned} // Pass pinned status
                    togglePin={() => togglePinChat(chat.id)} // Toggle pin on click
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}