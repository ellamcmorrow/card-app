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
    <div className="container mt-4">
      <ProductTitle>Cards</ProductTitle>
      <div className="row">
        {data.map((product) => {
          const htmlString = product.Description;
          return (
            <div key={product.ProductId} className="col-12 col-lg-4 mb-4">
              <Card>
                <Card.Image
                  role="img"
                  aria-label="Product Image"
                  src={product.ProductImage.Link.Href}
                  alt={`Image of ${product.Title}`}
                />
                <Card.Heading>{product.Title}</Card.Heading>
                <Card.Body>
                  <div dangerouslySetInnerHTML={{ __html: htmlString }} />
                </Card.Body>
                <Card.Footer>
                  <Link to={`/card/${product.ProductId}`}>
                    <Button fullWidth>See card details</Button>
                  </Link>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
