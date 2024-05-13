import { apiUrl } from "../utils/constants";
import { PATCH, POST, PUT } from "./api.service.wrapper";
import { getUserFromLocalStorage } from "./localStorage.sevice";

export const saveProfile = async (userProfile) => {
  const response = await POST(`${apiUrl.users}/profile`, userProfile);
  return response;
};


export const saveUserBusiness = async (userBusiness) => {
  const response = await POST(`${apiUrl.users}/business`, userBusiness);
  return response;
};

export const verifyUser = async (body) => {
  const response = await POST(`${apiUrl.users}/${getUserFromLocalStorage()?.id}/verify-email`, body);
  return response;
}

export const sendSmsToUser = async (body) => {
  const response = await POST(`${apiUrl.users}/send-phone-number-verification`, body);
  return response;
}

export const CheckPhoneNumberVerification = async (body) => {
  const response = await POST(`${apiUrl.users}/check-phone-number-verification`, body);
  return response;
}

export const resendVerificationEmail = async () => {
  const response = await POST(`${apiUrl.users}/resend-email`);
  return response;
}