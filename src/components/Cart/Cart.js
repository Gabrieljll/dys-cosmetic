import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"

const Cart = () => {
    const {cart, emptyCart, totalCart, removeItem} = useContext(CartContext)

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr />
            {
                cart.map(item => (
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.price * item.cantidad}</p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-outline-danger"><FaTrashAlt /></button>
                        <hr/>
                    </div>
                ))
            }
            <h4>Total: ${totalCart()}</h4>
            <button className="btn btn-danger" onClick={emptyCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart