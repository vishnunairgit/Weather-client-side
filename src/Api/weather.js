import AxiosInstance from "../Config/AxiosInstance";

export const fetchCurrentWeather = async (city) => {
  try {
    const response = await AxiosInstance.get('/current', {
      params: { city }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
;

