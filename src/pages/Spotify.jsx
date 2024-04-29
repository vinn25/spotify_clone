import { Box, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Spotify = () => {
  return (
    <Box sx={{ bgcolor: "grey", color: "white" }}>
      <Stack direction="row" spacing={5}>
        <Box bgcolor="black" sx={{ width: "19%", height: "100vh" }}>
          <Box
          // position="fixed"
          // sx={{ overflowY: "scroll", width: "20%" }}
          >
            <Sidebar />
          </Box>
        </Box>
        <Box bgcolor="red" sx={{ width: "81%" }}>
          <Feed />
        </Box>
      </Stack>
    </Box>
  );
};

export default Spotify;
