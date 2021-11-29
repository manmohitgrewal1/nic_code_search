import logo from "../images/nic_code_logo.svg"
import React from "react"

import { makeStyles } from "@mui/styles"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"

const pages = ["Decode CIN", "Search Companies", "NIC 2004 PDF"]
const settings = ["Profile", "Account", "Dashboard", "Logout"]

const useStyles = makeStyles({
  root: {
    background: "#ffff !important",
    position: "sticky !important",

    "& .MuiButton-root": {
      color: "black",
    },
    // "& .MuiContainer-root": {
    //   paddingLeft: "140px",
    //   paddingRight: "140px",
    // },
    "& .MuiBox-root": {
      "@media (min-width: 900px)": {
        justifyContent: "end",
      },
    },
    "& .MuiButtonBase-root": {
      color: "black",
    },
    "& .MuiTypography-root": {
      //   display: "flex",
      justifyContent: "end",
    },
  },
})

export default function Header(props) {
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <AppBar className={classes.root}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img src={logo} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center">Decode CIN</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">Search Companies</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">NIC 2004 PDF</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <img src={logo} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={props.handleClickOpen}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Decode CIN
            </Button>
            <Button
              target="_blank"
              href="http://www.mca.gov.in/mcafoportal/viewCompanyMasterData.do"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Search Companies
            </Button>
            <Button
              target="_blank"
              href="http://mospi.nic.in/sites/default/files/main_menu/national_industrial_classification/nic_2004_struc_detail.pdf"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              NIC 2004 PDF
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

// export default function Header() {
//   return (
//     <div className="header-container">
//       <img src={logo} />
//       <div>
//         <a className="header-links">Decorate CIN</a>
//         <a className="header-links">Search CIN</a>
//         <a className="header-links">NIC 2004 PDF</a>
//       </div>
//     </div>
//   )
// }
