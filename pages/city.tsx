import React from "react";
import styled from "styled-components";
import {Main} from "../src/app/layout";
import {NextPage} from "next";

interface CityPageProps {
  cityName: string;
}

const Title = styled.h1`
  color: ${({theme}) => theme.palette.main};
  font-size: 50px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

Title.displayName = "Title";

const City: NextPage<CityPageProps> = ({cityName}) => (
  <Main>
    <Title>
      Hello {cityName}!
    </Title>
  </Main>
);

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
City.getInitialProps = async (ctx: NextPageContext) => {
  const {
    query: {cityName},
  } = ctx;

  return {cityName};
};

export default City;
