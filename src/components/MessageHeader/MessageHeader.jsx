import { IoCallSharp } from "react-icons/io5";
import { CiVideoOn } from "react-icons/ci";
import { IoIosInformationCircle } from "react-icons/io";
import "./MessageHeader.css";
import { Loading } from "../../Loading/Loading";

export const MessageHeader = ({
  messageId: { picture, cell, name },
  messageId,
}) => {
  console.log(name);
  const { thumbnail } = picture || {};
  const { title, first, last } = name || {};
  console.log(title);
  //   console.log(thumbnail);

  return (
    <>
      {messageId ? (
        <div className="messageHeader">
          <ul>
            <li>
              <span className="messengerAvatar">
                <p>
                  <img src={thumbnail} alt="" />
                </p>
                <p>{title + " " + first + " " + last}</p>
              </span>
            </li>
            <span className="messageHeader2">
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
      ) : (
        ""
      )}
    </>
  );
};
