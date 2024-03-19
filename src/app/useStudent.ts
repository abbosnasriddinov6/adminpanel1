
import axios from "axios";
import { create } from "zustand";
import { storetype } from "../types/Student.type";

export const getall = create<storetype>((set) => ({
  loading: false,
  products: [],
  error: null,

  getproducts: async () => {
    set(() => ({ loading: true }));
    try {
      const res = await axios.get('https://65f7443bb4f842e8088565a2.mockapi.io/products');
      const data = res.data;
      set(() => ({
        products: data,
        loading: false
      }));
    } catch (error) {
      console.error(error);
    }
  },

  post: async (product: any) => {
    try {
      console.log(product);
      const res = await axios.post(`https://65f7443bb4f842e8088565a2.mockapi.io/products`, product);
    } catch (error) {
      console.error(error);
    }
  },


  deleteproduct: async (id: any) => {
    try {
      console.log(id);
      const res = await axios.delete(`https://65f7443bb4f842e8088565a2.mockapi.io/products/${id}`);
    } catch (error) {
      console.error(error);
    }
  }
}));

export default getall;




