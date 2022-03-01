import { LatLngTuple } from 'leaflet';
import { FetchProduct } from './fetch-product';

type CartFetchData = {
  address: string,
  position: LatLngTuple,
  name: string,
  tel: string,
  email: string,
  type: string,
  comment: string,
  totalPrice: number,
  products: FetchProduct[],
}

export type {
  CartFetchData,
};
