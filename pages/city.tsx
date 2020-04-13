import React from "react";
import styled from "styled-components";
import { Main } from "../src/app/layout";
import { NextPage } from "next";
import { Box, Card, Text } from "../src/app/components";

interface CityPageProps {
  cityName: string;
}

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.main};
  font-size: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
`;

Title.displayName = "Title";

const City: NextPage<CityPageProps> = ({ cityName }) => (
  <Main>
    <Title>Hello {cityName}!</Title>
    <Card variant="purple">
      <Text variant="display" align="center">25°</Text>
      <Box alignX="center" padding={{ y: { bottom: "s" } }}>
        <Text variant="p" opacity={0.82}>
          in {cityName}
        </Text>
      </Box>
      <Box alignX="center" padding={{ y: { top: "s", bottom: "m" } }}>
        <Text variant="p">Clouds & sun</Text>
      </Box>
      <Box alignX="center" padding={{ y: { bottom: "s" } }}>
        <Text variant="h3">Humidity</Text>
      </Box>
      <Text variant="h5" align="center" opacity={0.37}>
        35°
      </Text>
    </Card>
  </Main>
);

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
City.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { cityName },
  } = ctx;

  return { cityName };
};

export default City;
