import React from "react";
import styled from "styled-components";
import { Main } from "../src/app/layout";
import { NextPage } from "next";
import { Box, Card, Text } from "../src/app/components";
import { OpenweatherAPI } from "../src/app/dao";
import { OpenweatherAPIForecastResponse } from "../src/app/dto/OpenweatherAPI/types";
import WeatherIcon from "../src/app/components/weather-icon";

interface CityPageProps {
  cityName: string;
  forecast: OpenweatherAPIForecastResponse;
}

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.main};
  font-size: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
`;

Title.displayName = "Title";

const City: NextPage<CityPageProps> = ({ cityName, forecast }) => (
  <Main>
    <Title>Hello {cityName}!</Title>
    <Box display="block" width="full" padding={{ y: { bottom: "s" } }}>
      <Card variant="purple">
        <Text variant="p" align="right">
          Now
        </Text>
        <Text variant="display" align="center">
          {forecast.list[0].main.temp}°
        </Text>
        <Box alignX="center" padding={{ y: { bottom: "s" } }}>
          <Text variant="p" opacity={0.82}>
            in {cityName}
          </Text>
        </Box>
        <Box alignX="center" alignY="middle" padding={{ y: { bottom: "s" } }}>
          <WeatherIcon code={forecast.list[0].weather[0].icon} size="xl" />
          <Box padding={{ x: { left: "s", right: "xl" } }}>
            <Text variant="h3">{forecast.list[0].weather[0].main}</Text>
          </Box>
        </Box>
        <Box alignX="center" padding={{ y: { top: "s", bottom: "m" } }}>
          <Text variant="p">{forecast.list[0].weather[0].description}</Text>
        </Box>
        <Text variant="h5" align="center" opacity={0.37}>
          {forecast.list[0].main.feels_like}°
        </Text>
      </Card>
    </Box>
    {forecast.list.map((item, idx) => (
      <Card key={idx} variant="purple">
        <Text variant="p" align="right">
          Now
        </Text>
        <Text variant="display" align="center">
          {item.main.temp}°
        </Text>
        <Box alignX="center" padding={{ y: { bottom: "s" } }}>
          <Text variant="p" opacity={0.82}>
            in {cityName}
          </Text>
        </Box>
        <Box alignX="center" alignY="middle" padding={{ y: { bottom: "s" } }}>
          <WeatherIcon code={item.weather[0].icon} size="xl" />
          <Box padding={{ x: { left: "s", right: "xl" } }}>
            <Text variant="h3">{item.weather[0].main}</Text>
          </Box>
        </Box>
        <Box alignX="center" padding={{ y: { top: "s", bottom: "m" } }}>
          <Text variant="p">{item.weather[0].description}</Text>
        </Box>
        <Text variant="h5" align="center" opacity={0.37}>
          {item.main.feels_like}°
        </Text>
      </Card>
    ))}
  </Main>
);

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
City.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: { cityName },
  } = ctx;

  const forecast = await new OpenweatherAPI(cityName).getForecast();

  console.debug(forecast);

  return { cityName, forecast };
};

export default City;
