import { DigitalWalletPayment } from "./DigitalWalletPayment";
import { CreditCardPayment } from "./CreditCardPayment";
import { ShoppingCart } from "./shoppingCart";
import { Eletronico } from "./Eletronico";
import { Livro } from "./Livro";

const livro: Livro = new Livro("Xing li a busca do kung-fu", 7000.00, "Xong-Xing");
const celular: Eletronico = new Eletronico("Telefone", 10000.00, "Apple");

const cartaoCredito: CreditCardPayment = new CreditCardPayment();
const carteiraDigital: DigitalWalletPayment = new DigitalWalletPayment();


const carrinhoDecompras: ShoppingCart = new ShoppingCart(cartaoCredito);

carrinhoDecompras.addItem(livro);
carrinhoDecompras.addItem(celular);

carrinhoDecompras.checkout();
