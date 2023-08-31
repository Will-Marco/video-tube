import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { colors, logo } from "../../constants/constants";
import { SearchBar } from "../";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: "999",
        background: colors.primary,
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={50} width={50} />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
