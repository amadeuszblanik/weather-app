import React from "react";
import Image from "../image";
import { Theme } from "../../settings";

interface WeatherIconProps {
  code: string;
  size?: keyof typeof Theme.icon.size;
}

type WeatherIconComponent = React.FunctionComponent<WeatherIconProps>;

const WeatherIcon: WeatherIconComponent = ({ code, size }) => (
  <Image
    src={`http://openweathermap.org/img/wn/${code}@2x.png`}
    width={Theme.icon.size[size!]}
    height={Theme.icon.size[size!]}
    lazyLoading={false}
  />
);

WeatherIcon.defaultProps = {
  size: "m",
};

export default WeatherIcon;
