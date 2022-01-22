import style from './header.module.css'
import Cart from "../cart/cart";
import BackgroundImage from "../../assets/landing-image.jpeg";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.title}>ReactMeals</div>
                <Cart />
            </div>
            <div className={style["image-container"]}>
                <img src={BackgroundImage} alt="Background" width="100%" height="300"/>
            </div>
        </header>
    )
}

export default Header;
