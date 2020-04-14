import React from "react";
import styled from "styled-components";
import { Main } from "../src/app/layout";
import { NextPage } from "next";
import { Box, Card, Text, WeatherIcon } from "../src/app/components";
import { OpenweatherAPI } from "../src/app/dao";
import { OpenweatherAPIForecastResponse } from "../src/app/dto/OpenweatherAPI/types";
import {dateTwoDigits, unixTimestampToDate} from "../src/app/utils";
import { roundHalf } from "../src/app/utils/roundHalf";

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
    <Box display="block" width="full" padding={{ y: { bottom: "xl" } }}>
      <Card variant="purple">
        <Text variant="p" align="right">
          Now
        </Text>
        <Text variant="display" align="center">
          {roundHalf(Number(forecast.list[0].main.temp))}°
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
          {Number(forecast.list[0].main.feels_like).toFixed(2)}°
        </Text>
      </Card>
    </Box>
    <Box width="full" overflowX="scroll">
      {forecast.list
        .filter((_item, idx) => idx !== 0)
        .map((item, idx) => {
          const date: Date = unixTimestampToDate(item.dt);

          return (
            <Box key={idx} alignX="center" flexDirection="column" margin={{ x: "m" }}>
              <Box alignX="center" alignY="middle" padding={{ y: { bottom: "s" } }}>
                <Text variant="h3" align="center">
                  {roundHalf(Number(item.main.temp))}°
                </Text>
              </Box>
              <Box alignX="center">
                <WeatherIcon code={item.weather[0].icon} size="xl" />
              </Box>
              <Text variant="h4" align="center">
                {item.weather[0].main}
              </Text>
              <Text variant="p" align="center">
                <strong>{date.getDate()}</strong>/{dateTwoDigits(date.getMonth())}
              </Text>
              <Text variant="p" align="center">
                {date.getHours()}:{dateTwoDigits(date.getMinutes())}
              </Text>
            </Box>
          );
        })}
    </Box>
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
