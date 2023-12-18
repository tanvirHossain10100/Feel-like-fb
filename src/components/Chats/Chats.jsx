import { Loading } from "../../Loading/Loading";
import { Chat } from "../Chat/Chat";
import "./Chats.css";
import { SlNote } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import useFetch from "../../customHooks/UseFetch/UseFetch";
import { SiMessenger } from "react-icons/si";

export const Chats = ({ setMessageId }) => {
  const [data] = useFetch();

  return (
    <>
      <>
        {!data[0]?.cell ? (
          <div className="loading">
            <Loading />
          </div>
        ) : (
          <div>
            {setMessageId ? (
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
                    <Chat key={index} chat={chat} setMessageId={setMessageId} />
                  ))}
                </div>
              </div>
            ) : (
              <>
                fdf
                <SiMessenger size={200} />
              </>
            )}
          </div>
        )}
      </>
    </>
  );
};
