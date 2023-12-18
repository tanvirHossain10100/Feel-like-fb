import { Loading } from "../../Loading/Loading";
import { Chat } from "../Chat/Chat";
import "./Chats.css";
import { SlNote } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import useFetch from "../../customHooks/useFetch/UseFetch";

export const Chats = () => {
  const [data] = useFetch();

  return (
    <>
      {/* trying to fix the bugs */}
      {!data[0]?.cell ? (
        <Loading></Loading>
      ) : (
        <div>
          <div className="chateHeaderConainer">
            <div className=" chatsHeaser">
              <h2>Chats</h2>

              <div className="chatHeaderIcon">
                <SlNote />
                <BsThreeDots />
              </div>
            </div>
            <input type="text" placeholder="Search messenger" />
            <div className="cheatHeaderToggle">
              <button>Inbox</button>
              <button>Communities</button>
            </div>
          </div>
          <div className="chatsContainer">
            {data.map((chat, index) => (
              <Chat key={index} chat={chat}></Chat>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
