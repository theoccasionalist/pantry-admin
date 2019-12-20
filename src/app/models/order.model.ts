import { Family } from './family.model';
import { CartItemsByType } from './cart-items-by-type.model';

export class Order {
    // tslint:disable-next-line:variable-name
    _id: string;
    family: Family;
    cart: CartItemsByType[];
    pickUpDate: string;
    received: boolean;
}
