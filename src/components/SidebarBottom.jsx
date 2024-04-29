import { Avatar, Box, List, ListItem, Stack, Typography } from "@mui/material";
import React from "react";

const SidebarBottom = () => {
  return (
    <Box>
      <List>
        <ListItem sx={{ pl: "10%", mb: "3%" }}>
          <Typography variant="h6">Top Artist</Typography>
        </ListItem>

        <Stack spacing={1}>
          <ListItem sx={{ pl: "10%", "&:hover": { cursor: "pointer" } }}>
            <Stack direction="row" spacing={2}>
              <Avatar src="" />
              <Stack>
                <Typography variant="body2">Artist Name</Typography>
                <Typography variant="body2">X Monthly listeners</Typography>
              </Stack>
            </Stack>
          </ListItem>

          <ListItem sx={{ pl: "10%", "&:hover": { cursor: "pointer" } }}>
            <Stack direction="row" spacing={2}>
              <Avatar src="" />
              <Stack>
                <Typography variant="body2">Artist Name</Typography>
                <Typography variant="body2">X Monthly listeners</Typography>
              </Stack>
            </Stack>
          </ListItem>

          <ListItem sx={{ pl: "10%", "&:hover": { cursor: "pointer" } }}>
            <Stack direction="row" spacing={2}>
              <Avatar src="" />
              <Stack>
                <Typography variant="body2">Artist Name</Typography>
                <Typography variant="body2">X Monthly listeners</Typography>
              </Stack>
            </Stack>
          </ListItem>

          {/* <ListItem sx={{ pl: "10%", "&:hover": { cursor: "pointer" } }}>
          <Stack direction="row" spacing={2}>
            <Avatar src="" />
            <Stack>
              <Typography variant="body2">Artist Name</Typography>
              <Typography variant="body2">X Monthly listeners</Typography>
            </Stack>
          </Stack>
        </ListItem> */}
        </Stack>
      </List>
    </Box>
  );
};

export default SidebarBottom;
