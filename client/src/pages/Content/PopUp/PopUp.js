import React from "react";
import "./PopUp.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const PopUp = () => {
  const [timedPopup, setTimedPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 10000);
  }, []);
  return (
    <div className="dialogue text-center">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup} />
    </div>
  );
};
const Popup = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),

      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "300px",
      },
      "& .MuiButtonBase-root": {
        margin: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();
  // create state variables for each input
  const [Fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();

    const visitorData = {
      Fullname: Fullname,
      phone: phone,
      email: email,
    };
    console.log(Fullname, phone, email);
    axios
      .post("/api/visitors/visitors", visitorData)
      .then((res) => console.log("succesfully inserted")) // re-direct to login on successful register
      .catch((err) => console.log("user already exits"));
    props.setTrigger(false);
  };
  return props.trigger ? (
    <div className="subscribe-form">
      <h2 className="mt-2">Subscribe</h2>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          placeholder="FullName"
          variant="filled"
          required
          value={Fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <TextField
          placeholder="Phone"
          variant="filled"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          placeholder="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div>
          <Button variant="contained" onClick={() => props.setTrigger(false)}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
};

export default PopUp;
