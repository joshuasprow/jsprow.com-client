import {
  Box,
  ColorModeProvider,
  Flex,
  IconButton,
  Link,
  ThemeProvider,
  useColorMode
} from "@chakra-ui/core";
import React, { FC, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GitHubCorner from "./components/GitHubCorner";

const Home = lazy(() => import("./pages/Home"));

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const background = { dark: "gray.600", light: "gray.50" };
  const color = { dark: "gray.50", light: "gray.900" };

  const buttonBg = colorMode === "dark" ? background.light : background.dark;
  const buttonColor = colorMode === "dark" ? color.light : color.dark;

  return (
    <Box
      as="header"
      bg={background[colorMode]}
      borderBottomWidth="1px"
      color={color[colorMode]}
      height="4rem"
      left="0"
      position="fixed"
      right="0"
      top="0"
      zIndex={4}
      width="full"
    >
      <Flex align="center" height="100%" justify="space-between" paddingX="6">
        <Link color={color[colorMode]} href="/">
          jsprow.com
        </Link>
        <IconButton
          aria-label="Toggle color mode"
          bg={buttonBg}
          color={buttonColor}
          icon={colorMode === "light" ? "moon" : "sun"}
          onClick={toggleColorMode}
          size="sm"
        />
      </Flex>
    </Box>
  );
};

const App: FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <ColorModeProvider>
          <Router>
            <Box paddingTop="4rem">
              <Navbar />
              <Suspense fallback={"Loading..."}>
                <Switch>
                  {/* <Route component={BirdConversation} path="/bird-conversation" /> */}
                  {/* <Route component={TimerTower} path="/timer-tower" /> */}
                  <Route component={Home} path="/" />
                </Switch>
              </Suspense>
              <GitHubCorner />
            </Box>
          </Router>
        </ColorModeProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
