import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const createUser = async (payload) => {
  const apiResponse = await axios.post(`${BASE_URL}/add`, payload);
  console.log("create user response", apiResponse);
  const data = apiResponse.data;
  return data;
};
export const editUser = async (userId, payload) => {
  const { data: apiResponse } = await axios.put(
    `${BASE_URL}/${userId}`,
    payload
  );
  console.log("create user response", apiResponse);

  return apiResponse;
};
export const retrieveUser = async (userId) => {
  const res = await axios.get(`${BASE_URL}/${userId}`);
  console.log("user", res);
  const userData = res.data;
  return userData;
};
export const removeUser = async (userId) => {
  await axios.delete(`${BASE_URL}/${userId}`);
  return;
};
export const retrieveAllUsers = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  const data = await response.data.users;
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  return data;
};
