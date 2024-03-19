import create from 'zustand';
export type productstype = {
  id: string,
  name: string,
  title: string,
  img: string,
  description: string,
  price: string,
  category: string
  image:string;

}




interface ImageStore {
  image: File | null;
  setImage: (image: File) => void;
  clearImage: () => void;
}

export const useImageStore = create<ImageStore>((set) => ({
  image: null,
  setImage: (image) => set({ image }),
  clearImage: () => set({ image: null }),
}));


export type storetype = {
  loading: boolean,
  products: productstype[],
  error: unknown,
  getproducts: () => void,
  post: (product: any) => void
  deleteproduct: (id: number) => Promise<void>

}


