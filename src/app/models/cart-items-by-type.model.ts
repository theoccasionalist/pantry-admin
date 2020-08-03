export class CartItemsByType {
    typeName: string;
    typeAmountReceived?: number;
    products: {
        productName: string;
        amount: number;
    }[];
}
