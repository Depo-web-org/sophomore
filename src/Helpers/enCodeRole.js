import CryptoJS from "crypto-js";
const secretKey = import.meta.env.VITE_SOPHOMORE_ENCODE_KEY_TOKEN;
export const getRole = name => {
    const encryptedRole = localStorage.getItem(name);
    if (encryptedRole) {
      const bytes = CryptoJS.AES.decrypt(encryptedRole, secretKey);
      const role = bytes.toString(CryptoJS.enc.Utf8);
      return role;
    }
    return null;
  };
  

 
  