interface OpenweatherAPIForecastResponseListSingle {
  dt: number;
  main: {
    temp: string;
    feels_like: string;
    temp_min: string;
    temp_max: string;
    pressure: string;
    sea_level: string;
    grnd_level: string;
    humidity: string;
    temp_kf: string;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface OpenweatherAPIForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: OpenweatherAPIForecastResponseListSingle[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}
