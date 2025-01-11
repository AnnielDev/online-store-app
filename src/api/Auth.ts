import { http } from "@/utils/http";
import type { AxiosResponse } from "axios";
import type { User } from "@/types/User";
import { useAuthStore } from "@/stores/user";
class Auth {
  token: string;
  constructor(token: string) {
    this.token = token;
  }
  async signIn(data: {
    email: string;
    password: string;
  }): Promise<AxiosResponse> {
    return http.post("login", data).then((data) => data);
  }
  async signUp(data: User): Promise<AxiosResponse> {
    return http.post("register", data).then((data) => data);
  }
  async signOut(): Promise<AxiosResponse> {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    };
    return http.post("logout", {}, { headers }).then((data) => data);
  }
}
const store = useAuthStore();
const auth = new Auth(store.user.token);
export default auth;
