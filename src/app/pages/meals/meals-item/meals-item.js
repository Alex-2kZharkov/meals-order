import style from './meals-item.module.css';
import { useState } from 'react';
import Button from '../../../components/Button/Button';

const MealsItem = ({ name, description, price }) => {
  const onMealsQuantityChange = () => {
    setMealsQuantity((prevState) => prevState + 1);
  };
  const [mealsQuantity, setMealsQuantity] = useState(1);
  return (
    <div className={style.container}>
      <div className={`${style.item} ${style.name}`}>{name}</div>
      <div className={style.item}>
        <div className={style['amount-container']}>
          <div className={style.amount}>Amount</div>
          <div>
            <input
              className={style.input}
              value={mealsQuantity}
              onChange={onMealsQuantityChange}
              type="number"
            />
          </div>
        </div>
      </div>
      <div className={style.item}>
        <p className={style.description}>{description}</p>
      </div>
      <div className={style.item}>
        <Button>+ Add</Button>
      </div>
      <div className={`${style.item} ${style.price}`}>${price}</div>
    </div>
  );
};

export default MealsItem;
