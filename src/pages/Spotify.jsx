import { Box, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Spotify = () => {
  return (
    <Box sx={{ bgcolor: "grey", color: "white" }}>
      <Stack direction="row" spacing={5}>
        <Box bgcolor="blue" sx={{ width: "17%" }}>
          <Sidebar />
        </Box>
        <Box bgcolor="red" sx={{ width: "83%" }}>
          <Feed />
        </Box>
      </Stack>
    </Box>
  );
};

export default Spotify;
