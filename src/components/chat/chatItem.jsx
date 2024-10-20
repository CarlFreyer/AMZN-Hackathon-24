import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFilled, faStar as faStarOutline } from '@fortawesome/free-solid-svg-icons';
import Avatar from './avatar';
export default function ChatItem({
  setChat,
  username,
  lastMessage,
  timeline,
  avatar,
  isActive,
  pinned,
  onClick,
  togglePin
}) {
  return (
    <div
      className={`chat-item ${isActive ? "active" : ""}`}
      onClick={() => {
        setChat(true);
        onClick(); // Trigger the onClick function
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
      {/* Pin/Unpin button */}
      <button onClick={togglePin} className="pin-button">
        <FontAwesomeIcon
          icon={pinned ? faStarFilled : faStarOutline}
          style={{ color: pinned ? "gold" : "gray" }} // Gold if pinned, gray if not
        />
      </button>
    </div>
  );
}
