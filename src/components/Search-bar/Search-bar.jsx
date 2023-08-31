import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../../constants/constants";

export default function SearchBar() {
  return (
    <Paper
      component={"form"}
      sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: "none" }}
    >
      <input type="text" className="search-bar" placeholder="Search..." />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
}
