import React, { FC, useEffect, useState } from "react";
import { Card } from "../Card";
import { Button } from "../Button";
import axios from "axios";
import styled from "styled-components";
import { useParams } from 'react-router-dom';

type CardItemProps = {
  children?: React.ReactNode;
  className?: string;
};

export const CardItem: FC<CardItemProps> = ({ children, className }) => {
  const [data, setData] = useState<[]>([]);
  const params = useParams();
  const { id } = params; 

  return (
    <div className="container">
      <div className="row">
        {data.map((product) => (
          <div
            key={product.ProductId}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <Title> {product.Title} </Title>
            <Card>
              <Card.Image
                src={product.ProductImage.Link.Href}
                alt={product.Title}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

const Title = styled.h1`
  flex-direction: row;
  align-items: center;
  background-color: orange;
  padding: ${(props) => props.theme.spacingS};
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.charcoal};
`;

export default CardItem;
