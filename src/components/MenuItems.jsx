import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function MenuItems() {
  // Menu items array
  const menuItems = [
    { item: "Details", path: "/" },
    { item: "Brand Info", path: "/brandinfo" },
    { item: "Business Details", path: "/businessdetails" },
    { item: "Contact Info", path: "/contactinfo" },
    { item: "Social Details", path: "/socialdetails" },
    { item: "Other Details", path: "/otherdetails" },
  ];

  // State to keep track of the active item
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();
  // Function to handle item click
  const handleItemClick = (item) => {
    setActiveItem(item.item);
    navigate(item.path);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100vw",
        paddingBottom: "20px",
        paddingTop: "20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Added box shadow
        backgroundColor: "#f5f5f5", // Light grey background color for contrast
        borderRadius: "8px", // Rounded corners
      }}
    >
      {menuItems.map((item) => (
        <Typography
          key={item}
          onClick={() => handleItemClick(item)}
          sx={{
            cursor: "pointer",
            color: activeItem === item ? "blue" : "inherit",
            textDecoration: activeItem === item ? "underline" : "none",
            marginBottom: "8px", // Add some spacing between menu items
            transition: "color 0.3s ease", // Smooth transition for color change
            "&:hover": {
              color: "blue", // Hover effect to change text color
            },
          }}
        >
          {item.item}
        </Typography>
      ))}
    </Box>
  );
}

export default MenuItems;
