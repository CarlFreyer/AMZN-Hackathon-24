import Avatar from "./avatar";

export default function ChatItem({ setChat, username, lastMessage, timeline, avatar, isActive, onClick }) {
    return (
        <div
        className={`chat-item ${isActive ? "active" : ""}`} // apply active class for highlight
        onClick={() => {
          setChat(true);
          onClick(); // trigger parent for active
        }}
        >
            <Avatar src={avatar} height={55} width={55} />
            <div className="chat-item-infos">
            <div className="avatar-infos">
                <span className="username">{username}</span>
                <span className="timeline">{timeline}</span>
            </div>
            <p className="last-message">{lastMessage}</p>
            </div>
        </div>
    );
  }
  