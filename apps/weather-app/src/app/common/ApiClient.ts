import axios, { AxiosHeaders } from 'axios';
import { showToast } from './utilities';
interface RequestData {
  url: string;
  headers?: AxiosHeaders;
  params?: any;
}

export class ApiClient {
  baseUrl: string;

  constructor() {
    this.baseUrl =
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
  }

  //base url call
  async _apiCall({ url, headers, params }: RequestData) {
    try {
      if (!process.env.NEXT_PUBLIC_WEATHER_API_KEY) {
        showToast('error', 'No API key found');
        throw { status: 'No API key found' };
      }
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
      showToast('error', 'Bad Status');
      throw { status: res.status };
    } catch (error) {
      return { error, data: undefined };
    }
  }

  //fecth weather call
  async getWeather({ location = 'London' }) {
    return await this._apiCall({ url: location });
  }
}

export type ApiClientInterface = typeof ApiClient | any;
