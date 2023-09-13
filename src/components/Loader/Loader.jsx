import { Box, CircularProgress, Stack } from "@mui/material";

const Loader = () => {
  return (
    <Box minHeight={"90vh"}>
      <Stack
        height={"80vh"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default Loader;
