import { SiMessenger } from "react-icons/si";
import "./MessengerBody.css";

export const MessengerBody = () => {
  return (
    <>
      <div className="messengerBodyContainer">
        <div className="emptyChatBox">
          <div>
            <SiMessenger size={200} />
            <h2>No chat selected yet</h2>
          </div>
        </div>
      </div>
    </>
  );
};
