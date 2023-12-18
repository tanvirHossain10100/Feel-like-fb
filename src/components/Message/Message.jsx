import { MessengerBody } from "../../MessengerBody/MessengerBody";
import { MessageHeader } from "../MessageHeader/MessageHeader";
import "./Message.css";

export const Message = () => {
  return (
    <>
      <div className="messageContainerd">
        <MessageHeader></MessageHeader>
        <MessengerBody></MessengerBody>
      </div>
    </>
  );
};
