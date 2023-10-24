import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "../Button";
import { Card } from "../Card";
import { Product } from "../types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.background};
  padding: ${({ theme }) => theme.spacingL};
`;

const Title = styled.h2`
  display: flex;
  display: inline-flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.textGrey};
  font-weight: ${(props) => props.theme.fontWeightBold};
  margin: 0;
`;

const DetailsContainer = styled.div`
  display: flex;
  margin-left: ${(props) => props.theme.spacingS};
  align-self: flex-end;
`;
const ButtonContainer = styled.span`
  display: flex;
  align-self: flex-end;
  align-items: flex-end;
`;

export const CardItem: FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://moonpig.github.io/tech-test-frontend/search.json`)
      .then((response) => {
        const foundProduct = response.data.Products.find(
          (p) => p.ProductId === Number(productId)
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          console.error("Product not found:", productId);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <Card>
              <Card.Image
                src={product.ProductImage.Link.Href}
                alt={`Image of ${product.Title}`}
              />
            </Card>
          </div>
          <DetailsContainer>
            <div className="col-12 col-md-6 col-lg-6">
              <Title>{product.Title}</Title>
              <ButtonContainer>
                <Button onPress={() => alert("Success!")}>Buy me!</Button>
              </ButtonContainer>
            </div>
          </DetailsContainer>
        </div>
      </div>
    </Container>
  );
};

export default CardItem;
