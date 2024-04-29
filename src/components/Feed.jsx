import { Box, Stack } from "@mui/material";
import React from "react";

const Feed = () => {
  return (
    <Box>
      <Box bgcolor="orange">Navbar</Box>
      <Stack direction="row">
        <Stack>
          <Box bgcolor="lightblue">Category</Box>
          <Stack direction="row">
            <Box bgcolor="darkblue">Recents</Box>
            <Box bgcolor="pink">Made For You</Box>
          </Stack>
        </Stack>
        <Box bgcolor="brown">Friend Activiy</Box>
      </Stack>
    </Box>
  );
};

export default Feed;
