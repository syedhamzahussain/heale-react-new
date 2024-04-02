import { apiUrl } from "../utils/constants";
import { GET, POST } from "./api.service.wrapper";

export const createPlaidLinkToken = async () => {
  const response = await GET(`${apiUrl.plaid}/create-link-token`);
  return response;
};

export const exchangePlaidLinkToken = async (body) => {
  const response = await POST(`${apiUrl.plaid}/exchange-token`, body);
  return response;
}
