export const decodeEmail = (encodedEmail) => {
    return atob(encodedEmail); // Decodes Base64
  };