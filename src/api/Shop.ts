import { http } from "@/utils/http";
import type { Product } from "@/types/Product";
import type { AxiosResponse } from "axios";
class Shop {
  async getProducts(
    page: number,
    per_page: number,
    search?: string
  ): Promise<AxiosResponse> {
    return http
      .get(
        search
          ? `shop/?page=${page}&per_page=${per_page}&search_key=${search}`
          : `shop/?page=${page}&per_page=${per_page}`
      )
      .then((data) => data);
  }

  async getCategories(): Promise<AxiosResponse> {
    return http.get(`shop/categories`).then((data) => data);
  }
}

const shop = new Shop();
export default shop;
