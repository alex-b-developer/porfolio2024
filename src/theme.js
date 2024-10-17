import { createTheme } from "@nextui-org/react";

const theme = createTheme({
  type: "light", // Puedes cambiarlo a "dark" si lo prefieres
  theme: {
    colors: {
      primary: "#4ADE7B",
      secondary: "#F9CB80",
      error: "#FCC5D8",
    },
  },
});

export default theme;