import { apiUrl } from "../utils/constants";
import { POST } from "./api.service.wrapper";

export const signUp = async (user) => {
  const response = await POST(`${apiUrl.user}/register`, user);
  return response;
};
