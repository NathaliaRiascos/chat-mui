import { Avatar } from "@mui/material";
import "./Message.css";

function Message({ styles = "" }) {
  return (
    <div className={`container__messages ${styles}`}>
      {styles == "container__messages--left" ? (
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      ) : (
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      )}

      <div className="messages">
        <div className="message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
        <div className="message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
}

export default Message;
