import style from './meals-item.module.css';
import { useState } from 'react';

const MealsItem = ({ name, description, price }) => {
  const onMealsQuantityChange = () => {
    setMealsQuantity((prevState) => prevState + 1);
  };
  const [mealsQuantity, setMealsQuantity] = useState(1);
  return (
    <div className={style.container}>
      <div className={style.name}>{name}</div>
      <div className={style.item}>
        <div>Amount</div>
        <div>
          <input
            value={mealsQuantity}
            onChange={onMealsQuantityChange}
            type="number"
          />
        </div>
        <div className={style.item}>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <button className={style.button}>+ Add </button>
          </div>
        </div>
        <div className={style.item}>
          <div className={style.price}>$ {price}</div>
        </div>
      </div>
    </div>
  );
};

export default MealsItem;
