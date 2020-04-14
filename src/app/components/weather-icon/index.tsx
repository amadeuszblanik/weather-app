import React from "react";
import Image from "../image";

interface WeatherIconProps {
  code: string;
}

type WeatherIconComponent = React.FunctionComponent<WeatherIconProps>;

const WeatherIcon: WeatherIconComponent = ({ code }) => (
  <Image src={`http://openweathermap.org/img/wn/${code}@2x.png`} />
);

export default WeatherIcon;
