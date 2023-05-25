import { NavLink } from "react-router-dom";
import { BackIcon, StarIcon, StarsIcon } from "../assets/icon/icon";
import MaskImg from "../assets/image/Mask Group (1).png";
import gradiend from "../assets/image/Gradient (1).png";
import { dataBuy } from "../utils/data";
import { useEffect, useState } from "react";

export const Buy = ({ url }) => {
  const [cardBuy, setCardBuy] = useState([]);

  console.log(url);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setCardBuy(json))
      .catch((error) => console.error(error));
  }, []);

  console.log(cardBuy);

  return (
    <div className="buy">
      <img src={MaskImg} alt="" className="buy__mask" />
      <div className="buy__container">
        <NavLink className="buy__back" to={"/"}>
          <BackIcon /> Back
        </NavLink>
        <div className="buy__data">
          {dataBuy.map((item) => (
            <div className="data" key={item.id}>
              <div className="data__img">
                <img src={item.img} alt="" />
              </div>
              <div className="data__info">
                <h1 className="data__title">{item.title}</h1>
                <h3 className="data__name">{item.name}</h3>
                <div className="data__reyting">
                  <StarsIcon />
                  <StarsIcon />
                  <StarsIcon />
                  <StarsIcon />
                  <StarIcon />
                </div>
                <p className="data__sum">{item.sum}</p>
                <p className="data__text">{item.text}</p>
                <div className="data__tel">
                  <NavLink className="data__btn" to={"tel:+998949319077"}>
                    Bog`lanish
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr
          style={{
            border: "3px solid rgba(0, 0, 0, 0.5)",
            margin: "40px 0px",
          }}
        />
        {dataBuy.map((item) => (
          <p className="data__text2" key={item.id}>
            {item.text}
          </p>
        ))}
        <div className="data__desc">
          <h1 className="data__desc__title">Description</h1>
          <p className="data__desc__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
            odio faucibus nec malesuada purus volutpat vel sed viverra. Id
            sagittis, phasellus dui in arcu. Nec arcu, sit nunc, nibh purus
            pellentesque sagittis. Felis rhoncus facilisis massa eget purus in
            purus. Etiam at cras nulla nunc. Malesuada in pretium diam
            scelerisque sit mattis in egestas neque. Eu porta tempor sodales
            nisl integer turpis porttitor sed sed. Ut senectus odio dictum enim
            velit tempor diam quisque suspendisse. Orci vel ridiculus diam
            viverra. Libero malesuada orci, quis placerat suscipit augue
            imperdiet. Et praesent augue dictum mauris eget lacus malesuada.
            Aenean nisi, sodales natoque massa magna dignissim mi. Mattis
            tellus, justo, lorem sed tempor diam sit viverra enim. Id id
            placerat eu etiam nulla laoreet. Dignissim leo fames turpis quis
            suspendisse vulputate laoreet vulputate ac. Aliquam justo lectus eu
            dui porttitor. Cras a aliquam phasellus sollicitudin ornare.
            Tristique volutpat facilisis in ut proin. Est vitae facilisi
            sollicitudin id lorem mattis nibh ipsum, nec. Consectetur
            consectetur morbi morbi aliquet mi risus, velit, sit at. Integer
            morbi viverra hendrerit risus. Odio phasellus nibh senectus nec id
            enim quam sed. At potenti sollicitudin sollicitudin lobortis morbi.
            Nunc molestie et adipiscing aliquam. Sit vel mi dolor suscipit. In
            eget ut ac at facilisi leo viverra. Arcu ac ut fermentum, viverra
            et, vitae etiam cras. Eu purus non ut turpis fusce. Mi vitae nibh mi
            ut feugiat varius risus eros.
          </p>
        </div>
      </div>
      <img src={gradiend} alt="" className="buy__grad" />
    </div>
  );
};
