import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint) => {
  var requestOptions = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };
  const response = await fetch(`${API_URL}${endpoint}`, requestOptions);
  const data = await response.json();

  return data;
};
