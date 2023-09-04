import { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { colors } from "../../constants/constants";
import { Category } from "../";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

  const selectedCategoryHandler = (category) => setSelectedCategory(category);

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory}{" "}
            <span style={{ color: colors.secondary }}>videos</span>
          </Typography>
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
