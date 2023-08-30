import { Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";

const Channel = () => {
  const params = useParams();
  console.log(params);

  return (
    <Link to={"/"}>
      <Button>Main</Button>
    </Link>
  );
};
export default Channel;
