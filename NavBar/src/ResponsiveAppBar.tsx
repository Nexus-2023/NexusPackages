import * as React from "react"
import { Box, Toolbar, IconButton, Menu, MenuItem } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

// Define a type for your props
interface ResponsiveAppBarProps {
  list: { href: string; target?: string; text: string }[];
  logo: string;
  endComponent?: React.ReactNode;
  copyright?: React.ReactNode;
}

function ResponsiveAppBar({
  list,
  logo,
  endComponent,
  copyright,
}: ResponsiveAppBarProps) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <div className="flex justify-center h-20">
      <nav
        className="fixed z-30 mx-auto w-full border-b-2 border-gray-900 px-0 text-white backdrop-blur-lg sm:px-8 md:max-w-[85vw]"
        aria-labelledby="menu-button"
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
            }}
          >
            <img
              src={logo}
              width={130}
              height={130}
              alt="web nexus logo"
              className="sm:mr-16"
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", lg: "none" },
              color: "white",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Links */}
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
                display: { xs: "block", lg: "none" },
                mt: "1px",
                backdropFilter: "blur(5px)",
                "& .MuiMenu-paper": {
                  backgroundColor: "var(--primary)",
                  borderRadius: "8px",
                },
              }}
            >
              {list.map((link, index) => (
                <a key={index} href={link.href} target={link.target} rel="noopener noreferrer">
                  <MenuItem
                    sx={{
                      width: { sm: "80vw", xs: "90vw" },
                      color: "white",
                      py: "8px",
                      backdropFilter: "blur(5px)",
                      borderRadius: "8px",
                      transition: "background 0.3s ease-in-out",
                      ":hover": {
                        background: "var(--secondary)",
                      },
                    }}
                  >
                    {link.text}
                  </MenuItem>
                </a>
              ))}
              <MenuItem>
                <div className="mt-4 w-full text-white flex justify-center">
                  {copyright}
                </div>
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile menu end */}

          {/* web/mobile button and links */}

          <Box
            sx={{
              display: { xs: "flex", lg: "none", flexGrow: 1, mr: 2 },
            }}
          >
            <img
              src={logo}
              width={130}
              height={130}
              alt="mobile nexus logo"
              className="-ml-12"
            />
          </Box>

          {/* Web Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            <div className="flex space-x-6 text-base">
              {list.map((link, index) => (
                <button
                  key={index}
                  className="my-2 block font-normal capitalize duration-300 ease-in-out hover:text-[var(--secondary)]"
                >
                  <a href={link.href} target={link.target} rel="noopener noreferrer">
                    {link.text}
                  </a>
                </button>
              ))}
            </div>
          </Box>

          <Box>{endComponent}</Box>
        </Toolbar>
      </nav>
    </div>
  )
}

export default ResponsiveAppBar
