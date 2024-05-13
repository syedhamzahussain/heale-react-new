import { apiUrl } from "../utils/constants";
import { POST } from "./api.service.wrapper";

export const signUp = async (user) => {
  const response = await POST(`${apiUrl.user}/register`, user);
  return response;
};

export const signin = async (user) => {
  const response = await POST(`${apiUrl.user}/login`, user);
  return response;
};
