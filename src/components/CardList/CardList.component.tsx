import React, { FC, useEffect, useState } from "react";
import { Card } from "../Card";
import { Button } from "../Button";
import axios from "axios";
import { Link } from "react-router-dom";

type CardListProps = {
  children?: React.ReactNode;
  className?: string;
};

export const CardList: FC<CardListProps> = ({ children, className }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://moonpig.github.io/tech-test-frontend/search.json")
      .then((response) => {
        setData(response.data.Products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [data]);

  return (
    <div className="container">
      <div className="row">
        {data.map((product) => (
          <div key={product.ProductId} className="col-12 col-md-6 col-lg-3">
            <Card>
              <Card.Image
                src={product.ProductImage.Link.Href}
                alt={product.Title}
              />
              <Card.Footer>
                <Link to={`/card/${product.ProductId}`}>
                  <Button fullWidth>See card details </Button>
                </Link>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
