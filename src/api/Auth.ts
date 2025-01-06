import { http } from "@/utils/http";
import type { AxiosResponse } from "axios";
import type { User } from "@/types/User";

class Auth {
  async signIn(data: {
    email: string;
    password: string;
  }): Promise<AxiosResponse> {
    return http.post("login", data).then((data) => data);
  }
  async signUp(data: User): Promise<AxiosResponse> {
    return http.post("register", data).then((data) => data);
  }
}
const auth = new Auth();
export default auth;
