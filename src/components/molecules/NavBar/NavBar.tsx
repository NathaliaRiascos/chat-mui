import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Stack from "@mui/material/Stack";
import { useAppDispatch } from "../../../redux/hooks";
import { logout } from "../../../redux/features";
import { useNavigate } from "react-router-dom";

const imgURL =
  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    dispatch(logout())
    navigate('/login')
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'var(--color-purple-medium)',
        borderRadius: { sm: '55px 55px 0px 55px' }
      }}
    >
      <Toolbar>
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          width="100%"
          justifyContent="space-between"
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AdbIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} />
          </IconButton>
          <div style={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src={imgURL} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
