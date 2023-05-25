import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cards } from "../Cards/cards";
import AppPagination from "../Pagination/pagination";
import { Pagination } from "antd";

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchCard, setSearchCard] = useState([]);
  const [allProducts, setAllProducuts] = useState([]);
  const [filterCurrent, setFilterCurrent] = useState(1);
  const [data, setData] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchParams.set("keyword", event.target.value);
      setSearchParams(searchParams);
    } else if (event.target.value === "") {
      searchParams.delete("keyword", event.target.value);
      setSearchParams(searchParams);
    }
  };

  const { search } = useLocation();
  useEffect(() => {
    const url = new URL("https://api.adew.uz/api/search" + search);

    fetch(url.href)
      .then((res) => res.json())
      .then((json) => setSearchCard(json.data))
      .catch((error) => {
        console.log("API-dan ma'lumotlarni olishda xatolik yuz berdi:", error);
      });
  }, [search]);
  // console.log(searchCard);
  // useEffect(() => {
  //   setSearchCard(url.href);
  // }, [url.href]);
  // console.log(url.href);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://api.adew.uz/api/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategory(json);
      });

    fetch("https://api.adew.uz/api/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducuts(data.data);
        setSearchCard(data.data);
      });
  }, []);
  const handleClick = (value) => {
    const newData = allProducts.filter((c) => {
      if (c?.category?.name?.uz === value.name.uz) {
        return c;
      }
    });
    setSearchCard(newData);
  };
  useEffect(() => {
    setData(searchCard.slice((filterCurrent - 1) * 10, filterCurrent * 10));
  }, [allProducts, searchCard, filterCurrent]);

  return (
    <div className="filter">
      <div className="filter__search">
        <input
          type="text"
          placeholder="Search"
          className="filter__search__input"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="filter__menu">
        {category.map((item) => (
          <NavLink
            className="filter__menu__item"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            {item.name.uz}
          </NavLink>
        ))}
        <button className="filter__menu__btn">more</button>
      </div>
      <div className="home__cards__title">All</div>
      <Cards
        searchCard={data}
        totalProds={allProducts.length}
        setFilterCurrent={setFilterCurrent}
      />
      <div className="card__pagination">
        <Pagination
          defaultCurrent={1}
          onChange={(p) => setFilterCurrent(p)}
          total={searchCard.length}
        />
      </div>
    </div>
  );
};
