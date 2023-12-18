import "./Chat.css";


export const Chat = ({ chat: { id, name, picture, login }, chat }) => {
  console.log(chat);
  const { thumbnail } = picture;
  const { first } = name;
  const { md5 } = login;
  return (
    <>
      <div className="signleChat">
        <ul>
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
