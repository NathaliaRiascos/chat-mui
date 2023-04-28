import { useState } from "react";
import './Dashboard.css'
import { Card, Message, NavBar, SpeedDial } from "../../components";

function Dashboard() {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <div className="container__chat">
      {!isOpen ? <h1>¡Inicia un chat! :)</h1>: 
        <Card styles="card--white-light">
            <NavBar />
            <div className="chat">
              <Message />
              <Message styles="container__messages--left"/>
              <Message />
            </div>          
        </Card>
        }
      <SpeedDial isOpen={isOpen} toggleOpen={toggleOpen} />
    </div>
  );
}

export default Dashboard;
