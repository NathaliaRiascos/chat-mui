import { useState, useEffect } from "react";
import SendIcon from "@mui/icons-material/Send";

import "./Dashboard.css";
import { Card, InputIcon, Message, NavBar, SpeedDial } from "../../components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getMessages } from "../../redux/features";

import useDimensions from "../../hooks/useDimension";

function Dashboard() {
  const { isMobile } = useDimensions()
  const { messages } = useAppSelector((state) => state.chat);
  const [isOpen, toggleOpen] = useState(isMobile);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMessages());
  }, []);

  useEffect(() => {
    toggleOpen(isMobile)
  }, [isMobile]);

  return (
    <div className="container__chat">
      {!isOpen ? (
        <Card styles="card--transparent">
          <div className="container_text">
            <h1 className="text">¡Inicia un chat! :)</h1>
          </div>
        </Card>       
      ) : (
        <Card styles="dashboard">
          <NavBar />
          <div className="chat">
            {messages.map(({ sender, message }) => (
              <Message
                key={message}
                message={message}
                styles={sender == "agent" ? "container__messages--left" : ""}
              />
            ))}
          </div>
          <div
          className="input"
          >
            <InputIcon label="Send a message">
              <SendIcon />
            </InputIcon>
          </div>
        </Card>
      )}
      <SpeedDial isOpen={isOpen} toggleOpen={toggleOpen} />
    </div>
  );
}

export default Dashboard;
