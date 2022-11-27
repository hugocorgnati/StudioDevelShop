import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../api/orders";
import { updateManyProducts } from "../api/products";
import Button from "../components/Button";
import { useCartContext } from "../context/cartContext";
import "../style/cart.css";
import OrderConfirmation from "../components/orderConfirmation";
import { setUserProperties } from "firebase/analytics";


const Cart = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [orderId, setOrderId] = useState(0);
    const [confirmation, setConfirmation] = useState(false);
    const { getTotal, cart, emptyCart } = useCartContext();
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [curbPurchase, setCurbPurchase] = useState(true);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
            setCurbPurchase(false);
            setEmail(event.target.value)
        }

        setMessage(event.target.value);
    };

    const createOrder = async () => {

        if (!curbPurchase) {
            const items = cart.map(({ id, nombre, qty, precio }) => ({
                id,
                title: nombre,
                qty,
                price: precio,
            }));

            const order = {
                buyer: { name, phone, email },
                items,
                total: getTotal(),
            };



            const id = await addOrder(order);

            await updateManyProducts(items)

            emptyCart();

            setConfirmation(true);
            setOrderId(id);
            setTimeout(() => {
                navigate("/")
            }, 10000)
        }
    };
    return (
        <div className="content">
            {confirmation && <OrderConfirmation nombre={name} mail={email} id={orderId} />}

            <h1 style={{ textAlign: "center" }}>Checkout</h1>
            {cart.map((product) => (
                <div className="cartDiv"
                    key={product.id}
                >
                    <div>Estás comprando {product.nombre} por {product.qty} unidades</div>
                </div>
            ))}
            <span style={{ fontWeight: "600" }}>
                Monto: ${getTotal()}
            </span>
            <div className="inputDivs">
                <div>
                    <span>Nombre</span>
                    <input
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div />
                    <div>
                        <span>Telefono</span>
                        <input

                            onChange={(e) => setPhone(e.target.value)}
                        /></div>
                    <div><span>Email</span>
                        <input
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleChange}

                        />
                        <span>{error && <h2 style={{ color: 'red', fontSize: ".8rem" }}>{error}</h2>}</span>
                    </div>
                </div>

            </div>
            <Button disabled={curbPurchase} onClick={createOrder}>Comprar</Button>
        </div>
    );
};


export default Cart