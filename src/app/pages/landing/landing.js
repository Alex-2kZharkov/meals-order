import Header from "../header/header";
import BackgroundImage from '../../assets/landing-image.jpeg'
import style from './landing.module.css';

const Landing = () => {
    return <>
      <Header />
        <div className={style["landing-image-container"]}>
            <img src={BackgroundImage} alt="Background" width="100%" height="400"/>
        </div>
    </>
}
export default Landing;
