import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { colors } from "../../constants/constants";

export default function SearchBar() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`./search/${value}`);
    setValue("");
  };

  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}
