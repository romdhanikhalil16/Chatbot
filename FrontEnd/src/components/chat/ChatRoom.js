import "./chatRoom.css";
import ChatBot from "react-simple-chatbot";
import StyledRoom from "./StyledRoom";
import tacticAvatar from "./assets/tacticLogo.png";

const ChatRoom = () => {
  return (
    <div>
      {/* <img src={img1} style={{ backgroundSize: "50px" }} /> */}

      <StyledRoom>
        <ChatBot
          metadata
          // inputAttributes
          headerTitle="TAC-TIC"
          className="chatRoom"
          botAvatar={tacticAvatar}
          steps={[
            {
              id: "1",
              message:
                "Greating from TAC-TIC hello dear , how can we help you ?",
              trigger: "2",
            },
            {
              id: "2",
              options: [
                { value: 1, label: "looking for job", trigger: 3 },
                { value: 2, label: "looking for short intership", trigger: 3 },
                { value: 3, label: "looking for long intership", trigger: 3 },
                {
                  value: 4,
                  label: "information about our activities ",
                  trigger: "about_us",
                },
              ],
            },
            {
              id: "about_us",
              message:
                "Crée depuis 2012 Dès sa création TAC TIC s’est fixée l’objectif de se positionner comme étant partenaire technologique d’excellence auprès de sa clientèle en leur offrant toute l’assistance possible à travers une panoplie de services allant de l’infrastructure IT jusqu’aux services Cloud passant par les services de développement et de consulting",
              trigger: 2,
            },
            {
              id: "3",
              message: "what is your field of study ?",
              trigger: "4",
            },
            {
              id: "4",
              options: [
                { value: 1, label: "IT", trigger: 5 },
                { value: 2, label: "management", trigger: 6 },
                { value: 3, label: "accountant", trigger: 6 },
              ],
            },
            {
              id: "5",
              options: [
                { value: 1, label: "Fullstuck Web Developper", trigger: 6 },
                { value: 2, label: "Graphic Designer", trigger: 6 },
                { value: 3, label: "Data Scientist", trigger: 6 },
              ],
            },
            {
              id: "6",
              message:
                "thanks for your participation please upload your resume and you will get our decision  ",
              trigger: "7",
            },
            {
              id: "7",
              user: true,
              trigger: "8",
            },
            {
              id: "8",
              message:
                "You're welcome , all you questions will be answered as soon as possible have a good day",
              trigger: "9",
            },
            {
              id: "9",
              user: true,
              // setinput(value),
              trigger: "9",
            },
          ]}
        />
      </StyledRoom>
    </div>
  );
};

export default ChatRoom;
