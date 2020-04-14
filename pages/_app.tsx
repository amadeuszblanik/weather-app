import React from "react";
import NextApp from "next/app";
import { ThemeProvider } from "styled-components";
import { Theme } from "../src/app/settings";
import { GlobalStyles } from "../src/app/components";
import { Normalize } from "styled-normalize";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={Theme}>
        <style jsx global>
          {`
            @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Mono:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i|IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i|IBM+Plex+Serif:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap&subset=latin-ext");
          `}
        </style>
        <Normalize />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
