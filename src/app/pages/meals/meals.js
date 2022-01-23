import { HARDCODED_MEALS } from '../../constants/constants';
import MealsItem from './meals-item/meals-item';
import Card from '../../components/Card/Card';

const Meals = () => {
  return (
    <Card
      customStyle={{
        maxWidth: '900px',
        backgroundColor: '#ffffff',
        margin: '2rem auto 0'
      }}
    >
      {HARDCODED_MEALS.map(({ id, name, description, price }) => (
        <MealsItem
          key={id}
          description={description}
          name={name}
          price={price}
        />
      ))}
    </Card>
  );
};

export default Meals;
