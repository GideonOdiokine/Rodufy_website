const BASE_URL = "www.giropay.xyz/api/v1/giro-app/";

const register = async (userData) => {
  const response = await fetch(`${BASE_URL}auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  console.log(response);
};
const login = async (userData) => {
  const response = await fetch(`${BASE_URL}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  console.log(response);
};
const authService = {
  register,
  login,
};

export default authService;
