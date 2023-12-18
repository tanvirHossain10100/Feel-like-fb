import { BsFacebook } from "react-icons/bs";
import { LuHome } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <span>
            <li>
              <BsFacebook color="#0866FF" size={"30px"} />
            </li>
            <li>
              <input type="text" name="search" placeholder="Search Facebook" />
            </li>
          </span>
          <span>
            <li>
              <LuHome size="30px" />
            </li>
            <li>
              <LiaUserFriendsSolid size="30px" />
            </li>
            <li>
              <MdOutlineOndemandVideo size="30px" />
            </li>
            <li>
              <SiFacebookgaming size="30px" />
            </li>
          </span>
          <span>
            <li>
              <CgMenuGridR size="30px" />
            </li>
            <li>
              <IoIosNotificationsOutline size="30px" />
            </li>
            <li>Avatar</li>
          </span>
        </ul>
      </div>
    </>
  );
};
