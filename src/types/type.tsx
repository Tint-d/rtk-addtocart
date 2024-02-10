export interface CartItemType {
  id: number;
  title: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

export interface InitialType {
  quantity: number;
  totalAmount: number;
  cart: CartItemType[];
}
