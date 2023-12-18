import "./Chat.css";

export const Chat = ({
  chat: { id, name, picture, login },
  chat,
  setMessageId,
}) => {
  const { thumbnail } = picture;
  const { first } = name;
  const { md5 } = login;
  const handleClick = () => {
    setMessageId(chat);
  };
  return (
    <>
      <div className="signleChat">
        <ul onClick={() => handleClick()}>
          <li>
            <img src={thumbnail} alt="" />
          </li>
          <li>
            <p>{first}</p>
            <p>{md5.slice(0, 10)}...</p>
          </li>
        </ul>
      </div>
    </>
  );
};
