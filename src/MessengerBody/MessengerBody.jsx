import { SiMessenger } from "react-icons/si";
import "./MessengerBody.css";

export const MessengerBody = ({ messageId }) => {
  const { cell } = messageId;
  return (
    <>
      <div className="messengerBodyContainer">
        <div className="emptyChatBox">
          {messageId ? (
            <div>{cell}</div>
          ) : (
            <div className="messengerSymbol">
              <SiMessenger size={200} color="blue" />
              <h2>No chat selected yet</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
