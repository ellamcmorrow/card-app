import React, { FC, useEffect, useState } from "react";
import { Card } from "../Card";
import { Button } from "../Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { Product } from "../types";
import styled from "styled-components";

type CardListProps = {
  children?: React.ReactNode;
  className?: string;
};

const ProductTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizeL};
  color: ${({ theme }) => theme.primaryText};
  margin-bottom: ${({ theme }) => theme.spacingM};
`;

export const CardList: FC<CardListProps> = () => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://moonpig.github.io/tech-test-frontend/search.json")
      .then((response) => {
        setData(response.data.Products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <ProductTitle>Cards</ProductTitle>
      <div className="row">
        {data.map((product) => (
          <div key={product.ProductId} className="col-12 col-md-6 col-lg-3 m-4">
            <Card animate>
              <Card.Image
                role="img"
                aria-label="Product Image"
                src={product.ProductImage.Link.Href}
                alt={`Image of ${product.Title}`}
              />
              <Card.Body>{product.Description}</Card.Body>
              <Card.Footer>
                <Link to={`/card/${product.ProductId}`}>
                  <Button fullWidth>See card details</Button>
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
