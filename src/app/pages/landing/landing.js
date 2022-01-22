import Header from '../header/header';
import Banner from '../../components/Banner/Banner';
import Meals from "../meals/meals";

const Landing = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Meals />
      </main>
    </>
  );
};
export default Landing;
