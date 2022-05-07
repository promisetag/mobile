import { create } from "apisauce";

const AuthHttpClient = create({
  baseURL: "http://10.0.2.2:8000/api/auth/login",
});
