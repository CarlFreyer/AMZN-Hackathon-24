
import "../../assets/css/message.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFilled, faStar as faStarOutline } from '@fortawesome/free-solid-svg-icons';


export default function Message({ owner, msg, openImageViewer, togglePin,pinned }) {
  return (
    <div className={owner ? "message owner" : "message"}>
      <img src={msg?.pfp} alt="Profile" className="profile-pic" /> 
      <div className="message-wrapper">
        {msg?.images.length > 0 && (
          <div
            className="image-wrapper"
            onClick={() => openImageViewer(msg.images)}
          >
            <img src={msg?.images[0]} alt="" />
            {msg?.images.length > 1 && (
              <div className="image-count">+{msg?.images.length - 1}</div>
            )}
          </div>
        )}
        <p>{msg?.message}</p>
      </div>
      <span className="timeline">just now</span>
    </div>
  );
}
