import "./chatClone.css";

const ChatLogo = ({ closeTabHandler }) => {
  return (
    <img
      onClick={closeTabHandler}
      className="icone"
      alt="logo"
      src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-robot-support-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
    />
  );
};

export default ChatLogo;
