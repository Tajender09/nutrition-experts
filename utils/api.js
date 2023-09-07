import { API_URL, STRAPI_API_TOKEN } from "./urls";

export const fetchDataFromApi = async (endpoint, token = STRAPI_API_TOKEN) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const response = await fetch(`${API_URL}${endpoint}`, requestOptions);
  const data = await response.json();

  return data;
};

export const submitDataToApi = async ({ endpoint, body }) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${API_URL}${endpoint}`, requestOptions);
  const data = await response.json();

  return { data, statusCode: response?.status };
};

export const editApiData = async ({ endpoint, body, token }) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(`${API_URL}${endpoint}`, requestOptions);
  const data = await response.json();

  return { data, statusCode: response?.status };
};
