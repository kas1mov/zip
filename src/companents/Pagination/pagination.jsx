import { Pagination } from "antd";
import { useState } from "react";
import { Cards } from "../Cards/cards";
const AppPagination = ({ links, setFilterCurrent }) => {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setFilterCurrent(page);
    console.log(page);
  };
  return (
    <>
      <Pagination
        defaultCurrent={1}
        onChange={(p) => onChange(p)}
        total={links}
        showSizeChanger={false}
      />
      <Cards current={current} />
    </>
  );
};
export default AppPagination;
