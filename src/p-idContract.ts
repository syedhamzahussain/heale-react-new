import { getContract } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";

export function getPIDContract(client: any) {
  return getContract({ 
    client, 
    chain: polygonAmoy, 
    address: process.env.REACT_APP_PID ?? ''
  });
}