import mask2 from "../../assets/image/Gradient.png";

export const Footer = () => {
  return (
    <div className="footer__com">
      <div className="footer">
        <div className="footer__top">
          <div className="footer__title">Equip</div>
          <p className="footer__text">
            Open surce is source code that is made freely avilable for possible
            modification and reducation. Product include premadoas to us
          </p>
        </div>
        <div className="footer__bottom">All Rights Reserved</div>
      </div>
      <div className="footer__mask">
        <img src={mask2} alt="" className="home__mask2" />
      </div>
    </div>
  );
};
