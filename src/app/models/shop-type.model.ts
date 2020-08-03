import { Type } from './type.model';

export interface ShopType extends Type {
    subTypes?: Type[];
}
