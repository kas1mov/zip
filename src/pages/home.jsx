import { Title } from "../companents/HomeTitle/homeTitle";
import mask from "../assets/image/Mask Group.png";
import { Filter } from "../companents/Filter/filter";
// import { Cards } from "../companents/Cards/cards";

export const Home = () => {
  return (
    <div className="home">
      <img src={mask} alt="" className="home__mask" />
      <div className="container">
        <div className="home__title">
          <Title />
        </div>
        <div className="home__filter">
          <Filter />
        </div>

        {/* <div className="home__cards">
          <Cards />
        </div> */}
      </div>
    </div>
  );
};
