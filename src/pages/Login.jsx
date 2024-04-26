import {
  Box,
  Button,
  InputBase,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import logo from "../utils/image/spotify_logo_1.png";

const Login = () => {
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
      <Stack direction="column" spacing={4}>
        <Stack direction="column" alignItems="center" spacing={2}>
          <img src={logo} height="150px" width="40%" />
          <Typography variant="h5">Spotify</Typography>
        </Stack>

        <Stack direction="column" alignItems="center" spacing={2}>
          <TextField
            placeholder="Enter your email"
            color="success"
            sx={{
              bgcolor: "white",
              border: "2px solid green",
              borderRadius: "5px",
              width: "80%",
            }}
          />
          <TextField
            placeholder="Enter your password"
            type="password"
            color="success"
            sx={{
              bgcolor: "white",
              border: "2px solid green",
              borderRadius: "5px",
              width: "80%",
            }}
          />
          <Link
            href="#forgot-password"
            sx={{ textDecoration: "none", pl: "45%" }}
          >
            <Typography color="white" variant="subtitle2">
              Forgot password ?
            </Typography>
          </Link>
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
