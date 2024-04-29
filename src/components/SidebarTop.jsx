import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HistoryIcon from "@mui/icons-material/History";

const SidebarTop = () => {
  return (
    <Box>
      <List>
        <Stack spacing={-1.5}>
          <ListItem>
            <ListItemButton
              sx={{
                borderRadius: "10px",
                padding: "5%",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <HomeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="Home" /> */}
              <Typography variant="body2">Home</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              sx={{
                borderRadius: "10px",
                padding: "5%",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <PodcastsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="Podcast Channel" /> */}
              <Typography variant="body2">Podcast Channel</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              sx={{
                borderRadius: "10px",
                padding: "5%",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <LibraryMusicIcon sx={{ color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="Your Library" /> */}
              <Typography variant="body2">Your Library</Typography>
            </ListItemButton>
          </ListItem>
        </Stack>

        {/* <Divider sx={{ my: "5%" }} /> */}
        <Box sx={{ bgcolor: "white", p: "0.5%", mx: "5%", my: "5%" }}></Box>

        <Stack spacing={-1.5}>
          <ListItem>
            <ListItemButton
              sx={{
                borderRadius: "10px",
                padding: "5%",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <AddBoxIcon sx={{ color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="Created Playlist" /> */}
              <Typography variant="body2">Created Playlist</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              sx={{
                borderRadius: "10px",
                padding: "5%",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <FavoriteBorderIcon sx={{ color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="Liked Songs" /> */}
              <Typography variant="body2">Liked Songs</Typography>
            </ListItemButton>
          </ListItem>

          {/* <ListItem>
            <ListItemButton sx={{ borderRadius: "10px", padding: "5%",
                "&:hover": { bgcolor: "grey" } }}>
              <ListItemIcon>
                <LibraryMusicIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Your Library" />
              <Typography variant="body2">Your Library</Typography>
            </ListItemButton>
          </ListItem> */}

          <ListItem>
            <ListItemButton
              sx={{
                borderRadius: "10px",
                padding: "5%",
                "&:hover": { bgcolor: "grey" },
              }}
            >
              <ListItemIcon>
                <HistoryIcon sx={{ color: "white" }} />
              </ListItemIcon>
              {/* <ListItemText primary="Recently Played" /> */}
              <Typography variant="body2">Recently Played</Typography>
            </ListItemButton>
          </ListItem>
        </Stack>
      </List>
    </Box>
  );
};

export default SidebarTop;
