import jwt from "jwt-decode";

const getUserRole = (token) => {
  let parsedToken = jwt(token);
  let role = parsedToken.role;
  console.log(role);

  return role;
};

export default getUserRole;
