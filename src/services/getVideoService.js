import axios from "axios";
import { APP_KEY, BASE_URL } from "../config/api_config";
import qs from "qs";

const getVideo = async (id, type) => {
  const url = `${BASE_URL}/${type}/${id}`;

  try {
    const params = {
      api_key: APP_KEY,
    };

    const videoAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await videoAxios.get(url, { params });

    return response;
  } catch (error) {
    throw error;
  }
};

export { getVideo };
