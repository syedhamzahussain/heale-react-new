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

export const sendResetCode = async (user) => {
  const response = await POST(`${apiUrl.user}/send-reset-code`, user);
  return response;
}

export const verifyResetCode = async (user) => {
  const response = await POST(`${apiUrl.user}/verify-reset-code`, user);
  return response;
}

export const changePassword = async (user) => {
  const response = await POST(`${apiUrl.user}/reset-password`, user);
  return response;
}