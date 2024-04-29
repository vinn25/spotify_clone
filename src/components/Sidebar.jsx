import { Box } from "@mui/material";
import React from "react";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";

const Sidebar = () => {
  return (
    <Box>
      <Box bgcolor="orange">
        <SidebarTop />
      </Box>
      <Box bgcolor="lightblue">
        <SidebarBottom />
      </Box>
    </Box>
  );
};

export default Sidebar;
