import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Interweave } from "interweave";
import { ApiService } from "../../service/api.service";
import { Loader, Videos } from "../";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);

        const relatedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setRelatedVideo(relatedData.data.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;
  const {
    snippet: { title, channelId, channelTitle, description, tags, thumbnails },
    statistics: { viewCount, likeCount, commentCount },
  } = videoDetail;

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            className="react-player"
            url={`https://youtube.com/watch?v=${id}`}
            controls
          />
          {tags.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))}
          <Typography variant="h5" p={2} fontWeight={"bold"}>
            {title}
          </Typography>
          <Stack direction={"row"} py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
              <Stack
                direction={"row"}
                marginTop={"5px"}
                alignItems={"center"}
                gap={"5px"}
              >
                <Avatar src={thumbnails.default.url} alt={channelTitle} />
                <Typography variant="subtitle2" color={"gray"}>
                  {channelTitle}
                  <CheckCircle
                    sx={{ ml: "5px", fontSize: "12px", color: "gray" }}
                  />
                </Typography>
              </Stack>
            </Link>
          </Stack>
          <Typography variant="subtitle2" p={2} sx={{ opacity: ".7" }}>
            <Interweave content={description} />
          </Typography>
          <Stack
            direction={"row"}
            py={1}
            px={2}
            gap={"20px"}
            alignItems={"center"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
              sx={{ opacity: 0.7 }}
            >
              <Visibility />
              {parseInt(viewCount).toLocaleString()} views
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
              sx={{ opacity: 0.7 }}
            >
              <FavoriteOutlined />
              {parseInt(likeCount).toLocaleString()} likes
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
              sx={{ opacity: 0.7 }}
            >
              <MarkChatRead />
              {parseInt(commentCount).toLocaleString()} comments
            </Stack>
          </Stack>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Videos videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
};

export default VideoDetail;
