import { useEffect, useState } from "react";
import AppPagination from "../Pagination/pagination";
import { Link } from "react-router-dom";
import { Buy } from "../../pages/buy";

const truncateTitle = (title, maxLength) => {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
};

export const Cards = ({
  searchCard,

  current,
}) => {
  const [links, setLinks] = useState({
    label: 1,
    active: true,
  });
  const [buy, setBuy] = useState([]);
  const [ById, setById] = useState(1);

  const handlyClick = () => {
    const url = new URL(`"https://api.adew.uz/api/products" + "/"${ById}`);

    fetch(`https://api.adew.uz/api/products`)
      .then((res) => res.json())
      .then((json) => {
        const products = json.data;
        setBuy(products);
        const ids = products.map((product) => product.id);
        setById(ids);
      });
    console.log(url.href);
    <Buy url={url.href} />;
  };
  console.log(buy);

  useEffect(() => {
    fetch(`https://api.adew.uz/api/products?page=${current}`)
      .then((res) => res.json())
      .then((json) => setLinks(json.meta));
  }, [current]);

  console.log(links);

  const maxLength = 16;

  if (!searchCard) {
    return null;
  }

  return (
    <div className="Cards">
      <div className="cards">
        {searchCard.map((item) => (
          <div className="card" key={item.id}>
            <div className="card__img">
              <img src={item.photo} alt="" />
            </div>
            <div className="card__text">
              <h2 className="card__title">
                {truncateTitle(item.name.uz, maxLength)}
              </h2>
              <p className="card__sum">{item.price}</p>
              <div className="card__div">
                <Link
                  className="card__btn"
                  to={"/buy"}
                  onClick={handlyClick}
                  key={item.id}
                >
                  View more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="card__pagination">
        <AppPagination current={current} links={links} />
      </div> */}
    </div>
  );
};
