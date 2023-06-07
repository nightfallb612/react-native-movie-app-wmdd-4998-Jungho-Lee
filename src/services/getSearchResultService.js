import axios from "axios";
import { APP_KEY, BASE_URL } from "../config/api_config";
import qs from "qs";

const getSearchResult = async (type, queryStr) => {
  const url = `${BASE_URL}/search/${type}`;

  try {
    const params = {
      query: queryStr,
      api_key: APP_KEY,
    };

    const movieAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await movieAxios.get(url, { params });

    return response;
  } catch (error) {
    throw error;
  }
};

export { getSearchResult };
