import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import "./navBar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function NavBarConnected() {
  const useStyles = makeStyles({
    logout: {
      position: "absolute",
      right: "50px",
      backgroundColor: "red",
    },
    signup: {
      position: "absolute",
      right: "140px",
    },
    home: {
      position: "absolute",
      right: "319px",
      color: "white",
    },
    link: {
      textDecoration: "none",
      color: "white",
    },
    tac_tic: {
      position: "absoltue",
      left: "30px",
      color: "white",
    },
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div>
      <AppBar>
        <Toolbar className="navbar">
          <Typography className={classes.tac_tic}>TAC-TIC</Typography>

          <Button
            className={classes.logout}
            onClick={() => dispatch({ type: "CONNECT", payload: false })}
          >
            <Link className={classes.link} to="/login">
              LOGOUT
            </Link>
          </Button>

          {/* <Avatar alt="Remy Sharp" src="" /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBarConnected;
