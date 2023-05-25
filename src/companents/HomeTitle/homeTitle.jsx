import { NavLink } from "react-router-dom";
import { dataTelNum } from "../../utils/data";
import Pizza from "../../assets/image/pizza.png";
import pech from "../../assets/image/pech.png";
import mangal from "../../assets/image/mangal.png";

export const Title = () => {
  return (
    <div className="title">
      <img src={Pizza} alt="" className="home__title__pizza" />
      <h1 className="home__title__text">
        Create ,Manage <br /> & Boost Your <br /> Business online store
      </h1>
      <img src={pech} alt="" className="home__title__pech" />
      <div className="home__title__tel">
        {dataTelNum.map((item) => (
          <NavLink className="home__title__btn" to={item.num} key={item.id}>
            Bog'lanish
          </NavLink>
        ))}
      </div>
      <img src={mangal} alt="" className="home__title__mangal" />
    </div>
  );
};
