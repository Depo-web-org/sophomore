import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
export const secretKey = import.meta.env.VITE_SOPHOMORE_ENCODE_KEY_TOKEN;

const useRole = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const encryptedRole = localStorage.getItem("RO_V1_2024");
    if (encryptedRole) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedRole, secretKey);
        const decryptedRole = bytes.toString(CryptoJS.enc.Utf8);
        setRole(decryptedRole);
      } catch (error) {
        console.error("Error decrypting role:", error);
      }
    }
  }, []);

  return role;
};

export default useRole;

