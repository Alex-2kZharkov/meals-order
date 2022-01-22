import style from './cart.module.css'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
    return (
        <div className={style['cart-container']}>
            <ShoppingCartIcon sx={{color: "#ffffff"}}/>
            <div className={style['cart-title']}>Your Cart</div>
            <div className={style['cart-quantity-container']}>
                <div className={style['cart-quantity-title']}>
                    0
                </div>
            </div>
        </div>
    )
}
export default Cart;
