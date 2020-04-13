import fetch from "isomorphic-unfetch";
import { OpenweatherAPIForecastResponse } from "../../dto/OpenweatherAPI/types";

export default class OpenweatherAPI {
  private apiKey: string = process.env.API_KEY || "";
  private city: string;
  private baseUrl = "http://api.openweathermap.org/data/2.5/";
  private units: "metric" | "imperial" = "metric";

  constructor(city: string) {
    this.city = city;
  }

  fetchForecast = async (): Promise<OpenweatherAPIForecastResponse> => {
    const url = `${this.baseUrl}forecast?q=${this.city}&appid=${this.apiKey}&units=${this.units}`;
    const res = await fetch(url);
    const data = res.json();
    return data;
  };

  getForecast = async () => {
    const data = await this.fetchForecast();

    return data;
  };
}
