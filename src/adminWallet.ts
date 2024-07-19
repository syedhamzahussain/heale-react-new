import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "twclient";

export async function getAdminWallet() {
    
    const wallet = privateKeyToAccount({
        client,
        privateKey: process.env.REACT_APP_ADMIN_WALLET_KEY ?? '',
      });
   
    return wallet;
  }