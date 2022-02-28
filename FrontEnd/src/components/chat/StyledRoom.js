import { ThemeProvider } from "styled-components";

const style = {
  background: "#royalblue",
  fontFamily: "cursive",
  headerBgColor: "royalblue",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: " #566573 ",
  botFontColor: "#fff",
  userBubbleColor: "royalblue",
  userFontColor: "white",
};
const StyledRoom = (props) => {
  return <ThemeProvider theme={style}>{props.children}</ThemeProvider>;
};

export default StyledRoom;
