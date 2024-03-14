import env from "@src/utils/env";

/**
 * fetch user data
 */
export const getUser = async () => {
  try {
    const response = await fetch(`${env.API_URL}/users/${env.USER_ID}`);
    const result = await response.json();
    return result;
  } catch (ex) {
    console.error(ex);
  }
};
