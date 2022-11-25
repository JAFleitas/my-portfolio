import useUiContext from "../../../hook/useUiContext";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AccountCircleRounded,
  HomeRounded,
  EmailRounded,
  WorkRounded,
  ComputerRounded,
  WorkspacePremiumRounded,
} from "@mui/icons-material";

export const SideMenu = () => {
  let certificates: any;
  let projects: any;
  let profile: any;
  let about: any;
  let technologies: any;
  let contact: any;
  if (typeof window !== "undefined") {
    profile = document.querySelector("#profile");
    about = document.querySelector("#about");
    technologies = document.querySelector("#tecnologies");
    projects = document.querySelector("#projects");
    certificates = document.querySelector("#certificates");
    contact = document.querySelector("#contact");
  }

  const { isMenuOpen, toggleSideMenu } = useUiContext();
  const closeSideMenu = () => {
    setTimeout(toggleSideMenu, 750);
  };

  return (
    <Drawer
      open={isMenuOpen}
      anchor="right"
      onClose={toggleSideMenu}
      sx={{
        backdropFilter: "blur(4px)",
        transition: "all 0.5s ease-out",
      }}
    >
      <Box
        sx={{
          width: 250,
          paddingTop: 5,
          backgroundColor: "#161b22",
          height: "inherit",
          color: "#ccc",
        }}
      >
        <List>
          <ListItem
            button
            onClick={() => {
              profile?.scrollIntoView({ behavior: "smooth", block: "end" });
              closeSideMenu();
            }}
          >
            <ListItemIcon sx={{ color: "#ccc" }}>
              <HomeRounded />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              about?.scrollIntoView({ behavior: "smooth", block: "start" });
              closeSideMenu();
            }}
          >
            <ListItemIcon sx={{ color: "#ccc" }}>
              <AccountCircleRounded />
            </ListItemIcon>
            <ListItemText primary={"Sobre mi"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              technologies?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              closeSideMenu();
            }}
          >
            <ListItemIcon sx={{ color: "#ccc" }}>
              <ComputerRounded />
            </ListItemIcon>
            <ListItemText primary={"Tecnologias"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              projects?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              closeSideMenu();
            }}
          >
            <ListItemIcon sx={{ color: "#ccc" }}>
              <WorkRounded />
            </ListItemIcon>
            <ListItemText primary={"Proyectos"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              certificates?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              closeSideMenu();
            }}
          >
            <ListItemIcon sx={{ color: "#ccc" }}>
              <WorkspacePremiumRounded />
            </ListItemIcon>
            <ListItemText primary={"Certificados"} />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              contact?.scrollIntoView({ behavior: "smooth", block: "start" });
              closeSideMenu();
            }}
          >
            <ListItemIcon sx={{ color: "#ccc" }}>
              <EmailRounded />
            </ListItemIcon>
            <ListItemText primary={"Contacto"} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};
