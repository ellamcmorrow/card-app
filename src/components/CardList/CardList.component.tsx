import React, { FC, useEffect, useState } from "react";
import { Card } from "../Card";
import { Button } from "../Button";
import axios from "axios";

type CardListProps = {
  children?: React.ReactNode;
  className?: string;
};

export const CardList: FC<CardListProps> = ({ children, className }) => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    axios
      .get("https://moonpig.github.io/tech-test-frontend/search.json")
      .then((response) => {
        setData(response.data.Products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [data]); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <div>
      {data.map((product) => (
          <div key={product.ProductId} className="col-12 col-md-6 col-lg-2">
            <Card>
              <Card.Heading>{product.Title}</Card.Heading>
              <Card.Image
                src={product.ProductImage.Link.Href}
                alt={product.Title}
              ></Card.Image>
              <Card.Footer>
                Price: {product.Price.Currency}
                {product.Price.Value}
              </Card.Footer>
            </Card>
          </div>
      ))}
    </div>
  );
};

export default CardList;
