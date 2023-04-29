import { Avatar } from "@mui/material";
import "./Message.css";

const imgURL ="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
const imgURL2 = "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
function Message({ styles = "", message}) {
  return (
    <div className={`container__messages ${styles}`}>
      {styles == "container__messages--left" ? (
        <Avatar alt="Cindy Baker" src={imgURL} />
      ) : (
        <Avatar alt="Travis Howard" src={imgURL2} />
      )}

      <div className="messages">
        <div className="message">
          { message }
        </div>
      </div>
    </div>
  );
}

export default Message;
