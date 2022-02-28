import "./chatClone.css";
import ChatRoom from "./ChatRoom";
import ChatLogo from "./ChatLogo";
import { useState } from "react";
import LefPicture from "./LefPicture";

const ChatClone = () => {
  const [visible, setVisible] = useState(true);

  const closeTabHandler = () => {
    console.log(visible);
    setVisible(!visible);
  };

  return (
    <div>
      <LefPicture />
      {visible === true && <ChatRoom closeTabHandler={closeTabHandler} />}
      <ChatLogo closeTabHandler={closeTabHandler} />
    </div>
  );
};

export default ChatClone;
