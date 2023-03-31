import axios from "../config/axios";

export const getme = () => axios.get("./auth/me", {});
export const signup = ({
  firstName,
  lastName,
  email,
  password,
  //   confirmPassword,
}) => axios.post("/auth/signup", { firstName, lastName, email, password });
export const login = ({ email, password }) =>
  axios.post("/auth/login", { email, password });
