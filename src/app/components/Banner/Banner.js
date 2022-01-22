import style from './Banner.module.css';
import Card from '../Card/Card';

const Banner = (props) => {
  return (
    <Card
      customStyle={{
        backgroundColor: '#313131',
        margin: '-9rem auto 0'
      }}
    >
      <h2 className={style.title}>Delicios Food, Delivered To You</h2>
      <p className={style.content}>
        Choose your favourite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={style.content}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};

export default Banner;
