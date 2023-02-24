import jwt from "jwt-decode";

const getUserRole = (token) => {
  let parsedToken = jwt(token);
  let role = parsedToken.role;

  return role;
};

export default getUserRole;
