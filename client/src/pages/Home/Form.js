import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

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

const Form = ({ handleClose }) => {
  const classes = useStyles();

  const [Fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();

    const visitorData = {
      Fullname: Fullname,
      phone: phone,
      email: email,
    };
    console.log(Fullname, phone, email);
    axios
      .post("/api/visitors/visitors", visitorData)
      .then((res) => {
        setFullname('');
        setPhone('');
        setEmail('');
      }) // re-direct to login on successful register
      .catch((err) => console.log("user already exits"));
  };

  return (
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
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
    </form>
  );
};

export default Form;
