import style from './header.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.title}>ReactMeals</div>
                <div className={style['cart-container']}>
                    <ShoppingCartIcon sx={{color: "#ffffff"}}/>
                    <div className={style['cart-title']}>Your Cart</div>
                    <div className={style['cart-quantity-container']}>
                        <div className={style['cart-quantity-title']}>
                                0
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
