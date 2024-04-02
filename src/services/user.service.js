import { apiUrl } from "../utils/constants";
import { POST } from "./api.service.wrapper";

export const saveProfile = async (userProfile) => {
  const response = await POST(`${apiUrl.user}/profile`, userProfile);
  return response;
};
