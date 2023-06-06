import axios from "axios";
import { APP_KEY, BASE_URL } from "../config/api_config";
import qs from "qs";

const getMovies = async (type) => {
  const url = `${BASE_URL}/movie/${type}`;

  try {
    const params = {
      api_key: APP_KEY,
    };

    const movieAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await movieAxios.get(url, { params });

    // console.log("RESPONSE", response.data.results);
    return response;
  } catch (error) {
    throw error;
  }
};

export { getMovies };
