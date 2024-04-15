import { Produto } from "./Produto";
import { PaymentMethod} from "./PaymentMethod";

export class ShoppingCart {

    private items: Produto[] = [];
    private paymentMethod: PaymentMethod;

    constructor(paymentMethod:PaymentMethod){
        this.paymentMethod = paymentMethod;

    }

    addItem(item: Produto): void {
        this.items.push(item)
    }

    getTotal(): number {
        return this.items.reduce((total, item) => total + item.preco, 0)

    }
    checkout(): void {
        const total = this.getTotal();
        this.paymentMethod.pay(total);
    }

    


}