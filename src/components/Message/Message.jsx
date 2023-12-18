import { MessengerBody } from "../../MessengerBody/MessengerBody";
import { MessageHeader } from "../MessageHeader/MessageHeader";
import "./Message.css";

export const Message = ({messageId}) => {
  return (
    <>
      <div className="messageContainerd">
        <MessageHeader messageId={messageId}></MessageHeader>
        <MessengerBody messageId={messageId}></MessengerBody>
      </div>
    </>
  );
};
