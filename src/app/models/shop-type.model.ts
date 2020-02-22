import { Type } from './type.model';

export interface ShopType extends Type {
    // typeId: string;
    subTypes?: Type[];
}
