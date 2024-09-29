import axios from 'axios';
import { WeatherApiResponse } from './utilities';
import data from './dummy.json';
interface RequestData {
  url: string;
  headers?: any;
  params?: any;
}

export class ApiClient {
  baseUrl: string;

  constructor() {
    this.baseUrl =
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
  }
  async _apiCall({ url, headers, params }: RequestData) {
    try {
      const res = await axios({
        url: `${url}?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
        method: 'GET',
        baseURL: this.baseUrl,
        headers,
        params,
      });
      console.log(res.data);

      if (res.status >= 200 && res.status < 300) {
        return res;
      }
      console.log('Bad status', res);
      throw { status: res.status };
    } catch (error) {
      return { error, data: undefined };
    }
  }

  async getWeather({ location = 'London' }) {
    console.log(location);
    if (location === 'London') {
      console.log(data);
      return { data };
    }
    return await this._apiCall({ url: location });
  }
}

export type ApiClientInterface = typeof ApiClient | any;
