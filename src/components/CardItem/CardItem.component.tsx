import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const CardItem: FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://moonpig.github.io/tech-test-frontend/search.json`)
      .then(response => {
        const foundProduct = response.data.Products.find(p => p.ProductId === productId);
        setProduct(foundProduct);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [productId]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.Title}</h1>
      <img src={product.ProductImage.Link.Href} alt={product.Title} />
    </div>
  );
};

export default CardItem;