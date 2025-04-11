import { shippingAddress } from "../data"






export interface orderRes {
  status: string
  data: Data
}

export interface Data {
  taxPrice: number
  shippingPrice: number
  totalOrderPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  _id: string
  user: string
  cartItems: CartItem[]
  shippingAddress: shippingAddress
  createdAt: string
  updatedAt: string
  id: number
  __v: number
}

export interface CartItem {
  count: number
  _id: string
  product: string
  price: number
}




