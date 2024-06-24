import { apiUrl } from "../utils/constants";
import { GET, PATCH, POST, PUT } from "./api.service.wrapper";
import { getUserFromLocalStorage } from "./localStorage.sevice";

export const saveProfile = async (userProfile) => {
  const response = await POST(`${apiUrl.users}/profile`, userProfile);
  return response;
};


export const saveUserBusiness = async (userBusiness) => {
  const response = await POST(`${apiUrl.users}/business`, userBusiness);
  return response;
};

export const sendOnboardedEmail = async () => {
  const response = await POST(`${apiUrl.users}/send_onboarded_email`);
  return response;
};


export const saveBusinessApplication = async (application) => {
  const response = await POST(`${apiUrl.users}/business/application`, application);
  return response;
};

export const updateBusinessApplication = async (application, ID) => {
  const response = await PUT(`${apiUrl.users}/business/${ID}/application`, application);
  return response;
};

export const saveBusinessCollab = async (user) => {
  const response = await POST(`${apiUrl.users}/business/collab`, user);
  return response;
};

export const getBusinessApplication = async (businessId) => {
  const response = await GET(`/application?business=${businessId}`);
  return response;
};


export const saveTeamUser = async (user) => {
  const response = await POST(`${apiUrl.users}/team`, user);
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

export const resendVerificationEmail = async (user) => {
  const response = await POST(`${apiUrl.users}/resend-email`, user);
  return response;
}