import { Box, Stack } from "@mui/material";
import logo from "../assets/react.svg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';

const Nav = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.025)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          sx={{ alignItems: "center", marginLeft: 2 }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              height: 70,
              width: 70,
              marginTop: 2,
              fontSize: 50,
            }}
          >
            <div className="ml-2">
              <img src={logo} alt="" />
            </div>
          </Box>
          <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
            <SearchIcon
              color="primary"
              font:Bolt
              sx={{ fontSize: 40, marginLeft: 1 }}
            ></SearchIcon>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              height: 64,
              width: 64,
              marginTop: 2,
            }}
          >
            <HomeIcon
              color="primary"
              font:Bolt
              sx={{ fontSize: 44 }}
            ></HomeIcon>
          </Box>
          <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
            <ArticleIcon
              color="disabled"
              font:Bolt
              sx={{ fontSize: 44 }}
            ></ArticleIcon>
          </Box>
          <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
            <ListAltIcon
              color="disabled"
              font:Bolt
              sx={{ fontSize: 44 }}
            ></ListAltIcon>
          </Box>
          <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
            <PersonIcon
              color="disabled"
              font:Bolt
              sx={{ fontSize: 44 }}
            ></PersonIcon>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Nav;
