import { Box, Stack } from "@mui/material";
import logo from "../assets/react.svg";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ArticleIcon from "@mui/icons-material/Article";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

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
          justifyContent="space-between"
          sx={{ height: "100%" }}
          spacing={2}
        >
          <Stack alignItems="center" spacing={1}>
            <Link to="/">
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
            
            </Link>
            
            <Link>
            <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
              <SearchIcon
                color="disabled"
                font:Bolt
                sx={{ fontSize: 40, marginLeft: 1 }}
              ></SearchIcon>
            </Box>
            </Link>
            <Link>
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
            </Link>
            <Link>
            <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
              <ArticleIcon
                color="disabled"
                font:Bolt
                sx={{ fontSize: 44 }}
              ></ArticleIcon>
            </Box>
            </Link>
            <Link>
            <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
              <ListAltIcon
                color="disabled"
                font:Bolt
                sx={{ fontSize: 44 }}
              ></ListAltIcon>
            </Box>
            </Link>
            <Link>
            <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
              <PersonIcon
                color="disabled"
                font:Bolt
                sx={{ fontSize: 44 }}
              ></PersonIcon>
            </Box>
            </Link>
            
            
            
            
           
          </Stack>
          <Stack
            alignItems="center" spacing={2}
          >
            <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
            <NotificationsNoneIcon
              color="disabled"
              font:Bolt
              sx={{ fontSize: 44 }}
            ></NotificationsNoneIcon>
            </Box>
            <Box sx={{ backgroundColor: "white", height: 64, width: 64 }}>
            <LogoutIcon
              color="disabled"
              font:Bolt
              sx={{ fontSize: 44 }}
            ></LogoutIcon>
            </Box>
           
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Nav;
