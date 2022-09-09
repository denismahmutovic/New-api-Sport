import React from "react";
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Pagination,
} from "semantic-ui-react";
import { Card, Icon, Image } from "semantic-ui-react";
import _ from "lodash";

const Hero = ({ data, setPage }) => {
  return (
    <div>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <Card
              style={{
                marginLeft: 500,
                padding: 20,
              }}
            >
              <Image src={el.urlToImage} wrapped ui={false} /> <br />
              <Card.Content>
                <Card.Header>{el.title}</Card.Header> <br />
                <Card.Content>{el.description}</Card.Content>
                <Card.Description>{el.Content}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a>
                  <Icon name="user" />
                  {el.author}
                </a>
              </Card.Content>
            </Card>
          </div>
        );
      })}
      <Pagination
        defaultActivePage={5}
        totalPages={100}
        onClick={() => setPage((prev) => prev + 1)}
      />
    </div>
  );
};
export default Hero;
