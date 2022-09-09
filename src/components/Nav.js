import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Base from "antd/lib/typography/Base";
import { Button, Segment } from "semantic-ui-react";
import Hero from "./Hero/Hero";

const Nav = () => {
  const BASE_URL = "https://newsapi.org/v2/everything";
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("Sports");
  const [Paganation, setPagination] = useState({});
  const [page, setPage] = React.useState(2);

  const getData = (page) => {
    axios
      .get(
        `${BASE_URL}/?q=${title}&pageSize=3&page=${page}&apiKey=9e2a4c58c6a34d309d07774c318e1282`
      )
      .then((res) => {
        setPagination({
          page: res.data.page,
          lastPage: res.data.totalPage,
        });
        setData(res.data.articles);
      });
  };

  useEffect(() => {
    getData(page);
  }, [title, page]);
  return (
    <div>
      <Segment basic inverted padded="very">
        <Button primary onClick={() => setTitle("Football")}>
          Football
        </Button>
        <Button primary onClick={() => setTitle("Basketball")}>
          Basketball
        </Button>
        <Button primary onClick={() => setTitle("Tennis")}>
          Tennis
        </Button>
        <Button primary onClick={() => setTitle("Volleyball")}>
          Volleyball
        </Button>
      </Segment>
      <Hero data={data} setPage={setPage} />
      {/* page:{Paganation.page} / {Paganation.lastPage} */}
      <div>
        {data.map((el) => (
          <div>
            {/* <p>{el.title}</p>
            <p>{el.bio}</p>
            <h3>{el.discription}</h3>
            <p>dd</p>
            <hr /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Nav;
