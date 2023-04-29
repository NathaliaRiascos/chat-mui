import { useState, useEffect } from "react";
import "./Dashboard.css";
import { Card, Message, NavBar, SpeedDial } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getMessages } from "../../redux/features";

function Dashboard() {
  const { messages } = useAppSelector((state) => state.chat);
  const [isOpen, toggleOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  return (
    <div className="container__chat">
      {!isOpen ? (
        <h1>¡Inicia un chat! :)</h1>
      ) : (
        <Card styles="card--white-light">
          <NavBar />
          <div className="chat">
            {messages.map(({ sender, message }) => (
              <Message message={message}
              styles={sender == 'agent'? "container__messages--left" : ""}/>
            ))}
            {/* <Message />
            <Message styles="container__messages--left" />
            <Message /> */}
          </div>
        </Card>
      )}
      <SpeedDial isOpen={isOpen} toggleOpen={toggleOpen} />
    </div>
  );
}

export default Dashboard;
