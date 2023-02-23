import jwt from "jwt-decode";

const getUserRole = (token) => {
  let parsedToken = jwt(token);
  let app = parsedToken.auth;
  const sentence = app.replace(/\s+/g, " ").trim();
  let role = sentence.split(",");

  return role[0];
};

export default getUserRole;
