import {
  Box,
  Button,
  IconButton,
  Input,
  InputBase,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import logo from "../utils/image/spotify_logo_1.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [pass, setPass] = useState("");
  const [passValid, setPassValid] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };

  useEffect(() => {
    if (email.length < 5 || /\d/.test(email)) {
      setEmailValid(false);
    } else if (/\S+@\S+\.\S/.test(email)) {
      setEmailValid(true);
    }
  }, [email]);

  useEffect(() => {
    if (pass.length < 8) {
      setPassValid(false);
    } else {
      setPassValid(true);
    }
  }, [pass]);

  return (
    <Box
      sx={{
        my: "3%",
        mx: "35%",
        p: "20px",
        height: "80vh",
        bgcolor: "#000000",
        textAlign: "center",
        borderRadius: "30px",
        color: "white",
      }}
    >
      <Stack direction="column" spacing={3}>
        <Stack direction="column" alignItems="center" spacing={2}>
          <img src={logo} height="150px" width="40%" />
          <Typography variant="h5">Spotify</Typography>
        </Stack>

        <Stack direction="column" alignItems="center" spacing={1}>
          <TextField
            placeholder="Enter your email"
            color="success"
            onChange={emailHandler}
            // sx={{
            //   bgcolor: "white",
            //   border: "2px solid green",
            //   borderRadius: "5px",
            //   width: "80%",
            // }}
            sx={
              emailValid
                ? {
                    bgcolor: "white",
                    border: "2px solid green",
                    borderRadius: "5px",
                    width: "80%",
                  }
                : {
                    bgcolor: "white",
                    border: "2px solid red",
                    borderRadius: "5px",
                    width: "80%",
                  }
            }
          />
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={emailValid ? { color: "green" } : { color: "" }}
          >
            {emailValid ? "Email Valid" : ""}
          </Typography>
        </Stack>

        <Stack direction="column" alignItems="center" spacing={1}>
          <TextField
            placeholder="Enter your password"
            type="password"
            color="success"
            onChange={passHandler}
            // sx={{
            //   bgcolor: "white",
            //   border: "2px solid green",
            //   borderRadius: "5px",
            //   width: "80%",
            // }}
            sx={
              passValid
                ? {
                    bgcolor: "white",
                    border: "2px solid green",
                    borderRadius: "5px",
                    width: "80%",
                  }
                : {
                    bgcolor: "white",
                    border: "2px solid red",
                    borderRadius: "5px",
                    width: "80%",
                  }
            }
          />
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={passValid ? { color: "green" } : { color: "" }}
          >
            {/* {passValid ? "Password Valid" : ""} */}
          </Typography>

          <Link
            href="#forgot-password"
            sx={{ textDecoration: "none", pl: "45%" }}
          >
            <Typography color="white" variant="subtitle2">
              Forgot password ?
            </Typography>
          </Link>
        </Stack>

        <Stack direction="column" alignItems="center">
          <Button
            variant="contained"
            href="/"
            sx={{
              width: "80%",
              height: "40px",
              borderRadius: "20px",
              bgcolor: "green",
              "&:hover": { bgcolor: "forestgreen" },
            }}
            disableRipple
          >
            Sign In
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Login;
