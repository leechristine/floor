import React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

import ProfileInput from "../components/ProfileInput";
import ProfileAvatar from "../components/ProfileAvatar";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#D9C1C3"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#BBB0C3"
      // dark: will be calculated from palette.secondary.main,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

export default class CreateProfile extends React.Component {
  render() {
    return (
      <Box>
        <ThemeProvider theme={theme}>
          <Box>
            <h1>Create your profile</h1>
          </Box>
          <Box display="flex" justifyContent="center">
            <ProfileAvatar />
            <ProfileInput />
          </Box>
          <Button variant="contained" color="primary">
            Create
          </Button>
        </ThemeProvider>
      </Box>
    );
  }
}
