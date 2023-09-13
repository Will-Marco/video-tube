import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { ApiService } from "../../service/api.service";
import { colors } from "../../constants/constants";
import { Videos } from "..";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await ApiService.fetching(
          `search?part=snippet&q=${id}`
        );
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant="h4" mb={2} fontWeight={"bold"}>
          Search results for{" "}
          <span style={{ color: colors.secondary }}>{id}</span> videos
        </Typography>
        <Videos videos={videos}/>
      </Container>
    </Box>
  );
};

export default Search;
