import { IoCallSharp } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
import "./MessageHeader.css";

export const MessageHeader = () => {
  return (
    <>
      <div className="messageHeader">
        <ul>
          <li>
            <span className="messengerAvatar">
              <p>Avatar</p>
              <p>name</p>
            </span>
          </li>
          <span>
            <li>
              <IoCallSharp />
            </li>
            <li>
              <CiVideoOn />
            </li>
            <li>
              <IoIosInformationCircle color="blue" />
            </li>
          </span>
        </ul>
      </div>
    </>
  );
};
